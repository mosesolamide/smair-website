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
import type { Course, EventItem, GalleryImage, TeamMember } from "../types";

export const navItems = [
  ["About", "/about"],
  ["Courses", "/courses"],
  ["Team", "/team"],
  ["News", "/news"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

/* ── Wix base URL helper ───────────────────────────────── */
const wix = (id: string, ext = "jpg", w = 960, h = 640) =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_90,enc_avif,quality_auto/${id}~mv2.${ext}`;

const wix42 = (id: string, ext = "png", w = 960, h = 640) =>
  `https://static.wixstatic.com/media/42289d_${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_90,enc_avif,quality_auto/42289d_${id}~mv2.${ext}`;

const wixb = (id: string, ext = "jpg", w = 800, h = 600) =>
  `https://static.wixstatic.com/media/b05d35_${id}~mv2.${ext}/v1/fill/w_${w},h_${h},fp_0.50_0.50,q_90,enc_avif,quality_auto/b05d35_${id}~mv2.${ext}`;

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
    image: "https://static.wixstatic.com/media/42289d_58e7c2c60bfd4206bfb9cdd72e934fdc~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_58e7c2c60bfd4206bfb9cdd72e934fdc~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_f36da087a4bb405787625c7771923739~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_f36da087a4bb405787625c7771923739~mv2.png",
    icon: Bot,
  },
  {
    slug: "microcontrollers-and-coding",
    title: "Microcontrollers & Coding",
    intro: "Get hands-on with Arduino, connect components, and write your first lines of code to control them.",
    outcomes: [
      "Set up and configure an Arduino microcontroller",
      "Write and upload your first lines of code",
      "Connect digital inputs and outputs to components",
      "Control LEDs, buttons, and simple actuators with code",
      "Debug and test code-driven circuits",
    ],
    image: "https://static.wixstatic.com/media/42289d_71aef3ccd38d40d293d9cb39b0605791~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_71aef3ccd38d40d293d9cb39b0605791~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_69279dcd21b34a13aedfee691f020bd5~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_69279dcd21b34a13aedfee691f020bd5~mv2.png",
    icon: Cog,
  },
  {
    slug: "sensors-and-inputs",
    title: "Sensors & Inputs",
    intro: "Learn how robots perceive their surroundings using ultrasonic, IR, and other input sensors.",
    outcomes: [
      "Wire and configure ultrasonic and IR sensors",
      "Measure distance and detect obstacles",
      "Read sensor data through code",
      "Make decisions based on sensor input",
      "Combine multiple sensors for richer perception",
    ],
    image: "https://static.wixstatic.com/media/42289d_5894c6cbd88b4e2ba5c4d40716916bf8~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_5894c6cbd88b4e2ba5c4d40716916bf8~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_d204f1b7c57341f8accac95a707def8b~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_d204f1b7c57341f8accac95a707def8b~mv2.png",
    icon: SquareCode,
  },
  {
    slug: "communication-and-signals",
    title: "Communication & Signals in Robotics",
    intro: "Explore how robots communicate with humans and devices using Bluetooth and serial signals.",
    outcomes: [
      "Use the serial monitor to read and send data",
      "Understand Bluetooth communication basics",
      "Send commands between devices wirelessly",
      "Interpret signal feedback from connected components",
      "Build simple remote-controlled interactions",
    ],
    image: "https://static.wixstatic.com/media/42289d_f4fbf34745e343ff92ce37cbd8bf2aa5~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_f4fbf34745e343ff92ce37cbd8bf2aa5~mv2.png",
    icon: Bluetooth,
  },
  {
    slug: "automation-and-ai-basics",
    title: "Automation & AI Basics",
    intro: "Discover how robots make autonomous decisions and solve problems like maze solving or line following.",
    outcomes: [
      "Understand the basics of decision-making logic",
      "Build a line-following robot behavior",
      "Solve simple maze navigation challenges",
      "Get introduced to core AI concepts",
      "Combine sensors and logic for autonomous actions",
    ],
    image: "https://static.wixstatic.com/media/42289d_75b7159b981d42b987d402109f60bb92~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_75b7159b981d42b987d402109f60bb92~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_d4ca7ec38a724ee4b13c6241dcbc3169~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_d4ca7ec38a724ee4b13c6241dcbc3169~mv2.png",
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
    image: "https://static.wixstatic.com/media/42289d_7df0e5382671496a96af0cc3d3fe1596~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_7df0e5382671496a96af0cc3d3fe1596~mv2.png",
    icon: Lightbulb,
  },
];

export const events: EventItem[] = [
  {
    slug: "july-bootcamp",
    title: "July Bootcamp",
    date: "July 2025",
    venue: "SMAIR Bootcamp Hub",
    image: "https://static.wixstatic.com/media/42289d_d9855ea6951b4285a8367e61abd1578b~mv2.jpg/v1/fill/w_800,h_450,al_c,q_90,enc_avif,quality_auto/42289d_d9855ea6951b4285a8367e61abd1578b~mv2.jpg",
    summary: "A 5-week intensive where students built, coded, and presented real robotics and AI projects from scratch.",
  },
  {
    slug: "smair-club-presentations",
    title: "SMAIR Club Project Presentations",
    date: "Nov 28, 2025",
    venue: "Straitgate Schools, Lagos",
    image: "https://static.wixstatic.com/media/b05d35_c6ca386f76ff4604914dfbfc054c0907~mv2.jpg/v1/fill/w_800,h_450,fp_0.50_0.50,q_90,enc_avif,quality_auto/b05d35_c6ca386f76ff4604914dfbfc054c0907~mv2.jpg",
    summary: "Students from partner schools showcased robotics and AI club projects built during weekly SMAIR Club sessions.",
  },
  {
    slug: "breakfast-with-smair",
    title: "Breakfast with SMAIR",
    date: "Community event",
    venue: "SMAIR Community",
    image: "https://static.wixstatic.com/media/42289d_5d70f9ecde904eddaa26616d1f60abd4~mv2.jpg/v1/fill/w_800,h_450,fp_0.50_0.50,q_90,enc_avif,quality_auto/42289d_5d70f9ecde904eddaa26616d1f60abd4~mv2.jpg",
    summary: "A morning gathering for families, partners, mentors, and learners to connect around technology education.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dipo Ojedeji",
    role: "Director",
    email: "dipo@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_9939aec2b83640de93f0fa21bb5c1aa8~mv2.png",
  },
  {
    name: "Nnenna Okore",
    role: "Coordinator, Business Strategy",
    email: "nne.okore@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_36ad329897574e7b8c256033da812a4a~mv2.png",
  },
  {
    name: "Faithful Ajah",
    role: "Technology Integrations Manager",
    email: "faithful@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_dac270a589664249b00d25a3c936ac25~mv2.png",
  },
  {
    name: "Moses Jeffrey",
    role: "Robotics Engineer",
    email: "jeff@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_fde99dec6b594d0f9c0c285925e8c62d~mv2.jpg",
  },
  {
    name: "Oluwaseun Aregbesola",
    role: "Program and Data Management Officer",
    email: "oluwaseun@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_fa7982f30575486aa0fac8de2a931720~mv2.png",
  },
];

export const volunteers = ["Amobi Ndubuisi", "Chiedozie Obidile", "Faith Amarachi", "Victor Duru"];

/* Gallery images from the About/activity pages */
export const sampleImages: GalleryImage[] = [
  {
    src: "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg",
    label: "SMAIR students at work",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_309b3d8c1cc8494b950b15d11c22a0cd~mv2.jpg/v1/fit/w_960,h_647,q_90,enc_avif,quality_auto/3b80ec_309b3d8c1cc8494b950b15d11c22a0cd~mv2.jpg",
    label: "Robotics programme moment",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_8427b8bb057a43cea03da1a4b48c5ccb~mv2.jpg/v1/fit/w_960,h_649,q_90,enc_avif,quality_auto/3b80ec_8427b8bb057a43cea03da1a4b48c5ccb~mv2.jpg",
    label: "Students and mentors",
  },
  {
    src: "https://static.wixstatic.com/media/42289d_d9855ea6951b4285a8367e61abd1578b~mv2.jpg/v1/fill/w_800,h_533,fp_0.50_0.50,q_90,enc_avif,quality_auto/42289d_d9855ea6951b4285a8367e61abd1578b~mv2.jpg",
    label: "Bootcamp Week 5",
  },
  {
    src: "https://static.wixstatic.com/media/42289d_652e4bc23a824baa8e1ea9defab9b4da~mv2.png/v1/fill/w_800,h_533,fp_0.50_0.50,q_95,enc_avif,quality_auto/42289d_652e4bc23a824baa8e1ea9defab9b4da~mv2.png",
    label: "Working Prototypes — Week 4",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_5c03e3726146499f88c6dc43df9f6d14~mv2.jpg/v1/fit/w_480,h_285,q_90,enc_avif,quality_auto/3b80ec_5c03e3726146499f88c6dc43df9f6d14~mv2.jpg",
    label: "Hands-on learning session",
  },
];

/* Collaborator / partner logos — original files, no Wix resize params */
export const collaborators = [
  {
    name: "TechSplicit",
    tagline: "Journalism with Integrity",
    logo: "https://static.wixstatic.com/media/42289d_662e4498833d49bc860fc03fd9919584~mv2.png",
    href: "https://techsplicit.com",
  },
  {
    name: "Mechatron Robotics",
    tagline: "Hardware & Robotics Kits",
    logo: "https://static.wixstatic.com/media/3b80ec_e2a44063ece84fca8ba20a8850470ca8~mv2.jpg",
    href: "#",
  },
  {
    name: "AI & Robotics Innovation Tech",
    tagline: "AIR Innovation Tech",
    logo: "https://static.wixstatic.com/media/3b80ec_38207c6057dd4e258779a5c3dc3c355a~mv2.png/v1/crop/x_0,y_125,w_632,h_156/fill/w_243,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NEW_air_logo-removebg-preview.png",
    href: "#",
  },
];

/* Hero side images for the home page */
export const heroImages = {
  left: "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg",
  right: "https://static.wixstatic.com/media/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png/v1/fill/w_960,h_640,al_c,q_90,enc_avif,quality_auto/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png",
};

// suppress unused-variable warnings for helper fns
void wix; void wix42; void wixb;
