import React from "react";

export default function Footer() {
  return (
    <footer class='page-footer font-small elegant-color mt-4'>
      <div class='bg-primary'>
        <div class='container'>
          <div class='row py-4 d-flex align-items-center'>
            <div class='col-md-6 col-lg-5 text-center text-white text-md-left mb-4 mb-md-0'>
              <h6 class='mb-0'>Get connected with us on social networks!</h6>
            </div>

            <div class='col-md-6 col-lg-7 text-center text-md-right'>
              <a class='fb-ic '>
                <i class='fab fa-facebook-f text-white mx-2 '> </i>
              </a>

              <a class='tw-ic'>
                <i class='fab fa-twitter text-white  mx-2'> </i>
              </a>

              <a class='gplus-ic'>
                <i class='fab fa-google-plus-g text-white mx-2'> </i>
              </a>

              <a class='li-ic'>
                <i class='fab fa-linkedin-in text-white mx-2'> </i>
              </a>

              <a class='ins-ic '>
                <i class='fab fa-instagram text-white ms-2'> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class='container text-center text-md-left pt-4 pt-md-5'>
        <div class='row mt-1 mt-md-0 mb-4 mb-md-0'>
          <div class='col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4'>
            <h5>About Us</h5>
            <hr class='bg-primary mb-4 mt-0 d-inline-block mx-auto w-60' />

            <p class='foot-desc mb-0'>
              Genuine products, exclusive range of products, and top deals –
              Health & Glow provides you with the best of things at your
              doorstep.
            </p>
          </div>

          <hr class='clearfix w-100 d-md-none' />

          <div class='col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4'>
            <h5>Products</h5>
            <hr class='color-primary mb-4 mt-0 d-inline-block mx-auto w-60' />

            <ul class='list-unstyled foot-desc'>
              <li class='mb-2'>
                <a href='#!'>Hair Oils</a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Dryers</a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Straightners </a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Comb & Brushes</a>
              </li>
            </ul>
          </div>

          <hr class='clearfix w-100 d-md-none' />

          <div class='col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4'>
            <h5>Useful links</h5>
            <hr class='color-primary mb-4 mt-0 d-inline-block mx-auto w-60' />

            <ul class='list-unstyled foot-desc'>
              <li class='mb-2'>
                <a href='#!'>Your Account</a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Become an Affiliate</a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Shipping Rates</a>
              </li>
              <li class='mb-2'>
                <a href='#!'>Help</a>
              </li>
            </ul>
          </div>

          <hr class='clearfix w-100 d-md-none' />

          <div class='col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4'>
            <h5>Contacts</h5>
            <hr class='color-primary mb-4 mt-0 d-inline-block mx-auto w-60' />

            <ul class='fa-ul foot-desc ml-4'>
              <li class='mb-2'>
                <span class='fa-li'>
                  <i class='far fa-map'></i>
                </span>
                New York, Avenue Street 10
              </li>
              <li class='mb-2'>
                <span class='fa-li'>
                  <i class='fas fa-phone-alt'></i>
                </span>
                042 876 836 908
              </li>
              <li class='mb-2'>
                <span class='fa-li'>
                  <i class='far fa-envelope'></i>
                </span>
                company@example.com
              </li>
              <li>
                <span class='fa-li'>
                  <i class='far fa-clock'></i>
                </span>
                Monday - Friday: 10-17
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='footer-copyright text-center py-3'>
        © 2021 Copyright:
        <a href='#'> Health & Glow </a>
      </div>
    </footer>
  );
}
