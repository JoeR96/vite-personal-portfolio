import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 25, transition: { duration: 1, ease: 'easeOut' } });
    } else {
      controls.start({ opacity: 0, y: -100 });
    }
  }, [inView, controls]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // TODO: Send email using a backend API or email service like SendGrid

    // Reset the form after sending
    setName('');
    setEmail('');
    setMessage('');
    setIsSending(false);
  };

  return (
    <motion.div
      ref={ref}
      className="rounded-lg b mx-auto w-2/3 h-2/3 flex flex-col justify-between gap-y-4"
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
    >
      <div className="bg-stone-700 rounded-lg p-6">
        <h2 className="text-3xl text-white font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-white font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-lg bg-gray-900 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-lg bg-gray-900 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-white font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="rounded-lg bg-gray-900 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline w-full h-32 resize-none"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </motion.div>
  );
  
};

export default Contact;
