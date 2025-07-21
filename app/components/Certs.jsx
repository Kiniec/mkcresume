
import React from 'react';
import Image from 'next/image';


const Certs = () => {
  return (
   <picture>
   <div> 
        
       <div className='grid grid-cols-2 gap-3  shadow-xl '>
            <div className='w-[150px] perspective-normal duration-1000 transition origin-center hover:rotate-x-360  '>
                <a href="https://www.credly.com/badges/01ab3768-e66e-4d5c-b4cc-5c0f24b7f33a/public_url" 
                target="_blank" 
                title="AWS Certified Cloud Practitioner"> 
                  <Image
                    unoptimized
                    width="150"
                    height="150" 
                    src="/images/cpbadge.PNG"
                    alt='Badge for AWS Cloud Practioner'/> 
                </a> 
            </div>
            <div className=" w-[150px] perspective-normal duration-1000 transition origin-center hover:rotate-z-360">
                <a href="https://www.credly.com/badges/916e444c-bf1f-4c4e-8321-fc62784862d6/public_url" target="_blank" 
                title="AWS Certified Solutions Architect - Associate">
                  <Image
                  unoptimized
                    width="150" 
                    height="150"
                    src="/images/sabadge.PNG"
                    alt="Badge for AWS Certified Solutions Architect"/> 
                 </a>  
            </div>
             <div className=" ml-3 mb-3 w-[150px] perspective-normal duration-1000 transition origin-center hover:rotate-y-360 ">
                <a href="https://www.credly.com/badges/9fd54598-c0b7-4d22-9240-9e8105700bf5/public_url" target="_blank" 
                title="AT&T Technology Academy">
                  <Image
                  unoptimized
                    width="150" 
                    height="150"
                    src="/images/attbadge.PNG"
                    alt="Badge for AT&T Technology Academy"/> 
                 </a>  
            </div>
       </div>
      
    </div>
    </picture>
    

  )
}

export default Certs

  
    
    
    
    
    
    
   

    