import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
 
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-16 w-full' >
            <p className='text-xl tracking-widest uppercase text-[#6ebfb0]' >
              Contato
            </p>
            <h2 className='py-4' > Entre em Contato </h2>
            <div className='grid lg:grid-cols-5 gap-8' >
     
      {/* left */}
         <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4 ' >
           <div className='lg:p-4 h-full' >
               <div>
                  <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://programadoresbrasil.com.br/wp-content/uploads/2020/05/desenvolvedordeapps4.png" alt='/' />
                 </div>
                 <div>
                     <h2 className="py-2" > Ewerton Pinheiro </h2>
                     <p> Desenvolverdor Front-End </p>
                     <p className=" py-4" > Estou disponível para trabalhos freelance e full-time. Envie uma mensagem. </p>
                 </div>
             
                 <div>
                 <p className='uppercase pt-8' > Entre em contato  </p> 
                  <div className='flex items-center justify-between py-4 '>
                  <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiFillGithub/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill/>
                  </div>
               </div>
             </div>
            </div>
            </div>
         {/* left */}
           <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4" >
              <div className='p-4' >
                 
                 <form>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2' >
                       <div className='flex flex-col' >
                         <label className=' uppercase text-sm py-2' >Nome</label>
                          <input className='border-2 rounded-lg p-3 flex border-gray-300'
                           type="text" />
                       </div>

                       <div className='flex flex-col' >
                         <label className=' uppercase text-sm py-2' >Telefone</label>
                          <input className='border-2 rounded-lg p-3 flex border-gray-300'
                           type="text" />
                       </div>
                    </div>

                    <div className='flex flex-col py-2' >
                      <label className='uppercase text-sm py-2 '>Email</label> 
                      <input className='border-2 rounded-lg p-3 flex border-gray-300'
                           type="email" /> 
                    </div>

                    <div className='flex flex-col py-2' >
                      <label className='uppercase text-sm py-2 '>Mensagem</label> 
                      <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' > </textarea> 
                    </div>
                    <button className='w-full p-4 text-gray-100 mt-4' >Enviar mensagem</button>
               </form>
              </div>
              </div>
           </div>

           <div className='flex justify-center py-12' >
             <Link href='/' >
                    <div  className='rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                       <HiOutlineChevronDoubleUp size={30} /> 
                    </div>
             </Link>
           </div>
        </div>
     </div>
  )
}

export default Contact