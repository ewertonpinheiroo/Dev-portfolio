import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center" >
     <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center " >
        <div>
            <p className="uppercase text-sm tracking-widest text-[#6ebfb0] " >
              VAMOS DESENVOLVER ALGO JUNTOS
            </p>
            <h1 className="py-4">
                Olá, eu sou<span className="text-[#73b3a5]" > Ewerton Pinheiro </span>
            </h1>
            <h1 className='py-2 text-[#7ea0c1] ' >
                Desenvolvedor Front-End Web | Mobile
            </h1>
            <p className="py-4 max-w-[70%] m-auto ">
            Sou desenvolvedor front-end web e mobile freelancer, usando os frameworks React js e React Native.
            Tenho experiencia em design grafico que me auxilia  no desenvolvimento de interfaces 
            responsivas , fluidas , modernas e de alta qualidade. Por enquanto aprendendo tecnologias Back-End.
            </p>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                 <Link href='https://www.linkedin.com/in/ewerton-pinheiro-953b94163/'>
                 <div  className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn/>
                  </div>
                 </Link>
                 <Link href='https://github.com/ewertonpinheiroo' >
                 <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiFillGithub/>
                  </div>
                 </Link>
                  
                  <Link href='mailto:ewertonpinheiroluz@gmail.com' >
                  <div  className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail/>
                  </div>
                  </Link>
                 <Link href='https://wa.me/5592981299699' >
                 <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineWhatsApp/>
                  </div>
                 </Link>
                 
             </div>
        </div>
     </div>
    </div>
  )
}

export default Main