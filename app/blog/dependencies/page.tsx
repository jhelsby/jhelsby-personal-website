'use client'

import React from 'react';
import Post from '../Post';

const slug = "dependencies"
const body = <div>
  <h2>Dependencies.</h2>
  <p>
    Here is a scenario I have encountered many times building software. Perhaps you have too.
  </p>
  <p>
    When trying to solving a problem, I often begin by trying to see if it has already been solved by someone else. This might be anything from a complete product, to a library, to a line or two of code. Provided that the goal is to solve the problem, rather than train one&apos;s problem solving abilities, I think this approach can make a lot of sense &ndash; why reinvent the wheel without good reason?
  </p>
  <p>The trouble is when this solution you are now dependent on <i>doesn&apos;t work</i>.</p>
  <p>[TBC.]</p>
</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};