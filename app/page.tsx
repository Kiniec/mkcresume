
import React from "react";

import backgroundImage from "next/image"




const navigation = [
  { name: "About", href: "/about" },
  { name: "Profile", href: "/profile" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  // { name: "Blog", href: "/blog" },
];


 
export default function Home() {
  return (
 
    <div>
   <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden   ">   {/* dark:bg-gradient-to-tl from-zinc-900/0  via-zinc-900 dark:to-zinc-900/0 */}
           {/*  */}
      
      <div className="  w-screen h-px  duration-1000 animate-collapsible-down  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> {/*Line above name */}
             
            <h1 className="  py-5 px-5 mask-b-to-100% duration-1000  text-4xl  cursor-default  sm:text-4xl md:text-9xl   "> {/* text-shadow-transparent font-display bg-white  text-edge-outline whitespace-wrap bg-clip-text*/}
                Mar Kiniec Carlisle
            </h1>
     <div className=" w-screen h-px duration-1000   animate-accordion-up   bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> {/* Line below name*/}
         
       <div className="my-16 text-center duration-1000 fade-left">
        <h2 className="text-lg     ">
          Life is CI/CD. Always continue to build and improve! 
       </h2>
         </div>
      
         
      
  
    

    </div>
    
  </div>
  );
 
}


{/* /*<nav className="my-16 animate-fade-in duration-1000"> */}
     {/* <ul className="flex items-center justify-center gap-4"> */}
          
          {/* {navigation.map((item) => ( */}
            {/* <Link */}
              {/* key={item.href} */}
              {/* href={item.href} */}
              {/* className="text-lg font-poppins  " */}
            {/* > */}
              {/* {item.name} */}
            {/* </Link> */}
          {/* ))} */}
           {/* <ThemeToggle/>   */}
        {/* </ul> */}
        {/*  */}
      {/* </nav>  */}



      // <div
  // className="hero min-h-screen"
 //style={{
  
   //backgroundImage:
    
   // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
 // }}
//>
{/* <video className="  h-screen  " autoPlay muted loop playsInline> *
      <source src="/images/waves.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
  <div className="overlay"></div>
  <div className=" text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Mar Kiniec Carlisle</h1>
      <p className="mb-5">
        Life is CI/CD. Always continue to build and improve!
      </p>
      {/* <button className="btn btn-primary ">Get Started</button> */}
    {/* </div> */}
  {/* </div> */}
{/* </div>*/} 