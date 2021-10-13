import React, { useState } from 'react';
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    DescriptionTwoTone as DescriptionTwoToneIcon
} from '@mui/icons-material';
import Button from '@mui/material/Button';

import "./ExternalLinks.css";
import pdf from '../res/resume.pdf';

const buttons = [
    {
        icon: GitHubIcon,
        color: "black",
        url: "https://github.com/tportfolio",
        id: "github"
    },
    {
        icon: LinkedInIcon,
        color: "#0072b1",
        url: "https://linkedin.com/in/tportfolio/",
        id: "linkedin"
    },
    {
        icon: DescriptionTwoToneIcon,
        color: "rgb(217, 47, 47)",
        url: pdf,
        id: "resume"
    }
];

const ExternalLinks = () => {
    const hoveredColor = "rgb(212, 195, 147)";
    const [hovered, setHovered] = useState(null);
    
    return (
        <div id="icons">
            {buttons.map(({ icon: Icon, color, id, url }) => (
                <Button
                    className="button"
                    key={id}
                    variant="contained"
                    component="label"
                    style={{ margin: "5px" }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <a href={url}>
                        <Icon
                            id={id}
                            style={{
                                color: id === hovered ? hoveredColor : color,
                                fontSize: "3.25em",
                                margin: "5px"
                            }}
                        />
                    </a>
                </Button>
            ))}
        </div>
    );
}

export default ExternalLinks;