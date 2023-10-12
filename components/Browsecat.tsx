import React from 'react'
import Image from 'next/image'
import './browsecat.css'

import pi from '../public/practice_img.png'
import li from '../public/learn_img.png'

const Browsecat = () => {
  return (
    <div className='browsecat section__padding'>
        <div className='bc__section1'>
            <div className='bc__section-tb'>
                <h2>Learning courses</h2>
                <h1>Practical, Job relevant topics</h1>
                <h2>From Python to web development, you'll master <span>concepts that employers demand</span>, ensuring your smooth transition from beginner to professional.</h2>
                <button type='button'>Browse Catalog</button>
            </div>
            <div className='bc__section-img'>
                <Image src={pi} alt='' style={{width:'100%', height:'100%'}} />
            </div>
        </div>

        <div className='bc__section2'>
            <div className='bc__section-img'>
                <Image src={li} alt=''  style={{width:'100%', height:'100%'}} />
            </div>
            <div className='bc__section-tb'>
                <h2>In Browser IDE</h2>
                <h1>Hands-on Learning Experience</h1>
                <h2>Practice as you learn with our <span>built-in IDE</span>. Each lesson is designed to be followed by a coding exercise to apply the concepts and gain immediate feedback.</h2>
                <button type='button'>Try a lesson</button>
            </div>
        </div>
    </div>
  )
}

export default Browsecat