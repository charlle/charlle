/* 
  BANNER 



*/

import {Insert, Render} from '../../lib/core.js';

// Return Banner
export default function Banner(img, msg, sub) {
  
  let b = `background-image:url(${img})`;
  let m, s = '', c = 'banner';
  if (msg) m = `<h1>${msg}</h1>`;
  if (sub) s = `<h2>${sub}</h2>`, c = 'banner_sub';

  const html = 
    `<section class="${c}" style=${b}>
      <div class="box">
        ${m}
        ${s}
      </div>
      <button class="schedule">Free Consult</button>
    </section>`;

  Insert('core/banner/banner.css');
  Render(html, document.querySelector('#banner'));

  return;
}




