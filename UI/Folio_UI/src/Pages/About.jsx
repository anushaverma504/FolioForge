import React from "react";
import '../Styles/About.css';
import aboutHeroImage from "../Images/about-hero.jpg"; // Replace with your image path
import missionImage from "../Images/mission.jpg"; // Replace with your image path
import featuresImage from "../Images/features.jpg"; // Replace with your image path
import valuesImage from "../Images/values.jpg"; // Replace with your image path

const About = () => {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <img src={aboutHeroImage} alt="Portfolio Building" className="hero-image" />
          <h1>About Us</h1>
          <p>
            Empowering everyone to create their own unique digital presence,
            without the need for coding knowledge.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container about-content">
        <div className="about-mission">
          <img src={missionImage} alt="Our Mission" className="content-image" />
          <h2>Our Mission</h2>
          <p>
            At <strong>PortfolioBuilder</strong>, we aim to democratize the creation of beautiful, professional portfolios. Whether you're a student, creative professional, or entrepreneur, we provide the tools to showcase your work effortlessly, without any technical barriers.
          </p>
        </div>

        <div className="about-features">
          <img src={featuresImage} alt="Features" className="content-image" />
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Responsive Design:</strong> Portfolios that look stunning on any device – mobile, tablet, or desktop.</li>
            <li><strong>Ease of Use:</strong> Drag and drop elements, customize templates, and personalize without touching a single line of code.</li>
            <li><strong>Download & Publish:</strong> Export your portfolio in various formats or host it online with just a click.</li>
            <li><strong>Customization:</strong> A range of templates, colors, and layouts that reflect your personality and skills.</li>
            <li><strong>No Coding Required:</strong> We take care of the technical side, so you can focus on your creativity.</li>
          </ul>
        </div>

        <div className="about-values">
          <img src={valuesImage} alt="Our Values" className="content-image" />
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>
                We believe that everyone deserves the chance to shine online. Our platform is designed to be accessible for everyone, regardless of technical skill level.
              </p>
            </div>
            <div className="value-item">
              <h3>Creativity</h3>
              <p>
                Your portfolio should be as unique as you are. We encourage creative expression and make it easy for you to present yourself in a way that reflects your true potential.
              </p>
            </div>
            <div className="value-item">
              <h3>Empowerment</h3>
              <p>
                We empower individuals to take control of their digital identity. No need to rely on designers or developers—you're in charge of your own narrative.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Build Your Portfolio?</h2>
          <p>
            Join thousands of users who have created their own stunning portfolios with PortfolioBuilder.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
