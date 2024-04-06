'use client'

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';


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
    description: (<p>I built this static website using HTML, CSS, TypeScript, React and Next.js, and deployed it with Vercel. The Contact Me page uses <a href="https://web3forms.com/">Web3Forms</a>, and the Request My CV page is implemented using various AWS services.</p>),
    technicalDetails: <div>expandable content</div>,
    repo: "https://github.com/jhels/personal-website"
  };
}

const TranslationChat: ProjectFunction = () => {
  return {
    description: (
      <div>
      <p>TranslationChat is a real-time text messaging application which translates all messages into the user&apos;s preferred written language. It allows users from all over the world to bypass language barriers and easily communicate with each other via a simple and intuitive UI.</p>

      <p>TranslationChat is built and deployed using a number of AWS services, and integrated into this website.</p>
      </div>),
    technicalDetails: <div>expandable content</div>,
    url: "http://localhost:3000/",
    repo: "https://github.com/jhels/TranslationChat"
  };
}

const Conduit: ProjectFunction = () => {
  return  {
    description: (
      <div>
      <p>TypeScript, Next.js, Python and Django.</p>

      <p>Conduit is the product of a collaboration between myself and <a href="https://github.com/dan-smith-tech">Dan Smith</a>. We conceived and developed the idea together. In technical terms, Dan is primarily responsible for the <a href="https://github.com/conduits-link/core">frontend</a>, and I for the <a href="https://github.com/conduits-link/backend">backend</a>, but there has been a lot of crossover in the development process.</p>
    </div>
    ),
    technicalDetails: <div>expandable content</div>,
    url: "https://www.conduits.link/",
    repo: "https://github.com/conduits-link/"
  };
}

const Deform: ProjectFunction = () => {
  return {
    description: <p>DSP in C++, for Max/MSP.</p>,
    technicalDetails: <div>expandable content</div>,
    repo: "https://github.com/jhels/deform-"
  };
}

// ###########################
// #                         #
// #     PROJECTS LOGIC      #
// #                         #
// ###########################

// Holds all necessary information for each project.
type ProjectInfo = {
  description: ReactNode;
  technicalDetails: ReactNode;
  url?: string; // Use ? because not all projects are deployable.
  repo: string;
}

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
  const { description, technicalDetails, url, repo } = projectData;

  const urlStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 'fit-content',
    gap: '8px',
    margin: '10px',
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
      <div style={urlStyle}>{url && <a href={url} target="_blank" rel="noopener noreferrer" className="button-link">App Website</a>} {<a href={repo} target="_blank" rel="noopener noreferrer" className="button-link" style={urlStyle}>
        <span style={urlTextStyle}>GitHub</span>
        <Image
          src="/github-mark.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
        />
      </a>}</div>
      {description}
      <p><button onClick={() => setIsExpanded(!isExpanded)} className="button-technical">
        {isExpanded ? "Hide Details ▽" : "Show Technical Details ▷"}
      </button>
      {isExpanded && (
          <div style={detailsContainerStyle}>
            {technicalDetails}
          </div>
        )}
      </p>
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