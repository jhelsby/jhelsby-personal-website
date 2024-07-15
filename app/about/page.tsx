'use client'

import React, { ReactNode } from 'react';
import { Sidebar, SidebarToggle } from '../Sidebar';

// Define an interface for Experience data
interface Entry {
  title: string;
  company: string;
  start: string;
  end: string;
  tools?: string;
  description: ReactNode;
}

interface SectionProps {
  id: string;
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
      <p>My course includes a year-long industrial placement after my second year.</p>
      <p>I am currently on my placement year. On the Computer Science side of my course, I&apos;ve studied:</p>
      <ul>
        <li>core principles of programming in Python, Java and C.</li>
        <li>data structures and algorithms.</li>
        <li>comparative programming languages.</li>
        <li>artificial intelligence, including constraint satisfaction, value and policy iteration, k-nearest neighbours, Naive Bayes classifiers, feature engineering, and neural networks. I also implemented a small neural network with backpropagation from scratch in Python and NumPy, based on the textbook <a href="http://neuralnetworksanddeeplearning.com/"><i>Neural Networks and Deep Learning</i></a> by Michael Nielsen.</li>
        <li>foundations of computation, including finite automata, context-free grammars, and Turing machines.</li>
        <li>functional programming, Haskell, and the Lambda calculus.</li>
      </ul>
      <p>
        As part of an extended group project, I also acted as Technical Lead for the backend of a web application designed to automate the process of booking boats into harbours. The backend and accompanying tests were written in Python, Django, and the Django REST Framework, and deployed onto the web using GitHub Actions, Heroku and MailGun.
      </p>
      <p>The Mathematics side of my course so far has focused on Algebra and Analysis. My studies have included:</p>
      <ul>
        <li>Fundamentals of logic, numbers, proofs, sets, and functions.</li>
        <li>Sequences, series, convergence. Properties of one-dimensional real functions.</li>
        <li>Normed spaces, metric spaces and compactness.</li>
        <li>Multivariate calculus.</li>
        <li>Complex analysis.</li>
        <li>Vector spaces and linear algebra.</li>
        <li>Groups, rings and modules.</li>
      </ul>
      <p>In the my final year of my course, students can choose which modules they wish to study. I hope to take Computer Science courses in Bayesian machine learning, advanced algorithms and complexity, and natural language processing; and Mathematics courses in numerical analysis, optimisation methods of operational research, numerical optimisation and/or graph theory.</p>
    </div>
  },
];

const experiences: Entry[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon, London",
    start: "June 2024",
    end: "November 2024",
    tools: "Java, Kotlin, Swift, Objective-C, Amazon's internal tooling.",
    description: <div><p>I am currently undertaking a six month Software Development Engineering placement with Amazon, at their <a href="https://www.aboutamazon.co.uk/news/working-at-amazon/amazon-office-london-photo-tour">1 Principal Place</a> office in London.</p>
      <p>I am working in the Rufus Voice team, on Amazon&apos;s mobile app. <a href="https://www.aboutamazon.com/news/retail/amazon-rufus">Rufus</a> is an LLM chatbot which provides a new, generative AI-powered, conversational shopping experience.</p>
    </div>
  },
  {
    title: "Compiler Developer Intern",
    company: "Wolfram Research, Oxfordshire",
    start: "June 2023",
    end: "September 2023",
    tools: "Wolfram Language, C++, LLVM, MXNet, CMake, Git, Mathematica.",
    description: <div>
      <p>
        In the summer of my first year at Bath, I worked on Mathematica&apos;s LLVM-based <a href="https://www.wolfram.com/language/12/code-compilation/">Wolfram Compiler</a> under the supervision of Dr Tom Wickham-Jones, Directory of Kernel Technology at Wolfram Research.
      </p>
      <ul>
        <li>I implemented an optimised CompiledPolynomial data structure, algorithms and automated tests. These included sparse polynomial addition and a Priority Queue-based multiplication algorithm, based on <a href="https://www.mdpi.com/2227-7390/7/5/441"><i> Algorithms and Data Structures for Sparse Polynomial Arithmetic</i></a> (2019), Asadi, M.; Brandt, A.; Moir, R.H.C.; Moreno Maza, M.</li>
        <li>I built, refactored and optimised Statistics functions within the compiler, including <a href="https://reference.wolfram.com/language/ref/Quantile.html">Quantile</a>. I also analysed C++ code for Quantile in the Wolfram Kernel to optimise the compiled implementation.</li>
        <li>I wrote a number of automated tests for Statistics functions, and modernised legacy tests.</li>
        <li>I developed a Wolfram library for the LLVM tool <a href="https://llvm.org/docs/CommandGuide/opt.html">opt</a>, to optimise bitcode generated by the compiler.</li>
        <li>Using C++, CMake and Wolfram, I adapted the MXNet-based neural network function CompiledLayer to take an additional storage pointer argument, allowing for improved pipelining of data across layers.</li>
        <li>I built testable operations on Data Structures including linked lists and vectors in C++ and compiled Wolfram, and conducted performance comparisons between the two languages.</li>
      </ul>
    </div >,
  },
];

const Section: React.FC<SectionProps> = ({ id, entries, sectionTitle }) => {
  return (
    <div id={id}>
      <h2>{sectionTitle}</h2>
      {entries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <p><strong>{entry.title}, {entry.company}.</strong><br />{entry.start} &ndash; {entry.end}</p>
          {entry.tools !== undefined && (<p>Tools used: <i>{entry.tools}</i></p>)}
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
        <p>I&apos;m John Helsby, a software engineer with a passion for technology and innovation as a force for good. I&apos;m particularly interested in scalable systems, distributed computing, artificial intelligence, and how these tools can be applied to benefit ordinary people the world over.</p>
        <p>For more on my technical interests, please see my <a href="./blog">blog</a>. You can read about my <a href="#experience">professional experience</a> and <a href="#education">education</a> below, or see my <a href="https://www.linkedin.com/in/johnhelsby/">LinkedIn page</a> for more information.</p>
        <Section id="experience" entries={experiences} sectionTitle="Experience" />
        <Section id="education" entries={education} sectionTitle="Education" />
      </div>
    </div >
  );
}
