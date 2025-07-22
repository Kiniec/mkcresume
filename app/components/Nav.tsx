"use client";

import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./Theme-Toggle";

 const Nav  = () => { //React.FC
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
		
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-3xl duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				
				
				<div className="container  flex flex-row-reverse  justify-center  py-5 mx-auto mx-w-md">
					
					<div className="flex justify-between gap-3 sm:gap-7">
						<Link
						href="/" /* for return to home page*/
						className="duration-200  "
					>
						 <CircleChevronLeft className="w-6 h-6 " />  
						

						
					</Link>
						<Link
							href="/about"
							className="duration-200   " title="About"
						>
							About
						</Link>
						<Link
							href="/profile"
							className="duration-200  "   title="Profile" 
						>
							Profile 
						</Link>
						<Link
							href="/projects"
							className="duration-200   " title="Projects"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 " title="Contact"
						>
							Contact
						</Link>
						{/* <Link */}
							{/* href="/blog" */}
							{/* className="duration-200 text-zinc-400 hover:text-zinc-100" */}
						{/* > */}
							{/* Blog */}
						{/* </Link> */}

						<div>
						     <ThemeToggle/> 
					</div>
						
					</div>

					
					
					
					
				</div>
				
			</div>
		</header>
	);
};
export default Nav