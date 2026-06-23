import {
  Bluetooth,
  Bot,
  Brain,
  CircuitBoard,
  Cog,
  Lightbulb,
  Radar,
  Rocket,
  SquareCode,
  Workflow,
  Zap,
} from "lucide-react";
import type { Course, EventItem, GalleryImage, Post, TeamMember } from "../types";

export const navItems = [
  ["About", "/about"],
  ["Courses", "/courses"],
  ["SMAIR Club", "/smair-club"],
  ["Team", "/team"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

export const courses: Course[] = [
  {
    slug: "electronics-basics",
    title: "Electronics Basics",
    intro: "Learn the basics of electricity and build simple circuits using LEDs, resistors, and breadboards.",
    outcomes: [
      "Explore voltage, current, and resistance",
      "Understand how electrical components work together in circuits",
      "Build and assemble basic circuits using breadboards",
      "Experience the practical flow of electricity",
      "Learn basic circuit logic",
    ],
    image: "",
    icon: Zap,
  },
  {
    slug: "core-concepts",
    title: "Core Concepts in Robotics",
    intro: "Build advanced confidence with programming, deep learning, IoT, and autonomous robotics concepts.",
    outcomes: [
      "Understand core robot architecture and components",
      "Explore programming logic for autonomous systems",
      "Get introduced to deep learning and IoT concepts",
      "Connect sensors and actuators to control logic",
      "Apply systems thinking to robotics design",
    ],
    image: "",
    icon: Brain,
  },
  {
    slug: "intro-to-robotics",
    title: "Introduction to Robotics",
    intro: "Discover what robots are, their history, and how they differ from machines through fun visual lessons.",
    outcomes: [
      "Learn what defines a robot versus a machine",
      "Explore the history and evolution of robotics",
      "Identify categories and types of robots",
      "Discover real-world robotics applications",
      "Build creative thinking around robotics design",
    ],
    image: "",
    icon: Bot,
  },
  {
    slug: "microcontrollers-%26-coding",
    title: "Microcontrollers & Coding",
    intro: "Get hands-on with Arduino, connect components, and write your first lines of code to control them.",
    outcomes: [
      "Set up and configure an Arduino microcontroller",
      "Write and upload your first lines of code",
      "Connect digital inputs and outputs to components",
      "Control LEDs, buttons, and simple actuators with code",
      "Debug and test code-driven circuits",
    ],
    image: "",
    icon: CircuitBoard,
  },
  {
    slug: "mechanical-systems",
    title: "Mechanical Systems",
    intro: "Explore gears, motors, movement, and the physical systems behind robot chassis design.",
    outcomes: [
      "Understand gears, torque, and mechanical advantage",
      "Explore how motors generate movement",
      "Build and assemble a simple robot chassis",
      "Connect mechanical parts to power and control systems",
      "Test and refine movement and stability",
    ],
    image: "",
    icon: Cog,
  },
  {
    slug: "sensors-%26-inputs",
    title: "Sensors & Inputs",
    intro: "Learn how robots perceive their surroundings using ultrasonic, IR, and other input sensors.",
    outcomes: [
      "Wire and configure ultrasonic and IR sensors",
      "Measure distance and detect obstacles",
      "Read sensor data through code",
      "Make decisions based on sensor input",
      "Combine multiple sensors for richer perception",
    ],
    image: "",
    icon: Radar,
  },
  {
    slug: "programming-logic",
    title: "Programming Logic",
    intro: "Master loops, conditionals, and reusable thinking patterns that bring intelligent behavior to robots.",
    outcomes: [
      "Apply loops to repeat and automate actions",
      "Use conditionals to make decisions in code",
      "Build reusable functions and logic patterns",
      "Develop structured debugging habits",
      "Translate everyday logic into working code",
    ],
    image: "",
    icon: SquareCode,
  },
  {
    slug: "communication-%26-signals",
    title: "Communication & Signals in Robotics",
    intro: "Explore how robots communicate with humans and devices using Bluetooth and serial signals.",
    outcomes: [
      "Use the serial monitor to read and send data",
      "Understand Bluetooth communication basics",
      "Send commands between devices wirelessly",
      "Interpret signal feedback from connected components",
      "Build simple remote-controlled interactions",
    ],
    image: "",
    icon: Bluetooth,
  },
  {
    slug: "automation-%26-ai-basics",
    title: "Automation & AI Basics",
    intro: "Discover how robots make autonomous decisions and solve problems like maze solving or line following.",
    outcomes: [
      "Understand the basics of decision-making logic",
      "Build a line-following robot behavior",
      "Solve simple maze navigation challenges",
      "Get introduced to core AI concepts",
      "Combine sensors and logic for autonomous actions",
    ],
    image: "",
    icon: Workflow,
  },
  {
    slug: "robotics-applications",
    title: "Robotics Applications",
    intro: "Explore how robots are transforming healthcare, defense, home automation, and everyday life.",
    outcomes: [
      "Map robotics applications across industries",
      "Examine real-world robotics case studies",
      "Explore robotics in healthcare and home automation",
      "Discuss the role of robotics in defense and safety",
      "Reflect on responsible and ethical innovation",
    ],
    image: "",
    icon: Rocket,
  },
  {
    slug: "product-management",
    title: "Product Management",
    intro: "Go from idea to product by brainstorming, prototyping, testing, and pitching like a real innovator.",
    outcomes: [
      "Frame and refine a product idea",
      "Plan and build a working prototype",
      "Test and iterate based on feedback",
      "Develop pitch storytelling skills",
      "Present a finished product idea with confidence",
    ],
    image: "",
    icon: Lightbulb,
  },
];

export const posts: Post[] = [
  {
    slug: "a-day-of-innovation-smair-smart-club-project-presentations-by-students-from-straitgate-high-school",
    title: "A Day of Innovation: SMAIR Smart Club Project Presentations by Students from Straitgate High School",
    date: "Nov 28, 2025",
    image: "",
    excerpt: "Students presented their smart club projects, showing how robotics and AI can move from classroom ideas to working demos.",
  },
  {
    slug: "smair-ai-robotics-club-weekly-recap-week-of-may-5-11-2025",
    title: "SMAIR AI & Robotics Club Weekly Recap: Week of May 5-11, 2025",
    date: "Jun 20, 2025",
    image: "",
    excerpt: "A weekly look at classroom experiments, student teamwork, and the small wins that build technical confidence.",
  },
  {
    slug: "smair-bootcamp-highlights-week-3-coding-and-game-development",
    title: "SMAIR Bootcamp Highlights Week 3: Coding and Game Development",
    date: "Aug 22, 2025",
    image: "",
    excerpt: "Students translated logic into interactive games while strengthening programming fundamentals.",
  },
  {
    slug: "smair-bootcamp-highlights-week-5-where-big-ideas-become-working-prototypes",
    title: "SMAIR Bootcamp Highlights Week 5: Where Big Ideas Become Working Prototypes",
    date: "Aug 24, 2025",
    image: "",
    excerpt: "The bootcamp shifted from concepts to prototypes as students tested, refined, and shared their ideas.",
  },
  {
    slug: "empowering-tomorrow-smair-foundation-celebrates-international-day-of-the-girl-child",
    title: "Empowering Tomorrow: SMAIR Foundation Celebrates International Day of the Girl Child",
    date: "Nov 6, 2025",
    image: "",
    excerpt: "SMAIR celebrates girls in technology and the importance of access, mentorship, and early exposure.",
  },
  {
    slug: "smair-bootcamp-highlights-we-built-coded-and-shared",
    title: "SMAIR Bootcamp Highlights: We Built, Coded, and Shared",
    date: "Aug 2, 2025",
    image: "",
    excerpt: "A recap of a practical week of building, coding, presenting, and learning through feedback.",
  },
  {
    slug: "we-missed-our-flight-home-from-abuja-but-that-wasn-t-even-the-craziest-part",
    title: "We Missed Our Flight Home from Abuja, But That Wasn't Even the Craziest Part",
    date: "May 12, 2026",
    image: "",
    excerpt: "A field story from the SMAIR journey, full of travel lessons, resilience, and the work behind impact.",
  },
  {
    slug: "a-day-of-innovation-smair-club-project-presentations-by-students-from-straitgate-nursery-and-primary-school-forthright",
    title: "A Day of Innovation: SMAIR Club Project Presentations by Students from Straitgate Nursery and Primary School, Forthright",
    date: "Nov 28, 2025",
    image: "",
    excerpt: "Students from Straitgate Nursery and Primary School, Forthright, presented their SMAIR Club projects, showcasing robotics and AI builds developed through hands-on club sessions.",
  },
  {
    slug: "smair-bootcamp-week-5-highlights-the-final-push",
    title: "SMAIR Bootcamp Week 5 Highlights: The Final Push🎉",
    date: "Sep 1, 2025",
    image: "",
    excerpt: "In the final week of the bootcamp, students pushed their prototypes across the finish line, polishing builds, presentations, and the lessons that carry forward into SMAIR Club.",
  },
];

export const events: EventItem[] = [
  {
    slug: "breakfast-with-smair",
    title: "Breakfast with SMAIR",
    date: "Community event",
    venue: "SMAIR community",
    image: "",
    summary: "A morning gathering for families, partners, mentors, and learners to connect around technology education.",
  },
  {
    slug: "choosequality-formal-dinner-1",
    title: "#ChooseQuality Formal Dinner",
    date: "Formal dinner",
    venue: "Partner event",
    image: "",
    summary: "A partner-focused event celebrating education quality, collaboration, and youth development.",
  },
  {
    slug: "july-bootcamp-1",
    title: "July Bootcamp",
    date: "July Bootcamp",
    venue: "SMAIR Bootcamp",
    image: "",
    summary: "A practical bootcamp where students build, code, test, and present technology projects.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dipo Ojedeji",
    role: "Director",
    email: "dipo@smairfoundation.com",
    image: "",
  },
  {
    name: "Nnenna Okore",
    role: "Coordinator, Business Strategy",
    email: "nne@smairfoundation.com",
    image: "",
  },
  {
    name: "Faithful Ajah",
    role: "Technology Integrations Manager",
    email: "faithful@smairfoundation.com",
    image: "",
  },
  {
    name: "Moses Jeffrey",
    role: "Robotics Engineer",
    email: "jeff@smairfoundation.com",
    image: "",
  },
  {
    name: "Oluwaseun Aregbesola",
    role: "Program and Data Management Officer",
    email: "oluwaseun@smairfoundation.com",
    image: "",
  },
];

export const volunteers = ["Amobi Ndubuisi", "Chiedozie Obidile", "Faith Amarachi", "Victor Duru"];

export const sampleImages: GalleryImage[] = [
  {
    src: "",
    label: "SMAIR technology banner",
  },
  {
    src: "",
    label: "Robotics program moment",
  },
  {
    src: "",
    label: "Students and mentors",
  },
  {
    src: "",
    label: "Hands-on learning",
  },
  {
    src: "",
    label: "Classroom innovation",
  },
  {
    src: "",
    label: "SMAIR workshop",
  },
];
