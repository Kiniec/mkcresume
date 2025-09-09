import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
import '../css/customswiper.css'
import {FreeMode, Pagination, Scrollbar, Mousewheel, Navigation,EffectFlip} from 'swiper/modules'

import { FaAws, FaJava, FaPython, FaHtml5, FaGithub, FaLinux, FaReact,} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAwslambda, SiMysql, SiIntellijidea, SiYaml, SiEclipseide} from "react-icons/si";
import   Certs  from "./Certs.jsx"
import { Card } from './Card.tsx';



 const activeslider = () => {

  


  return (
    <div className= 'flex flex-col items-center justify-center mx-auto max-h-md  '> 
   
   
    
    <Swiper
   
        breakpoints={{
          
           340: {
               slidesPerView: 1, 
               spaceBetween: 15,
              },
             640: {
               slidesPerView: 2, 
               spaceBetween: 15,
              },
               1024: {
               slidesPerView: 3, 
               spaceBetween: 15,
              },
              1536: { 
                slidesPerView: 3,
                spaceBetween: 15,
            }
            }}
            //effect= {'flip'}
            loop={true}
            navigation={true}
            scrollbar={true}
            mousewheel= {true}
            freeMode={true}
            
            pagination={{
                clickable: true 
                }}
            modules={[FreeMode, Pagination, Mousewheel, Scrollbar, Navigation,]}
            
            className=' max-h-[90%] max-w-[75%]  '
           
            >

          
             <SwiperSlide >
              
                    
                <Card>
                  <div className='h-130  mx-auto py-10'>
                          <h2  className=" divider  font-medium  xl:text-3xl  font-poppins "> Professional Summary</h2 > 
                                        <div className=" flex px-5   justify-center items-center font-poppins  ">
                                              Highly motivated, passionate, and results-driven technology professional with a strong interest in cloud technologies, 
                                               software development and cloud architecture. 
                                              Dedicated to building resilient services leveraging certifications as a Certified AWS Cloud Practitioner and Certified AWS Solutions Architect Associate.  
                                              Committed to contributing to meaningful innovative solutions through problem-solving, leadership, and strong analytical skills. 
                                                A keen interest in the continuous learning of leadership techniques, best practices, cloud services and security of the cloud.  
                                       
                                        </div>                
                  
                    </div>
                    </Card>
                    
              </SwiperSlide>
             
                     
                  <SwiperSlide >
                    <Card>
                       <div className='h-130 mx-auto py-10 font-poppins '>
                    
                            <h2  className="  divider lg:text-xl font-medium  xl:text-3xl  "> Education </h2 > 
                                          <div className='lg:text-lg justify-center items-center lg:h-90  '>
                                          <h3 className='font-bold italic px-5'> Bachelor of Arts in Information Technology </h3>
                                          <h4 className='font-thin italic px-5'>University of North Texas at Dallas | Dallas,Tx | Expected May 2026 </h4> 
                                          
                                        
                                          
                                          <h2  className=" font-bold divider  "> Coursework </h2 > 
                                          <h1 className='px-5 font-poppins text-lg'> Introduction to Java Programming and Data Structures | Data Structures and Algorithms | 
                                            Computer Science l & ll | IT Project Management | Software Engineering | Datase System Designs </h1> 
                                            </div>  
                                        
                      </div>
                    </Card>
              </SwiperSlide>

                <SwiperSlide >
                  <Card>

                  <div className=' h-130 mx-auto overflow-y-auto py-10'>
                    
                    <h2 className="  divider lg:text-xl font-medium  xl:text-3xl font-poppins ">Work Experience </h2>
                                     
                                     <div className=' lg:text-lg justify-center items-center lg:h-90 px-5  '>
                                      <h3 className='font-bold italic'> IT Project Coordinator - Internship, <abbr title="The Project Management Society"> TPMS </abbr> </h3> 
                                          <h4 className='font-thin italic' > Houston, TX (Remote) 01/2025- Present </h4>
                                          <ul className="list-disc list-inside indent-4 "> 
                                            <li> Coordinate planning, task tracking, and meeting logistics for internal and client projects.</li>
                                              <li>Maintain project documentation including timelines, action items, and status reports.</li>  
                                              <li>Collaborate with leadership to prioritize tasks across multiple strategic initiatives.</li>
                                              <li>Participate in strategy and alignment meetings, capturing key insights and translating them into action. </li>    
               
                                             
                                          </ul>
                                          &nbsp;&nbsp;
                                      <h3 className='font-bold italic'> Parcel Delivery Cover Driver, <abbr title="United Parcel Services"> UPS </abbr> </h3> 
                                      <h4 className='font-thin italic' >  Dallas, Texas 08/2017- 01/2025 </h4>
                                      <ul className="list-disc list-inside indent-4 text-wrap"> 
                                        <li> Mentor incoming seasonal employees leading to a 30% increase in productivity of seasonal staff.</li>
                                          <li>Efficiently manage daily routes using Orion and ED delivery systems, achieving a 99% accuracy rate on time-sensitive deliveries.</li>  
                                          <li>Successfully use Orion and ED delivery management system to efficiently complete assigned daily routes for planned scheduled driver day.  </li>
                                          <li>Adhere to scheduled deadlines for time-sensitive deliveries with 99% accuracy rate.</li>   
                                          <li>Service 200 residential and commercial accounts daily while providing outstanding customer service. </li> 
                                      </ul>
                                      </div>
                                    
                    </div>
                    </Card>
              </SwiperSlide>
              <SwiperSlide >
                <Card>
                  <div  className='h-130 mx-auto py-10 font-poppins'>
                    
                    <h2 className=" divider lg:text-xl font-medium  xl:text-3xl "> Community Engagement </h2>
                                              <div className='lg:text-xl justify-center items-center lg:h-90  px-5'>
                                              <h3 className='font-bold italic text-xl'> Vulnerable Population Meal Distribution, <abbr title="Visiting Nurse Associaiton of Texas Meals on Wheels ">VNA </abbr>  </h3> 
                                              <h4 className='font-thin italic' >  Dallas, Texas 08/2017- Present </h4>
                                                <ul className="list-disc list-inside indent-4 text-wrap"> 
                                                  <li> Provide scheduled hot and cold nutritious meals to 50 homebound seniors and people with disabilites bi-weekly.</li>
                                                  <li> Conduct wellness checks and report any concerns if clients are having problems.</li>  
                                                </ul>
                                                </div>
                    </div>
                    </Card>
              </SwiperSlide>
                <SwiperSlide >
                  <Card className="">
                  <div className=' h-130 mx-auto py-10'>
                    
                   <h2 className="  divider lg:text-xl font-medium  xl:text-3xl "> Tech Stack </h2>
                                     <div className=' '>
                                                              
								
                                                                <div className="mt-15 ml-4 mb-5 grid grid-cols-4 gap-10 " >    
                                                                     
							
                                                                      <FaAws size={40} className=' border rounded-full' title='AWS'/> 
                                                                      <FaGithub size={40}  className='border rounded-full ' title="GitHub"/> 
                                                                       <FaJava size={40} className='border rounded-full 'title="Java"/>

                                                                       <FaLinux size={40} className=' border rounded-full 'title=" Linux"/> 
                                                                       <FaPython size={40}className='border rounded-full 'title="Python" />
                                                                       <FaReact  size={40} className='border rounded-full'title ="Lambda" />
                                                                         
                                                                      <SiEclipseide size={40} className='border rounded-full ' title="EclipseIDE"/>
                                                                       <SiIntellijidea size={40}className='border rounded-full'title="Intellij IDEA"/>
                                                                       <SiMysql  size={40} className=' border rounded-full'title="MySQL"/> 
                                                                       <SiYaml  size={40} className='border rounded-full'title="YAML"/> 
                                                                       <RiNextjsFill size={40} className='border rounded-full'title="NEXTjs"/>
                                                                       
                                                               </div> 
                                                      </div>
                    </div>
                    </Card>
              </SwiperSlide>
                <SwiperSlide >
                  <Card>
                  <div className='h-130 mx-auto py-10 '>
                    
                    <h2 className="   divider lg:text-xl font-medium duration-150 xl:text-3xl  "> Certificaitons </h2>
                                                      
                                                          <span className="z-30 ml-10  " >
                                                            <Certs/>
                                                          </span>
                    </div>
                  </Card>
              </SwiperSlide>
              
              
                 
           
    </Swiper>
            

    </div>
  )
}
export default activeslider 


/*{ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                  <div className=' flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-250 w-215 lg:h-400 lg:w-350'>
                    </div>
              </SwiperSlide>
                     
                  ))}

                  
           
    </Swiper>

     relative shadow-lg text-white bg-amber-900 rounded-xl px-1 py-1 h-100 w-100
    
    </div> */