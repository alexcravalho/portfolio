import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

export type dropdown = {
  title: string;
  date: string;
  plus: IconDefinition;
  minus: IconDefinition;
  descTitle: string;
  descText: string;
};

export const dropdownList: dropdown[] = [
  {
    title: 'Foothill College',
    date: '2025 - Present',
    plus: faPlusCircle,
    minus: faMinusCircle,
    descTitle: 'Coursework in Computer Science',
    descText: `I've been in the Software Industry for over 5 years enjoying the logical problem solving in many of the roles I've been in. My passion for programming, problem solving and technology fuels my desire to dig deep into the field in new ways. Wanting to be able to make a greater impact and unlock new opportunities, I decided to return to school to pursue my Bachelor and Master of Science in Computer Science. As a lifelong learner, I want to dig into Computer Science and study classical concepts like Algorithms, Operating Systems, Computer Architecture. I'm currently diving into study of the Python programming language and look forward to using it to continue to study more advanced concepts in Computer Science, like AI, Machine Learning and their applications in the field.`,
  },
  {
    title: 'Hack Reactor, Software Engineering Immersive',
    date: '2019',
    plus: faPlusCircle,
    minus: faMinusCircle,
    descTitle: 'Advanced Full Stack JavaScript Course, 18 Weeks',
    descText: `This full time program trained me in the latest industry technologies and standards for Software Engineering and gave me real experience practicing that knowledge over 1000 hours of solo and paired programming. To gain entrance to the program, students must demonstrate a strong proficiency in JavaScript, problem solving, and autonomous learning. Candidates for the course must also pass a selective interview process and complete over 80 hours of pre-course work. The introductory section (weeks 1-6, 40 hrs/week) focused on paired sprints to develop Computer Science fundamentals, such as functional programming, debugging, and recursion. The junior section (weeks 7-11, 60 hrs/week) involved project based sprints, learning new technologies and programming across the full stack with JavaScript. I learned to interact with API's, query datasets from common databases, build stateful and functional components in React, and send data from back end to front end with server requests. In the senior phase (weeks 12-18, 60 hrs/week) I worked on two Agile engineering teams with daily standups, code reviews and version control through github, ground-up system design and implementation, as well as containerization and deployment techniques. Throughout the course I built my own applications to test my knowledge and reinforce the techniques learned throughout the program.`,
  },
  {
    title: 'UC Santa Cruz, Bachelor of Arts',
    date: '2011',
    plus: faPlusCircle,
    minus: faMinusCircle,
    descTitle: 'Major in Business Management Economics',
    descText: `My journey to becoming a software engineer was a long journey. In college, I thought I wanted to become a dentist and started on the pre-biology track full of math and science courses. Eventually, I found that I was much more interested in Business Management, investing, and startups. I saw that startups had the potential to change the world with even a simple idea. Pursuing this interest, I studied micro and macro economics with additional coursework in business strategy, so that I could understand why and how companies make business decisions. This knowledge has prepared me to enter the engineering field, in that I am able to understand the costs, benefits, and tradeoffs of company decisions and how those decisions can impact the development process.`,
  },
];
