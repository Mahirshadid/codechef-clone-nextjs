import React from 'react'
import Image from 'next/image'
import proimg from '../public/pro_illustration.svg'
import './pro.css'

const Pro = () => {
  return (
    <div className='pro' id='students'>
        <div className='pro_img'>
            <Image src={proimg} alt=''
            style={{width:'100%',height:'100%'}} />
        </div>
        <div className='pro_text'>
            <h1>Get CodeChef Pro</h1>
            <h3>Build real world projects based on what you learn with Pro subscription. Unlock special features</h3>
            <a href='https://www.codechef.com/pro?ref=home'><button type='button'>Go Pro</button></a>
        </div>
    </div>
  )
}

export default Pro