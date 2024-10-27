import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="custom-bg"> {/* Apply page background */}
      <div className="contact_container"> {/* Contact container */}
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us via following methods:</p>
        <p><u>E-mail:</u></p>
        <ul>
          <li>sreejapabbisetty09@gmail.com</li>
          <li>singamreddyrakshitha25@gmail.com</li>
          <li>devaki2606@gmail.com</li>
          <li>jahnavimadem2@gmail.com</li>
        </ul>
        <p><u>Address: </u></p>
        <p>VIT-AP University, G-30, Ainavolu, Beside AP Secretariat, Amaravati, Andhra Pradesh - 522237</p>
      </div>
    </div>
  );
}

export default Contact;