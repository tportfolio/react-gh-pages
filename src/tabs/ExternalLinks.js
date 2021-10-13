import React from 'react';
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
        color: "#rgb(217, 47, 47)",
        url: pdf,
        id: "resume"
    }
];


const ExternalLinks = () => {
    return (
        <div id="icons">
            {buttons.map(({ icon: Icon, color, id, url }) => (
                <Button
                    className="button"
                    key={id}
                    variant="contained"
                    component="label"
                    style={{ margin: "5px" }}
                >
                    <a href={url}>
                        <Icon
                            id={id}
                            style={{
                                margin: "5px",
                                color,
                                fontSize: "3.25em"
                            }}
                        />
                    </a>
                </Button>
            ))}
        </div>
    );
}

export default ExternalLinks;