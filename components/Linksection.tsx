import React from 'react'
import './linksection.css'

const Linksection = () => {
  return (
    <div className='linksection'>
        <div className='linksection_part1'>
            <div className='link_col'>
                <p className='lch'>Programming Tools</p>
                <div className='link_col-line'></div>
                <p><a href='https://www.codechef.com/ide'>Online IDE</a></p>
                <p><a href='https://www.codechef.com/contests#future-contests'>Upcoming Coding Contest</a></p>
                <p><a href='https://www.codechef.com/hostyourcontest'>Host Your Contest</a></p>
                <p><a href='https://www.codechef.com/problemsetting'>Problem Setting</a></p>
            </div>
            <div className='link_col'>
                <p className='lch'>Learning Resources</p>
                <div className='link_col-line'></div>
                <p><a href='https://www.codechef.com/learn'>Learning Paths</a></p>
                <p><a href='https://www.codechef.com/practice'>Practice Problems</a></p>
                <p><a href='https://discuss.codechef.com/'>CodeChef Discuss</a></p>
                <p><a href='https://www.codechef.com/wiki/faq'>FAQ's</a></p>
            </div>
        </div>
        <div className='linksection_part2'>
            <div className='link_col'>
                <p className='lch'>More</p>
                <div className='link_col-line'></div>
                <p><a href='https://business.codechef.com/'>CodeChef For Business</a></p>
                <p><a href='https://www.codechef.com/contactus'>Contact Us</a></p>
                <p><a href='https://www.codechef.com/codeofconduct'>Code Of Conduct</a></p>
                <p><a href='https://www.codechef.com/rankings'>User Ranklist</a></p>
            </div>
            <div className='link_col'>
                <p className='lch'>Usage Policy</p>
                <div className='link_col-line'></div>
                <p><a href='https://www.codechef.com/privacy-policy'>Privacy policy</a></p>
                <p><a href='https://www.codechef.com/terms'>Terms</a></p>
                <p><a href='https://www.codechef.com/other-policies'>Other Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Linksection