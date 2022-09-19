import React from 'react'
import Image from 'next/image'
import cssimg from '../public/assets/skills/css.png'
import htmlimg from '../public/assets/skills/html.png'
import javascriptimg from '../public/assets/skills/javascript.png'
import expoimg from '../public/assets/skills/expo.png'
import nextimg from '../public/assets/skills/nextjs.png'
import reactimg from '../public/assets/skills/react.png'
import tailimg from '../public/assets/skills/tailwind.png'



const Skills = () => {
  return (
   <div id='skills' className='w-full lg:h-screen p-2' >
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full' >
        <p className='text-xl tracking-widest uppercase text-[#6ebfb0]' > Skills </p>
        <h2 className='py-4' > O que posso fazer </h2>
        <div className= 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 bg-[#10344c]  shadow-lg rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={htmlimg}  
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>HTML</h3>
                 </div>
               </div>
          </div>  

          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={cssimg}  
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>CSS</h3>
                 </div>
               </div>
          </div>  

          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={javascriptimg}  
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>JAVA SCRIPT</h3>
                 </div>
               </div>
          </div>  

          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={reactimg} 
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>REACT JS</h3>
                 </div>
               </div>
          </div>  

          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={nextimg}
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>NEXT JS</h3>
                 </div>
               </div>
          </div>  

          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={expoimg} 
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>EXPO</h3>
                 </div>
               </div>
          </div>  


          <div className='p-6 bg-[#10344c] shadow-xl  rounded-xl hover:scale-105 ease-in duration-300' >
           <div className='grid grid-cols-2 gap-4 justify-center items-center' >
             <div className='m-auto' >
                 <Image
                  src={tailimg}
                  width='64px'
                  height='64px'
                  alt='/'
                 />
                 </div>
                 <div className='flex flex-col items-center justify-center' >
                    <h3>TAILWIND</h3>
                 </div>
               </div>
          </div>  
        </div>
    </div>
   </div>
  )
}

export default Skills