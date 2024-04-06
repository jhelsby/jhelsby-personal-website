'use client'

import React from 'react';
import { useForm } from "react-hook-form";
import { Sidebar, SidebarToggle } from '../Sidebar';
import useWeb3Forms from '@web3forms/react';

export default function Contact() {
  const accessKey = '861e7f48-e941-44e4-9650-ba0567db088a';
  const {register, handleSubmit} = useForm();

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'mail@jhels.dev',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (message, data) => {
      console.log(message);
    },
    onError: (message, data) => {
      console.log(message);
    },
  });

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> Contact Me</h1>
        <p>Please fill in the form to contact me by email, or <a href="https://www.linkedin.com/in/john-h-366980236/" >connect with me on LinkedIn</a> if you&apos;d prefer.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type='text'
              {...register('name', {
                required: 'Full name is required',
                maxLength: 80,
              })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type='email'
              {...register('email', {
                required: 'Enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
          </div>
          <button type='submit'>Submit Form</button>
        </form>
      </div>
    </div>
  );
};