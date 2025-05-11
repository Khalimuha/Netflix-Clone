import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="footer-icons gap-2">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-data d-flex list-unstyled align-items-center">
            <div>
              <ul className="list-unstyled gap-4 text-secondary">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li className="service-code">Service Code</li>
                <li>&copy;1997-2025 netflix, Inc </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="div-2 col-3 text-secondary">
          <ul className="list-unstyled gap-4">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preference</li>
          </ul>
        </div>
        <div className="div-3 col-3 text-secondary">
          <ul className="list-unstyled gap-4">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-unstyled gap-4 text-secondary">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
