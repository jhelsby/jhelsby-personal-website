'use client'

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

// Holds all necessary information for each project.
type ProjectInfo = {
  summary: ReactNode;
  description: ReactNode;
  details?: ReactNode;
  url?: string; // Use ? because not all projects are deployable.
  repo: string;
}

// ###########################
// #                         #
// #     PROJECTS TEXT       #
// #                         #
// ###########################

// Main component, called from homepage.
function Projects() {
  const buttonOptions = [
    { label: "This website", project: ThisWebsite },
    { label: "DictionWave", project: DictionWave },
    { label: "Conduit", project: Conduit },
    { label: 'Lox Interpreters', project: LoxInterpreters },
    { label: "[deform~]", project: Deform }
  ];

  return (
    <div>
      <ProjectToggles options={buttonOptions} />
    </div>
  );
}

const ThisWebsite: ProjectFunction = () => {
  return {
    summary: <p>I built this site with HTML, CSS, TypeScript, React and Next.js.</p>,
    description: (<div><p>The Request My CV and Contact Me pages use <a href="https://web3forms.com/">Web3Forms</a>; I deployed the site with <a href="https://vercel.com/">Vercel</a>; and I registered this domain with <a href="https://porkbun.com/">Porkbun</a>.</p></div>),
    repo: "https://github.com/jhelsby/jhelsby-personal-website"
  };
}

const DictionWave: ProjectFunction = () => {
  return {
    summary: <p>An NLP-based word-discovery tool built with Python, NumPy, Flask, and <a href="https://fasttext.cc/">fastText</a> word embeddings.</p>,
    description: (
      <div>
        <p>DictionWave is a word-discovery tool that lets you surf across the world of English language and meaning, using the power of word embeddings. It uses word vector similarities, a rarity parameter, some randomness, and a minimalist UI, to facilitate word discovery.</p>

        <video width="640" height="360" controls>
          <source src="/dictionwave_demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>I also built a related word-categorising tool called DictionMap, whose repository can be seen <a href="https://github.com/jhelsby/DictionMap">here</a>.</p>
      </div>),
    details: <div>
      <p>DictionWave uses fastText word embeddings trained on <a href="https://en.wikipedia.org/wiki/Common_Crawl">Common Crawl</a> data to calculate cosine similarities between words. It additionally applies a ranking algorithm based on word frequency, allowing the user to view rarer words as desired, alongside optional randomness. For further details, please see the implementation, in <a href="https://github.com/jhelsby/DictionWave/blob/main/similarity_core.py">similarity_core.py</a>.</p>
      <p>The fastText database used &ndash; crawl-300d-2M.vec &ndash; contains two million unique words taken from Common Crawl data; 630 billion words obtained from crawling the web. Many of these are data irrelevant or harmful to this use case, such as numbers, misspellings, duplicates, and obscene or derogatory language. I implemented a number of automated processes including NLP techniques, alongside manual cleaning, to remove as many of these words as possible &ndash; 798,528 at the last count (40%). This improved memory consumption by 40%, query speed by 38.5%, and improves output quality since fewer irrelevant words are listed in each query. The code handling this can be found in <a href="https://github.com/jhelsby/DictionWave/blob/main/estimate_misspellings.py">estimate_misspellings.py</a> and <a href="https://github.com/jhelsby/DictionWave/blob/main/filter_embeddings.py">filter_embeddings.py</a>. There is still substantial room for improvement on this, as there are still many invalid words in the filtered dataset.</p>
      <p>The web application logic, implemented with Flask, HTML, and CSS, can be found in <a href="https://github.com/jhelsby/DictionWave/blob/main/app.py">app.py</a> and <a href="https://github.com/jhelsby/DictionWave/blob/main/templates/index.html">index.html</a>. I tried to keep the frontend design deliberately minimal, functionality-focused, and (though this is of course completely subjective!) fun to use.</p>
      <p> Finally, please note that to limit costs, the live site is currently using a restricted dataset of 73,000 words rather than the full 1.2 million. If you wish to see the application using the full dataset, you can run it locally (or elsewhere) by following the instructions provided in the repository readme, <a href="https://github.com/jhelsby/DictionWave/blob/main/readme.md#development-setup">here</a>.</p>
    </div>,
    url: "https://dictionwave-4d2e2625bf14.herokuapp.com/",
    repo: "https://github.com/jhelsby/DictionWave"
  };
}

const Conduit: ProjectFunction = () => {
  return {
    summary: <p>An LLM-based text editor written in TypeScript, Next.js, Python, Django and MySQL.</p>,
    description: (
      <div>
        <p>Conduit is an LLM-based text editor with an intuitive graphical interface. It allows you to employ ChatGPT, Claude, Gemini and other LLMs as AI writing assistants, without having to type in any prompts. Please expand the Details tab below for some demo images, and a brief scenario walkthrough.</p>
        <p>Conduit is the product of a collaboration between myself and <a href="https://github.com/dan-smith-tech">Dan Smith</a>. We conceived and developed the idea together. Dan built <a href="https://github.com/conduits-link/core">frontend</a>, which is written in TypeScript and Next.js. I wrote the <a href="https://github.com/conduits-link/backend">backend</a> in Python, Django and PostgreSQL, and hosted it using Heroku.  Currently implemented features include:</p>
        <ul>
          <li>User account registration and authentication using <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">JWTs</a> (JSON Web Tokens).</li>
          <li>File and custom AI prompt storage with <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> (Create, Read, Update and Delete) capabilities.</li>
          <li>Integration with the <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis">ChatGPT API</a>.</li>
          <li>Payment handling for LLM calls with <a href="https://docs.stripe.com/payments/checkout">Stripe Checkout</a>.</li>
          <li>Unit tests for each API call.</li>
        </ul>
        <p>The Conduit internal API, a <a href="https://en.wikipedia.org/wiki/REST">RESTful</a> interface that integrates the frontend and the backend, can be viewed <a href="https://github.com/conduits-link/frontend/blob/main/docs/api/internal.md">here</a>.</p>
        <p>Though it is not used in the current implementation for cost reasons, I also deployed the AI model LLaMA 2 onto AWS SageMaker using Docker and AWS ECR, as discussed <a href="https://github.com/conduits-link/backend/blob/main/AWS/aws_readme.md">here</a>.</p>
      </div>
    ),
    details: (
      <div>
        <h2>Demo Images and Scenario Walkthrough</h2>
        <p>Conduit is an intuitive, AI-powered online text editor. Here&apos;s a Conduit document discussing quantum entanglement:</p>
        <Image
          src="/conduit/edit.webp"
          alt="Conduit Demo Image 1"
          width={960}
          height={600}
        />
        <p>Now, suppose we want to modify the first paragraph using your LLM assistant. Move your mouse to its left to show the Prompt button, and click it to display the prompt menu:</p>
        <Image
          src="/conduit/prompt-menu.webp"
          alt="Conduit Demo Image 1"
          width={960}
          height={600}
        />
        <p>A number of prompts are displayed. This is simplified for demonstration purposes - in the app, the list is much more extensive, modifiable, and provides a search bar to quickly locate your desired prompt.</p>
        <p>For this example, suppose you clicked <b>Summarise</b>. This sends a prompt to your LLM, asking for a summary of the selected paragraph. Conduit delivers you the result:</p>
        <Image
          src="/conduit/prompt-response.webp"
          alt="Conduit Demo Image 2"
          width={960}
          height={600}
        />
        <p>From here, you can select one of the result buttons to:</p>
        <ul>
          <li>regenerate the output (if you don&apos;t like the response).</li>
          <li>replace the first paragraph with the output.</li>
          <li>convert the output into a new paragraph.</li>
          <li>combine the paragraph with the output, to form a single paragraph.</li>
          <li>delete the output.</li>
        </ul>
      </div>
    ),
    url: "https://www.conduits.link/",
    repo: "https://github.com/conduits-link/"
  };
}

const LoxInterpreters: ProjectFunction = () => {
  return {
    summary: <p>
      A work-in-progress implementation of <i>clox</i>, an interpreter for the Lox programming language written in C. clox comprises of a bytecode compiler and a virtual machine with garbage collection. I have also written <a href="https://github.com/jhelsby/jlox-notes">complete notes on <i>jlox</i></a>, a tree-walk interpreter for Lox written in Java.
    </p>,
    description: <p>
      clox, jlox and Lox are described in <a href="https://craftinginterpreters.com/">Crafting Interpreters</a> (2021), by Robert Nystrom. Lox is a simple, dynamically typed, object-oriented language.
    </p >,
    repo: "https://github.com/jhelsby/clox"
  };
}

const Deform: ProjectFunction = () => {
  return {
    summary: <p>
      A real-time DSP waveshaper audio effect written in C++, for use in <a href="https://cycling74.com/products/max">Max/ MSP</a>.
    </p>,
    description: <div>
      <p>
        [deform~] was my first serious programming project, completed in the year prior to starting my Computer Science & Mathematics BSc. The idea was to independently design and implement a novel real-time audio effect from scratch.
      </p>
      <p>
        An additional challenge I gave to myself was to completely develop the idea on paper first, before writing any code. You can read the whitepaper I wrote up during this process <a href="https://github.com/jhelsby/deform-/blob/main/ContinuousDeformation.pdf">here</a>, or expand the Details tab below for more information on development and implementation.
      </p>
      <p>
        See the demo video below for some sample audio output, given basic waveforms as input. Before viewing, please ensure your sound is switched on, and not too loud!
      </p>
      <video width="640" height="360" controls>
        <source src="/deform_demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>,
    details: <div>
      <p>
        [deform~] is a original, novel waveshaper audio effect. A waveshaper is a distortion audio effect which works by applying any mathematical function (known as the &quot;transfer function&quot;) to the input.
      </p>
      <p>[deform~] uses a sequence of stochastically generated splines (continuous, piecewise polynomials) as its transfer functions. Once the splines have been generated, the user can change a 64-bit <b>Intensity</b> parameter to smoothly distort the input wave, as shown in the video above.
      </p>
      <h2>Technical details.</h2>
      <p>
        First, the user chooses the maximum degree of the splines, the magnitude of their coefficients, and the number of intermediary splines. A final spline is randomly generated within the constraints set by the user.
      </p>
      <p>
        The intermediary splines are calculated by linearly interpolating between the coefficients of the identity function <i>x</i> and the final spline. Finally, all the splines are normalised, with the intention that the output volume will be roughly constant as the Intensity parameter is varied.
      </p>
      <p>
        This gives a finite sequence of splines that vary between the identity function and the final spline, from no distortion to most distorted. If the Intensity parameter is set between two splines, the output is given by linearly interpolating between these two splines.
      </p>
      <h2>Implementation.</h2>
      <p>I first built a <a href="https://github.com/jhelsby/deform-/blob/main/source/projects/deform_tilde/prototype.ipynb">prototype</a> in a Python Jupyter Notebook in order to use MatPlotLib&apos;s graph plotting, and used sine, saw, and triangle waves to test the effect in my Jupyter Notebook.
      </p>
      <Image
        src="/deform_jupyter.jpg"
        alt="Prototype Graphs"
        width={1193}
        height={1193}
      />
      <p>
        After the prototype was working properly, I ported my Python code <a href="https://github.com/jhelsby/deform-/blob/main/source/projects/deform_tilde/deform_tilde.cpp">into C++</a>, compiled it using Max/MSP&apos;s <a href="https://github.com/Cycling74/min-devkit/tree/00fbf24c39169280f237c608892e402fcd1f53d9">Min-API</a> and CMake (with the help of a much more experienced friend), and tested the resultant external object in Max/MSP.
      </p>
      <h2>Motivation.</h2>
      <p>
        For historical reasons, many common techniques in sound synthesis come from analogue electronics. For example, sounds are often built up from a combination of basic waveforms and effects which can be synthesised with analogue circuits or with computers with limited resources. I wanted to try and build a DSP audio effect that used the power of modern computers in a way that would be impossible in the analogue domain.
      </p>
      <p>
        I was also interested in trying to use ideas from mathematical analysis to a practical engineering problem. My thinking was that, since mono sound waves can be thought of as a one-dimensional function f(t), we can harness techniques and ideas from one-dimensional real analysis. Here are a few key mathematical ideas that I used:
      </p>
      <ul>
        <li>
          I wanted all the transfer functions to be continuous, or better yet, differentiable, with the intention that this might prevent the output from being excessively distorted. Splines are differentiable on all but a finite number of points.
        </li>
        <li>
          Splines are easy to differentiate, meaning I could easily limit the rate of change of the splines, avoiding excessive distortion.
        </li>
        <li>
          The Weierstrass approximation theorem implies that a spline can approximate any continuous waveshaper, which I hoped would mean that my effect could generate an extremely wide variety of sounds.
        </li>
        <li>
          If you consider a polynomial f(x) = an x^n + … + a1 x + a0 instead as a linear function of its coefficients g(a0, …, an) = x^n an + … + x a1 + a0, it is also continuous in a0, ..., an. I hoped that this meant my intermediary splines would evolve smoothly from no distortion to the final spline.
        </li>
        <li>
          Since splines are continuous functions, linear interpolation of two splines is also continuous. I hoped that this meant that varying the Intensity parameter would result in a pleasant, smooth transformation of the output audio.
        </li>
      </ul>
      <h2>Reflections.</h2>
      <p>
        I greatly enjoyed making [deform~]. As my first serious project, I found it immensely satisfying to see something grow from an idea into a real, useable product. In hindsight, though, there&apos;s a number of things I would have done differently. The main thing is how unoptimised the code is. It is very CPU-intensive and slow to initialise.
      </p>
      <p>
        I think these issues could be mitigated by using a C++ linear algebra library to generate and manipulate the splines using matrix operations. My prototype used NumPy for this purpose, which was much more efficient (and concise). When porting to C++, I tried to convert the NumPy implementation into <a href="https://github.com/dpilger26/NumCpp">NumCPP</a>, but couldn&apos;t get it working with Min-API.
      </p>
      <p>
        I also think that building the project as a Max/MSP external was a mistake as this severely limited the use cases for the product. If I had built it as a VST (Virtual Synth Tool), it could have been used in almost any music program.
      </p>
      <p>
        I&apos;m undecided on whether all the mathematical analysis theory was really needed. It probably wasn&apos;t strictly necessary, and could have been built without it. But on the other hand, I found much of it extremely useful, and I took much inspiration from ideas in analysis when conceiving of the project.
      </p>
      <p>
        All in all, I found [deform~] to be a highly rewarding first project, in terms of both the finished product and the lessons I took away from building it.
      </p>
    </div>,
    repo: "https://github.com/jhelsby/deform-"
  };
}

// ###########################
// #                         #
// #     PROJECTS LOGIC      #
// #                         #
// ###########################

// Factory function for individual projects.
type ProjectFunction = () => ProjectInfo

// Stores project data, alongside whether the
// details section is expanded.
interface RenderProjectProps {
  projectData: ProjectInfo;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function renderProject({ projectData, isExpanded, setIsExpanded }: RenderProjectProps) {
  const { summary, description, details, url, repo } = projectData;

  const urlStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 'fit-content',
    gap: '8px',
    margin: '7px',
  };

  const urlTextStyle = {
    marginRight: '3px', // Adjust the space between repo and app website
  };

  const detailsContainerStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div>
      {summary}
      <div style={urlStyle}>
        {<a href={repo} target="_blank" rel="noopener noreferrer" className="button-link" style={urlStyle}>
          <span style={urlTextStyle}>GitHub</span>
          <Image
            src="/github-mark.svg"
            alt="GitHub Logo"
            width={20}
            height={20}
          />
        </a>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" className="button-link">App Website</a>}
      </div>
      {description}
      {details !== undefined && (
        <p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="button-details">
            {isExpanded ? "Hide Details ▽" : "Show Details ▷"}
          </button>
          {isExpanded && (
            <div style={detailsContainerStyle}>
              {details}
            </div>
          )}
        </p>
      )}
    </div>
  );
}

// Defines format for ProjectToggle buttons, where
// the selected project button is highlighted.
interface ProjectToggleProps {
  project: ProjectFunction;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectToggle: React.FC<ProjectToggleProps> = ({ label, isSelected, onClick }) => {
  const buttonClass = isSelected ? 'project-button selected-project-button' : 'project-button project-button-hover';

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Defines an array of toggles, with labels and associated projects,
// such that only the selected project button is highlighted.
interface ProjectTogglesProps {
  options: { label: string; project: ProjectFunction; }[];
}

const ProjectToggles: React.FC<ProjectTogglesProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Select first toggle by default.
  const [activeProject, setActiveProject] = useState(ThisWebsite);

  // Tracks whether the Details section is collapsed for each index.
  const [expandedStates, setExpandedStates] = useState<boolean[]>(options.map(() => false));

  const handleProjectToggle = (project: ProjectInfo, index: number) => {
    // Only update if a different button is selected.
    if (index !== activeIndex) {
      setActiveProject(project);
      setActiveIndex(index);
    }
  };

  const toggleExpanded = (index: number) => {
    // Toggle the expanded state for the given index.
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <div>
      {options.map((option, index) => (
        <ProjectToggle
          label={option.label}
          project={option.project}
          key={index}
          isSelected={index === activeIndex}
          onClick={() => handleProjectToggle(option.project(), index)}
        />
      ))}
      <div>
        {/* Render the project details with corresponding expand/collapse state */}
        {renderProject({ projectData: activeProject, isExpanded: expandedStates[activeIndex], setIsExpanded: () => toggleExpanded(activeIndex) })}
      </div>
    </div>
  );
};

export default Projects;
