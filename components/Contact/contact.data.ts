import { faFileDownload, faPhoneSquareAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const navList: string[] = [
  'RESUME',
  'LINKEDIN',
  'GITHUB',
  '(530) 559-6101',
  'a.d.cravalho@gmail.com',
];
export const hrefList: string[] = [
  'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/AlexanderCravalhoResume.pdf',
  'https://www.linkedin.com/in/alexcravalho',
  'https://github.com/alexcravalho',
  'tel:+15305596101',
  'mailto:a.d.cravalho@gmail.com?subject=Connect%20with%20Alex%20Cravalho&body=Hello%20Alex,%0D%0A%0D%0AI%20found%20your%20email%20on%20your%20website%20and%20want%20to%20connect!',
];
export const iconList: IconDefinition[] = [
  faFileDownload,
  faLinkedin,
  faGithubSquare,
  faPhoneSquareAlt,
  faPaperPlane,
];
