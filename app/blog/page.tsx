'use client'

import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  { slug: 'second-post', title: 'Second Blog Post', date: '2024-04-05' },
  { slug: 'first-post', title: 'First Post - Introduction and Motivation', date: '2024-04-06' },
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
  return new Intl.DateTimeFormat('en-GB').format(date);
};

export default function Blog() {
  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1><SidebarToggle /> My Technical Blog.</h1>
        <p>I&apos;m keeping this blog mostly to try and develop as an engineer and technical writer - but of course would love it if you found any of these posts useful or interesting. If you have any comments or questions, please don&apos;t hesitate to <a href="https://www.linkedin.com/in/john-h-366980236/">connect on LinkedIn</a> or <a href="./contact">get in touch</a>!</p>
        <ul>
          {blogPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}. {formatDate(post.date)}.
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};