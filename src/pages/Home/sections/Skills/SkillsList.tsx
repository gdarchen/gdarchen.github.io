import { ReactNode } from 'react';
import {
  FaAirbnb,
  FaAngular,
  FaApple,
  FaAws,
  FaCheckCircle,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaFileCode,
  FaGit,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaJsSquare,
  FaLeaf,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaWindows,
} from 'react-icons/fa';

import { DiScrum } from 'react-icons/di';

import {
  SiApachemaven,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFfmpeg,
  SiMatrix,
  SiNeo4J,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiServerless,
  SiSocketdotio,
  SiSonarcloud,
  SiSwift,
  SiVite,
  SiWebpack,
  SiYarn,
} from 'react-icons/si';

type Skill = {
  text: string;
  icon: ReactNode;
};

export const advancedSkills: Skill[] = [
  { text: 'JavaScript', icon: <FaJsSquare /> },
  { text: 'React', icon: <FaReact /> },
  { text: 'Node.js', icon: <FaNodeJs /> },
  { text: 'TypeScript', icon: <FaCode /> },
  { text: 'AWS', icon: <FaAws /> },
  { text: 'Serverless', icon: <SiServerless /> },
  { text: 'Docker', icon: <FaDocker /> },
  { text: 'Sass', icon: <FaSass /> },
  { text: 'CSS', icon: <FaCss3Alt /> },
  { text: 'Git', icon: <FaGit /> },
  { text: 'Websockets', icon: <SiSocketdotio /> },
  { text: 'Webpack', icon: <SiWebpack /> },
  { text: 'Vite', icon: <SiVite /> },
  { text: 'Yarn', icon: <SiYarn /> },
  { text: 'npm', icon: <SiNpm /> },
  { text: 'Java', icon: <FaJava /> },
  { text: 'Spring', icon: <FaLeaf /> },
  { text: 'Maven', icon: <SiApachemaven /> },
  { text: 'Jenkins', icon: <FaJenkins /> },
  { text: 'Gitlab CI', icon: <FaGitlab /> },
  { text: 'SonarQube', icon: <SiSonarcloud /> },
  { text: 'HTML', icon: <FaHtml5 /> },
  { text: 'Matlab', icon: <SiMatrix /> },
  { text: 'LaTeX', icon: <FaFileCode /> },
  { text: 'Linux', icon: <FaLinux /> },
  { text: 'Mac OSX', icon: <FaApple /> },
  { text: 'Windows', icon: <FaWindows /> },
  { text: 'Scrum', icon: <DiScrum /> },
  { text: 'TDD', icon: <FaCheckCircle /> },
  { text: 'SQL', icon: <SiPostgresql /> },
  { text: 'Lottie', icon: <FaAirbnb /> },
  { text: 'Neo4j', icon: <SiNeo4J /> },
  { text: 'FFmpeg', icon: <SiFfmpeg /> },
];

export const intermediateSkills: Skill[] = [
  { text: 'Angular', icon: <FaAngular /> },
  { text: 'PHP', icon: <SiPhp /> },
  { text: 'C', icon: <SiC /> },
  { text: 'C++', icon: <SiCplusplus /> },
  { text: 'Python', icon: <FaPython /> },
  { text: 'Django', icon: <SiDjango /> },
  { text: 'Swift', icon: <SiSwift /> },
];
