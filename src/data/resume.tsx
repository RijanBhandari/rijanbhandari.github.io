import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Rijan Bhandari",
  initials: "RB",
  url: "https://rijanbhandari.github.io",
  location: "Rijan Bhandari",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "An engineering student with research interests in computers and human brain. I love building electronics and AI applications. On the side build communities, mentor peers, and inspire young minds to explore and innovate.",
  summary:
    "Trying to comeup what to write here.",
  avatarUrl: "/me.jpg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rijan4243@gmail.com",
    tel: "+977-XXX-XXX-XXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rijanbhandari",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rijan-bhandari-102047217",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:rijan4243@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Phutung Research Institute",
      href: "https://phutung.org.np/",
      badges: [],
      location: "Nepal",
      title: "Student Research Assistant",
      logoUrl: "/phutung.jpeg",
      start: "Dec 2024",
      end: "Present",
      bullets: [
        "Developing a real-time optoelectronics and mechanical control system for continuous water quality assessment.", 
        "Building expertise in sensor integration, signal processing, 3d and embedded systems design."
      ],
    },
    {
      company: "iBriz.ai",
      badges: [],
      href: "https://ibriz.ai/",
      location: "Hong Kong",
      title: "Co-Founder & Machine Learning Engineer",
      logoUrl: "/ibriz.avif",
      start: "Mar 2024",
      end: "Jul 2024",
      bullets: [
        "Supported Web3-based product promotion and utilized AI tools for game asset generation."
      ],
    },
    {
      company: "Sagarmatha Electronics & Information Engineering Students' Society (SEIS)",
      href: "#",
      badges: [],
      location: "Nepal",
      title: "President\nVice President\nSocial Media Manager\nExecutive Member",
      logoUrl: "/Seis.jpg",
      start: "Jun 2022",
      end: "Present",
      bullets: [
        "Organized and mentored 10+ tech workshops on AI and electronics for undergraduates.",
        "Lead initiatives to introduce electronics, blockchain, and AI/ML to the undergraduate students."
      ],
    },
  ],
  education: [
    {
      school: "Tribhuwan University - Sagarmatha Engineering College",
      href: "https://sagarmatha.edu.np/",
      degree: "Bachelor of Electronics, Communication & Information Engineering",
      logoUrl: "/sagarmatha.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Kathmandu Bernhardt SS & College",
      href: "https://www.bernhardt.edu.np/",
      degree: "+2 in Science",
      logoUrl: "/bernhardt.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Gyanodaya Bal Batika Secondary School",
      href: "https://gyanodaya.edu.np/",
      degree: "Secondary Education",
      logoUrl: "/gyanodaya.jpg",
      start: "2005",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "MEQ-Bench",
      href: "https://github.com/heilcheng/MEQ-Bench",
      dates: "2024 - Present",
      active: true,
      description:
        "The first benchmark designed to evaluate an LLM's ability to generate audience-adaptive medical explanations for diverse stakeholders, including physicians, nurses, and patients.",
      technologies: [
        "Python",
        "LLM",
        "Medical AI",
        "Benchmarking",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/MEQ-Bench",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gemma Benchmark Suite",
      href: "https://github.com/heilcheng/gemma-benchmark",
      dates: "2024 - Present",
      active: true,
      description:
        "An evaluation suite for Google's Gemma models across academic LLM benchmarks, with quantization support and efficiency profiling.",
      technologies: [
        "Python",
        "LLM",
        "Benchmarking",
        "Quantization",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/gemma-benchmark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DeepChem Drug Formulation Tutorial",
      href: "https://github.com/heilcheng/deepchem-drug-formulation",
      dates: "2024 - Present",
      active: true,
      description:
        "A tutorial using DeepChem for predicting key pharmaceutical properties and visualizing molecular behaviors for drug discovery.",
      technologies: [
        "Python",
        "DeepChem",
        "Drug Discovery",
        "Molecular Biology",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/deepchem-drug-formulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Truth or Dare (Cantonese)",
      href: "https://github.com/heilcheng/Truth-or-Dare-Canto",
      dates: "2024 - Present",
      active: true,
      description:
        "A Truth or Dare question generator web app built in Cantonese, using React for webapp and React Native for Apps.",
      technologies: [
        "React",
        "React Native",
        "JavaScript",
        "Cantonese",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/Truth-or-Dare-Canto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  books: [
    {
      theme: "Political Philosophy & Social Theory",
      books: [
        {
          title: "The Social Contract",
          author: "Jean-Jacques Rousseau",
          number: 1,
        },
        {
          title: "On Liberty",
          author: "John Stuart Mill",
          number: 2,
        },
        {
          title: "Distinction: A Social Critique of the Judgement of Taste",
          author: "Pierre Bourdieu",
          number: 3,
        },
        {
          title: "The Spirit of the Laws",
          author: "Montesquieu",
          number: 4,
        },
      ],
    },
    {
      theme: "Contemporary Philosophy",
      books: [
        {
          title: "Agonie des Eros",
          author: "Byung-Chul Han",
          number: 5,
        },
        {
          title: "Thus Spoke Zarathustra",
          author: "Friedrich Nietzsche",
          number: 6,
        },
      ],
    },
    {
      theme: "History & Global Affairs",
      books: [
        {
          title: "A Concise History of Hong Kong",
          author: "John M. Carroll",
          number: 7,
        },
        {
          title: "Understanding Global Conflict and Cooperation",
          author: "David A. Welch and Joseph S. Nye, Jr.",
          number: 8,
        },
      ],
    },
    {
      theme: "Digital Life & Privacy",
      books: [
        {
          title: "The Art of Invisibility",
          author: "Kevin Mitnick",
          number: 9,
        },
        {
          title: "Digital Minimalism",
          author: "Cal Newport",
          number: 10,
        },
      ],
    },
    {
      theme: "Memoir & Personal Reflections",
      books: [
        {
          title: "The Watching Brief",
          author: "Margaret Ng Ngoi Yee",
          number: 11,
        },
      ],
    },
  ],
} as const;
