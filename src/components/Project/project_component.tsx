import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface ProjectProps {
    animateIn: string;
    icon: string; // Explicitly typed as string
    link: string;
    linkText: string;
    title: string;
    description: string;
    techList: string[];
}

const ProjectComponent: React.FC<ProjectProps> = ({ animateIn, icon, link, linkText, title, description, techList }) => {
    return (

        <ScrollAnimation animateIn={animateIn}>
            <div className="project">
                <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#33B9F6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <title>Folder</title>
                        <path d={icon}></path>
                    </svg>
                    <div className="project-links">
                        <a href={link} target="_blank" rel="noreferrer">
                            {/* <img src={externalLink} alt={linkText} /> */}
                        </a>
                    </div>
                </header>
                <div className="body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <footer>
                    <ul className="tech-list">
                        {techList.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </footer>
            </div>
        </ScrollAnimation>
    );
};

export default ProjectComponent;

