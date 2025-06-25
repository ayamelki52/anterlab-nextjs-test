'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('All fields required');
      return;
    }
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1><br /><br />
      <input
        name="name"
        onChange={handleChange}
        required
        placeholder="Your Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      /><br /><br />
      <input
        name="email"
        type="email"
        onChange={handleChange}
        required
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <br /><br />
      <textarea
        name="message"
        onChange={handleChange}
        required
        placeholder="Your Message"
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      /><br /><br />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
      >
        Send
      </button>
    </form>
  );
}
