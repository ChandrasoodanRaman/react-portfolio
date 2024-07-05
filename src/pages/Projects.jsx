import React from "react";
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css'

import realestate from '../assets/real estate.jpg';
import shoppingcart from '../assets/shopping-cart.jpg';
import trafficsign from '../assets/traffic-sign.jpg';
import weather from '../assets/weather.jpg';
import password from '../assets/password-generator.png';
import github from '../assets/github.jpeg';

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                <ProjectItem
                    name="Real Estate Price Prediction"
                    image={realestate}
                    url="https://github.com/ChandrasoodanRaman/house_price-prediction"
                />
                <ProjectItem
                    name="Online Shopping Cart using Javascript"
                    image={shoppingcart}
                    url="https://github.com/ChandrasoodanRaman/shopping-cart"
                />
                <ProjectItem
                    name="Traffic Sign Recognition using CNN"
                    image={trafficsign}
                    url="https://github.com/ChandrasoodanRaman/Trafficsign-classifier-CNN"
                />
                <ProjectItem
                    name="Weather App using Javascript"
                    image={weather}
                    url="https://github.com/ChandrasoodanRaman/Weather-app"
                />
                <ProjectItem
                    name="Password Generator using ReactJS"
                    image={password}
                    url="https://github.com/ChandrasoodanRaman/react-password-generator"
                />
                <ProjectItem
                    name="Github Profile Finder using ReactJS"
                    image={github}
                    url="https://github.com/ChandrasoodanRaman/react-github-profile-finder"
                />
            </div>
        </div>
    );
}

export default Projects;
