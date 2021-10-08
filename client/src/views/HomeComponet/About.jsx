import React from 'react';

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, numquam ab accusamus provident in dolorum similique voluptate odio ratione nobis? Obcaecati quam explicabo aspernatur, perferendis id suscipit voluptates dolorem soluta ipsam? Commodi dignissimos fuga nostrum.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;
