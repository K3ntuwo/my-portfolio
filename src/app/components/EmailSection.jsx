"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t7ajcqn', 'template_t6wdoke', form.current, '0ZVREcFPnhMaec_5t')
      .then(
        () => {
          setNotification({ message: 'Message sent successfully!', type: 'success' });
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          setNotification({ message: `Failed to send message: ${error.text}`, type: 'error' });
        }
      );
  };

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000); // Clears the notification after 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer if component unmounts or notification changes
    }
  }, [notification]);

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Background and Header */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-9">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
          <a href="https://github.com/K3ntuwo"
            className="hover:text-purple-400"
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/smei_clnoo"
            className="hover:text-purple-400"
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/smei.clnoo?mibextid=LQQJ4d"
            className="hover:text-purple-400"
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Form */}
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="smei_clnoo@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>

        {/* Notification Popup */}
        {notification.message && (
          <div
            className={`mt-4 p-4 rounded-md text-white ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
