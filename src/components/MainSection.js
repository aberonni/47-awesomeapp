import React from "react";

export default function MainSection({ badge, title }) {
  return (
    <div className="section section-what-usp">
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">{badge}</div>
        </div>

        <h2>
          <div className="component-title ">{title}</div>
        </h2>

        <div className="description">
          Awesome! Let’s do this together. We are here to support you in your
          coding journey.
        </div>
      </div>

      <div className="component-usp-row">
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/team.svg"
          />
          <div className="component-title title">
            Get help from experienced developers
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/community.svg"
          />
          <div className="component-title title">
            Learn &amp; share with our community
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/personal-speed.svg"
          />
          <div className="component-title title">
            Personal &amp; at your own speed
          </div>
        </div>
      </div>
    </div>
  );
}
