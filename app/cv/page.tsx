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
        <h1><SidebarToggle /> Request a copy of my CV.</h1>
        <p>For the twin reasons of privacy and testing my AWS serverless knowledge, I've opted not to make my CV publicly available. If you would like to see it, please fill in the form below. If and when I approve your request, you will be sent a copy of my most recent CV automatically.</p>
        <p>My sincerest apologies for the inconvenience. If this all seems like too much hassle, please feel free to <a href="/contact">contact me by email</a>, or <a href="https://www.linkedin.com/in/john-h-366980236/" >connect with me on LinkedIn</a> if you'd prefer.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="name" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="organisation">Organisation (optional):</label>
            <input type="organisation" id="organisation" name="organisation" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="reason">Brief reason for request:</label>
            <textarea id="reason" name="reason" rows={2}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};