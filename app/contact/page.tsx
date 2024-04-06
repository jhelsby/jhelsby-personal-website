'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> Contact Me</h1>
        <p>Please fill in the form to contact me by email, or <a href="https://www.linkedin.com/in/john-h-366980236/" >connect with me on LinkedIn</a> if you&apos;d prefer.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4}></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};