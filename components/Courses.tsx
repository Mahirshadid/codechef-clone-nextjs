"use client";
import React, { useState} from 'react'
import Image from 'next/image';
import './courses.css'

import python from '../public/python.svg'
import java from '../public/java.svg'
import cpp from '../public/cpp.svg'

const Courses = () => {

    const [selectedcourses, setselectedcourses] = useState('learn');

    const handlecoursesClick = (courses: string) => {
        setselectedcourses(courses);
    };

    return (

        <div className='courses section__padding'>
            <div className='courses-contents'>
            <div className='courses-links_container'>
            <p>
            <a
                href='#learn'
                onClick={() => handlecoursesClick('learn')}
                className={selectedcourses === 'learn' ? 'active' : ''}
            >
                Learn to code
            </a>
            </p>
            <p>
            <a
                href='#ds'
                onClick={() => handlecoursesClick('ds')}
                className={selectedcourses === 'ds' ? 'active' : ''}
            >
                Data Structures
            </a>
            </p>
            <p>
            <a
                href='#da'
                onClick={() => handlecoursesClick('da')}
                className={selectedcourses === 'da' ? 'active' : ''}
            >
                Data Analytics
            </a>
            </p>
            <p>
            <a
                href='#wd'
                onClick={() => handlecoursesClick('wd')}
                className={selectedcourses === 'wd' ? 'active' : ''}
            >
                Web Development
            </a>
            </p>
        </div>

        <div className='courses-links-line'></div>

        <div className='courses-abs-content'>

        <div className={`courses-learn ${selectedcourses === 'learn' ? 'active' : ''}`} id='learn'>

            <div className='courses-learn-cards'>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={python} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn Python</h3>
                    <p>Get hands-on experience and master the basic syntax of Python to jumpstart your coding journey</p>
                    <div className='card-learner-rating'>
                        <p>56.6k+ learners</p>
                        <p>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <button type='button'>View this course</button>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={java} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn Java</h3>
                    <p>Get hands-on experience in Java programming with this interactive and practical course</p>
                    <div className='card-learner-rating'>
                        <p>35.1k+ learners</p>
                        <p>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <button type='button'>View this course</button>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={cpp} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn C++</h3>
                    <p>Join this interactive and hands-on C++ course to master the basic syntax of the language</p>
                    <div className='card-learner-rating'>
                        <p>31.7k+ learners</p>
                        <p>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <button type='button'>View this course</button>
                </div>
            </div>

            </div>

        </div>
            </div>

        </div>
    )
}

export default Courses