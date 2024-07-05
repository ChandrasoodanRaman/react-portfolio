import React from "react";
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, I am Chandrasoodan R</h2>
                <div className="prompt">
                    <p>An Aspiring Computer Science student with expertise in Machine Learning, Web Development, and Data Visualization. I am currently in my final year of B.Tech CSE (with Specialisation in Artificial Intelligence & DataScience) at SASTRA Deemed University. I have a proven ability to merge technical proficiency with creative problem-solving, and I am passionate about leveraging technology to solve real-world problem</p>
                </div>
            </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Programming Languages</h2>
                        <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer">C++</a>
                        <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="noopener noreferrer"> Python</a>
                        <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noopener noreferrer"> Java</a>
                    </li>
                    <li className="item">
                        <h2>Python Libraries</h2>
                        <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">Numpy</a>
                        <a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">Matplotlib</a>
                        <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">Tensorflow</a>
                        <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">Scikit-Learn</a>
                    </li>
                    <li className="item">
                        <h2>Database</h2>
                        <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">SQL</a>
                    </li>
                    <li className="item">
                        <h2>Data Visualization Tool</h2>
                        <a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">Power BI</a>
                    </li>
                    <li className="item">
                        
                        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener noreferrer"><h2>Machine Learning</h2></a>
                    </li>
                    <li className="item">
                       
                        <a href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" rel="noopener noreferrer">  <h2>Deep Learning</h2></a>
                    </li>
                    <li className="item">
                        <h2>Web Development</h2>
                        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">HTML</a>
                        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer">CSS</a>
                        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">Javascript</a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
