import React from 'react'
import "./Faq.css"
function Faq() {
  return (
    <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">
  
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>
  
      <ul class="faq-list accordion" data-aos="fade-up">
  
        <li>
          <a data-bs-toggle="collapse" class="collapsed" data-bs-target="#faq1">Non consectetur a erat nam at lectus urna duis?<i class="bx bx-x icon-close"></i></a>
          <div id="faq1" class="collapse" data-bs-parent=".faq-list">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </li>
  
        <li>
          <a data-bs-toggle="collapse" data-bs-target="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?<i class="bx bx-x icon-close"></i></a>
          <div id="faq2" class="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>
  
        <li>
          <a data-bs-toggle="collapse" data-bs-target="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?<i class="bx bx-x icon-close"></i></a>
          <div id="faq3" class="collapse" data-bs-parent=".faq-list">
            <p>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
            </p>
          </div>
        </li>
  
        <li>
          <a data-bs-toggle="collapse" data-bs-target="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?<i class="bx bx-x icon-close"></i></a>
          <div id="faq4" class="collapse" data-bs-parent=".faq-list">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
            </p>
          </div>
        </li>
  
        <li>
          <a data-bs-toggle="collapse" data-bs-target="#faq5" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat?<i class="bx bx-x icon-close"></i></a>
          <div id="faq5" class="collapse" data-bs-parent=".faq-list">
            <p>
              Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
            </p>
          </div>
        </li>
  
        <li>
          <a data-bs-toggle="collapse" data-bs-target="#faq6" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?<i class="bx bx-x icon-close"></i></a>
          <div id="faq6" class="collapse" data-bs-parent=".faq-list">
            <p>
              Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
            </p>
          </div>
        </li>
  
      </ul>
  
    </div>
  </section>
  )
}

export default Faq