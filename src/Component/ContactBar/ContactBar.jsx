import React from "react";
import "./ContactBar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        <a href="http://" target="_blank" className="contact_bar_icon">
          <LinkedIcon />
        </a>
        <a href="http://" target="_blank" className="contact_bar_icon">
          <GitHubIcon />
        </a>
        <a href="http://" target="_blank" className="contact_bar_icon">
          <InstagramIcon />
        </a>
        <a href="http://" target="_blank" className="contact_bar_icon">
          <TwitterIcon />
        </a>
        <div className="contact_bar_line"></div>
      </div>
      <div className="contact_bar">
        <a
          href="mailto:kushalgill00010@gmail.com"
          className="contact_bar_email"
        >
          kushalgill00010@gmail.com
        </a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};
export default ContactBar;
