"use clients";
import React from 'react';
import Image from "next/image"



const Avatar = () => {
  return (
    <div className=''>
		
    <div className=" mt-5 ml-30 avatar  w-[600pt] h-[200pt] sm:w-[600pt] sm:h-[px] rounded-2xl">
		
      <div className=" rounded-full shadow-zinc-400 shadow-xl  ring-white ring-offset-base-200 w-40 h-60 ring ring-offset-2" title='Mar Kiniec Carlisle'>
        
        
      <Image 
      unoptimized
        
        width={20}
        height={20}
         src="/images/profile.PNG"
         alt="Picture of Author"/>
        
      </div> 
    </div>
    </div>
  )
}

export default Avatar;

/*div className=" mt-5 ml-30 avatar  w-[600pt] h-[200pt] sm:w-[600pt] sm:h-[px] rounded-2xl">
		
      <div className="  shadow-white shadow-2xl  ring-white ring-offset-base-200 w-40 rounded-2xl ring ring-offset-2" title='Mar Kiniec Carlisle'> */
        
        