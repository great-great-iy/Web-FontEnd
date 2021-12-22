import React, {useState} from 'react';
import "../css/Banner.css";
import { Button } from './Button';

function Banner() {
    const [button] = useState(true);

    return (
        <div className="banner-container">
            <div class="text-box">
                <h1>World's Biggest pages</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                {button && <Button buttonStyle="btn--outline">Visit Us To Know More</Button>}
            </div>
        </div>
    );
}

export default Banner;
