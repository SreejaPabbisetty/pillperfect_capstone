import React from 'react';
import './contact.css';
import chatbotIcon from './chatbot-icon.png';

function Contact() {
  return (
    <div className="custom-bg">
      <div className="contact_container">
        <h1>About PillPerfect</h1>
        <p>
          Our mission is to simplify the process of remembering and tracking your daily medications, ensuring you never miss a dose.
          <br />
          Whether it's setting up reminders or tracking health goals like BMI, PillPerfect is here to help. We've integrated an easy-to-use interface that helps users keep track of their pill schedules, daily routines, and overall well-being.
        </p>

        <h3>Why Choose PillPerfect?</h3>
        <ul>
          <li><b>Smart Reminders:</b> Stay on track with personalized alerts that remind you when it’s time to take your medications.</li>
          <li><b>Health Monitoring:</b> With integrated BMI tracking, PillPerfect not only helps you remember your pills but also keeps an eye on your health metrics.</li>
        </ul>

        <p>At PillPerfect, we believe that managing your health should be simple, efficient, and stress-free. Let us be your perfect pill partner!</p>
      </div>
      <div className="chatbot-icon">
        <img src={chatbotIcon} alt="Chatbot" />
      </div>
      <a 
        href="./FAQS.docx" 
        download 
        target="_blank" 
        rel="noopener noreferrer" 
        className="faq-button"
      >
        <i className="fas fa-question-circle"></i>
      </a>
    </div>
  );
}

export default Contact;
