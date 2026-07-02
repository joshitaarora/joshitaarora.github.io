export const projects = [
  {
    title: 'BrainSafe',
    featured: true,
    badge: '🏆 Google Cloud Challenge Winner — ShellHacks 2025',
    description:
      'An AI-powered browser extension using Google ADK and parallel agent workflows to enhance video consumption with real-time contrast/speed adjustments and content moderation for children. Cached agent results to keep the experience fast. Ranked 1st among 175+ teams at Florida\'s largest hackathon.',
    links: [
      { label: 'Devpost', url: 'https://devpost.com/software/brainsafe-browser' },
      { label: 'GitHub', url: 'https://github.com/joshitaarora/BrainSafe' },
    ],
  },
  {
    title: 'MAPAssist',
    badge: 'IBM Hackathon',
    description:
      'A Watsonx AI-powered web application to assist disaster victims by providing personalized guidance and locating nearby essential supplies and medical services.',
    links: [{ label: 'GitHub', url: 'https://github.com/joshitaarora/MAP-Assist' }],
  },
  {
    title: 'Distributed Reddit Engine',
    description:
      'A distributed Reddit-style platform built on an actor-based architecture with RESTful services. Includes a high-concurrency simulator for up to 100K users using Zipf-based workload distributions to benchmark scalability, CPU/memory utilization, and the tradeoffs between actor message passing and HTTP-based communication.',
    links: [],
  },
];
