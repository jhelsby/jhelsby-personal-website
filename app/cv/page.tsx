'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';
import Form from '../Form';

const formInputs = [
  { name: "name", label: "Name", type: "text", validation: { required: 'Full name is required', maxLength: 30 } },
  { name: "organisation", label: "Organisation (optional)", type: "text", validation: { maxLength: 30 } },
  { name: "email", label: "Email", type: "email", validation: { required: 'Enter your email', maxLength: 254, pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email' } } },
  { name: "reason", label: "Brief reason for request", type: "textarea", validation: { required: 'Please enter a brief reason for your request' } },
];


export default function CV() {
  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> Request a copy of my CV. </h1>
        <p>You can request a copy of my CV using the form below. Please note that this is for recruiters and the like, rather than people looking for inspiration for their own CV &ndash; sorry about that!</p>
        <p>Alternatively, please feel free to <a href="/contact">contact me by email</a>, or <a href="https://www.linkedin.com/in/johnhelsby/" >connect with me on LinkedIn</a> if you&apos;d prefer.</p>
        <Form subject='New CV Request from jhelsby.com' formInputs={formInputs} />
      </div>
    </div>
  );
};