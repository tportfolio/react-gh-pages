import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import ExternalLinks from './tabs/ExternalLinks';
import './MainContainer.css';

import profilePicture from "./res/photo.jpg";

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIsReady: false
        };
    }

    // to alleviate image loading issue, use React state: https://stackoverflow.com/a/54096513
    componentDidMount() {
        const img = new Image();
        img.src = profilePicture;

        img.onload = () => {
            this.setState({ imageIsReady: true });
        }
    }

    render() {
        const { imageIsReady } = this.state;
        if (!imageIsReady) {
            return null;
        }

        return (
            <FadeIn>
                <Container className="container">
                    <Row>
                        <Col sm={4}>
                            <img src={profilePicture} className="pic" alt="Portrait" />
                        </Col>
                        <Col sm={8}>
                            <h1>timothy portfolio</h1>
                            <p>software engineer iii | boeing</p>
                            <hr />
                            <ExternalLinks />
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        );
    }
}
