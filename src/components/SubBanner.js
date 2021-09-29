import React from 'react';
import "../css/SubBanner.css";

function SubBanner(props) {

    return (
        <div className="sub-banner-container">
            <div class="text-box">
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}

export default SubBanner;
