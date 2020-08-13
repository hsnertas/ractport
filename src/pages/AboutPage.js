import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Hasan.Motivated, fast learner who dedicated individual with vast
          knowledge and experience in the field of engineering. Looking to work
          as a web developer. I am a hardworking, honest individual. I am a good
          timekeeper, always willing to learn new skills. I am friendly, helpful
          and polite, have a good sense of humour. I am able to work
          independently in busy environments and also within a team setting. I
          am outgoing and tactful, and able to listen effectively when solving
          problems.
        </p>
        <p> <strong>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</strong></p>
                   <div className="social-links">

                       <a href="https://www.linkedin.com/in/hasan-erta%C5%9F-926869138/" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                       </a>
                     
                       <a href="https://github.com/hsnertas" rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-github-square"></i>
                       </a>
                       <a href="https://drive.google.com/file/d/1aNsX8G9cUhRyzc1oxvQlZkyvc66Q1wBV/view?usp=sharing" download rel="noopener noreferrer" target="_blank">
                       <i className="fa fa-download"></i>
                       </a>
                       </div>
      </Content>
    </div>
  );
}

export default AboutPage;
