import { Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from "react-icons/fa"

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
       <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
       <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ankit's</span>
       Web
       </Link>
       <form>
       <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'>
       </TextInput>
       </form>
       <button className='w-12 h-10 lg:hidden' color='gray' pill><AiOutlineSearch/></button>

       <div className='flex gap-2 md:order-2'>
       <button className='w-10 h-10 hidden sm:inline pb-1' color='gray' pill>
          <FaMoon/>
       </button>
       <Link to="/sign-in">
       <button className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
       Sign In
       </button>
       </Link>
       <Navbar.Toggle/>
       </div>

       <Navbar.Collapse>
       <Navbar.Link active = {path === "/"}>
       <Link to="/">
       Home
       </Link>
       </Navbar.Link>

       <Navbar.Link  active = {path === "/about"}>
       <Link to="/about">
       About
       </Link>
       </Navbar.Link>

       <Navbar.Link active = {path === "/project"}>
       <Link to="/project">
       Projects
       </Link>
       </Navbar.Link>
       </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
