import React from 'react'
import Image from 'next/image'
import './startlearning.css'
import sl from '../public/learn_content_abs.png'

const Startlearning = () => {
  return (
    <div className='startlearning section__padding'>
        <h1>Write your first code with us. ✨</h1>
        <a href='https://www.codechef.com/learn?itm_medium=home&itm_campaign=learn'><button type='button'> Start learning today <i className='sparkIcon'>iii</i></button></a>
        <Image src={sl} 
        style={{width:'85%',height:'85%'}} alt='' />
    </div>
  )
}

export default Startlearning