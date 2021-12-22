import React, {useState, useEffect} from 'react';
import "../css/Banner.css";
import { Button } from './Button';

function Banner() {
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);
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
