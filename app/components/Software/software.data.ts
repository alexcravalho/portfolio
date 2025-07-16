export type app = {
  name: string;
  imgURI: string;
  altName: string;
  tech: string;
  desc: string;
  btnText: string[];
  links: string[];
};

export const appList: app[] = [
  {
    name: 'Cybertronics Workshop',
    imgURI: 'https://alexcravalho-portfolio.s3.us-west-2.amazonaws.com/cw.webp',
    altName: 'cyber',
    tech: 'Docker | LiteLLM | Ollama | OpenWebUi | Cloudflare | Nginx | gpt-4.1',
    desc: 'After getting a taste of what I could do with LLMs through Ollama on my local hardware, I decided to explore deploying a user interface for my own models as well as getting some of the top-teir models from the big LLM players. I found OpenWebUi to be a robust user interface tool that would allow me to test out models side by side. Eventually I settled on deploying OpenWebUi on a Virtual Private Server (VPS) where I could make local models available through Ollama, or connect it to cutting-edge models through APIs. To do this, I deployed LiteLLM which allows users to monitor LLM API spend and manage over 100 leading models like GPT-4, Gemini, Llama, Claude and more. I deployed nginx as a proxy manager so that I could route users of OpenWebUi to my own web domain, cybertronicsworkshop.com, while keeping it secure. My future plan for this is to combine what I learned in my local Ollama project and expand this to a full RAG system where documents can be uploaded, then any leading model can be used to query those documents.',
    btnText: ['OpenWebUi Demo', 'LiteLLM Demo'],
    links: ['./openWebUi.gif', './litellm.gif'],
  },
  {
    name: 'Ollama Local RAG',
    imgURI: 'https://alexcravalho-portfolio.s3.us-west-2.amazonaws.com/ollama.webp',
    altName: 'ollama',
    tech: 'TypeScript | Ollama | LangChain | ChromaDB | nomic-embed-text | Mistral',
    desc: "Recently I got a chance to expriment with Ollama on my local computer and I was impressed. Playing with AI on my local computer is fun, but the models available to my local machine don't have enough data. I wanted to see if I could improve my local LLM results by making it into a fully Retrieval-Augmented Generation (RAG) system with a vector database. I wanted to upload some documents and add relevant info to my queries to improve results. Going in with a $0 budget, I wanted the system to be completely cost free and private. In the end I was able to make a completely private RAG system. I created scripts in TypeScript, that ingest new data into my vector storage, embed query text with nomic-embed-text model and generate a response with Mistral, all on my local machine.",
    btnText: ['Demo', 'Github'],
    links: ['./ollama-rag.gif', 'https://github.com/alexcravalho/ollama-rag'],
  },
  {
    name: 'GreenPDF Internal Tool',
    imgURI: 'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/green.webp',
    altName: 'green',
    tech: 'React | TypeScript | Express | Node | Material-UI | Puppeteer',
    desc: "I built an internal tool for a small landscaping company that wanted to update its business to include eco-friendly practices. The owner of the company wanted to remove all paper records and move the company to a fully digital platform. This application captures relevant company data, transforms it into a beautiful PDF document and emails it to the company's cloud storage system at the click of a button.",
    btnText: ['Demo', 'PDF', 'Github'],
    links: [
      'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/GreenPDFdemo.gif',
      'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/Edwards501-John-01-01-2020.pdf',
      'https://github.com/alexcravalho/GreenPDFInternal',
    ],
  },
  {
    name: 'Crash Stats',
    imgURI: 'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/hockey.webp',
    altName: 'hockey',
    tech: 'React | React Hooks | JavaScript | Express | Node | MongoDB | AWS | Docker',
    desc: 'Love Hockey? I do too! I created this application for sports fanatics who want an edge in their Fantasy Hockey season. Want to know if a particular fantasy trade is worth it? This app can evaluate a particular player trade based on real game statistics from the NHL public API data. It also allows you to input your own metrics for each category, which varies across fantasy leagues.',
    btnText: ['Demo', 'Github'],
    links: [
      'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/CrashStatsdemo.gif',
      'https://github.com/alexcravalho/CrashStats',
    ],
  },
  {
    name: 'Soundwave Music',
    imgURI: 'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/soundwave.webp',
    altName: 'soundwave',
    tech: 'React | JavaScript | Express | Node | PostgreSQL | Cassandra | Nginx | Docker | Loader.io | New Relic',
    desc: "I enjoy listening to music on Pandora, Spotify, and Soundcloud, so I couldn't wait to help contribute to an app for music-lovers! I worked on a team to build out the back end of this application to scale for high-web traffic. I completely replaced and scaled the back-end of the Related Tracks component to handle over 55 million records. I improved efficiency by optimizing database query speed from 3 seconds to less than 25 milliseconds. I designed and engineered the system architecture to include multiple servers and load balancer, increasing throughput by 33%.",
    btnText: ['Demo', 'Github'],
    links: [
      'https://alexcravalho-portfolio.s3-us-west-2.amazonaws.com/Soundwavedemo.gif',
      'https://github.com/SoundwaveMusic/related-tracks',
    ],
  },
];
