"use client";
import { Mail} from "lucide-react";
import Link from "next/link";
import { Card } from "../components/Card";
import { FaGithubAlt } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";


const socials = [
	{
		icon: <LuLinkedin size={20} />,
		href: "https://www.linkedin.com/in/mar-kiniec-carlisle",
		label: "Linkedin",
		handle: "mar-kiniec-carlisle",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:contact.mkcalrisle.com",
		label: "Email",
		handle: "contact@mkcarlisle.com",
	},
	{
		icon: <FaGithubAlt size={20} />,
		href: "https://github.com/Kiniec",
		label: "Github",
		handle: "Kiniec",
	},
];

export default function Example() {
	return (
		<div className="  ">
			 
								
			
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
					
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span 
									className="absolute w-20 h-2/3 bg-gradient-to-b  via-zinc-500/50 to-transparent" // line for vertical stripe 
									aria-hidden="true" 
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full 
								  border-zinc-500 "> {/*circle for icons */}
									{s.icon} 
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl  font-medium duration-150 xl:text-3xl  font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000  ">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					
					))}
				</div>
			</div>
		</div>
	);
}