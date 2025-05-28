import mathSolver from "@/public/mathSolver.png";
import cadd9Img from "@/public/cadd9.png";
import taskManagementImg from "@/public/task_managment_mobile_app.png";
import socialMediaImg from "@/public/social_media_web_app.png";
import djImg from "@/public/dj_app.png";

export const EXPERIENCES = [
  {
    duration: "2024-PRESENT",
    title: "Softwear Developer • MathSolver",
    description:
      "Build and maintain an AI-powered math tutoring platform featuring real-time streaming chat and an adaptive learning system inspired by Duolingo. Designed to help students master SAT Math through interactive problem-solving and personalized learning paths.",
    tags: ["Typescript", "React", "Node.js"],
    link: "https://chat.mathsolver.top",
  },
];

export const PROJECTS = [
  {
    title: "cadd9 Music School Web App",
    description:
      "Built and maintained a responsive web application for a music school, featuring course registration, news updates, and student onboarding. Integrated Contentful CMS to empower administrators with intuitive content management capabilities, enabling efficient updates to curricula, news, and resources without developer dependency.",
    tags: ["Javascript", "React", "Tailwind CSS"],
    imgSrc: cadd9Img,
    link: "https://cadd9.cn",
  },
  {
    title: "Task Management Mobile App",
    description:
      "Built a React Native mobile app for task management, featuring task creation, organization, and categorization. Implemented natural language processing (NLP) to automatically generate structured tasks from voice or text inputs. Integrated Google Calendar API synchronization to enable automated scheduling, deadline tracking, and smart reminders.",
    tags: ["Javascript", "React Native"],
    imgSrc: taskManagementImg,
    link: "https://www.youtube.com/watch?v=Gyo6X71CGG4&t=181s",
  },
  {
    title: "Full-stack Social Media Web App",
    description:
      "Designed and developed a full-stack social media web application inspired by Instagram. The application features user authentication, profile management, post creation and sharing, follower relationships, and real-time messaging via live chat.",
    tags: ["Python", "Javascript", "Django", "MVT"],
    imgSrc: socialMediaImg,
    link: "https://www.youtube.com/watch?v=MH7z-0R4z9Q&t=312s",
  },
  {
    title: "DJ App",
    description:
      "Developed a feature-rich DJ application using C++ and the JUCE framework. The app simulates the core functionalities of a DJ controller, including loading and managing audio tracks, dual-track playback, adjustable volume and playback speed, and real-time audio filtering.",
    tags: ["C++", "OOP", "JUCE"],
    imgSrc: djImg,
    link: "https://www.youtube.com/watch?v=Oex-fOReJNU&t=205s",
  },
];
