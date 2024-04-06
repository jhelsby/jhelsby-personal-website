'use client'

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';


// Holds all necessary information for each project.
type ProjectInfo = {
  summary: ReactNode;
  description: ReactNode;
  technicalDetails?: ReactNode;
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
    { label: "Conduit", project: Conduit},
    // { label: 'TranslationChat', project: TranslationChat},
    { label: "deform~", project: Deform}
  ];

  return (
    <div>
      <ProjectToggles options={buttonOptions} />
    </div>
  );
}

const ThisWebsite: ProjectFunction = () => {
  return {
    summary: <p>I built this site in HTML, CSS, TypeScript, React and Next.js.</p>,
    description: (<div><p>The Contact Me page uses <a href="https://web3forms.com/">Web3Forms</a>, {/* , and the Request My CV page is implemented using various AWS services, */}and I deployed the site with <a href="https://vercel.com/">Vercel</a>. </p></div>),
    // technicalDetails: <div>expandable content</div>,
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
    technicalDetails: <div>expandable content</div>,
    url: "http://localhost:3000/",
    repo: "https://github.com/jhels/TranslationChat"
  };
}

const Conduit: ProjectFunction = () => {
  return  {
    summary: <p>An LLM interface written in TypeScript, Next.js, Python and Django.</p>,
    description: (
      <div>
      <p>Conduit is the product of a collaboration between myself and <a href="https://github.com/dan-smith-tech">Dan Smith</a>. We conceived and developed the idea together. Dan built most of the <a href="https://github.com/conduits-link/core">frontend</a>, and I most of the <a href="https://github.com/conduits-link/backend">backend</a>.</p>
    </div>
    ),
    technicalDetails: <div>expandable content</div>,
    url: "https://www.conduits.link/",
    repo: "https://github.com/conduits-link/"
  };
}

const Deform: ProjectFunction = () => {
  return {
    summary: <p>A DSP waveshaper written in C++, for use in Max/MSP.</p>,
    description: <div>
    <p>The idea of this project was to independently design and implement a novel audio effect from scratch. The challenge I gave to myself was to completely develop the idea on paper first, before writing any code. You can read the whitepaper I wrote up during this process <a href="https://github.com/jhels/deform-/blob/main/ContinuousDeformation.pdf">here</a>.</p>
    <p>See the demo video below for some sample audio output, given basic waveforms as input. Before viewing, please ensure your sound is switched on, and not too loud!</p>
    <video width="640" height="360" controls>
      <source src="/deform_demo.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
    </div>,
    technicalDetails: <div>expandable content</div>,
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
// technicalDetails section is expanded.
interface RenderProjectProps {
  projectData: ProjectInfo;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function renderProject({ projectData, isExpanded, setIsExpanded }: RenderProjectProps) {
  const { summary, description, technicalDetails, url, repo } = projectData;

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
      {technicalDetails !== undefined && (
        <p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="button-technical">
            {isExpanded ? "Hide Details ▽" : "Show Technical Details ▷"}
          </button>
          {isExpanded && (
            <div style={detailsContainerStyle}>
              {technicalDetails}
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
  options: {label: string; project: ProjectFunction;}[];
}

const ProjectToggles: React.FC<ProjectTogglesProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Select first toggle by default.
  const [activeProject, setActiveProject] = useState(ThisWebsite);

  // Tracks whether the Technical Details section is collapsed.
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProjectToggle = (project: ProjectInfo, index: number) => {
    // Only update if a different button is selected.
    if (index!==activeIndex) {
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