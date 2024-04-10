'use client'

import React from 'react';
import Post from '../Post';

const slug = "first-post"
const body = <div>
  <p>
    I&apos;ve started this blog in the hope that it will help me develop as a software engineer and technical writer. Here&apos;s what I&apos;m seeking to accomplish.
  </p>
  <h3>Growing as an engineer.</h3>
  <p>
    I&apos;d like to make the effort to consistently reflect on and consolidate the things I learn as I progress through my studies and career. At least in my own experience, I&apos;ve found that this can really make the difference between just about being able to do something, and actually understanding it.
  </p>
  <p>
    In the midst of a busy project, for example, I frequently forget to take a step back to consider the broader implications of what I&apos;m doing. When I take the time to do this, I tend to take away far more from the experience. And when I don&apos;t, I inevitably find myself making the same mistakes over and over &ndash; which is hardly a surprise, since I&apos;ve not bothered to figure out how to prevent them.
  </p>
  <p>
    I&apos;m most interested in working on genuinely useful, impactful and reliable technology. If, as is my aspiration, I end up working somewhere which builds such things, real people will be relying on my code to actually work. Given the ubiquity of software in almost all facets of modern life, but in particular safety-critical fields such as medicine, transport, power, financial services, emergency response systems, and the like, I really want to treat this craft with the seriousness it deserves.
  </p>
  <p>
    My hope is that carefully writing on such matters, over a sustained period of time, will help me to hone my skills accordingly.
  </p>
  <h3>Improving my technical communication.</h3>
  <p>
    As an undergraduate student, I can&apos;t claim to know this from personal experience in industry, but everything I have read, watched and heard attests to the idea that technical communication is one of the single most important skills an engineer can have &ndash; at every level, but increasingly so as you grow in seniority.
  </p>
  <p>My goals in this respect are simple: I&apos;ll try and keep my blog posts concise and clear throughout. I&apos;ll also try to write posts targeted at different audiences, ranging from the general reader to the most technical subjects I can manage. And with any luck, if I can keep putting in the time, I&apos;ll see meaningful progress over the course of this blog series.</p>
  <p>If you ever have any feedback on how I can improve my technical writing, please feel free to <a href="../contact">send me a message</a>.</p>
</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};