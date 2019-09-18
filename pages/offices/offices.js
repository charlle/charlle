/* 
  PAGE: OFFICES


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';
import Office from '../../core/offices/index.js';


function Load() {
	let img = "assets/img/bg-offices.png";
	let msg = "Premier locations"; // positioned to serve your needs
	let office = new Office();

	office.render(true, true);

  Header();
  Banner(img, msg);
  Contact();
  Footer();	
}

export default Load();