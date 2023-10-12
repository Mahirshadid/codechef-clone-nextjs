"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./slidingsection.css";

const Slidingsection = () => {
  const filteredItems = [
    {
      id: 1,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "These are the best problems for beginners. The problems are based on basic logic and definitely, the learner who is a beginner will enjoy solving such problems and will improve day by day. The logic will improve day by day, so later he can solve high-level logic problems. I love CodeChef the most. The platform is best for practicing and learning.",
      username: "ayushagrawal07",
      fullname: "ayushagrawal07",
      region: "India",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
    {
      id: 2,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "This module is excellent for both learning and practicing, as it provides a clear and in-depth understanding of the concepts. It surpasses traditional learning methods by offering a deeper comprehension of the subject.",
      username: "hamidkhan18",
      fullname: "Mahammad Abdul Hamid Khan",
      region: "India",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
    {
      id: 3,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "CodeChef is an excellent platform that offers a wide range of practice questions and conducts exceptional contests. I am grateful to the entire the CodeChef team for their efforts and contributions.",
      username: "anmol_6265",
      fullname: "Anmol Vishwakarma",
      region: "India",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
    {
      id: 4,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "I love coding, and I'm currently searching for the best website to learn from. CodeChef is absolutely awesome, and I really enjoyed using it. Being only 13 years old, I find it difficult to understand programming languages easily, but CodeChef has made learning them a breeze. I truly loved using their website. Thank you so much, CodeChef.",
      username: "dhanushree",
      fullname: "dhanushree",
      region: "India",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
    {
      id: 5,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "These exercises are genuinely helpful. I highly recommend them to anyone who is new to Python programming or has been facing challenges while learning Python. They serve as the best source for practice and skill improvement.",
      username: "saqibyounis",
      fullname: "saqibyounis",
      region: "Pakistan",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
    {
      id: 6,
      img: "https://cdn.codechef.com/images/home/user_deafult.jpg",
      description: "This is a superb platform for beginners. Who has a real enthusiasm for programming? I have revised all the topics necessary for the Java language in this module. It is a very nice platform for a beginner Java user. It helps in practicing Java basic problems. It increases the progress of a beginner.",
      username: "mohinidas",
      fullname: "mohinidas",
      region: "India",
      stars: "https://cdn.codechef.com/images/home/star.svg",
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if(slider){
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if(slider){
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };
  return (
    <>
      <div className="slidingsection">

        <div className="texts">
          <h1>Over 2M Learners</h1>
          <h3>Our learners benefit from our rich repository of courses and practice problems every day.</h3>
        </div>

        <div className="container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">

                  <div className="item-description">
                    <p id="quot">''</p>
                    <p id="desc">{item.description}</p>
                    <img src={item.stars} alt="" />
                  </div>

                  <div className="item-header">
                    <img src={item.img} alt="" />
                    <p className="item-username">{item.username}</p>
                    <p className="item-fullname">{item.fullname}</p>
                    <p className="item-region">{item.region}</p>
                  </div>
                  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Slidingsection;