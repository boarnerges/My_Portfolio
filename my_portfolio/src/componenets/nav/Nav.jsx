import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setACtiveNav] = useState('#')
  return (
    <nav>
      <a href = "#" onClick = {() => setACtiveNav('#')} className={ activeNav === '#'? 'active': ''}><AiOutlineHome/></a>
      <a href = "#about" onClick = {() => setACtiveNav('#about')} className={ activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
      <a href = "#experience" onClick = {() => setACtiveNav('#experience')} className={ activeNav === '#experience'? 'active': ''}><BiBook/></a>
      <a href = "#services" onClick = {() => setACtiveNav('#services')} className={ activeNav === '#services'? 'active': ''}><RiServiceFill/></a>
      <a href = "#contact" onClick = {() => setACtiveNav('#contact')} className={ activeNav === '#contact'? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav