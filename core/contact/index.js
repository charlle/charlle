/* 
  CONTACT 
  - Calendly
  - Mailchimp

*/

import {Insert, Render} from '../../lib/core.js';


// Return Contact
export default function Contact() {

  const html = 
    `<div class="email">
      <div class="email_body">
        <div class="email_left">
          <h4>FREE CONSULTATION</h4>
          <p>
            Schedule a <b>15 minute free</b> consultation to discuss you or your families legal matters to better understand your options and opportunities.   
          </p>
          <!-- CALENDLY --->
          <button class="email_btn">Free Consult</button>
        </div>

        <div class="email_right">
          <h4>KEEP IN TOUCH</h4>
          <p>
            Receive trends, <b>insights</b>, and updates on the state of US Immigration, Visa & Residency Issues, and the most important Family Legal matters.
          </p>
          <!-- MAILCHIMP --->
          <button class="email_btn">Subscribe</button>
        </div>
      </div>
    </div>`;

  Insert('core/contact/contact.css');
  Render(html, document.querySelector('#contact'));

  return;
}




