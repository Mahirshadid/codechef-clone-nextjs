import React from 'react'
import Image from 'next/image'
import grouppic from '../public/group_picture.png'
import './bluepicsection.css'

const Bluepicsection = () => {
  return (
    <div className='bluepicsection' id='faculty'>
        <div className='gp'>
            <Image src={grouppic} alt='' 
            style={{width:'100%',height:'100%'}}/>
        </div>
        <div className='bps__text'>
            <h1>CodeChef for colleges</h1>
            <h3>Teach industry relevant subjects like Data structures, Algorithms, Web development and SQL to your students.</h3>
            <a href='https://www.codechef.com/college-program?itm_medium=home&itm_campaign=collegeProgram'><button type='button'>Get in touch</button></a>
        </div>
    </div>
  )
}

export default Bluepicsection