import React from "react";
import Heading from "../../Component/Heading/Heading";
import Photo from "../About/pass.jpg";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className="about_container">
        <div className="about_left">
          <p className="about_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            tempora non quo tenetur consectetur, explicabo odit quod cum ipsum
            ut quia exercitationem quae esse cumque modi animi atque inventore
            assumenda.
          </p>
          <p className="about_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptate quaerat at fugit repellat velit natus vitae consectetur
            minus adipisci quis, numquam voluptas. Molestiae possimus blanditiis
            itaque excepturi enim fuga voluptatibus nisi in voluptas quaerat
            voluptates, earum vero dignissimos culpa!
          </p>
        </div>
        <div className="about_right">
          <img src={Photo} alt="profile_img" className="about_profile_img" />
          <div className="about_img_border"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
