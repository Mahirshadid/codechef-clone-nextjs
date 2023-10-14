import React from 'react'
import Image from 'next/image'

import './firstlook.css'

import codingboy from '../public/coding_boy.svg'

const Firstlook = () => {
  return (
    <div className='firstlook section__padding'>
        <div className='firstlook__contents'>
            <h1 className='heading'>Start your coding journey
                today
            </h1>
            <h3>Learn to code from scratch with job
                focussed courses designed by experts.</h3>
            
            <div className='firstlook__contents-inputs'>
                <form action='https://www.codechef.com/signup'><input id='email-input' placeholder='Enter email' required />
                <button type='submit'>Start learning today</button></form>
            </div>

            <div className='firstlook__contents-buttons'>
                <h4>or sign up with</h4>
                <a href='https://accounts.google.com'><button type='button' id='googlebtn'><p>Google</p></button></a>
                <a href='https://github.com/login'><button type='button' id='gitbtn'><p>Github</p></button></a>
                <a href='https://www.facebook.com/'><button type='button' id='fbbtn'><p>Facebook</p></button></a>
            </div>
        </div>
            <div className='firstlook__image'>
                <Image src={codingboy} alt='' 
                style={{width:'90%',minWidth:'300px'}}/>
            </div>
    </div>
  )
}

export default Firstlook