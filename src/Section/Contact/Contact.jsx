import React from "react";
import "./Contact.css";
import Heading from "../../Component/Heading/Heading";
const Contact = () => {
  return (
    <section id="contact" className="contact_section">
      <div className="contact_heading_1">
        <Heading index="04" heading="What's Next " />
      </div>
      <h1 className="contact_heading_2">Get in touch</h1>
      <p className="contact_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        laborum sequi excepturi reiciendis corrupti beatae asperiores voluptas
        maiores, reprehenderit magnam inventore possimus fugiat debitis
        repudiandae quaerat molestias unde optio, perferendis amet sed
        temporibus expedita labore. Impedit eligendi quis quidem sequi!
      </p>

      <a href="mailto:kushalgill00010@gmail.com">
        <button className="contact_btn">Say Hello</button>
      </a>
    </section>
  );
};
export default Contact;
