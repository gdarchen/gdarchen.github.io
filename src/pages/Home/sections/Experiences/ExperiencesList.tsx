import { ReactNode } from 'react';
import {
  FaCalculator,
  FaCode,
  FaCodeBranch,
  FaCreditCard,
  FaGraduationCap,
  FaPeopleCarry,
  FaVideo,
} from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { Md3DRotation } from 'react-icons/md';

type Experience = {
  date: string;
  title: string;
  iconStyle?: React.CSSProperties;
  iconClassName?: string;
  icon: ReactNode;
  className?: string;
  location: string;
  description?: ReactNode;
  technologies?: string[];
};

export const experiences: Experience[] = [
  // Swile
  {
    date: 'July 2022 - today',
    title: 'Senior full stack web engineer',
    iconClassName: 'vertical-timeline-element--work-swile-icon',
    icon: <FaCreditCard />,
    className: 'vertical-timeline-element--work-swile',
    location: 'Swile, Montpellier & Paris (full remote), France',
    description: (
      <span>
        I am working for this french unicorn 🦄, in the &quot;Places&quot; team which is in charge
        of the full stack development of all the features related to the geolocation of the
        restaurant and shops affiliated with Swile.
      </span>
    ),
    technologies: ['React', 'Node.js', 'Git', 'Kubernetes'],
  },

  // Kannelle
  {
    date: 'May 2020 - June 2022',
    title: 'Full stack web engineer',
    iconStyle: { background: 'rgb(0, 225, 131)', color: '#fff' },
    icon: <FaVideo />,
    className: 'vertical-timeline-element--work-kannelle',
    location: 'Kannelle, Paris (full remote), France',
    description: (
      <span>
        In a startup context, I am in charge of developing the web platform of the Kannelle
        application, a web video editor as well as the administration module. I also manage the
        back-end part, the DevOps and the cloud architecture.
      </span>
    ),
    technologies: [
      'React',
      'Node.js',
      'Git',
      'CSS-in-JS',
      'Webpack',
      'Lottie',
      'AWS',
      'Serverless',
      'Neo4j',
      'Websockets',
      'FFmpeg',
    ],
  },

  // Takima
  {
    date: 'July 2018 - April 2020',
    title: 'Full stack web engineer — IT consultant',
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <GiDiamondRing />,
    className: 'vertical-timeline-element--work-takima',
    location: 'Takima, Paris, France',
    description: (
      <>
        <div>
          Working for Cartier Joaillerie International, I developed several applications to improve
          the time management in workshops or gain a lot of time in the processes of logistics.
        </div>
        <div>
          Using Devops methodology, I was also in charge of setting up a new technological stack at
          the IS pole.
        </div>
      </>
    ),
    technologies: [
      'Node.js',
      'React',
      'Electron',
      'Jest',
      'Git',
      'NFC',
      'WebUSB',
      'Jenkins',
      'Bitbucket',
      'Jira',
      'Docker',
      'Sass',
      'SQLServer',
    ],
  },

  // Takima academy
  {
    date: 'February 2018 - July 2018',
    title: 'Engineering internship - "Takima Academy" training',
    iconStyle: { background: '#e91e63', color: '#fff' },
    icon: <FaCodeBranch />,
    className: 'vertical-timeline-element--education',
    location: 'Takima, Paris, France',
    description: (
      <div style={{ marginTop: '1em' }}>
        Project training in the following areas:
        <ul>
          <li>back-end development,</li>
          <li>front-end development,</li>
          <li>Devops activities,</li>
          <li>working methodologies.</li>
        </ul>
      </div>
    ),
    technologies: [
      'Java',
      'Spring/SpringBoot',
      'JDBC',
      'ORM',
      'ES6',
      'AngularJS',
      'Angular',
      'i18n',
      'Gitlab-CI',
      'Jenkins',
      'Ansible',
      'Docker',
      'Docker-Compose',
      'Scrum',
      'TDD',
      'load-testing',
      'Git workflow',
    ],
  },

  // Specialty internship
  {
    date: 'Juny 2017 - August 2017',
    title: 'Specialty internship in Germany',
    iconStyle: { background: '#D9C42B', color: '#fff' },
    icon: <Md3DRotation />,
    className: 'vertical-timeline-element--bimandco',
    location: 'BIM&CO - KiM GmbH, Sankt-Wendel, Germany',
    description: (
      <div>
        Development of two plugins for the CAD software Allplan® in the field of BIM objects (
        <i>Building Information Modeling</i>).
      </div>
    ),
    technologies: ['C++', 'MFC', 'JSON', 'XML'],
  },

  // Project Manager (PIC)
  {
    date: 'all year 2017',
    title: 'Project Manager (ISO 9001:2015 certified)',
    iconStyle: { background: '#2BB9D9', color: '#fff' },
    icon: <FaPeopleCarry />,
    className: 'vertical-timeline-element--picaerow',
    location: 'AEROW Solutions (with INSA Rouen-Normandie), Rouen, France',
    description: (
      <div>Redesign a web application for Electronic Document Management (team of 8 people).</div>
    ),
    technologies: ['Symfony', 'Scrum', 'PHP', 'Elasticsearch', 'Logstash', 'Kibana'],
  },

  // Specialisation in ASI
  {
    date: '2015 - 2017',
    title: 'Specialization in Architecture of Information Systems',
    iconStyle: { background: '#D92B2B', color: '#fff' },
    icon: <FaCode />,
    className: 'vertical-timeline-element--asi',
    location: 'INSA Rouen-Normandie, Rouen, France',
  },

  // Preparatory cycle
  {
    date: '2013 - 2015',
    title: 'Preparatory cycle for engineering schools',
    iconStyle: { background: '#C365B9', color: '#fff' },
    icon: <FaCalculator />,
    className: 'vertical-timeline-element--prepa',
    location: 'INSA Rouen-Normandie, Rouen, France',
  },

  // Baccalaureate
  {
    date: '2013',
    title: 'Scientific Baccalaureate — Baccalaureate with distinction',
    iconStyle: { background: '#d47d35', color: '#fff' },
    icon: <FaGraduationCap />,
    className: 'vertical-timeline-element--highschool',
    location: 'Lycée Saint-Joseph, Le Havre, France',
    description: <div>German european class, specialty in natural sciences</div>,
  },
];
