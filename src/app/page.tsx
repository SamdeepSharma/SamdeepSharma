import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Tech />
			<Experience />
			<Works />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
			<Footer/>
		</div>
	);
}
