'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

export default function CV() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> Request a copy of my CV. </h1>
        <p>[Currently unimplemented.]</p>
        <p>Once this page is ready, you will be able to request a copy of my CV using the form below.</p>
        <p>Alternatively, please feel free to <a href="/contact">contact me by email</a>, or <a href="https://www.linkedin.com/in/john-h-366980236/" >connect with me on LinkedIn</a> if you&apos;d prefer.</p>
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