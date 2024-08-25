"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cover } from "./ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`w-full flex items-center justify-around py-4 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
			<div className="flex items-center justify-center">
				<Link href="#" className="text-md md:text-xl font-bold mx-auto text-center z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
						<Cover>
							Samdeep Sharma
						</Cover>
					</Link>
			</div>
			<div className="flex items-center justify-center">
			<Link className="text-md md:text-xl font-bold mx-auto text-center z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
			href="https://drive.google.com/file/d/19hOt3krDf5b_OhHNgEguC2IekF8JZw2H/"
			target="_blank"
		>
			<Cover>Download Resume</Cover>
		</Link>
			</div>
		</nav>
	);
};

export default Navbar;
