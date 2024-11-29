'use client'

import React from 'react';
import Post from '../Post';

const slug = "programming-for-beginners"
const body = <div>
    <p>Someone asked me what I would recommend for people interested in software engineering with no programming background. Since I studied programming as part of my university course, I may not be the best qualified person to answer this question &ndash; people who taught themselves from scratch might know better than me. However, I will share a few thoughts and resources in case it is of any use.</p>
    <h2>Finding Resources</h2>
    <p>First of all, I think it is important to learn how to find reliable resources for yourself. The tech world is large and a lot of the time you might not have anyone around to point you to the right place &ndash; especially for personal projects. This can be pretty challenging as there are a <i>lot</i> of resources out there, and not all of them are good. Even the best available resources may not always be completely accurate. And unfortunately, the worst resources are often misleading or totally wrong. With that caveat in mind, here are some places you might want to look:</p>
    <ul>
        <li>I think that the official documentation for a given language or tool is always a good place to start, if it exists. Sometimes, official documentation even provides links to recommended learning resources.</li>
        <li>Highly-rated courses on education platforms like Coursera, Udemy and Udacity.</li>
        <li>Google, Stack Exchange, and technical blog posts (though beware of inaccuracies and try to keep to reputable-looking sources where possible).</li>
        <li>If you feel you have a good understanding of the fundamentals, ChatGPT and similar LLMs can be useful sources. However, their propensity to <a href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">hallucinate</a> makes them risky to depend on. I&apos;m not sure you should use LLMs if you don&apos;t feel confident in your ability to verify the correctness of their claims or code.</li>
    </ul>
    <p>If you ever see some term or piece of technology you&apos;re not familiar with, and are curious to learn more, I think that simply looking it up and reading about it can be a great approach. Feel free to do that with anything you might not recognise in this post!</p>
    <h2>Getting Started</h2>
    <p>
        I think it could be a good idea to get to grips with a single programming language to begin with. This will also help you learn the basics of programming in general. One of Python, Java, C, or C++ could be a good place to start, among others, as they are very widely used. As per the &quot;Finding Resources&quot; section above, I don&apos;t want to make any specific recommendations about which to go for &ndash; it might be useful to do some research yourself and figure out which you find most appealing. If you&apos;re undecided, though, I would perhaps suggest this <a href="https://www.python.org/about/gettingstarted/">Python for Beginners</a> guide from the official Python documentation.
    </p>
    <p>
        I haven&apos;t done it myself, but I have heard that the free Udemy course, <a href="https://www.udacity.com/course/design-of-computer-programs--cs212"><i>Design of Computer Programs</i></a> from esteemed computer scientist <a href="https://en.wikipedia.org/wiki/Peter_Norvig">Peter Norvig</a>, written in Python, is an excellent way to learn some key programming and problem-solving fundamentals. Working through problem sets and exercises, whether from this course or elsewhere, can really help to solidify your understanding, especially when you&apos;re just getting started.
    </p>
    <p>
        If you&apos;re interested in frontend web development (for example, a website like this one) you can try learning some HTML, CSS, and JavaScript, and building a web page. Largely for historical reasons, JavaScript is the only language that web browsers natively support for client-side interactivity and rendering of web pages. However, I would personally suggest working through the fundamental material above before trying to do too much in JavaScript, as it is quite a complicated language with many idiosyncracies.
    </p>
    <p>
        Once you feel you have the basics figured out, a coding project can be a great way to expand your knowledge while working on something tangible and (dare I say it!) fun. This could be something simple or challenging, whatever you like. I think the most important thing is to pick something you really find interesting, so you&apos;re motivated to work on it and learn as much as possible. This might also be a good time to learn how to use a CLI (e.g. Terminal on Linux or MacOS, PowerShell or <a href="https://github.com/microsoft/terminal">Windows Terminal</a> on Windows) and Git. I would suggest making a GitHub account and learning how to store and modify your project there. If you can come up with a project idea you find interesting, implement it, and get it working, I think that would be a fantastic milestone for a beginner.
    </p>
    <p>Many thanks for reading and best of luck on your programming journey! Please feel free to <a href="/contact">get in touch</a> if you have any questions along the way.</p>
</div>

export default function Page() {
    return (
        <Post
            slug={slug}
            body={body}
        />
    );
};