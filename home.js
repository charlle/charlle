/* 
  HOME PAGE 


*/

import Header from './core/header/index.js';
import Banner from './core/banner/index.js';
import Recs from './core/recs/index.js';
import Contact from './core/contact/index.js';
import Footer from './core/footer/index.js';


function Home() {
	let img = "assets/img/bg-home.png";
	let msg = "Award Winning Boutique Law Firm";
	let sub = `
	  A highly specialized team of <span> legal professionals</span> providing 
	  immigration, family office, litigation, and mediation services for their 
	  international clientele.`;

  Header();
  Banner(img, msg, sub);
  Recs();
  Contact();
  Footer();	
}

export default Home();