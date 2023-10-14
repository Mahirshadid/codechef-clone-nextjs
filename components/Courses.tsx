"use client";
import React, { useState} from 'react'
import Image from 'next/image';
import './courses.css'

import python from '../public/python.svg'
import java from '../public/java.svg'
import cpp from '../public/cpp.svg'
import sql from '../public/sql.svg'

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
                    <p className='card-desc'>Get hands-on experience and master the basic syntax of Python to jumpstart your coding journey</p>
                    <div className='card-learner-rating'>
                        <p>56.6k+ learners</p>
                        <p className='rating'>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={java} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn Java</h3>
                    <p className='card-desc'>Get hands-on experience in Java programming with this interactive and practical course</p>
                    <div className='card-learner-rating'>
                        <p>35.1k+ learners</p>
                        <p className='rating'>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={cpp} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn C++</h3>
                    <p className='card-desc'>Join this interactive and hands-on C++ course to master the basic syntax of the language</p>
                    <div className='card-learner-rating'>
                        <p>31.7k+ learners</p>
                        <p className='rating'>4.6</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
            </div>

            </div>

        <div className={`courses-ds ${selectedcourses === 'ds' ? 'active' : ''}`} id='ds'>

            <div className='courses-ds-cards'>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={python} alt='' />
                        <p>Intermediate</p>
                    </div>
                    <h3>Logic building in Python</h3>
                    <p className='card-desc'>Learn to solve basic DSA problems using Python's easy to understand and user-friendly syntax</p>
                    <div className='card-learner-rating'>
                        <p>18.1k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={java} alt='' />
                        <p>Intermediate</p>
                    </div>
                    <h3>Logic building in Java</h3>
                    <p className='card-desc'>Utilize Java's object-oriented nature for efficient problem-solving and 
                                            leverage its powerful programming capabilities</p>
                    <div className='card-learner-rating'>
                        <p>16.4k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={cpp} alt='' />
                        <p>Intermediate</p>
                    </div>
                    <h3>Logic building in C++</h3>
                    <p className='card-desc'>Efficiently solve computational problems with the simplicity, versatility, and extensive library support of C++</p>
                    <div className='card-learner-rating'>
                        <p>14.1k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
            </div>

        </div>

        <div className={`courses-da ${selectedcourses === 'da' ? 'active' : ''}`} id='da'>

            <div className='courses-da-cards'>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={sql} alt='' />
                        <p>Beginner</p>
                    </div>
                    <h3>Learn SQL</h3>
                    <p className='card-desc'>Learn how to create, manipulate, and query databases with practical exercises and real-world examples</p>
                    <div className='card-learner-rating'>
                        <p>11.1k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={sql} alt='' />
                        <p>Intermediate</p>
                    </div>
                    <h3>SQL Intermediate</h3>
                    <p className='card-desc'>Learn advanced querying techniques like joins, sub queries and set operations to put yourself on the path to mastery in SQL</p>
                    <div className='card-learner-rating'>
                        <p>2.5k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
                <div className='card'>
                    <div className='card-image-level'>
                        <Image src={sql} alt='' />
                        <p>Intermediate</p>
                    </div>
                    <h3>SQL at Work</h3>
                    <p className='card-desc'>Learn how to use SQL queries to analyze data in your job as business, operations or marketing analyst</p>
                    <div className='card-learner-rating'>
                        <p>1.1k+ learners</p>
                        <p className='rating'>4.5</p>
                        <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
                    </div>
                    <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
                </div>
            </div>

            </div>

            <div className={`courses-wd ${selectedcourses === 'wd' ? 'active' : ''}`} id='wd'>

<div className='courses-wd-cards'>
    <div className='card'>
        <div className='card-image-level'>
            <Image src={python} alt='' />
            <p>Beginner</p>
        </div>
        <h3>Learn HTML / CSS</h3>
        <p className='card-desc'>Want to get started with web development? Start with this beginners course which teaches basic HTML and CSS from scratch</p>
        <div className='card-learner-rating'>
            <p>7.1k+ learners</p>
            <p className='rating'>4.5</p>
            <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
        </div>
        <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
    </div>
    <div className='card'>
        <div className='card-image-level'>
            <Image src={java} alt='' />
            <p>Intermediate</p>
        </div>
        <h3>Web development using JavaScript</h3>
        <p className='card-desc'>Learn DOM events, how to handle user inputs and data structures, incorporate APIs and Sounds as you build your projects.</p>
        <div className='card-learner-rating'>
            <p>500+ learners</p>
            <p className='rating'>4.5</p>
            <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
        </div>
        <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
    </div>
    <div className='card'>
        <div className='card-image-level'>
            <Image src={cpp} alt='' />
            <p>Beginner</p>
        </div>
        <h3>UX for Web developers</h3>
        <p className='card-desc'>This course teaches web developers the basics of creating good user experiences through fundamental design principles</p>
        <div className='card-learner-rating'>
            <p>1.5k+ learners</p>
            <p className='rating'>4.5</p>
            <Image src='https://cdn.codechef.com/images/home/star_icon.svg' height={10} width={10} alt='' />
        </div>
        <a href='https://www.codechef.com/learn?itm_medium=navmenu&itm_campaign=learn'><button type='button'>View this course</button></a>
    </div>
</div>

</div>

        </div>
            </div>

        </div>
    )
}

export default Courses