import React from "react";

export default function Navbar() {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand mx-3 me-5' href='#'>
          health & glow
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item me-3'>
              <a class='nav-link active fw-bolder' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item me-3'>
              <a class='nav-link fw-bolder' href='#'>
                Products
              </a>
            </li>
            <li class='nav-item me-3'>
              <a class='nav-link fw-bolder' href='#'>
                Offers
              </a>
            </li>
            <li class='nav-item me-3'>
              <a class='nav-link fw-bolder' href='#'>
                Gift Cards
              </a>
            </li>
            <li class='nav-item dropdown me-3'>
              <a
                class='nav-link dropdown-toggle fw-bolder'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Makeup
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Face
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Lips
                  </a>
                </li>

                <li>
                  <a class='dropdown-item' href='#'>
                    Eyes
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form class='d-flex'>
            <input
              class='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
