import React from 'react'
import Image from 'next/image'
import nlwesports from '../public/assets/portfolio/esports.png'
import netfliximg from '../public/assets/portfolio/netflix.png'
import meetAppimg from '../public/assets/portfolio/meetapp.png'
import rockethelpimg from '../public/assets/portfolio/rockethelp.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className="w-full" >
     <div className="max-w-[1240px] mx-auto px-2 py-16" >
        <p className="text-xl tracking-widest uppercase text-[#6ebfb0]" > Projetos </p>
         <h2 h2 className="py-4" > Aplicações desenvolvidas </h2>
        
         <div className="grid md:grid-cols-2 gap-8 " >

            <ProjectItem
            title="Netflix"
            backgroundImg={netfliximg}
            projectUrl='/netflix'
            tecUsed='React JS'
            />

            <ProjectItem
            title="MeetApp"
            backgroundImg={meetAppimg}
            projectUrl='/meetapp'
            tecUsed='Expo | ReactNative'
            />

           <ProjectItem
            title="RocketHelp"
            backgroundImg={rockethelpimg}
            projectUrl='/rockethelp'
            tecUsed='Expo | ReactNative'
            />

            <ProjectItem
            title="Encontre seu Duo"
            backgroundImg={nlwesports}
            projectUrl='/esports'
            tecUsed='React Js'
            />


         </div>



     </div>
    </div>
  )
}

export default Projects