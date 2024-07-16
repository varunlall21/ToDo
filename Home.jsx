import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        Stay Organized,  <br /> Achieve More!
        </h1>
        <p>
        Streamline Your Day, Simplify Your
        <br />
          Tasks: Organize, Prioritize, Achieve!
        </p>
        <button class="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
