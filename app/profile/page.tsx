"use client";
import   Nav  from "../components/Nav";
import React from "react";
import Activeslider from "../components/Activeslider";
import { Metadata } from "next";




export default function Page(){
    return(
   <div className= "   ">
			 
                           
      <Nav/> 
        <div className=" items-center justify-center h-screen py-60  " >     {/*py-60 used to create padding around swiper */}
          <Activeslider/>
        </div>        
     
     
     
          
				
      
		</div>   //end main div
      
		
	);
}

