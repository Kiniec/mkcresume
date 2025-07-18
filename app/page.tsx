import Link from "next/link";
import React from "react";
import Particles from "./components/Particles";
import ThemeToggle from "./components/Theme-Toggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Profile", href: "/profile" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  // { name: "Blog", href: "/blog" },
];


 
export default function Home() {
  return (
  
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden   ">   {/* dark:bg-gradient-to-tl from-zinc-900/0  via-zinc-900 dark:to-zinc-900/0 */}
             {/*  */}
      <nav className="my-16 animate-fade-in duration-1000">
        <ul className="flex items-center justify-center gap-4">
          
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-poppins  "
            >
              {item.name}
            </Link>
          ))}
           <ThemeToggle/>  
        </ul>
        
      </nav>
          
        <div className="  w-screen h-px  duration-1000 animate-collapsible-down bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> {/*Line above name */}
             <Particles
                      className="absolute inset-0 -z-10 zoom-in-100  "
                      quantity={2000}
                      /> 
              <h1 className="  py-5 px-5 mask-b-to-100%  text-5xl  dark:text-zinc-200  cursor-default  sm:text-6xl md:text-9xl   "> {/* text-shadow-transparent font-display bg-white  text-edge-outline whitespace-wrap bg-clip-text*/}
                  Mar Kiniec Carlisle
              </h1>
               
          <div className=" w-screen h-px duration-1000   animate-accordion-up bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> {/* Line below name*/}
         
         <div className="my-16 text-center duration-1000 fade-left">
          <h2 className="text-lg    font-poppins dark:text-zinc-400 dark:hover:text-white ">
           Life is CI/CD. Always continue to build and improve!
          </h2>
          </div>
      
         
      
  
    

    </div>
    
  );
 
}
