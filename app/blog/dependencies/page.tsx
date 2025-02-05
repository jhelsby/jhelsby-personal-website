'use client'

import React from 'react';
import Post from '../Post';

const slug = "dependencies"
const body = <div>
  <h2>Dependencies.</h2>
  <h3>Technicalities</h3>
  <p>
    When trying to solve a problem, I often begin by looking around, to see if it has already been solved by someone else. In software, this might be anything from a complete product, to a library, to a line or two of code. Provided that the goal is to solve the problem, rather than train one&apos;s problem-solving abilities, this approach can often make a lot of sense &ndash; why reinvent the wheel without good reason?
  </p>
  <p>
    Now &ndash; each time you do this, you are depending on someone else to solve your problem. There are two critical questions which I think must be asked each time you do this:
  </p>
  <ul>
    <li>Is this code really solving the <i>your</i> problem?</li>
    <li>Does this code really work?</li>
  </ul>
  <p>Someone else wrote this code. If they were working on the exact same problem as you, then great &ndash; you just need to make sure they got it right (though this is easier said than done).</p>
  <p>At other times, though, they will have been solving a slightly different problem. It could differ in intended generality, hardware, userbase, robustness, longevity, maintainability, or more. It could have a huge dependency graph if its own. It could be buggy or broken.</p>
  <p>There is much more to say about this on the technical side, but I&apos;m not sure that I&apos;m the best person to say it. Here are some experienced engineers discussing the same issue. I&apos;ll update this list if I find anything new.</p>
  <ul>
    <li>Thorsten Ball - <a href="https://thorstenball.com/blog/2022/05/17/professional-programming-the-first-10-years/#using-other-peoples-code-is-not-as-good-as-i-thought">Using other people&apos;s code is not as good as I thought</a> (2022).</li>
    <li>A <a href="https://x.com/mitchellh/status/1795554156150657420">series of tweets</a> by Mitchell Hashimoto, founder of <a href="https://en.wikipedia.org/wiki/HashiCorp">HashiCorp</a> - see the linked tweet and his replies. </li>
    <li>Armin Ronacher - <a href="https://lucumr.pocoo.org/2025/1/24/build-it-yourself/
">Build It Yourself</a> (2025).</li>
  </ul>
  <h3>Deferred costs: the illusion of ease</h3>
  <p>One reason it is so tempting to introduce a dependency, I think, is simply because it is easy. With open-source software, all you need is a <code>git pull</code> and an <code>import</code>; and without having to spend an ounce of effort or money, you have tens, hundreds, or even thousands of hours&apos; worth of someone else&apos;s code working for you. The problem is... where did that code come from? What was it for? How well has it been tested?</p>
  <p>When there is a substantial cost to getting hold of something, whether time, money, energy, or anything else, it forces you to think about your decision <i>before</i> you act. You want it to be worth the price. The bigger the cost, the more you&apos;d want to think about it.</p>
  <p>Importing other people&apos;s code takes no thought whatsoever. In the short-term, it&apos;s often the easiest thing you can do &ndash; far easier than solving a problem yourself. But if their code is not truly what you need, you may be paying for it at some indeterminate point in the future. And the more you&apos;ve built on top of shaky foundations, the more work you&apos;re going to have to do to fix it.</p>
  <p>So perhaps we can consider certain unfamiliar dependencies as having a potential deferred cost; a possibility we should consider before relying on them too heavily. More simply put, <a href="https://en.wikipedia.org/wiki/No_such_thing_as_a_free_lunch">there&apos;s no such thing as a free lunch</a>; or, <a href="https://en.wikipedia.org/wiki/He_who_does_not_work,_neither_shall_he_eat">he who does not work, neither shall he eat</a>.</p>
</div>

export default function Page() {
  return (
    <Post
      slug={slug}
      body={body}
    />
  );
};