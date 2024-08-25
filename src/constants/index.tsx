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
		title: "Web Designer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2020 -  2021",
		points: [
			"Analyzing the needs of customer in a website.",
			"Designing User Interface (UI) for the problem statement.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
		],
	},
	{
		title: "Wordpress Developer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2021 - 2022",
		points: [
			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const projects = [
	{
		name: "Random Quote Generator",
		description:
			"A Fully Responsive Random Quote generating website project given by Free Code Camp while completing Front-End Libraries Certifications built using React.JS , Bootstrap CSS and HTML.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "quoteapi",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/quote.webp",
		source_code_link:
			"https://github.com/omunite215/FCC-Random-Quote-Generator",
		netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
	},
	{
		name: "Admin Dashboard UI",
		description:
			"React Admin Dashboard is a stunning web application that has a beautiful User Interface and has been built using advanced JavaScript concepts, React, and Tailwind CSS which has different graphs, stats and themes.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Syncfusion UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/dashboard.webp",
		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		netlify_link: "https://reactadmindashboardbyom.netlify.app/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		netlify_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "Provid A Youtube Clone",
		description:
			"Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "rapidapi",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/provid.webp",
		source_code_link: "https://github.com/omunite215/Provid-A-YouTube-Clone",
		netlify_link: "https://providbyom.netlify.app/",
	},
	{
		name: "A 3D Developer Portfolio",
		description:
			"A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfoliosample.webp",
		source_code_link: "https://github.com/omunite215/portfolio",
		netlify_link: "https://portfoliobyompatel.netlify.app/",
	},
];

export { services, technologies, experiences, projects, flipwords, words, navLinks, aboutMe };
