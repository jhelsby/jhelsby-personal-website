'use client'

import React, { ReactNode } from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

// Define an interface for Experience data
interface Entry {
  title: string;
  company: string;
  start: string;
  end: string;
  description: ReactNode;
}

interface SectionProps {
  entries: Entry[];
  sectionTitle: string;
}

// Sample experience data
const experiences: Entry[] = [
  {
    title: "Compiler Developer Intern",
    company: "Wolfram Research, Oxfordshire",
    start: "June 2023",
    end: "September 2023",
    description: <div><p>Test</p></div>,
  },
  // Add more experiences as needed
];

const education: Entry[] = [
  {
    title: "Computer Science & Mathematics BSc (Hons)",
    company: "University of Bath",
    start: "September 2022",
    end: "June 2026",
    description: <div><p>Course includes year long industrial placement.</p></div>
  },
  // Add more education entries as needed
];

const Section: React.FC<SectionProps> = ({ entries, sectionTitle }) => {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      {entries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <p><strong>{entry.title}, {entry.company}.</strong><br />{entry.start} &ndash; {entry.end}</p>
          {entry.description}
        </div>
      ))}
    </div>
  );
};

export default function About() {
  return (
    <div id="outer-container">
      <Sidebar />
      <div id="page-wrap">
        <h1> <SidebarToggle /> About Me.</h1>
        <p>I&apos;m John Helsby, a backend software engineer and a second-year Computer Science & Mathematics with Industrial Placement Year BSc (Hons) student at the University of Bath, United Kingdom.</p>
        <p>You can view my professional and academic experience below, or see my <a href="https://www.linkedin.com/in/john-h-366980236/">LinkedIn page</a> for more information.</p>

        <Section entries={experiences} sectionTitle="Experience" />
        <Section entries={education} sectionTitle="Education" />
      </div>
    </div >
  );
}
