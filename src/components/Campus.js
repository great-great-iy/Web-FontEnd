import React from 'react';
import "../css/Campus.css";
// import {london} from 'images/london.png';

function Campus() {
    return (
        <div className="campus-container">
            <h1>Our Global Campus</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="campus-row">
                <div class="campus-col">
                    <img src="images/london.png" alt="LonDon"/>
                    <div class="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>    
                <div class="campus-col">
                    <img src="images/newyork.png" alt="NewYork"/>
                    <div class="layer">
                        <h3>NEWYORK</h3>
                    </div>
                </div>      
                <div class="campus-col">
                    <img src="images/washington.png" alt="Washington"/>
                    <div class="layer">
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campus;
