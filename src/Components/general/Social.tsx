import React from 'react';
import "./Social.css"

const Social = () => {
    return (
        <div className="social">
            <ul>
                <li><a href={'mailto:s.macwan794@gmail.com'} className="envelope"><i className="fa fa-envelope"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/sachin-macwan-727352163/" className="linkedin" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" href="https://github.com/Sach7n" className="github" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
            </ul>
        </div>
    );
};

export default Social;