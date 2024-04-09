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
    { label: 'This website', project: ThisWebsite },
    { label: "Conduit", project: Conduit },
    // { label: 'TranslationChat', project: TranslationChat},
    { label: "deform~", project: Deform }
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
    description: (<div><p>The Contact Me page uses <a href="https://web3forms.com/">Web3Forms</a>, {/* , and the Request My CV page is implemented using various AWS services, */}and I deployed the site with <a href="https://vercel.com/">Vercel</a>. </p></div>),
    // details: <div>expandable content</div>,
    repo: "https://github.com/jhels/personal-website"
  };
}

const GlobalTxt: ProjectFunction = () => {
  return {
    summary: <p>A translator chat application built with Python and AWS.</p>,
    description: (
      <div>
        <p>GlobalTxt is a real-time text messaging application which translates all messages into the user&apos;s preferred written language. It allows users from all over the world to bypass language barriers and easily communicate with each other via a simple and intuitive UI.</p>

        <p>GlobalTxt is built and deployed using a number of AWS services, and integrated into this website.</p>
      </div>),
    details: <div>TBC</div>,
    url: "http://localhost:3000/",
    repo: "https://github.com/jhels/TranslationChat"
  };
}

const Conduit: ProjectFunction = () => {
  return {
    summary: <p>An LLM-based text editor written in TypeScript, Next.js, Python and Django.</p>,
    description: (
      <div>
        <p>Conduit is an LLM-based text editor with an intuitive graphical interface. It allows you to employ ChatGPT, Claude, Gemini and other LLMs as AI writing assistants, without having to type in any prompts. Please expand the Details tab below for some demo images, and a brief scenario walkthrough.</p>
        <p>Please note that Conduit is currently in development, so new features will be added over time. In particular, we hope to make Conduit publicly available as soon as possible, so you can try it out yourselves. A video and an interactive demo are coming soon!</p>
        <p>Conduit is the product of a collaboration between myself and <a href="https://github.com/dan-smith-tech">Dan Smith</a>. We conceived and developed the idea together. Dan built most of the <a href="https://github.com/conduits-link/core">frontend</a>, which is written in TypeScript and Next.js. I wrote most of the <a href="https://github.com/conduits-link/backend">backend</a>, which uses Python and Django.</p>
      </div>
    ),
    details: (
      <div>
        <h2>Demo Images and Scenario Walkthrough</h2>
        <p>Conduit is a clean, intuitive, online text editor. Here&apos;s a Conduit document discussing quantum entanglement:</p>
        <Image
          src="/conduit/edit.webp"
          alt="Conduit Demo Image 1"
          width={960}
          height={600}
        />
        <p>Now, suppose we want to modify the first paragraph using our LLM assistant (in our demo case, we are using ChatGPT). Move our mouse to its left to show the Prompt button, and click it to display the prompt menu:</p>
        <Image
          src="/conduit/prompt-menu.webp"
          alt="Conduit Demo Image 1"
          width={960}
          height={600}
        />
        <p>A number of prompts are displayed. This is simplified for demonstration purposes - in the app, the list is much more extensive, modifiable, and provides a search bar to quickly locate your desired prompt.</p>
        <p>In this example, we clicked <b>Summarise</b>. This sends a prompt to our LLM, asking for a summary of the selected paragraph. Conduit delivers you the result:</p>
        <Image
          src="/conduit/prompt-response.webp"
          alt="Conduit Demo Image 2"
          width={960}
          height={600}
        />
        <p>From here, you can select one of the result buttons to regenerate the output (if you don&apos;t like the response), replace the first paragraph with the new one, add it as a new paragraph, combine the two paragraphs, or delete the output.</p>
      </div>
    ),
    url: "https://www.conduits.link/",
    repo: "https://github.com/conduits-link/"
  };
}

const Deform: ProjectFunction = () => {
  return {
    summary: <p>A DSP waveshaper audio effect written in C++, for use in Max/MSP.</p>,
    description: <div>
      <p>The idea of this project was to independently design and implement a novel audio effect from scratch. The challenge I gave to myself was to completely develop the idea on paper first, before writing any code. You can read the whitepaper I wrote up during this process <a href="https://github.com/jhels/deform-/blob/main/ContinuousDeformation.pdf">here</a>, or expand the Details tab below for more information on the development process.</p>
      <p>See the demo video below for some sample audio output, given basic waveforms as input. Before viewing, please ensure your sound is switched on, and not too loud!</p>
      <video width="640" height="360" controls>
        <source src="/deform_demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>,
    details: <div>deform~ is a waveshaper: a distortion  which </div>,
    repo: "https://github.com/jhels/deform-"
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
    // marginLeft: '7px'
  };

  const urlTextStyle = {
    marginRight: '3px', // Adjust the space between text and image
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

  // Tracks whether the Details section is collapsed.
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProjectToggle = (project: ProjectInfo, index: number) => {
    // Only update if a different button is selected.
    if (index !== activeIndex) {
      setActiveProject(project);
      setActiveIndex(index);
      setIsExpanded(false);
    }
  }

  return (
    <div>
      { // Render each button in the array and handle selection.
        options.map((option, index) => (
          <ProjectToggle
            // Set informational fields.
            label={option.label}
            project={option.project}

            // Implement toggle logic.
            key={index}
            isSelected={index === activeIndex}
            onClick={() => handleProjectToggle(option.project(), index)}
          >
          </ProjectToggle>
        ))
      }
      <div>
        { // Display selected project details.
          renderProject({ projectData: activeProject, isExpanded, setIsExpanded })
        }
      </div>
    </div>
  );
}

export default Projects;