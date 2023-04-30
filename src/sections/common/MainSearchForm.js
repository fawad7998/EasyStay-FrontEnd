const MainSearchForm = () => {
  return (
    <div className="banner-location banner-location-one bg-white radius-5 mt-5">
      <div className="banner-location-flex">
        <div className="banner-location-single">
          <div className="banner-location-single-flex">
            <div className="banner-location-single-icon">
              <i className="las la-map-marker-alt"></i>
            </div>
            <div className="banner-location-single-contents">
              <span className="banner-location-single-contents-subtitle">
                Location
              </span>
              <div className="banner-location-single-contents-dropdown">
                <select className="js-select select-style-two" name="state">
                  <option value="1">Allentown, New Mexico</option>
                  <option value="2">Allentown, New NewYork</option>
                  <option value="3">Allentown, New Barcelona</option>
                  <option value="4">Allentown, Paris</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-location-single">
          <div className="banner-location-single-flex">
            <div className="banner-location-single-icon">
              <i className="las la-calendar"></i>
            </div>
            <div className="banner-location-single-contents">
              <span className="banner-location-single-contents-subtitle">
                Check In
              </span>
              <div className="banner-location-single-contents-dropdown custom-select">
                <select className="js-select select-style-two" name="state">
                  <option value="1">20 Jun 2022</option>
                  <option value="2">21 Jun 2022</option>
                  <option value="3">22 Jun 2022</option>
                  <option value="4">23 Jun 2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-location-single">
          <div className="banner-location-single-flex">
            <div className="banner-location-single-icon">
              <i className="las la-calendar"></i>
            </div>
            <div className="banner-location-single-contents">
              <span className="banner-location-single-contents-subtitle">
                Check Out
              </span>
              <div className="banner-location-single-contents-dropdown custom-select">
                <select className="js-select select-style-two" name="state">
                  <option value="1">20 Jul 2022</option>
                  <option value="2">21 Jul 2022</option>
                  <option value="3">22 Jul 2022</option>
                  <option value="4">23 Jul 2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-location-single">
          <div className="banner-location-single-flex">
            <div className="banner-location-single-icon">
              <i className="las la-user-friends"></i>
            </div>
            <div className="banner-location-single-contents">
              <span className="banner-location-single-contents-subtitle">
                Person
              </span>
              <div className="banner-location-single-contents-dropdown custom-select">
                <select className="js-select select-style-two" name="state">
                  <option value="1">2 People</option>
                  <option value="2">3 People</option>
                  <option value="3">4 People</option>
                  <option value="4">5 People</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-location-single">
          <div className="banner-location-single-flex">
            <div className="banner-location-single-icon">
              <i className="las la-user-friends"></i>
            </div>
            <div className="banner-location-single-contents">
              <span className="banner-location-single-contents-subtitle">
                Children
              </span>
              <div className="banner-location-single-contents-dropdown custom-select">
                <select className="js-select select-style-two" name="state">
                  <option value="1">2 Children</option>
                  <option value="2">3 Children</option>
                  <option value="3">4 Children</option>
                  <option value="4">5 Children</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-location-single-search">
          <div className="search-suggestions-wrapper">
            <div className="search-click-icon">
              <i className="las la-search"></i>
            </div>
            <div className="search-show">
              <div className="search-show-inner">
                <form action="#">
                  <div className="search-show-form">
                    <input
                      autoComplete="off"
                      className="form--control"
                      id="search_form_input"
                      type="text"
                      placeholder="Search here...."
                    />
                    <button type="submit">
                      <i className="las la-search"></i>
                    </button>
                    <span className="suggestions-icon-close">
                      <i className="las la-times"></i>
                    </span>
                  </div>
                  <div className="search-product" id="search_suggestions_wrap">
                    <div className="search-product-inner">
                      <h6 className="search-product-title">
                        Product Suggestions
                      </h6>
                      <ul className="search-product-list mt-4">
                        <li className="search-product-list-item">
                          <a
                            href="javascript:void(0)"
                            className="search-product-list-link"
                          >
                            <div className="search-product-list-image">
                              <img
                                src="/img/search_suggestion/s1.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="search-product-list-info">
                              <div className="search-product-list-info-top">
                                <h6 className="earch-product-list-info-title">
                                  Apple Original Air pod Collection for most
                                  popular and best price item in market
                                </h6>
                              </div>
                              <div className="search-product-list-info-price mt-2">
                                <div className="search-product-list-info-price-through">
                                  <span className="flash-price">$330.00</span>
                                  <span className="old-price">$300.00</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="search-product-list-item">
                          <a
                            href="javascript:void(0)"
                            className="search-product-list-link"
                          >
                            <div className="search-product-list-image">
                              <img
                                src="/img/search_suggestion/s2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="search-product-list-info">
                              <div className="search-product-list-info-top">
                                <h6 className="earch-product-list-info-title">
                                  Apple Original Airpod Collection
                                </h6>
                              </div>
                              <div className="search-product-list-info-price mt-2">
                                <span className="main-price fw-500 color-light">
                                  $269.00
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="search-product-list-item">
                          <a
                            href="javascript:void(0)"
                            className="search-product-list-link"
                          >
                            <div className="search-product-list-image">
                              <img
                                src="/img/search_suggestion/s3.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="search-product-list-info">
                              <div className="search-product-list-info-top">
                                <h6 className="earch-product-list-info-title">
                                  Apple Original Airpod Collection
                                </h6>
                              </div>
                              <div className="search-product-list-info-price mt-2">
                                <span className="main-price fw-500 color-light">
                                  $499.00
                                </span>
                                <span className="stock-out">Stock Out</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="search-product-list-item">
                          <a
                            href="javascript:void(0)"
                            className="search-product-list-link"
                          >
                            <div className="search-product-list-image">
                              <img
                                src="/img/search_suggestion/s4.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="search-product-list-info">
                              <div className="search-product-list-info-top">
                                <h6 className="earch-product-list-info-title">
                                  Apple Original Airpod Collection
                                </h6>
                              </div>
                              <div className="search-product-list-info-price mt-2">
                                <span className="main-price fw-500 color-light">
                                  $499.00
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="search-product-list-item">
                          <a
                            href="javascript:void(0)"
                            className="search-product-list-link"
                          >
                            <div className="search-product-list-image">
                              <img
                                src="/img/search_suggestion/s5.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="search-product-list-info">
                              <div className="search-product-list-info-top">
                                <h6 className="earch-product-list-info-title">
                                  Apple Original Airpod Collection
                                </h6>
                              </div>
                              <div className="search-product-list-info-price mt-2">
                                <span className="main-price fw-500 color-light">
                                  $499.00
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="search-suggestion-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default MainSearchForm;
