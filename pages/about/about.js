/* 
  ABOUT PAGE 


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';


function About() {
	let img = "assets/img/bg-about.jpg";
  let msg = "An Ocean of Difference";

  Header();
  Banner(img, msg);
  Contact();
  Footer();	
}

export default About();