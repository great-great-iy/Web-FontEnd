import React, {useState} from 'react';
import "../css/Banner.css";
import { Button } from './Button';

function Banner() {
    const [button] = useState(true);

    return (
        <div className="banner-container">
            <div class="text-box">
                <h1>World's Biggest pages</h1>
                <p>Making website is now one of the easiest thing in the world. You just need to learn HTML, CSS, Javascript and you are good to go.</p>
                {button && <Button buttonStyle="btn--outline">Visit Us To Know More</Button>}
            </div>
        </div>
    );
}

export default Banner;
