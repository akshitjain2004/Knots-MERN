import React from "react";
import "./Review.css";

function Review() {

  return (
    <section class="review-section">
     
    <div className='heading '> <h1>Testimonials</h1>  </div>
      <div className="boxiboxi">
      <div class="owl-carousel custom-carousel owl-theme">
        <div
          class="item active"
          style={{
            backgroundImage:
              "url(https://assets.vogue.in/photos/5de0d4cba650480008c24149/master/w_960%2Cc_limit/Anushka%2520Sharma%2520Virat%2520Kohli%2520Wedding%2520Pictures%2520Tuscany%2520Italy1.jpg)",
          }}
        >
          <div class="item-desc">
            <h3>Lorem Ipsum</h3>
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            </p>
          </div>
        </div>
      </div>
      <div class="owl-carousel custom-carousel owl-theme">
        <div
          class="item active"
          style={{
            backgroundImage:
              "url(https://images.indulgexpress.com/uploads/user/imagelibrary/2021/12/9/original/264919801_208564811452482_3406688638950517960_n.jpg)",
          }}
        >
          <div class="item-desc">
            <h3>Lorem Ipsum</h3>
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            </p>
          </div>
        </div>
      </div>
      <div class="test-carousel custom-carousel test-theme">
        <div
          class="item active"
          style={{
            backgroundImage:
              "url(https://assets.vogue.in/photos/64aee2faca73940d3913c76f/master/w_1600,c_limit/278528652_490384229447822_2154771109265595523_n.jpg)",
          }}
        >
          <div class="item-desc">
            <h3>Lorem Ipsum</h3>
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            </p>
          </div>
        </div>
      </div>
          
</div>
    </section>
  );
}

export default Review;
