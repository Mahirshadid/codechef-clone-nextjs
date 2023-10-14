import React from 'react'
import Image from 'next/image'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='cc_link'>
            <p><a href='https://www.codechef.com/'>www.codechef.com</a></p>
        </div>
        <div className='icon_container'>
            <p>Follow Us</p>
            <div className='ic_socials'>
                    <a href='https://youtube.com/c/codechef1'>cc</a>
                    <a href='https://t.me/learncpwithcodechef'>cc</a>
                    <a href='https://facebook.com/CodeChef'>cc</a>
                    <a href='https://instagram.com/codechef'>cc</a>
                    <a href='https://twitter.com/codechef'>cc</a>
                    <a href='https://medium.com/codechef-official'>cc</a>
                    <a href='https://quora.com/topic/CodeChef'>cc</a>
                    <a href='https://linkedin.com/company/codechef'>cc</a>
            </div>
        </div>
    </div>
  )
}

export default Footer