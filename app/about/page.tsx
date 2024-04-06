import React from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

export default function About() {

  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1> <SidebarToggle /> About Me.</h1>
        <p>I&apos;m John Helsby, a backend software engineer and a second-year Computer Science & Mathematics with Industrial Placement Year BSc (Hons) student at the University of Bath, United Kingdom.</p>
        <p>You can view some of the personal projects I have worked on <a href="/#projects">here</a>, check out my <a href="/blog">Technical Blog</a>, or read about my professional and academic experience below.</p>
        <div>
            <h2>Experience</h2>
            <p>Wolfram.</p>
        </div>
        <div>
            <h2>Education</h2>
            <p>University of Bath.</p>

        </div>

      </div>
    </div>
  );
}
