import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import me from "../assests/logo.png";

const Home = ({ratio}) => {

  const clientCount = useRef(null);
  const projectsCount = useRef(null);

  const animationClientsCount = ()=>{
    animate(0,100,{
      duration:2,
      onUpdate: (value) => {
        clientCount.current.textContent = value.toFixed();
      }
    });
  };

  const animationProjectsCount = ()=>{
    animate(0,10,{
      duration:2,
      onUpdate: (value) => {
        projectsCount.current.textContent = value.toFixed();
      }
    });
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            Hi, I am <br /> Soumith Mamidyala
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "|.",
            }}
          />

          <div>
            <a href="mailto:mamidiyalasoumith@gmail.com">Hire Me</a>

            <a href="#work">
              projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              {
                ratio < 2 && (
                  <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                )
              }+
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
              {
                ratio < 2 && (
                  <motion.span whileInView={animationProjectsCount} ref={projectsCount}></motion.span>
                )
              
              }+
              </p>
              <span>projects </span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>mamidiyalasoumith@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Soumith" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
