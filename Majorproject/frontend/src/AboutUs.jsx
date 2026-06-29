import React from "react";

function AboutUs(){
  return(
    <div className="about-page">
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story </h2>
          <p>Outpro.India is a modern digital solutions company specializing in
            web development, mobile applications, UI/UX design, AI solutions,
            and cybersecurity services.</p>
            
            <p>We focus on creating innovative, scalable, and user-friendly
            digital products that help businesses establish a strong online
            presence and achieve long-term success.</p>
        </div>
        
        <div className="story-image">
          <img src="https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg" alt="Our Story" />
        </div>

      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h3>Mission</h3>
          <p>To deliver reliable, innovative, and high-quality digital
            solutions for businesses.</p>
        </div>
        
        <div className="mission-card">
          <h3>Vision</h3>
          <p>To become a trusted global technology partner through innovation
            and excellence.</p>
        </div>
        
        <div className="mission-card">
          <h3>Values</h3>
          <p>Innovation, Integrity, Quality, Customer Focus, and Teamwork.</p>
        </div>
      </section>
      
      <section className="leadership">
        <h2>Leadership </h2>
        <div className="leader-card">
          <h3>Founder & CEO</h3>
          <p>The Founder & CEO leads the company's vision, innovation, business strategy,and overall company growth at Outpro.India.</p>
        </div>
      </section>
      
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-card">
            <h3>Maheer Khan</h3>
            <p>Frontend Developer </p>
          </div>
          
          <div className="team-card">
            <h3>Rahul</h3>
            <p>UI/UX Designer</p>
          </div>
          
          <div className="team-card">
            <h3>John</h3>
            <p>Backend Developer</p>
          </div>
          
        </div>
      </section>
      
    </div>
  )
}
export default AboutUs;