import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Button from "../Button/Button";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import Logo from "../../Assets/Footer/logo.svg";

const Version7Dark = ({ className = "", ...props }) => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className={`version-7-dark ${className}`} {...props}>
      <div className="container">
        <div className="_2023-kyle-hollett-brian-janes-bradley-avyers-all-rights-reserved">
          © 2023  Kyle Hollett, Brian Janes, Bradley Ayers. All rights reserved.
        </div>
        <div className="links">
          <div className="terms-of-service">Terms of Service</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="cookies">Cookies</div>
        </div>
      </div>
      <div className="container2">
        <div className="logo-and-text">
          <img className="vector-2" src={Logo} alt="PlaceHolder" />
          <div className="vinyl-tap">Vinyl Tap</div>
          <div className="a-record-company">A Record Company</div>
          <div className="space">
          <Button text="About Us" onClick={handleAboutClick}/>
          </div>
        </div>
        <div className="links-column">
          <div className="contact">Contact:</div>
          <div className="links2">
            <div className="kyle-hollett">Kyle Hollett -</div>
            <div className="brian-janes">Brian Janes -</div>
            <div className="bradley-avyers">Bradley Ayers -</div>
          </div>
        </div>
        <div className="links-column2">
          <div className="links3">
            <div className="email-kyle-hollett-keyin-com">
              Email: kyle.hollett@keyin.com
            </div>
            <div className="email-kyle-hollett-keyin-com">
              Email: brian.janes@keyin.com
            </div>
            <div className="email-kyle-hollett-keyin-com">
              Email: bradley.ayers@keyin.com
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="links-column2">
            <div className="git-hub">GitHub</div>
            <div className="links4">
              <a
                href="https://github.com/kyhol"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                <div className="platform">
                  <img className="vector" src={GitHubLogo} alt="GitHub Logo" />
                  <div className="git-hub-kyle">GitHub Kyle</div>
                </div>
              </a>

              <a
                href="https://github.com/brianjanes"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                <div className="platform">
                  <div className="ic-round-apple">
                    <img
                      className="group-1000005949"
                      src={GitHubLogo}
                      alt="GitHub Logo"
                    />
                  </div>
                  <div className="git-hub-brian">GitHub Brian</div>
                </div>
              </a>

              <a
                href="https://github.com/BradTheeStallion"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                <div className="platform">
                  <div className="ic-round-apple">
                    <img
                      className="group-1000005949"
                      src={GitHubLogo}
                      alt="GitHub Logo"
                    />
                  </div>
                  <div className="git-hub-brad">GitHub Brad</div>
                </div>
              </a>
            </div>
          </div>
          <div className="links-column2">
            <div className="linked-in">LinkedIn</div>
            <div className="links4">
              <a
                href="https://www.linkedin.com/in/kyle-hollett-8558842a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform2-link"
              >
                <div className="platform3">
                  <img
                    className="group-10000059493"
                    src={LinkedInLogo}
                    alt="LinkedIn Logo"
                  />
                  <div className="linked-in-kyle">LinkedIn Kyle</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/briandjanes/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform2-link"
              >
                <div className="platform2">
                  <div className="ic-round-apple">
                    <img
                      className="group-10000059494"
                      src={LinkedInLogo}
                      alt="LinkedIn Logo"
                    />
                  </div>
                  <div className="linked-in-brian">LinkedIn Brian</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bradley-ayers/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform2-link"
              >
                <div className="platform3">
                  <div className="ic-round-apple">
                    <img
                      className="group-10000059495"
                      src={LinkedInLogo}
                      alt="LinkedIn Logo"
                    />
                  </div>
                  <div className="linked-in-brad">LinkedIn Brad</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version7Dark;