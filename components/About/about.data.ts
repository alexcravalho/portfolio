export type imageCardProps = {
  imageName: string;
  src: string;
  picCap: string;
};

export const imageCardList: imageCardProps[] = [
  {
    imageName: 'blarney',
    src: './blarney.jpg',
    picCap: 'My wife, Catherine, and I at Blarney Castle in Cork, Ireland.',
  },
  {
    imageName: 'moher',
    src: './moher.jpg',
    picCap: 'Cliffs of Moher, in County Clare, Ireland.',
  },
  {
    imageName: 'hawaii',
    src: './hawaii.jpg',
    picCap: `My wife and I on our honeymoon in Maui, Hawai'i.`,
  },
  {
    imageName: 'green-sand',
    src: './green-sand.jpg',
    picCap: `Papakōlea Green Sand beach, Big Island, Hawai'i.`,
  },
];

export const aboutText: string[] = [
  `Hi, I'm Alex! I'm a logical problem solver, creative, out-of-the box thinker, and sci-fi enthusiast. I am naturally curious and love breaking things down into their respective parts to figure out how they work.`,

  `I am a Software Engineer and most recently I was working for IBM as a Platform Engineer. My beginnings in the industry started with full stack software development and I have 5+ years of experience in ReactJS, JavaScript, HTML, CSS, building RESTful APIs and working with both relational and non-relational databases. Since I joined IBM, I've been growing my skills to extend to cloud platforms, CI/CD and Red Hat OpenShift and deepen my knowledge of enterprise IBM software. I love learning new technologies and I'm consistently diving into documentation to teach myself about how different technologies work together and how I can apply those newly learned skills.`,

  `During my time at IBM, I obtained two Red Hat Certifications in the OpenShift platform demonstrating an expert command of containers, container management, Kubernetes and OpenShift Application Development. Even though I most recently worked as a Platform Engineer, I've been hoping to find my next role in Frontend or Fullstack Engineering. I love reimagining user experiences and interfaces using React and enjoy designing intuitive and aesthetic applications.`,

  `When I'm not programming, I love to travel, lift weights, play video games, roll dice with friends, and speculate over financial investments. In 2023 I got married to my lovely wife Catherine and we're currently living here in Dallas, Texas, while she studies to get her Master's Degree in Counseling. We love exploring the outdoors together and going abroad to experience new places, food, culture and sights. In 2024 we got to take an amazing trip around southern Ireland.`,
];
