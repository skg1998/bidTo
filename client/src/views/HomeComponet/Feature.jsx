import React from 'react';
import FeatureBox from './FeatureBox';
import feature1 from './Image/feature_1.png';
import feature2 from './Image/feature_2.png';
import feature3 from './Image/feature_3.png';


function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={feature1} title="Gap b/w user and buyer" contant="Identify the gap between buyer and seller for unique and odd things."></FeatureBox>
                <FeatureBox image={feature2} title="Secure Transaction" contant="To implement a secure and fast platform for secure transactions between buyer and seller"></FeatureBox>
                <FeatureBox image={feature3} title="Private and Pubic Bidding" contant="private and public bidding"></FeatureBox>
            </div>
        </div>
    )
}

export default Feature;
