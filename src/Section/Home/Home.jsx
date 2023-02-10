import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section id="home" className="Home_section">
      <p className="home_greet">Hi, my name is</p>
      <h1 className="home_heading_1">Kushal</h1>
      <h1 className="home_heading_2">I build things for the web</h1>
      <p className="home_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eos.
        Beatae neque minus deserunt soluta! Error in vitae, atque, incidunt
        dolores ratione excepturi nemo maxime, labore accusamus delectus quaerat
        est?
      </p>
      <a href="#work"></a>
      <button className="home_btn">check out my work </button>
    </section>
  );
};
export default Home;
