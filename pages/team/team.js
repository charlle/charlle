/* 
  PAGE: TEAM


*/

import Header from '../../core/header/index.js';
import Banner from '../../core/banner/index.js';
import Contact from '../../core/contact/index.js';
import Footer from '../../core/footer/index.js';

import {Insert, Render} from '../../lib/core.js';
import {team} from '../../content/targets/team.js';


function Team() {
  let html = '';

  for (const obj of team) {
  	html +=
  		`<div class="team">
		    <img src="assets/team/${obj.image}" alt="${obj.name}">
		    <h4>${obj.name}</h4>
		    <h5>${obj.title}</h5>
		    <ul>
		      <li>${obj.city}</li>
		      <li><a href="tel:${obj.phone}">${obj.phone}</a></li>
		      <li><a href="mailto:${obj.email}">${obj.email}</a></li>
		    </ul>
		  </div>`;
  }


	Insert('pages/team/team.css');
	Render(html, document.querySelector('#team'));
	
	return;
}


function Load() {
  let img = "assets/img/bg-team.jpg";
  let msg = "World Class <br/>Legal Professionals";

  Header();
  Banner(img, msg);
  Team(); 
  Contact();
  Footer();	
}

export default Load();