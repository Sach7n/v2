import p1 from "../../images/3.png";
import p2 from "../../images/2.jpg";
import p3 from "../../images/4.png";

export interface ProjectData {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  img: string;
  additionalImages?: string[];
  tech: string[];
  techStack: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    tools?: string[];
  };
  challenges: string[];
  features: string[];
  github?: string;
  live: string;
  category: "frontend" | "fullstack" | "mobile" | "design";
  status: "completed" | "in-progress" | "planned";
  timeline: string;
}

const projectsData: ProjectData[] = [
  {
    id: "ecommerce-store",
    title: "E-Commerce Platform",
    shortDesc:
      "A comprehensive e-commerce solution with advanced features like cart management, user authentication, and payment integration.",
    detailedDesc: `Building an end-to-end e-commerce system has been a passion project of mine. Using the **MERN stack**, I developed a comprehensive solution with a few key integrations.

**MongoDB** was my go-to for handling user data and orders, while I leveraged **PostgreSQL with Strapi** to manage the product catalog. The backend is powered by **Node.js with Express**, and the frontend is built with **React, RTK, and Material UI**, creating a responsive and intuitive user experience.

For deployment, I used **Railway** for the backend and **Hostinger** for the frontend. To manage product images efficiently, I integrated **Cloudinary**.

Since this is a side hustle, I opted for free services to keep costs low. My goal was to create a robust foundation for a new business venture. While I've been actively working on the business side, including supply chain and marketing, I've spent more time on the technical development—because that's what I truly love to do.`,
    img: p2,
    additionalImages: [],
    tech: ["React", "Node.js", "MongoDB", "Express", "Material UI", "RTK"],
    techStack: {
      frontend: ["React", "Redux Toolkit", "Material UI", "React Router"],
      backend: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt"],
      database: ["MongoDB", "PostgreSQL", "Strapi CMS"],
      deployment: ["Railway", "Hostinger", "Cloudinary"],
      tools: ["Git", "Postman", "VS Code"],
    },
    challenges: [
      "Implementing secure payment processing with multiple gateways",
      "Optimizing database queries for large product catalogs",
      "Creating responsive design that works across all devices",
      "Managing state efficiently with Redux Toolkit",
      "Integrating multiple third-party services seamlessly",
    ],
    features: [
      "User authentication with JWT tokens",
      "Shopping cart with persistent storage",
      "Product search and filtering",
      "Order management system",
      "Admin dashboard for inventory",
      "Image optimization with Cloudinary",
      "Responsive design for mobile/desktop",
    ],
    github: "https://github.com/Sach7n/ecommerce-project",
    live: "https://react-ecomm1.netlify.app/",
    category: "fullstack",
    status: "completed",
    timeline: "6 months",
  },
  {
    id: "travel-india",
    title: "Travel India Explorer",
    shortDesc:
      "A single page application that helps users discover travel destinations across India and bookmark their favorite places.",
    detailedDesc: `Travel India Explorer was born from my love for exploring the diverse beauty of India. I wanted to create a platform that not only showcases incredible destinations but also helps fellow travelers plan their next adventure.

Built with **React** and powered by **Firebase**, this application features a clean, intuitive interface that makes discovering new places effortless. I implemented **custom hooks** for state management and data fetching, ensuring smooth performance across all interactions.

The styling is crafted with **Tailwind CSS**, providing a modern, responsive design that adapts beautifully to any screen size. Users can explore destinations through an interactive map, read detailed descriptions, and save their favorite spots for future reference.

What makes this project special is the **real-time database integration** with Firebase, allowing users to contribute their own travel experiences and recommendations, creating a community-driven travel resource.`,
    img: p1,
    additionalImages: [],
    tech: ["React", "Firebase", "Tailwind CSS", "Custom Hooks"],
    techStack: {
      frontend: ["React", "Tailwind CSS", "React Hooks", "React Router"],
      backend: ["Firebase Firestore", "Firebase Authentication"],
      deployment: ["Netlify", "Firebase Hosting"],
      tools: ["Git", "VS Code", "Figma"],
    },
    challenges: [
      "Creating an intuitive map interface for destination discovery",
      "Implementing real-time data synchronization with Firebase",
      "Optimizing image loading for better performance",
      "Building responsive components with Tailwind CSS",
      "Managing complex state with custom React hooks",
    ],
    features: [
      "Interactive destination discovery",
      "User authentication with Firebase",
      "Bookmark favorite destinations",
      "Real-time data updates",
      "Responsive mobile-first design",
      "Search and filter functionality",
      "User-generated content support",
    ],
    live: "https://travind.netlify.app/",
    category: "frontend",
    status: "completed",
    timeline: "3 months",
  },
  {
    id: "vallys-bliss",
    title: "Vallys Bliss Events",
    shortDesc:
      "A professional website for an event management company featuring smooth animations and modern design.",
    detailedDesc: `Vallys Bliss was my first major freelance project, creating a stunning web presence for a premium event management company. The client wanted something that would reflect the elegance and professionalism of their high-end events.

I crafted this project using **React** with a focus on creating smooth, engaging animations that tell the company's story. **Framer Motion** powers the beautiful transitions and scroll-triggered animations, while **react-scroll** ensures seamless navigation between sections.

The design emphasizes visual storytelling, with carefully orchestrated animations that guide users through the company's services, portfolio, and testimonials. Every interaction is purposeful, creating an immersive experience that reflects the quality of events they create.

Working directly with the client taught me valuable lessons about translating business requirements into technical solutions, managing project timelines, and delivering pixel-perfect implementations that exceed expectations.`,
    img: p3,
    additionalImages: [],
    tech: ["React", "CSS3", "Framer Motion", "React Scroll"],
    techStack: {
      frontend: ["React", "CSS3", "Framer Motion", "React Scroll"],
      tools: ["Git", "VS Code", "Adobe Photoshop"],
      deployment: ["Custom Hosting", "cPanel"],
    },
    challenges: [
      "Creating complex scroll-triggered animations",
      "Optimizing performance with heavy visual content",
      "Ensuring cross-browser compatibility",
      "Implementing custom CSS animations",
      "Meeting tight client deadlines",
    ],
    features: [
      "Smooth scroll animations with Framer Motion",
      "Responsive gallery with lightbox functionality",
      "Contact form with validation",
      "SEO-optimized structure",
      "Fast loading times",
      "Mobile-optimized design",
      "Custom CSS animations",
    ],
    live: "https://vallysbliss.com/",
    category: "frontend",
    status: "completed",
    timeline: "2 months",
  },
];

export default projectsData;
