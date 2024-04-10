'use client'

import React from 'react';
import Post from '../Post';

const slug = "first-post"
const body = <div>
  <p>
    test
  </p>
</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};