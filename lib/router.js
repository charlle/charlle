/*
		Javascript Library

		Router for Website

*/
import {targets} from '../content/targets/targets.js';


export function Click(url) {
	if(!url) return;


  // CHECK PERMA LINKS
  let services = targets.services;
  let people = targets.people;
  let tgt = services.concat(people);

  let page = tgt.find(x => x === url);

  if(page) {

    if(people.find(x => x === url)) {
      page = 'pages/people/index.html?page=' + page;
    }

    if(services.find(x => x === url)) {
      page = 'pages/services/index.html?page=' + page;
    }

    // REDIRECT TO PAGE
    return window.location = page;

  }


	// CHECK MAIN PAGES
  let u = '';
  switch(url) {

    // PEOPLE
    case 'people': 
      u = 'pages/people/index.html';
      break;

    // SERVICES 
    case 'services': 
      u = 'pages/services/index.html';
      break;


    // COMPANY
    case 'about': 
      u = 'pages/about/about.html';
      break;
    case 'team': 
      u = 'pages/team/team.html';
      break;

    case 'contact': 
      u = 'pages/contact/contact.html';
      break;
    case 'offices': 
      u = 'pages/offices/offices.html';
      break;

    case 'careers': 
      u = 'pages/company/careers.html';
      break;
    case 'legal': 
      u = 'pages/company/legal.html';
      break;
    case 'privacy': 
      u = 'pages/company/privacy.html';
      break;
      
    default: u = 'index.html';
  }
  return window.location = u;
}

window.app = {Click};

