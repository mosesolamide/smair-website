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
    image: "https://static.wixstatic.com/media/42289d_58e7c2c60bfd4206bfb9cdd72e934fdc~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_f36da087a4bb405787625c7771923739~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_71aef3ccd38d40d293d9cb39b0605791~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_69279dcd21b34a13aedfee691f020bd5~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_5894c6cbd88b4e2ba5c4d40716916bf8~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_d204f1b7c57341f8accac95a707def8b~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_f4fbf34745e343ff92ce37cbd8bf2aa5~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_75b7159b981d42b987d402109f60bb92~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_d4ca7ec38a724ee4b13c6241dcbc3169~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
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
    image: "https://static.wixstatic.com/media/42289d_7df0e5382671496a96af0cc3d3fe1596~mv2.png/v1/fill/w_754,h_644,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.png",
    icon: Lightbulb,
  },
];

export const posts: Post[] = [
  {
    slug: "a-day-of-innovation-smair-smart-club-project-presentations-by-students-from-straitgate-high-school",
    title: "A Day of Innovation: SMAIR Smart Club Project Presentations by Students from Straitgate High School",
    date: "Nov 28, 2025",
    image: "https://static.wixstatic.com/media/b05d35_da624ea3d2084b7a8527eb0e11c0ca27~mv2.png",
    excerpt: "Students presented their smart club projects, showing how robotics and AI can move from classroom ideas to working demos.",
  },
  {
    slug: "smair-ai-robotics-club-weekly-recap-week-of-may-5-11-2025",
    title: "SMAIR AI & Robotics Club Weekly Recap: Week of May 5-11, 2025",
    date: "Jun 20, 2025",
    image: "https://static.wixstatic.com/media/42289d_1ae131c8d7b14223a601e0b08817b02b~mv2.png",
    excerpt: "A weekly look at classroom experiments, student teamwork, and the small wins that build technical confidence.",
  },
  {
    slug: "smair-bootcamp-highlights-week-3-coding-and-game-development",
    title: "SMAIR Bootcamp Highlights Week 3: Coding and Game Development",
    date: "Aug 22, 2025",
    image: "https://static.wixstatic.com/media/42289d_d375786639364b8a8d8e6497ec253d04~mv2.png",
    excerpt: "Students translated logic into interactive games while strengthening programming fundamentals.",
  },
  {
    slug: "smair-bootcamp-highlights-week-5-where-big-ideas-become-working-prototypes",
    title: "SMAIR Bootcamp Highlights Week 5: Where Big Ideas Become Working Prototypes",
    date: "Aug 24, 2025",
    image: "https://static.wixstatic.com/media/42289d_652e4bc23a824baa8e1ea9defab9b4da~mv2.png",
    excerpt: "The bootcamp shifted from concepts to prototypes as students tested, refined, and shared their ideas.",
  },
  {
    slug: "empowering-tomorrow-smair-foundation-celebrates-international-day-of-the-girl-child",
    title: "Empowering Tomorrow: SMAIR Foundation Celebrates International Day of the Girl Child",
    date: "Nov 6, 2025",
    image: "https://static.wixstatic.com/media/42289d_5d70f9ecde904eddaa26616d1f60abd4~mv2.jpg",
    excerpt: "SMAIR celebrates girls in technology and the importance of access, mentorship, and early exposure.",
  },
  {
    slug: "smair-bootcamp-highlights-we-built-coded-and-shared",
    title: "SMAIR Bootcamp Highlights: We Built, Coded, and Shared",
    date: "Aug 2, 2025",
    image: "https://static.wixstatic.com/media/42289d_2a21fd5b0c19494984a17a7506e3e876~mv2.png",
    excerpt: "A recap of a practical week of building, coding, presenting, and learning through feedback.",
  },
  {
    slug: "we-missed-our-flight-home-from-abuja-but-that-wasn-t-even-the-craziest-part",
    title: "We Missed Our Flight Home from Abuja, But That Wasn't Even the Craziest Part",
    date: "May 12, 2026",
    image: "https://static.wixstatic.com/media/b05d35_ac9463caf89444a89970139df39d2efc~mv2.jpg",
    excerpt: "A field story from the SMAIR journey, full of travel lessons, resilience, and the work behind impact.",
  },
  {
    slug: "a-day-of-innovation-smair-club-project-presentations-by-students-from-straitgate-nursery-and-primary-school-forthright",
    title: "A Day of Innovation: SMAIR Club Project Presentations by Students from Straitgate Nursery and Primary School, Forthright",
    date: "Nov 28, 2025",
    image: "https://static.wixstatic.com/media/42289d_d9855ea6951b4285a8367e61abd1578b~mv2.jpg",
    excerpt: "Students from Straitgate Nursery and Primary School, Forthright, presented their SMAIR Club projects, showcasing robotics and AI builds developed through hands-on club sessions.",
  },
  {
    slug: "smair-bootcamp-week-5-highlights-the-final-push",
    title: "SMAIR Bootcamp Week 5 Highlights: The Final Push🎉",
    date: "Sep 1, 2025",
    image: "https://static.wixstatic.com/media/42289d_f501f8022f354a79b96a329fcf8ea3ae~mv2.png",
    excerpt: "In the final week of the bootcamp, students pushed their prototypes across the finish line, polishing builds, presentations, and the lessons that carry forward into SMAIR Club.",
  },
];

export const events: EventItem[] = [
  {
    slug: "breakfast-with-smair",
    title: "Breakfast with SMAIR",
    date: "Community event",
    venue: "SMAIR community",
    image: "https://static.wixstatic.com/media/42289d_000e3442b4a84c09a978eb4c00609428~mv2.png",
    summary: "A morning gathering for families, partners, mentors, and learners to connect around technology education.",
  },
  {
    slug: "choosequality-formal-dinner-1",
    title: "#ChooseQuality Formal Dinner",
    date: "Formal dinner",
    venue: "Partner event",
    image: "https://static.wixstatic.com/media/b05d35_da624ea3d2084b7a8527eb0e11c0ca27~mv2.png",
    summary: "A partner-focused event celebrating education quality, collaboration, and youth development.",
  },
  {
    slug: "july-bootcamp-1",
    title: "July Bootcamp",
    date: "July Bootcamp",
    venue: "SMAIR Bootcamp",
    image: "https://static.wixstatic.com/media/42289d_000e3442b4a84c09a978eb4c00609428~mv2.png",
    summary: "A practical bootcamp where students build, code, test, and present technology projects.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dipo Ojedeji",
    role: "Director",
    email: "dipo@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_9939aec2b83640de93f0fa21bb5c1aa8~mv2.png/v1/fill/w_420,h_320,al_c,q_90,enc_avif,quality_auto/Image-place-holder.png",
  },
  {
    name: "Nnenna Okore",
    role: "Coordinator, Business Strategy",
    email: "nne@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_36ad329897574e7b8c256033da812a4a~mv2.png/v1/fill/w_420,h_420,al_c,q_90,enc_avif,quality_auto/Image-place-holder.png",
  },
  {
    name: "Faithful Ajah",
    role: "Technology Integrations Manager",
    email: "faithful@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_dac270a589664249b00d25a3c936ac25~mv2.png/v1/fill/w_420,h_420,al_c,q_90,enc_avif,quality_auto/Image-place-holder.png",
  },
  {
    name: "Moses Jeffrey",
    role: "Robotics Engineer",
    email: "jeff@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_fde99dec6b594d0f9c0c285925e8c62d~mv2.jpg/v1/fill/w_420,h_520,al_c,q_90,enc_avif,quality_auto/Image-place-holder.jpg",
  },
  {
    name: "Oluwaseun Aregbesola",
    role: "Program and Data Management Officer",
    email: "oluwaseun@smairfoundation.com",
    image: "https://static.wixstatic.com/media/3b80ec_fa7982f30575486aa0fac8de2a931720~mv2.png/v1/fill/w_420,h_520,al_c,q_90,enc_avif,quality_auto/Image-place-holder.png",
  },
];

export const volunteers = ["Amobi Ndubuisi", "Chiedozie Obidile", "Faith Amarachi", "Victor Duru"];

export const sampleImages: GalleryImage[] = [
  {
    src: "https://static.wixstatic.com/media/42289d_ad5c4c08849d4e22a68f9d94dc942bec%7Emv2.png/v1/fit/w_2500,h_1330,al_c/42289d_ad5c4c08849d4e22a68f9d94dc942bec%7Emv2.png",
    label: "SMAIR technology banner",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_5c03e3726146499f88c6dc43df9f6d14~mv2.jpg/v1/fit/w_960,h_570,q_90,enc_avif,quality_auto/3b80ec_5c03e3726146499f88c6dc43df9f6d14~mv2.jpg",
    label: "Robotics program moment",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_24a6a1951221409fbb0d4ae3a70453c1~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/3b80ec_24a6a1951221409fbb0d4ae3a70453c1~mv2.jpg",
    label: "Students and mentors",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg/v1/fit/w_960,h_640,q_90,enc_avif,quality_auto/3b80ec_42a4d25d960b43949f82cd14e9c655d4~mv2.jpg",
    label: "Hands-on learning",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_309b3d8c1cc8494b950b15d11c22a0cd~mv2.jpg/v1/fit/w_960,h_647,q_90,enc_avif,quality_auto/3b80ec_309b3d8c1cc8494b950b15d11c22a0cd~mv2.jpg",
    label: "Classroom innovation",
  },
  {
    src: "https://static.wixstatic.com/media/3b80ec_8427b8bb057a43cea03da1a4b48c5ccb~mv2.jpg/v1/fit/w_960,h_649,q_90,enc_avif,quality_auto/3b80ec_8427b8bb057a43cea03da1a4b48c5ccb~mv2.jpg",
    label: "SMAIR workshop",
  },
];
