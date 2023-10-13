import React from 'react'
import Image from 'next/image'
import './gifsection.css'
import gif from '../public/learn-animation.gif'

const Gifsection = () => {
  return (
    <div className='gifsection section__padding'>
      <div className='gifsection__header'>
        <h1>Start from scratch, Build up expertise ✨</h1>
        <h3>We are more than just course providers. We guide you through 
          all four stages of learning and evaluation.</h3>
      </div>
      <div className='gifsection__body'>
        <div className='body__ticks'>
          <div className='body__ticks-line'></div>
              <h3><Image src='https://cdn.codechef.com/images/home/greeb_tick.svg'
              height={17} width={17} style={{margin: '0 5px'}} alt='' />   Learn from Courses</h3>
              <h3><Image src='https://cdn.codechef.com/images/home/greeb_tick.svg'
              height={17} width={17} style={{margin: '0 5px'}} alt='' />   Practice daily</h3>
              <h3><Image src='https://cdn.codechef.com/images/home/greeb_tick.svg'
              height={17} width={17} style={{margin: '0 5px'}} alt='' />   Assess your progress</h3>
              <h3><Image src='https://cdn.codechef.com/images/home/greeb_tick.svg'
              height={17} width={17} style={{margin: '0 5px'}} alt='' />   Share with the world, repeat</h3>
        </div>
        <div className='body__gif'>
          <Image src={gif} alt='' style={{width:'85%', height:'85%'}}/>
        </div>
      </div>
    </div>
  )
}

export default Gifsection