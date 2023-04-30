import Dashboard from 'pages/dashboard';

const Header = ({origin}) => {
  return (
    <header className="header-style-01">
      <nav className="navbar navbar-area navbar-border navbar-padding navbar-expand-lg">
        <div className="container custom-container-one nav-container">
          <div
            className={`logo-wrapper ${
              origin == 'dashboard' ? 'd-none' : 'd-block'
            }`}
          >
            <a href="index.html" className={`logo `}>
              <img src="/img/logo.png" alt="" />
            </a>
          </div>
          <div className="responsive-mobile-menu d-lg-none">
            <a href="javascript://" className="click-nav-right-icon">
              <i className="las la-ellipsis-v"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#hotel_booking_menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="hotel_booking_menu">
            {origin == 'dashboard' ? (
              ''
            ) : (
              <ul
                className="navbar-nav"
                style={{textAlign: origin == 'dashboard' ? 'left' : 'center'}}
              >
                <li className="menu-item-has-children current-menu-item">
                  <a href="javascript://">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="02_index.html"> Home Two </a>
                    </li>
                    <li>
                      <a href="03_index.html"> Home Three </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html"> About </a>
                </li>
                <li>
                  <a href="checkout.html"> Checkout </a>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="javascript://">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="hotel_details.html"> Hotel Details </a>
                    </li>
                    <li>
                      <a href="confirmation.html"> Confirmation </a>
                    </li>
                    <li>
                      <a href="dashboard.html"> Dashboard </a>
                    </li>
                    <li>
                      <a href="dashboard_cancellation.html"> Cancellations </a>
                    </li>
                    <li>
                      <a href="dashboard_report_issue.html"> Report Issue </a>
                    </li>
                    <li>
                      <a href="dashboard_support.html"> Support </a>
                    </li>
                    <li>
                      <a href="dashboard_tickets.html"> Tickets </a>
                    </li>
                    <li>
                      <a href="dashboard_add_tickets.html"> Add Ticket </a>
                    </li>
                    <li>
                      <a href="dashboard_profile.html"> Dashboard Profile </a>
                    </li>
                    <li>
                      <a href="dashboard_edit_profile.html"> Edit Profile </a>
                    </li>
                    <li>
                      <a href="dashboard_pass_change.html"> Password Change </a>
                    </li>
                    <li>
                      <a href="error.html"> Error Page </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="javascript://">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog_details.html"> Blog Details </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html"> Contact Us </a>
                </li>
              </ul>
            )}
          </div>
          <div class="navbar-right-content show-nav-content">
            <div class="single-right-content">
              <div class="navbar-author">
                <div class="navbar-author-flex">
                  <div class="navbar-author-thumb">
                    <img src="/img/Avatar/author.jpg" alt="img" />
                  </div>
                  <div class="navbar-author-name">
                    <h6 class="navbar-author-name-title">Nelson</h6>
                  </div>
                </div>
                <div class="navbar-author-wrapper">
                  <div class="navbar-author-wrapper-list">
                    <a
                      href="signup.html"
                      class="navbar-author-wrapper-list-item"
                    >
                      Sign Up
                    </a>
                    <a
                      href="login.html"
                      class="navbar-author-wrapper-list-item"
                    >
                      Sign In
                    </a>
                    <span class="navbar-author-wrapper-list-item">Log Out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
