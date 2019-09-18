/* 
  FOOTER 

** Add Google Analytics

*/

import {Insert, Render} from '../../lib/core.js';
import {offices} from '../../content/targets/offices.js';


// Return Footer
export default function Footer() {
  let o = offices.find(x => x.order === 1);

  const html = 
    `<div class="footer">
      <div class="footer_body">

        <div class="footer_links">
          <img src="assets/img/logo.png">
          <h3>TMCT Law Firm</h3>
          <ul class="fl_wide">
            <li><strong>Mailing Address</strong></li>
            <li><a target="blank" 
              href="${o.map}">
              ${o.suite} <br/>
              ${o.street} <br/>
              ${o.city}
            </a></li>
            <li><a href="tel:${o.phone}">
              ${o.phone}
            </a></li>
            <li><a href="mailto:help@tmct.law">
              help@tmct.law
            </a></li>
          </ul>
          <ul>
            <li><strong>Company</strong></li>
            <li><a href="javascript:app.Click('about')">About</a></li>
            <li><a href="javascript:app.Click('team')">People</a></li>
            <li><a href="javascript:app.Click('offices')">Offices</a></li>
            <li><a href="javascript:app.Click('careers')">Careers</a></li>
            <li><a href="javascript:app.Click('contact')">Contact Us</a></li>
          </ul>
          <ul>
            <li><strong>Services</strong></li>
            <li><a href="javascript:app.Click('immigration')">Immigration</a></li>
            <li><a href="javascript:app.Click('family-office')">Family Office</a></li>
            <li><a href="javascript:app.Click('mediation')">Mediation</a></li>
            <li><a href="javascript:app.Click('litigation')">Litigation</a></li>
            <li><a href="javascript:app.Click('arbitration')">Arbitration</a></li>
          </ul>
        </div>

        <div class="footer_copy">
          <p>
            TMCT PLLC is a law firm representing the interests of their global clientele in Florida, New York, Washington DC, and US Federal & Immigration Courts. Our mailing address and phone number are 55 SE 2nd Ave. #203 Delray Beach, Florida 33444 and 561-926-9893.
          </p>
          <ul>
            <li><a href="javascript:app.Click('legal')">Legal</a></li>
            <li><a href="javascript:app.Click('privacy')">Privacy</a></li>
            <li class="copyright">© 
              <script type="text/javascript">
              document.write(new Date().getFullYear());
              </script> TMCT PLLC
            </li>
          </ul>
        </div>

       </div>
    </div>`;

  Insert('core/footer/footer.css');
  Render(html, document.querySelector('#footer'));

  return;
}







