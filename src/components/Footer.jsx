import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
      
        <h2>Soumith Mamidyala</h2>
        <p>I'm on my way to achieve my goals.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://www.linkedin.com/in/soumith-mamidyala-7b96431ba/" target={"blank"}>
          <AiFillLinkedin />
          </a>
          <a href="https://github.com/Boumith" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;