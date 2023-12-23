import React from 'react';

interface ContactButtonProps {
    text: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({text}) => {
    return (
        <button
            className="text-white text-2xl font-bold border border-white px-8 py-3 rounded-md hover:bg-white hover:text-[#1a202c] transition-colors">
            {text}
        </button>
    );
};

export default ContactButton;
