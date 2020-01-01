import React from 'react';
import './MainContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import ExternalLinks from './tabs/ExternalLinks';
import profilePicture from "./res/photo.jpg";

const MainContainer = () => {
    return (
        <Jumbotron>
            <FadeIn>
                <img src={profilePicture} className="pic" alt="Portrait"/>
                <h1>timothy portfolio</h1>
                <p>software engineer ii | boeing</p>
                <hr/>
                <ExternalLinks/>
            </FadeIn>
        </Jumbotron>
    );
}

export default MainContainer;
