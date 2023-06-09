provider "aws" {
  region = "eu-west-1" # Replace with your desired AWS region
}
locals {
  bucket_exists = terraform.workspace == "default" ? false : true
}

resource "aws_s3_bucket" "react_vite_bucket" {
  count = local.bucket_exists ? 0 : 1

  bucket = "jr-personal-portfolio"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }

  lifecycle {
    prevent_destroy = false
  }
}

resource "aws_s3_bucket_policy" "react_vite_bucket_policy" {
  count = local.bucket_exists ? 0 : 1

  bucket = aws_s3_bucket.react_vite_bucket[0].id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.react_vite_bucket[0].arn}/*"
      }
    ]
  })
}

resource "aws_cloudfront_distribution" "react_vite_distribution" {
  origin {
    domain_name = aws_s3_bucket.react_vite_bucket[0].website_domain
    origin_id   = "react_vite_origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "react_vite_origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

