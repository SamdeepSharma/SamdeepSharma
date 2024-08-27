"use client";
import { SectionWrapper } from "@/components/HigherOrderComponents";
import { experiences } from "@/constants";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from 'react-intersection-observer';

type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	return (
		<div ref={ref}>
			<VerticalTimelineElement
				visible={inView}
				contentStyle={{
					background: "#1d1836",
					color: "#fff",
				}}
				contentArrowStyle={{ borderRight: "7px solid #232631" }}
				date={experience.date}
				iconStyle={{ background: experience.iconBg }}
				icon={
					<div className="flex justify-center items-center w-full h-full">
						<Image
							src={experience.icon}
							width={50}
							height={50}
							alt={experience.company_name}
							className="w-[80%] h-[80%] object-contain rounded-full"
						/>
					</div>
				}
			>
				<div>
					<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
					<p
						className="text-secondary text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name}
					</p>
				</div>

				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points.map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className="text-white-100 text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					))}
				</ul>
			</VerticalTimelineElement>
		</div>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center">
					What I have done so far
				</p>
				<h2 className="sectionHeadText text-center">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="" className="flex flex-col gap-10">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
