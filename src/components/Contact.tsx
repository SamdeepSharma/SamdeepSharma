"use client";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { AxiosError } from "axios";
import { IconLoadBalancer, IconLoader, IconLoader2, IconLoader3, IconLoaderQuarter } from "@tabler/icons-react";

type FormData = {
	name: string;
	email: string;
	message: string;
}
   
const Contact = () => {
	const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		try {
			const response = await axios.post("/api/contact", data )
			if (!response) {
				throw new Error('Network response was not ok');
			}
			if (response.data.success) {
				toast.success('Thanks for contacting! 🌟', {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
			else {
				toast.error('Response not sent! 🚨', {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		} catch (error) {
			const axiosError = error as AxiosError
			console.log(axiosError)
			toast.error('Response not sent! 🚨', {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} finally {
			reset()
		}
	}

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact</h3>
				<form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Name</span>
						<input
							type="text"
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium form-control w-75 ${errors.name ? 'is-invalid' : ''}`}
							id="name"
							placeholder="Enter your name here"
							{...register('name', {
								required: 'Name is required',
								minLength: {
									value: 3,
									message: 'Name must be at least 3 characters'
								},
								pattern: {
									value: /^[A-Za-z\s]+$/,
									message: 'Name must contain only alphabets'
								}
							})}
						/>
						{errors.name && <div className="invalid-feedback">{String(errors.name.message)}</div>}
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Email</span>
						<input
							type="email"
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium form-control w-75 ${errors.email ? 'is-invalid' : ''}`}
							id="email"
							placeholder="Enter your email here"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Invalid email format'
								}
							})}
						/>
						{errors.email && <div className="invalid-feedback">{String(errors.email.message)}</div>}
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Message</span>
						<textarea
							rows={7}
							className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium form-control w-75 ${errors.name ? 'is-invalid' : ''}`}
							id="message"
							placeholder="Enter your message here"
							{...register('message', {
								required: 'Message is required',
								minLength: {
									value: 3,
									message: 'Message must be at least 3 characters'
								},
							})}
						/>
						{errors.message && <div className="invalid-feedback">{String(errors.message.message)}</div>}
					</label>
					<button
						type="submit"
						disabled={isSubmitting}
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{isSubmitting ? <IconLoader3 className="animate-spin"/> : "Send"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
