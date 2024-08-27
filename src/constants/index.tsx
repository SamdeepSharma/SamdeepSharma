import { IconBrandGithub, IconBrandLinkedin, IconBriefcase, IconHome, IconQuote, IconSend, IconTerminal2 } from "@tabler/icons-react";

const navLinks = [
	{
		title: "Home",
		icon: (
			<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "#",
	},

	{
		title: "About",
		icon: (
			<IconQuote className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "#about",
	},
	{
		title: "Work",
		icon: (
			<IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "#work",
	},
	{
		title: "Projects",
		icon: (
			<IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "#projects",
	},
	{
		title: "Contact",
		icon: (
			<IconSend className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "#contact",
	},

	{
		title: "LinkedIn",
		icon: (
			<IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "https://www.linkedin.com/in/samdeep-sharma-20894b283/",
	},
	{
		title: "GitHub",
		icon: (
			<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
		),
		href: "https://github.com/SamdeepSharma/",
	},
];

const words = [
	{
	  text: "Welcome",
	},
	{
	  text: "to",
	},
	{
	  text: "Samdeep's",
	  className: "text-blue-500 dark:text-blue-500",
	},
	{
	  text: "Portfolio",
	},
   ];

const flipwords = ["UI/UX Designer", "Software Engineer", "Web Developer", "Pre-final Year Student"];

const services = [
	{
		title: "Software Engineer",
		icon: "/mobile.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Data Scientist",
		icon: "/backend.webp",
	},
	{
		title: "UI Designer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "MongoDB",
		icon: "/tech/mongodb.png",
	},
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	
	{
		name: "Node",
		icon: "/tech/node.png",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "aws",
		icon: "/tech/aws.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Docker",
		icon: "/tech/docker.png",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
];

const aboutMe = `I am a third-year Bachelor’s student at Thapar Institute of Engineering and Technology, Patiala, majoring in Computer Science and Data Science. As a full-stack developer, I specialize in Next.js, the MERN stack, Docker, PostgreSQL, and Cloud Computing, with a strong interest in Web3 and its emerging technologies. Beyond development, I enhance my problem-solving skills by tackling complex DSA challenges on platforms like LeetCode. I have served as a mentor at the IETE Students' Forum in the web development department, where I led workshops and participated in various hackathons. My proactive approach to learning and innovative problem-solving drives my passion for technology. I am committed to leveraging my skills to contribute to impactful projects and collaborate with industry professionals. Please feel free to contact me if my portfolio aligns with your needs or interests.`

const experiences = [
	{
		title: "Mentor - Web-dev Dept.",
		company_name: "IETE Students' Forum",
		icon: "/company/IETE_logo.jpg",
		iconBg: "#252525",
		date: "2023 - 2024",
		points: [
			"Contributed to society as a web developer making designs and websites for the events of society.",
			"Conducted workshops on web development for the members.",
			"Made websites in collaboration with other mentors.",
			"Participated in and conducted hackathons.",
		],
	},
];

const projects = [
	{
		name: "Ghost Note",
		description:
			"An anonymous messaging web app build in Next.js, designed to gather and analyze user feedback discreetly and effectively. Levaraging AI models like gemini-1.5-pro for suggesting messages.",
			tags: [
				{
					name: "next.js",
					color: "blue-text-gradient",
				},
				{
					name: "gemini-api",
					color: "green-text-gradient",
				},
				{
					name: "shadcn",
					color: "orange-text-gradient",
				},
				{
					name: "tailwindcss",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/ghost-note.png",
		source_code_link:
			"https://github.com/SamdeepSharma/Ghost-Note",
		vercel_link: "https://ghost-note.vercel.app/",
	},
	{
		name: "Harmonic Horizons",
		description:
			"A music academy web application that delivers exceptional music instruction to students through tailored programs. This platform offers an interactive and engaging user experience for students and instructors. Front-end only as of now.",
			tags: [
				{
					name: "next.js",
					color: "blue-text-gradient",
				},
				{
					name: "aceternityUI",
					color: "green-text-gradient",
				},
				{
					name: "typescript",
					color: "orange-text-gradient",
				},
				{
					name: "tailwindcss",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/harmonic-horizons.png",
		source_code_link:
			"https://github.com/SamdeepSharma/Harmonic-Horizons",
		vercel_link: "https://harmonic-horizons.vercel.app/",
	},
	{
		name: "TIET Placement Portal",
		description:
			"A centralized placement portal for Thapar University, with which the college can deliver job/internship opportunities to the students who can apply for job postings without looking elsewhere for on-campus placements. (Not Official)",
			tags: [
				{
					name: "vite",
					color: "blue-text-gradient",
				},
				{
					name: "react",
					color: "green-text-gradient",
				},
				{
					name: "express",
					color: "orange-text-gradient",
				},
				{
					name: "bootstrap-css",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/TIET-PMS.png",
		source_code_link:
			"https://github.com/SamdeepSharma/TIET-Placement-Portal-SE-Project",
		vercel_link: "https://tiet-placement-portal-se-project.vercel.app/",
	},
	{
		name: "E-banking NBI",
		description:
			"A demo E-Banking Website made using MERN stack for carrying out online transactions and performing other banking operations, built in collaboration of other members of tech society while learning full-stack. Its front-end only as of now.",
			tags: [
				{
					name: "vite",
					color: "blue-text-gradient",
				},
				{
					name: "react",
					color: "green-text-gradient",
				},
				{
					name: "javascript",
					color: "orange-text-gradient",
				},
				{
					name: "figma",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/e-banking.png",
		source_code_link:
			"https://github.com/SamdeepSharma/IETE_E-Banking",
		vercel_link: "https://iete-e-banking.vercel.app/",
	},
	{
		name: "iNotebook cloud",
		description:
			"A secure iNotebook for uploading notes on the cloud and accessing it anytime, anywhere and across multiple devices. Never lose access to your notes again. JWT used for user authentication.",
			tags: [
				{
					name: "vite",
					color: "blue-text-gradient",
				},
				{
					name: "react",
					color: "green-text-gradient",
				},
				{
					name: "jwt",
					color: "orange-text-gradient",
				},
				{
					name: "mongoDB",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/iNotebook.png",
		source_code_link:
			"https://github.com/SamdeepSharma/iNotebook--Your-notes-secured-on-the-cloud",
		vercel_link: "https://i-notebook-cloud-secure.vercel.app/",
	},
	{
		name: "Stock Tracker",
		description:
			"A real time stock tracker web app where you can search any stock code and it displays all the information about that particular stock at that particular timestamp.",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "javascript",
					color: "green-text-gradient",
				},
				{
					name: "CSS",
					color: "orange-text-gradient",
				},
				{
					name: "stock-api",
					color: "pink-text-gradient",
				},
			],
		image: "/projectimg/stock-tracker.png",
		source_code_link:
			"https://github.com/SamdeepSharma/Stock-Tracker",
		vercel_link: "https://vercel.com/samdeep-sharmas-projects/stock-tracker",
	},
];

export { services, technologies, experiences, projects, flipwords, words, navLinks, aboutMe };
