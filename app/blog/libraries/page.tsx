'use client'

import React from 'react';
import Post from '../Post';

const slug = "libraries"
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