/* 
  RECOMMENDATIONS 


*/

import {Insert, Render} from '../../lib/core.js';

// Return Recommendations
export default function Recs() {

  const html = 
    `<section class="recs">
      <div class="box center">
        <h3> HEAR FROM CLIENTS </h3>

        <div>
          <h4>Immigration: EB-1</h4>
          <p>
            "This place is amazing. I would love to be able to work with them again. They are fast efficient and a pleasure to work with..."
          </p>
          <h6>CHARLES SCHUMAKER</h6>
        </div>


        <div>
          <h4>Immigration: EB-1</h4>
          <p>
            "This place is amazing. I would love to be able to work with them again. They are fast efficient and a pleasure to work with..."
          </p>
          <h6>CHARLES SCHUMAKER</h6>
        </div>

        <div>
          <h4>Immigration: EB-1</h4>
          <p>
            "This place is amazing. I would love to be able to work with them again. They are fast efficient and a pleasure to work with..."
          </p>
          <h6>CHARLES SCHUMAKER</h6>
        </div>

        <div>
          <h4>Immigration: EB-1</h4>
          <p>
            "This place is amazing. I would love to be able to work with them again. They are fast efficient and a pleasure to work with..."
          </p>
          <h6>CHARLES SCHUMAKER</h6>
        </div>

      </div>
    </section>`;

  Insert('core/recs/recs.css');
  Render(html, document.querySelector('#recs'));

  return;
}




