// App.js
import React from "react";
import "./App.css";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  const sections = [
    {
      title: "Learn how to code",
      badge: "Its awesome!",
    },
    {
      title: "Learn how to check yourself",
      badge: "Don't wreck yourself!",
    },
  ];

  return (
    <div>
      <Header />
      <div className="section-header-spacer"></div>

      <div className="content">
        {sections.map(({ badge, title }) => (
          <MainSection badge={badge} title={title} />
        ))}

        <MainSection badge={sections[0].badge} title={sections[0].title} />
        <MainSection badge={sections[1].badge} title={sections[1].title} />

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-courses-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Courses</div>
            </div>

            <h2>
              <div className="component-title ">Our Courses</div>
            </h2>

            <div className="description">
              We have created courses to help you learn, with easy to follow
              steps and some sparks of fun!
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/expand-horizon.svg"
              />
              <div className="component-title title">
                Learn new skills and expand your horizon
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/developers.svg"
              />
              <div className="component-title title">
                Follow courses created by experienced developers
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                style={{ width: "200px" }}
                src="https://learntocodetogether.nl/assets/step-by-step.svg"
              />
              <div className="component-title title">
                Fun, hands on and easy to follow
              </div>
            </div>
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-why-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Why?</div>
            </div>

            <h2>
              <div className="component-title ">Why do we do this</div>
            </h2>

            <div className="description">
              It’s really simple actually. We just love to combine our passion
              for code with our love for teaching. Coding is so much fun when
              doing it together.
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/technology.svg"
              />
              <div className="component-title title">Technology</div>
              <div className="description">
                We love to experiment and create awesome stuff from the comfort
                of our couch.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">People</div>
              <div className="description">
                It’s always fun to do things together, the excitement and the
                collaborations.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">Teaching</div>
              <div className="description">
                We like to learn and to teach others the stuff we know.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-line">
        <div className="line "></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
