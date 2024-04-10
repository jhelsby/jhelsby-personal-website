'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';
import Form from '../Form';

const formInputs = [
  { name: "name", label: "Full name", type: "text", validation: { required: 'Your name is required', maxLength: 30 } },
  { name: "email", label: "Email", type: "email", validation: { required: 'Enter your email', pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' } } },
  { name: "message", label: "Message", type: "textarea", validation: { required: 'Enter your message' } },
];

export default function Contact() {
  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> Contact Me.</h1>
        <p>Please fill in the form to contact me by email, or <a href="https://www.linkedin.com/in/johnhelsby/" >connect with me on LinkedIn</a> if you&apos;d prefer.</p>
        <Form subject='New Contact Message from jhelsby.com' formInputs={formInputs} />
      </div>
    </div>
  );
};
