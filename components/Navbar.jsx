import React, {useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoimg from '../public/assets/code2.png'
import {AiFillGithub, AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg]= useState('#0c1d36')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()
 
  useEffect(()=> {
  if (
    router.asPath === '/netflix' ||
    router.asPath === '/appmeet' 
     ) {
       setNavBg('transparent')
       setLinkColor('#fff')
     } else {
      setNavBg('#0c1d36')
      setLinkColor('#fff')
     }
  },[router])
  
  
  
  const handleNav = () => {
    setNav(!nav)
  }
 
  useEffect(() => {
    const handleShadow = () => {
       if (window.scrolly >=90) {
          setShadow(true);
        } else {
          setShadow(false)
        }
    };
     window.addEventListener('scroll', handleShadow)
  },[] )
 

  return (
    <div
    style={{ backgroundColor: `${navBg}` }}
    className= {shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'} >
         <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16' >
          <Link  href='/#home' >
          <Image 
          src={logoimg}
           alt="/" width="60" height="50"/>
          </Link>
          
         
         <div>
              <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex" >
                   <Link href='/#home'>
                       <li className="ml-10 text-sm uppercase hover:border-b" >Home</li>
                   </Link>
                 
                   <Link href='/#skills'>
                       <li className="ml-10 text-sm uppercase hover:border-b" >Conhecimetos</li>
                   </Link>
                   <Link href='/#projects'>
                       <li className="ml-10 text-sm uppercase hover:border-b" >Projetos</li>
                   </Link>
                   <Link href='/#contact'>
                       <li className="ml-10 text-sm uppercase hover:border-b" >Contato</li>
                   </Link>
              </ul>
              <div onClick={handleNav}  className="md:hidden" >
                 <AiOutlineMenu size={25} />
              </div>
         </div>
       </div>
             <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
               
                <div className={nav
                 ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0c1d36] p-10 ease-in duration-500'
                 : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
              } >
                 <div>
                       <div className="flex w-full items-center justify-between" >
                      <Link href='/#home' >
                      <Image 
                          src={logoimg}
                          alt="/" width="60" height="50" />
                      </Link>
                      
                        
                         <div  onClick={handleNav} className="rounded-full shadow-lg shadow-[#1d7581] p-3 cursor-pointer" >
                          <AiOutlineClose/>
                         </div>
                         </div>
                         <div className='border-b border-[#1d7581] my-3' >
                          <p className="w-[85%] md:w-[90%] py-4 " > Vamos desenvolver algo juntos. </p>
                         </div>
                         </div>
                             <div className="py-3 flex flex-col" >
                               <ul className="uppercase" >
                               <Link  href='/#home' >
                                  <li onClick={() => setNav(false)}  className="py-3 text-sm" >Início</li>
                                </Link>
                            
                                <Link  href='/#skills' >
                                  <li onClick={() => setNav(false)}  className="py-3 text-sm" >Conhecimentos</li>
                                </Link>
                                <Link  href='/#projects' >
                                  <li onClick={() => setNav(false)}  className="py-3 text-sm" >Projetos</li>
                                </Link>
                                <Link  href='/#contact' >
                                  <li onClick={() => setNav(false)}  className="py-3 text-sm" >Contatos</li>
                                </Link>
                               </ul>
                               <div className='pt-20'>
                                <p className="uppercase tracking-widest text-[#1d7581]" > Entre em contato </p>
                               </div>
                               <div className='flex items-center justify-between my-4 w-full sm:[80%] ' >
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

       </div>
  )
}

export default Navbar