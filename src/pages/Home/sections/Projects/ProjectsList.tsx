import { ReactNode } from 'react';
import {
  FaAppStoreIos,
  FaCloud,
  FaFileInvoice,
  FaJava,
  FaLaptopCode,
  FaMicrophone,
  FaMicrophoneAlt,
  FaUserShield,
} from 'react-icons/fa';
import { GiBackForth, GiConwayLifeGlider, GiJoystick } from 'react-icons/gi';
import { GoTerminal } from 'react-icons/go';
import { TiMessages } from 'react-icons/ti';

import ASIaventure from '../../../../assets/img/projects/ASIAventure/ASIaventure.png';
import bASIc from '../../../../assets/img/projects/bASIc/bASIc.png';
import bigDataCFS1 from '../../../../assets/img/projects/bigDataCFS/bigDataCFS1.png';
import bigDataCFS2 from '../../../../assets/img/projects/bigDataCFS/bigDataCFS2.png';
import bigDataCFS3 from '../../../../assets/img/projects/bigDataCFS/bigDataCFS3.png';
import chronos1 from '../../../../assets/img/projects/ihmeChronos/chronos1.png';
import chronos2 from '../../../../assets/img/projects/ihmeChronos/chronos2.png';
import chronos3 from '../../../../assets/img/projects/ihmeChronos/chronos3.png';
import chronos4 from '../../../../assets/img/projects/ihmeChronos/chronos4.png';
import memory from '../../../../assets/img/projects/Memory/memory.png';
import othello from '../../../../assets/img/projects/Othello/othello.png';
import elec from '../../../../assets/img/projects/PortableConsole/console1.png';
import reacli1 from '../../../../assets/img/projects/reacli/reacli1.png';
import reacli2 from '../../../../assets/img/projects/reacli/reacli2.png';
import reacli3 from '../../../../assets/img/projects/reacli/reacli3.png';
import reacli4 from '../../../../assets/img/projects/reacli/reacli4.png';
import screenBlurrer from '../../../../assets/img/projects/ScreenBlurrer/blurrer.png';
import sosTouriste1 from '../../../../assets/img/projects/SOSTouriste/sosTouriste1.png';
import sosTouriste2 from '../../../../assets/img/projects/SOSTouriste/sosTouriste2.png';
import whatsASI1 from '../../../../assets/img/projects/WhatsASI/ir_whatsasi.png';
import whatsASI2 from '../../../../assets/img/projects/WhatsASI/ir_whatsasi_connexion.png';
import whatsASI3 from '../../../../assets/img/projects/WhatsASI/ir_whatsasi_filtres.png';

export type Project = {
  key: string;
  dates: string;
  talk?: boolean;
  title: string;
  location: string;
  contents: string[];
  technologies: string[];
  icon: ReactNode;
  color?: string;
  classTag?: string;
  npm?: string;
  website?: string;
  images?: string[];
  github?: string;
  video?: string;
  slides?: string;
  events?: string[];
};

const projects: Project[] = [
  /* Talk WebUSB */
  {
    key: 'talk-webusb',
    dates: 'December 2019 - today',
    talk: true,
    title: 'Interaction between a web app and a hand-made NFC USB Reader : WebUSB to the rescue!',
    location: 'Paris, France',
    contents: [
      'When developing a tool that interacts with an external device, we are usually forced to develop fat clients or use containers like Electron.',
      'Why not use the browser directly?',
      'Yes, your browsers, including Chrome, have more and more APIs to access the native parts of your equipment.',
      'Come discover the WebUSB API through a simple example: the realization of a NFC card reader with 100% of web code.',
    ],
    technologies: ['JavaScript', 'WebUSB', 'API', 'NFC', 'Arduino', 'React'],
    icon: <FaMicrophoneAlt />,
    video: 'https://youtu.be/SzDmtHeKXQgs',
    slides: 'https://slides.com/gautierdarchen/communicate-a-nfc-reader-with-a-web-application',
    github: 'https://github.com/gdarchen/webusb-arduino-nfc',
    classTag: 'talk-webusb',
    color: '#1df582',
    events: ['Node.js Paris Meetup', 'React.js Paris Meetup', 'Takima Meetup', 'Devoxx 2020'],
  },
  /* Reacli */
  {
    key: 'reacli',
    dates: 'February 2019',
    title: 'Reacli - A React CLI',
    location: 'Paris, France',
    contents: [
      'With two friends, we created and maintain an NPM library, "Reacli".',
      'It is a CLI for React, enabling to create components, hooks... and customize it with a lot of options!',
    ],
    technologies: ['JavaScript', 'React', 'Jest', 'NPM'],
    icon: <GoTerminal />,
    images: [reacli1, reacli2, reacli3, reacli4],
    github: 'https://github.com/reacli/cli',
    website: 'https://reacli.github.io',
    npm: 'https://www.npmjs.com/package/reacli',
    classTag: 'reacli',
    color: '#e2819d',
  },
  /* Chronos agent */
  {
    key: 'chronos',
    dates: 'Septembre 2018 - January 2019',
    title: 'Virtual agent',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'At INSA Rouen, we created a mobile application to propose a virtual agent with whom we can discuss. It is possible to ask it to set up an alarm. It asks the questions oriented to have all the necessary information.',
      "The buzzer associated with the alarm will match the weather of the user's location when it rings.",
    ],
    technologies: ['react-native', 'javascript', 'dialogflow', 'Node.js'],
    icon: <FaMicrophone />,
    images: [chronos1, chronos2, chronos3, chronos4],
    github: 'https://github.com/alexandre-lelain/ihme-agent-assistant',
    classTag: 'chronos',
    color: '#697dbc',
  },
  /* BigData CFS */
  {
    key: 'cfs',
    dates: 'Septembre 2018 - January 2019',
    title: 'Big Data and tweet in real time',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'At INSA Rouen, we worked with Cassandra File System so as to analyze a big amount of tweets and evualuate a global valence.',
      'We are then able to say if the majority of the people who have tweeted are for or against a given subject.',
    ],
    technologies: ['CFS', 'BigData', 'Python3', 'Docker'],
    icon: <FaCloud />,
    images: [bigDataCFS1, bigDataCFS2, bigDataCFS3],
    github: 'https://github.com/gdarchen/BigData-CFS',
    classTag: 'bigdataCFS',
    color: '#97ba00',
  },
  /* PIC AEROW */
  {
    key: 'pic',
    dates: 'January 2017 - January 2018',
    title: 'Redesign the web application "Stratow" for AEROW Solutions',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'Half-time project realized at the INSA Rouen-Normandie for the company AEROW Solutions. In a team of eight students, this ISO 9001:2015 certified project aims to set up the transition from the web platform of Electronic Document Management to MVC (Model-View-Controller) by using the Symfony framework, as well as the complete redesign of the front-end architecture (thanks to the Bootstrap framework). We developped in TDD (Test Driven Development) and the working methodology is an Agile Method named Scrum.',
      'During the first 6 months, I was Project Manager.',
    ],
    technologies: ['Symfony', 'Scrum', 'PHP', 'ELK'],
    icon: <FaFileInvoice />,
    classTag: 'picaerow',
    color: '#FE5530',
  },
  /* WhatsASI? */
  {
    key: 'whatsasi',
    dates: 'January 2017 - April 2018',
    title: 'Development of an instant messaging application: "WhatsASI?"',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'In Java 8 and using the RMI technology as part of a Distributed Computing course, creation of an instant messaging application, enabling users to chat from different machines. Users can choose a pseudo, a profile avatar, and decide in which conversation they want to chat. It is also possible to chat with an artificial intelligence (AI). Finally, the user can also select words that he wants the application to filter.',
      'There are two graphic interfaces available: one developed thanks to JavaFX, the other one to be used in a terminal.',
    ],
    technologies: ['Java 8', 'JavaFX', 'AI', 'RMI', 'Messaging'],
    images: [whatsASI1, whatsASI2, whatsASI3],
    github: 'https://github.com/gdarchen/WhatsASI',
    icon: <TiMessages />,
    classTag: 'whatsasi',
    color: '#E19C11',
  },
  /* SOS Touriste */
  {
    key: 'sos-touriste',
    dates: 'September 2016 - January 2017',
    title: 'Development of an iOS application',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'In Swift language (Cocoa Touch), the aim was to develop an application for iPhone, so as to offer the users a contextual help. The targeted users are tourists visiting France (location of interest points, useful telephone numbers...).',
    ],
    technologies: ['Swift', 'iOS', 'Mobile'],
    images: [sosTouriste1, sosTouriste2],
    icon: <FaAppStoreIos />,
    classTag: 'sostouriste',
    color: '#11E1E1',
  },
  /* Screen blurrer */
  {
    key: 'screen-blurrer',
    dates: 'September 2016',
    title: 'Development of a screen blurrer',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'In Python using the OpenCV library, development of an application enabling the user to use his computer and displaying the image recorded by the webcam as soon as a person appears behind him. Thus, on the displayed image, a green frame indicates the location of the new detected face so as to let the user know who is spying him.',
      'There exists two other modes as the one presented before : a "zen" mode displaying a code snapshot as soon as a third person appears behind the screen, and an "ironman" mode displaying an IronMan mask on every detected people.',
    ],
    technologies: ['OpenCV', 'Python'],
    images: [screenBlurrer],
    github: 'https://github.com/gdarchen/screen-blurrer',
    icon: <FaUserShield />,
    classTag: 'screenblurrer',
    color: '#7911E1',
  },
  /* Portable game console */
  {
    key: 'portable-game-console',
    dates: 'January 2016 - May 2016',
    title: 'Portable game console',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'Complete designing of a Breakout clone using an Arduino Mega driven with an analog joystick: designing the electronic circuits, choosing and buying electronic components, designing a 3D-printed housing, development of a Breakout-style game in the Arduino language.',
    ],
    technologies: ['Arduino', '3D', 'Electronics'],
    images: [elec],
    github: 'https://github.com/gdarchen/breakout',
    icon: <GiJoystick />,
    classTag: 'portableconsole',
    color: '#E11166',
  },
  /* Mini adventure game */
  {
    key: 'mini-adventure-game',
    dates: 'October 2015 - January 2016',
    title: 'Development of mini adventure game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'In Java 8, creation of a mini terminal adventure game in a team of 2 members. The game demonstrates most of Java 8 possibilities.',
    ],
    technologies: ['Java 8'],
    images: [ASIaventure],
    github: 'https://github.com/gdarchen/ASIAventure',
    icon: <FaJava />,
    classTag: 'asiaventure',
    color: '#D9C42B',
  },
  /* Othello */
  {
    key: 'othello',
    dates: 'October 2015 - January 2016',
    title: 'Development of an Othello game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'In language C and using the V-Model, set up a version of the Othello game with an artificial intelligence (AI) with the Min-Max algorithm.',
    ],
    technologies: ['C', 'Min-max', 'AI', 'V-Model'],
    images: [othello],
    github: 'https://github.com/gdarchen/othello',
    icon: <GiConwayLifeGlider />,
    classTag: 'othello',
    color: '#2BD975',
  },
  /* bASIc Compiler */
  {
    key: 'bASIc',
    dates: 'October 2015 - January 2016',
    title: 'Conception of a bASIc personal compiler',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'Using Lex and Yacc, creation of a personal compiler named bASIc. It can recognise simple boolean expressions (if - then - else) and can handle inputs and outputs.',
    ],
    technologies: ['Lex', 'Yacc', 'Compiler'],
    images: [bASIc],
    github: 'https://github.com/gdarchen/bASIc-compiler',
    icon: <FaLaptopCode />,
    classTag: 'basic',
    color: '#2BCCD9',
  },
  /* Memory game */
  {
    key: 'memory',
    dates: 'October 2014 - January 2015',
    title: 'Conception of a Memory game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    contents: [
      'Using Pascal and SDL, development of a Memory game. This game proposes 3 different levels, and manages a ranking.',
    ],
    technologies: ['Pascal', 'SDL'],
    images: [memory],
    icon: <GiBackForth />,
  },
];

export default projects;
