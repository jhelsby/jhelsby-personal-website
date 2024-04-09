'use client'

import React, { ReactNode } from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

// Define an interface for Experience data
interface Entry {
  title: string;
  company: string;
  start: string;
  end: string;
  tools: string;
  description: ReactNode;
}

interface SectionProps {
  entries: Entry[];
  sectionTitle: string;
}

const education: Entry[] = [
  {
    title: "Computer Science & Mathematics BSc (Hons)",
    company: "University of Bath",
    start: "September 2022",
    end: "June 2026",
    tools: "Python, Java, C, Git, Django, NumPy, Haskell.",
    description: <div>
      <p>Course includes year long industrial placement.</p>
      <p> Completed Modules: Data Structures & Algorithms, Foundations of Computation, Principles of Programming 1 & 2, Artificial Intelligence, Algebra 1 and 2A, Analysis 1 and 2A.</p>
      <p>Current Modules: Functional Programming, Comparative Programming Languages, Experimental Systems Project, Algebra 2B, Analysis 2B.</p>
    </div>
  },
];

const experiences: Entry[] = [
  {
    title: "Compiler Developer Intern",
    company: "Wolfram Research, Oxfordshire",
    start: "June 2023",
    end: "September 2023",
    tools: "Wolfram Language, C++, Git, Mathematica.",
    description: <div>
      <p>
        In the summer of my first year at Bath, I worked on Mathematica’s LLVM-based Wolfram Compiler, under the supervision of Dr Tom Wickham-Jones, Directory of Kernel Technology at Wolfram Research.
      </p>
      <ul>
        <li>Implemented an optimised CompiledPolynomial data structure, algorithms and automated tests. Addition/multiplication algorithms ran 9.5x/3.5x faster than interpreted equivalents respectively.</li>
        <li>Built, refactored and optimised Statistics functions, including an overloaded Quantile function. Analysed C++ code for Quantile in the Wolfram Kernel to optimise compiled implementation.</li>
        <li>Wrote 15,000 automated tests for Statistics functions, and modernised 18,000 legacy tests.</li>
        <li>Developed library for the LLVM tool opt, to optimise bitcode generated by the compiler. Replaced manually culled list of passes, producing 20% increase of mean runtime speed on tested functions.</li>
        <li>Using C++, CMake and Wolfram, adapted the MXNet-based neural network function CompiledLayer to take an additional storage pointer argument, allowing for improved pipelining of data across layers.</li>
        <li>Built testable operations and graphing functions on Data Structures including linked lists and vectors in C++ and Wolfram, and conducted performance comparisons between the two languages.</li>
      </ul>
    </div>,
  },
  {
    title: "Work Experience Placement",
    company: "Airwalk Reply, Sheffield",
    start: "April 2023",
    end: "April 2023",
    tools: "AWS, Docker, Terraform, Jenkins, SQL, DynamoDB, Git, Jira.",
    description: <div>
      <p>Placement covered a wide range of essential cloud computing concepts and technologies, including:</p>
      <ul>
        <li>AWS, with special focus on EC2 and Lambda.</li>
        <li>Virtualisation, containerisation and Docker.</li>
        <li>Git, and various Git branching strategies commonly used in industry.</li>
        <li>Relational and non-relational databases, including SQL and DynamoDB.</li>
        <li>CI/CD: the process of automating various stages of app development and deployment.</li>
        <li>Terraform and Jenkins.</li>
      </ul>
      <p>Completed labs on each of the technologies discussed above, completing tickets for each lab in Jira.</p>
      <p>To conclude the placement, gave a presentation to my team on the above technologies, my completed work, a handover for the outstanding Jira tickets, and a Q&A on the placement experience.</p>
    </div>,
  },
];

const Section: React.FC<SectionProps> = ({ entries, sectionTitle }) => {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      {entries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <p><strong>{entry.title}, {entry.company}.</strong><br />{entry.start} &ndash; {entry.end}</p>
          <p>Tools used: <i>{entry.tools}</i></p>
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
        <Section entries={education} sectionTitle="Education" />
        <Section entries={experiences} sectionTitle="Experience" />
      </div>
    </div >
  );
}
