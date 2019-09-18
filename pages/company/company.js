/* 
  PAGE: SERVICES


*/

import Header from '../../core/header/index.js';
import Blog from '../../core/blog/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';


export default function Load(page) {

	let practice = new Blog(page);

  Header();
  practice.display();
  Contact();
  Footer();	
}
