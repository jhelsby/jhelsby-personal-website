'use client'

import React, { useState } from 'react';
import burgerMenuSvg from '../public/burger-menu.svg';
import Image from 'next/image';


const Sidebar = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="sidebar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="https://github.com/jhels/">My GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/john-h-366980236/">My LinkedIn</a></li>
        <li><a href="/cv">Request my CV</a></li>
        <li><a href="/contact">Contact Me</a></li>
      </ul>
    </div>
  );
});

interface BurgerMenuIconProps {
  onClick: () => void;
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({ onClick }) => {
  const { src } = burgerMenuSvg;

  return (
    <Image
      src={src}
      alt="Menu Icon"
      width={30}
      height={30}
      onClick={onClick}
      style={{ cursor: 'pointer' }} // Ensure the cursor is pointer
    />
  );
};

const SidebarToggle = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Initially menu is hidden

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle the menu visibility
  };

  // Define an array of links
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Projects', url: '/#projects' },
    { text: 'GitHub', url: 'https://github.com/jhels/' },
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/john-h-366980236/' },
    { text: 'CV', url: '/cv' },
    { text: 'Contact', url: '/contact' }
    // Add more links as needed
  ];

  return (
    <div className="sidebar-toggle">
      {/* Render MenuToggle button */}
      <div className="toggle-content">
        <BurgerMenuIcon onClick={handleToggleMenu} />
        
        {/* Render links */}
        {isMenuVisible && (
          <div className="links-container">
            <ul className="links-list">
              {links.map((link, index) => (
                <li key={index} className="link-item">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


export { Sidebar, SidebarToggle };
