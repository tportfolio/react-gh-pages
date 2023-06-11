import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "react-fade-in";

import ExternalLinks from "./tabs/ExternalLinks";
import "./MainContainer.css";

import profilePicture from "./res/photo.jpg";
import squareLogo from "./res/square_logo.png";

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
                <Container id="container">
                    <Row>
                        <Col sm={4}>
                            <img src={profilePicture} id="pic" alt="Portrait" />
                        </Col>
                        <Col sm={8}>
                            <h1>timothy portfolio</h1>
                            <p> 
                                software engineer (L5) at   
                                <a href={"https://squareup.com/"}>
                                    <img src={squareLogo} id="logo" alt="Square Logo" />
                                </a>
                            </p>
                            <hr />
                            <ExternalLinks />
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        );
    }
}
