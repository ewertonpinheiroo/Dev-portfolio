import Image from 'next/image'
import netfliximg from '../public/assets/portfolio/netflix.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import React from 'react'
import Link from 'next/link'

const netflix = () => {
  return (
    <div className='w-full' >
        <div className='w-screen h-[30vh] lg:h-[40vh] relative ' >
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' ></div>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={netfliximg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ' >
              <h2 className='py-2' > Netflix Clone </h2>
              <h3> React JS / tailwind / Firebase </h3>
            </div>
          </div>
       
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
            <div className='col-span-4' >
               <p>Projeto</p>
               <h2>Descrição</h2>
               <p className='py-2' > Essa aplicação foi desenvolvida usando React JS e está
                  hospedada no firebase. Contendo autenticação de usuário 
                  e uso do firestore database. Usando a API TMDB para listar 
                  os filmes usando o axios.
                 </p>
                 <Link href='https://netflix-29f0e.web.app/' >
                 <button className='px-8 py-2 mt-4 mr-8' >Demo</button>
                 </Link>
                 <Link href='https://github.com/ewertonpinheiroo/Netflix-clone' >
                 <button className='px-8 py-2 mt-4' >Code</button>
                 </Link>
                
                 
            </div>
               <div className='col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4' >
                 <div className='p-2'>
                   <p>Tecnologias </p>
                   <div className='grid grid-cols-3 md:grid-cols-1' >
                    <p className='py-2 flex items-center' >
                       <RiRadioButtonFill className='pr-1' />React</p>
                       <p className='py-2 flex items-center' >
                       <RiRadioButtonFill className='pr-1' /> Tailwind</p>
                       <p className='py-2 flex items-center' >
                       <RiRadioButtonFill className='pr-1' /> Javascript</p>
                       <p className='py-2 flex items-center' >
                       <RiRadioButtonFill className='pr-1' /> Firebase</p>
                   </div>
                 </div>
                </div>
                <Link href='/#projects' >
                 <p className='underline cursor-pointer' >Voltar</p>
                </Link>
          </div>

     </div>
  )
}

export default netflix