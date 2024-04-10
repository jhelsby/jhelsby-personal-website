import React from 'react';
import Projects from './Projects';
import { Sidebar, SidebarToggle } from './Sidebar';

export default function Home() {

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1> <SidebarToggle /> John Helsby&apos;s Personal Website.</h1>

        <div className="photo-container">
          <img
            src="/photo.jpg"
            alt="My Photo"
            className="photo"
          />
          <div>
            <p>Welcome to my coding website! I&apos;m John Helsby, a backend software engineer and a Computer Science & Mathematics BSc (Hons) student at the University of Bath, United Kingdom.</p>
            <p>I&apos;m a passionate believer in the power of computing and technology, appropriately applied, to solve important problems and benefit humanity as a whole. I&apos;m particularly interested in scalable systems, distributed computing, and artificial intelligence.
            </p>
          </div>
        </div>
        <div>
          <p>I am most experienced with Python, Java, C, C++, SQL, and AWS. I&apos;m also proficient in JavaScript, TypeScript, Node.js, and React, and I&apos;m always looking to expand my skillset and learn new technologies. For some biographical information, or more on my technological interests and experience, please see:</p>

          <div>
            <ul>
              <li><a href="/about">About Me</a>.</li>
              <li><a href="https://github.com/jhels/">My GitHub</a>.</li>
              <li><a href="https://www.linkedin.com/in/johnhelsby/">My LinkedIn profile</a>.</li>
              <li><a href="/cv">My CV</a>.</li>
              <li><a href="/cv">My Technical Blog</a>.</li>
              <li><a href="/contact">Contact Me</a>.</li>
            </ul>
          </div>

          <p>Finally, a few of my coding projects can be found below. Please select a project to read more, view the codebase, or see the application in action.</p>

          <p> Thank you for reading - and please don&apos;t hesitate to <a href="/contact">get in touch</a> or <a href="https://www.linkedin.com/in/johnhelsby/" >connect on LinkedIn</a> if you have any comments or questions. Have a great rest of your day!</p>

          <p>- John. 😊</p>
          <h2>Projects.</h2>
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
