import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navLinks } from "@/constants";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Samdeep | Portfolio",
	description: "Portfolio of Samdeep Sharma",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
				{children}
				<div
					id="floating-dock"
					className="fixed bottom-10 left-12 md:left-1/2 transform -translate-x-1/2 z-20 transition-transform"
				>
					<FloatingDock items={navLinks} />
				</div>
			</body>
		</html>
	);
}
