'use client'

import React from 'react';
import Post from '../Post';

const slug = "dependencies"
const body = <div>
  <h2>Dependencies.</h2>
  <h3>Technicalities</h3>
  <p>
    When trying to solving a problem, I often begin by trying to see if it has already been solved by someone else. In software, this might be anything from a complete product, to a library, to a line or two of code. Provided that the goal is to solve the problem, rather than train one&apos;s problem solving abilities, this approach can often make a lot of sense &ndash; why reinvent the wheel without good reason?
  </p>
  <p>
    Each time you do this, you are depending on someone else to solve your problem. There are two critical questions which I think must be asked each time you do this:
  </p>
  <ol>
    <li>Is this code really solving the <i>your</i> problem?</li>
    <li>Does this code actually work?</li>
  </ol>
  <p>Someone else wrote this code. If they were working on the exact same problem which you are, then great &ndash; you just need to make sure they got it right. Even this is much easier said than done.</p>
  <p>At other times, though, they will have been solving a slightly different problem. (I would guess this happens more often, but who knows.) Maybe their problem was more general, or less general, or intended for different hardware, or different users, or a smaller userbase, or a much bigger userbase, or needed to be more robust, or didn&apos;t need to be robust at all, or needed to work for the next 50 years, or didn&apos;t need to work for more than an hour, or designed to be updated every couple of days, or built on top of ancient and vulnerable legacy software, or... And in all of these cases, of course, it could <i>also</i> be filled with bugs!</p>
  <p>There is much more to say about this on the technical side, but I&apos;m not sure that I&apos;m the best person to say it. Here are some experienced engineers discussing the same issue. I will update this list if I find anything new.</p>
  <ol>
    <li>Thorsten Ball - <a href="https://thorstenball.com/blog/2022/05/17/professional-programming-the-first-10-years/#using-other-peoples-code-is-not-as-good-as-i-thought">Using other people&apos;s code is not as good as I thought</a> (2022).</li>
    <li>A <a href="https://x.com/mitchellh/status/1795554156150657420">series of tweets</a> by Mitchell Hashimoto, founder of <a href="https://en.wikipedia.org/wiki/HashiCorp">HashiCorp</a> - see the linked tweet and his replies. </li>
  </ol>
  <h3>Analogies</h3>
  <p>[TODO]</p>
</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};