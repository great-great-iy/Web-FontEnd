import React, {useState} from 'react';
import { Button } from './Button';
import "../css/AboutContent.css"
import '../App.css';

function AboutContent() {

    return (
        <div className="about-container">
            <div className="about-row">
                <div className="about-col">
                    <h1>We are the world's largest university</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi atque odit, laborum praesentium provident. Fugiat, quae unde, accusamus eius qui eum aut vero neque sint ducimus porro est harum?</p>
                    <div className="btn-container">
                        <a href="" class="hero-btn red-btn">EXPLORE NOW</a>
                    </div>
                </div>
                <div className="about-col">
                    <img src="images/about.jpg" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
