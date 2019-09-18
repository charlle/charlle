/* 
  HEADER 


*/

import {Insert, Render} from '../../lib/core.js';

export function Open(state) {
  Header(state);
}



// Return Header
export default function Header(state) {
  let show = '';
  if(state === 'open') show = 'show';
  if(state === 'close') show = '';

  const html = `
    <div class="overlay ${show}" onclick="javascript:app.Open('close')"></div>
    <div class="navbar ${show}">
      <a href="index.html"><img src="assets/img/logo.png" alt="TMCT"/></a>
      <a href="javascript:app.Click('contact')">contact</a>
      <a href="javascript:app.Click('about')">about</a>
      <a href="javascript:app.Click('team')">people</a>
      <a href="javascript:app.Click('services')">services</a>
      <a class="close" href="javascript:app.Open('close')">close</a>
    </div>


    <div class="box">
      <div>
        <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="TMCT"/></a>
        <div>
          <h1>TMCT Law Firm</h1>
          <hr class="black"/>
          <hr/>
          <h6>FLORIDA . WASHINGTON DC . NEW YORK . LONDON . MONACO</h6>
        </div>
      </div>

      <nav>
        <a href="javascript:app.Click('contact')">contact</a>
        <a href="javascript:app.Click('about')">about</a>
        <a href="javascript:app.Click('team')">people</a>
        <a href="javascript:app.Click('services')">services</a>
      </nav>

      <button type="button" class="header_menu" 
        onclick="javascript:app.Open('open')">
        <img src="assets/img/menu.png" alt="Menu"/>
      </button>
    </div>`;

  Insert('core/header/header.css');
  Render(html, document.querySelector('#header'));

  return;
}


window.app.Open = Open;

