"use client";
import   Nav  from "../components/Nav";

import Activeslider from "../components/Activeslider";


export default function Profile(){
    return(
   <div className= "   ">
			 
                           
      <Nav/> 
        <div className=" items-center justify-center h-screen py-60  " >     {/*py-60 used to create padding around swiper */}
          <Activeslider/>
        </div>        
     
     
     
          
				
      
		</div>   //end main div
      
		
	);
}

