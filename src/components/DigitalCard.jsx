import React from "react";
import {
  DivContainer,
  DivInfo,
  DivIcons,
  Logo,
  Name,
  Title,
  Connect,
  Email,
  IG,
  FB,
  GH,
  ReactIcon,
  JS,
  PythonIcon,
  MongoDb,
  DjangoIcon,
  QrCode,
  DivImg,
} from "../styles/ElementColors";
import { FiInstagram } from "react-icons/fi";
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiDjango, SiMongodb, SiJavascript, SiLinkedin } from "react-icons/si";

function DigitalCard() {
  return (
    <div className="business-card-main-container">
      <div className="business-card-container">
        <DivContainer>
          <DivImg>
            <Logo />
            <QrCode/>
          </DivImg>
          <DivInfo>
            <Name>Full Name</Name>
            <Title>Title</Title>

            <Connect>My Tools:</Connect>
            <DivIcons>
              <JS href="https://www.javascript.com/" target="_blank">
                <SiJavascript />
              </JS>
              <ReactIcon href="https://reactjs.org/" target="_blank">
                <FaReact />
              </ReactIcon>
              <MongoDb href="https://www.mongodb.com/" target="_blank">
                <SiMongodb />
              </MongoDb>

              <PythonIcon href="https://www.python.org/" target="_blank">
                <FaPython />
              </PythonIcon>
              <DjangoIcon href="https://www.djangoproject.com/" target="_blank">
                <SiDjango />
              </DjangoIcon>
            </DivIcons>
            <Connect>Connect with me:</Connect>
            <DivIcons>
              <div>
                <Email href="mailto:">
                  <AiOutlineMail />
                </Email>
                <IG
                  href="#"
                  target="_blank"
                >
                  <FiInstagram />
                </IG>
              </div>
              <div>
                <FB
                  href="#"
                  target="_blank"
                >
                  <SiLinkedin />
                </FB>
                <GH href="#" target="_blank">
                  <FaGithub />
                </GH>
              </div>
            </DivIcons>
          </DivInfo>
        </DivContainer>
      </div>
      <div className="footer-div">
      </div>
    </div>
  );
}

export default DigitalCard;
