'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';
import Link from 'next/link';

const blogPosts = [
  { slug: 'first-post', title: 'First Blog Post' },
  { slug: 'second-post', title: 'Second Blog Post' },
  // Add more blog posts as needed
];

export default function Blog() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> My Technical Blog.</h1>
        <p>Here are some of my latest blog posts:</p>
        <ul>
          {blogPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
};