

import { Card } from "../components/Card";
import * as React from "react";
import Avatar from "../components/Avatar";









export default function about() {
  return (
    
        
      <div className="   "> 
           <div className="    " />
                     
      
           <div className="container  grid-cols-1 flex items-center justify-center mt-10 min-h-screen mx-auto mx-w-md">
				<div className=" py-10  ml-5 mr-5  item-center justify-center mx-w-md ">
            
                
                <Card>
                    <div className=" container  grid grid-cols-1 items-center justify-center  px-5 mx-auto max-w-md ">
                        <div className=" py-5"><Avatar/>
                        </div>
                        
                        <div>
                            <h1 className=" divider font-bold text-4xl font-  "> About </h1>
                            <p className="text-xl font-poppins   "> 
                            Hello! Thank you for visiting my page! I am a cloud enthusist who loves to learn. My journey started with a simple curious thought that set off a chain of events that has led me here!
                        I have grown from being curious about cloud computing to being able to host resources in a <abbr title="Virtual Private Cloud"> VPC </abbr>, writing in multiple programming languages, and building cloud projects. 
                        I&apos;m passionate about cloud technology. I am eager to continue developing and cultivating skills towards my career goals! 
                        
                    </p>
                        </div>
                        </div>
                </Card>
                </div>
            </div>
           
        </div>


       
         
     
  );
}
