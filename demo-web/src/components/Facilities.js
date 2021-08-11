import React from 'react';
import '../css/Facilities.css';

function Facilities() {
    return (
        <div className="facilities-container">
            <h1>Our Facilities</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="facilities-row">
                <div class="facilities-col">
                    <img src="images/library.png" alt="Library"/>
                    <h3>World Class Library</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus amet, cum doloremque reprehenderit veniam tempora repellat quisquam officia illum iste voluptatum, dolorem non a et similique ab! Cum, pariatur.</p>
                </div>
                <div class="facilities-col">
                    <img src="images/basketball.png" alt="Basketball"/>
                    <h3>Lagest Play Ground</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus amet, cum doloremque reprehenderit veniam tempora repellat quisquam officia illum iste voluptatum, dolorem non a et similique ab! Cum, pariatur.</p>
                </div>
                <div class="facilities-col">
                    <img src="images/cafeteria.png" alt="Cafeteria"/>
                    <h3>Tasty and Healthy Food</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus amet, cum doloremque reprehenderit veniam tempora repellat quisquam officia illum iste voluptatum, dolorem non a et similique ab! Cum, pariatur.</p>
                </div>
            </div>
        </div>
    );
}

export default Facilities;
