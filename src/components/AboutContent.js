import React, {useState} from 'react';
import { Button } from './Button';
import "../css/AboutContent.css"

function AboutContent() {
    const [button] = useState(true);

    return (
        <div className="about-container">
            <div className="about-row">
                <div className="about-col">
                    <h1>We are the world's largest university</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi atque odit, laborum praesentium provident. Fugiat, quae unde, accusamus eius qui eum aut vero neque sint ducimus porro est harum?</p>
                    <div className="btn-container">
                        {button && <Button buttonStyle="btn--outline">EXPLORE NOW</Button>}
                    </div>
                </div>
                <div className="about-col">
                    <img src="images/about.jpg" />
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
