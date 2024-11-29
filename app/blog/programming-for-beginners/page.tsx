'use client'

import React from 'react';
import Post from '../Post';

const slug = "programming-for-beginners"
const body = <div>
    <p>Someone asked me what I would recommend for people interested in software engineering with no programming background. Since I studied programming as part of my university course, I may not be the best qualified person to answer this question &ndash; people who taught themselves from scratch might know better than me. However, I will share a few thoughts and resources in case it is of any use.</p>
    <h2>Finding Resources</h2>
    <p>First of all, I think it is important to learn how to find reliable resources for yourself. The tech world is large and a lot of the time you might not have anyone around to point you to the right place &ndash; especially for personal projects. This can be pretty challenging as there are a <i>lot</i> of resources out there, and not all of them are good. Even the best available resources may not always be completely accurate. Unfortunately, the worst resources are often totally wrong or misleading. With that caveat in mind, here are some places you might want to look:</p>
    <ul>
        <li>I think that the official documentation for a given language or tool is always a good place to start, if it exists. Some documentation also contains links to recommended learning resources.</li>
        <li>Highly-rated courses on sites like Coursera, Udemy and Udacity.</li>
        <li>Google, StackExchange, blog posts (though beware of inaccuracies and try to keep to reputable-looking sources where possible).</li>
        <li>If you feel you have a good grasp of the fundamentals, ChatGPT and other LLMs can be a good source. However, their propensity to <a href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">hallucinate</a> makes this risky. I&apos;m not sure you should use LLMs if you don&apos;t feel confident in your ability to verify the correctness of their claims or code.</li>
    </ul>
    <p>If you ever see some term or piece of technology you&apos;re not familiar with, and are curious to learn more, I think that simply looking it up and reading about it can be a great approach. Feel free to do that with anything you might not recognise in the following section.</p>
    <h2>Getting Started</h2>
    <p>
        I think it could be a good idea to get to grips with a single programming language to begin with. This could be a good way to learn the basics of programming in general, as well as how to use a single language. Python, Java, C, or C++ could be a good place to start, among others. As per the &quot;Finding Resources&quot; section above, I don&apos;t want to make any specific recommendations about which you should use &ndash; it might be useful to do some research yourself and figure out where you&apos;d like to start. If you just want a link, I would perhaps suggest this <a href="https://www.python.org/about/gettingstarted/">Python for Beginners</a> guide from the official Python documentation.
    </p>
    <p>
        I haven&apos;t done it myself, but I have heard that the free Udemy course, <a href="https://www.udacity.com/course/design-of-computer-programs--cs212"><i>Design of Computer Programs</i></a> from esteemed computer scientist Peter Norvig is a great way to learn some key programming and problem-solving fundamentals. Working through problem sets and exercises (whether from this course or elsewhere) can be a great way to learn, especially when you&apos;re just getting started.
    </p>
    <p>
        If you also want to do some frontend web development (e.g. a website like this one) you can get started by learning some HTML, CSS and JavaScript. However, I would suggest working through some of the above material first.
    </p>
    <p>
        Once you feel you have the basics figured out, a coding project can be a great way to expand your knowledge while working on something tangible or interesting to you. This could be something simple, or something more challenging &ndash; whatever you like! This might also be a good time to learn how to use a CLI (e.g. Terminal on Linux or MacOS, PowerShell or Windows Terminal on Windows) and Git. I would suggest making a GitHub account and learning how to store and modify your project there. If you can come up with a project idea, implement it, and get it working, I think that would be a great milestone for a beginner.
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