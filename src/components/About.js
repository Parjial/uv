import React from "react";
import img1 from "../assets/img/aakhi.jpg"
import img2 from "../assets/img/uv.jpg"
import img3 from "../assets/img/abhi.jpg"


const About = () => {
  return (
    <div className="about-container about" id="about">

      <div className="about-section">
        <div className="about-image">
          <img src={img1} alt="img1" />
        </div>
        <div className="about-description">
          <h2>Aakhi Singh</h2>
          <h3>Founder</h3>
          <p>
          As an events oraganization, we are passionate about creating memorable experiences that leave a lasting impact on our clients and their guests. Our team is dedicated to bringing creativity, innovation, and professionalism to every event we produce, whether it's a corporate conference, a wedding, or a music festival.
          </p>
        </div>
      </div>
      <div className="about-section">
        
        <div className="about-image">
          <img src={img2} alt="img2" />
        </div>
        <div className="about-description">
          <h2>Uv Singh</h2>
          <h3>Business Developer</h3>
          <p>
          I am thrilled to be serving as the business developer for this dynamic event organization. As a business developer, I am focused on building long-term relationships with our clients and identifying new opportunities for growth.Our approach is rooted in collaboration, innovation, and attention to detail. We understand that every event is unique, and we are committed to tailoring our services to meet the specific needs of our clients.
          </p>
        </div>

      </div>
      <div className="about-section">
        <div className="about-image">
          <img src={img3} alt="img3" />
        </div>
        <div className="about-description">
          <h2>Abhishek Rajput</h2>
          <h3>Operation Executive</h3>
          <p>
          As the operations executive for this esteemed event organization, I am responsible for ensuring that every event we produce runs smoothly, efficiently, and flawlessly. Our team is dedicated to delivering exceptional experiences for our clients and their guests, and my role is to oversee the operational details to ensure that everything runs seamlessly from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
