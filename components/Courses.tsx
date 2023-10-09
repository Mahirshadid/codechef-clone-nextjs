"use client";
import React, { useState} from 'react'
import './courses.css'

const Courses = () => {

    const [selectedcourses, setselectedcourses] = useState('learn');

    const handlecoursesClick = (courses: string) => {
        setselectedcourses(courses);
    };

    return (

        <div className='courses section__padding'>
            <div className='courses-fixed-contents'>
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
        </div>

        <div className='courses-abs-content'>

        <div className={`courses-learn ${selectedcourses === 'learn' ? 'active' : ''}`} id='learn'>

            

            </div>

        </div>

        </div>
    )
}

export default Courses