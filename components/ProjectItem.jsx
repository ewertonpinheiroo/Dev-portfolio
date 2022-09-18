import React from 'react'
import netfliximg from '../public/assets/portfolio/netflix.png'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, projectUrl , tecUsed }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl  shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#144f61] to-[#6ebfb0] " >
               <Image className='rounded-xl group-hover:opacity-10 ' src={backgroundImg} alt='/' />
                 <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " >
                   <h3 className="text-2xl text-[#0b1b34] tracking-wider text-center" >{title}</h3>
                   <p className="pb-4 text-[#0b1b34] text-center"> {tecUsed} </p>
                   <Link href={projectUrl}>
                      <p className=" w-[190px] text-center py-3 rounded-lg bg-[#0b1b34] text-white font-bold text-lg cursor-pointer" > Mais informações </p>
                   </Link>
                 </div>
             </div>
  )
}

export default ProjectItem