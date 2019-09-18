/* 
  PAGE: CONTACT US 


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Office from '../../core/offices/index.js';


function ContactUs() {
  let img = "assets/img/bg-contact.jpg";
  let msg = "Contact Us";
  let office = new Office();

	office.render(false, true);

  Header();
  Banner(img, msg);
  Contact();
  Footer();	
}

export default ContactUs();