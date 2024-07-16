import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        Welcome to my ToDo website! Here, I’ve created a platform that simplifies task management and productivity. Whether you’re a student balancing assignments, a professional managing projects, or simply organizing your daily tasks, this site is designed to make your life easier.
          <br/><br/>
          <strong>What We Offer:</strong>
          <br/><br/>
          • Task Organization: Seamlessly create, categorize, and prioritize your tasks to stay focused and productive.
          <br/><br/>
          • User-Friendly Interface: Designed with simplicity in mind, our intuitive interface ensures smooth navigation and ease of use.
          <br/><br/>
          • Personalization: Customize your ToDo lists to suit your unique needs, whether it’s work-related, personal goals, or collaborative projects.
          <br/><br/>
          <strong>Mission Statement:</strong>
          <br/><br/>

At our website, our mission is to empower individuals and teams to achieve their goals effectively. We believe in the power of organization and aim to provide a tool that not only manages tasks but also enhances productivity and reduces stress.

        </p>
      </div>
    </div>
  );
};

export default About;