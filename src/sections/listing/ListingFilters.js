const ListingFilters = () => {
  return (
    <div className="shop-sidebar-content">
      <div className="shop-close-content">
        <div className="shop-close-content-icon">
          <i className="las la-times"></i>
        </div>
        <div className="single-shop-left bg-white radius-10">
          <div className="single-shop-left-title open">
            <h5 className="title">Prices</h5>
            <div className="single-shop-left-inner mt-4">
              <form
                className="price-range-slider"
                method="post"
                data-start-min="0"
                data-start-max="10000"
                data-min="0"
                data-max="10000"
                data-step="5"
              >
                <div className="ui-range-slider"></div>
                <div className="ui-range-slider-footer">
                  <div className="ui-range-values">
                    <span className="ui-price-title"> Price: </span>
                    <div className="ui-range-value-min">
                      $<span className="min_price">100</span>
                      <input type="hidden" value="100" />
                    </div>
                    -
                    <div className="ui-range-value-max">
                      $<span className="max_price">9950</span>
                      <input type="hidden" value="9950" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="single-shop-left bg-white radius-10 mt-4">
          <div className="single-shop-left-title open">
            <h5 className="title">Amenities</h5>
            <div className="single-shop-left-inner margin-top-15">
              <ul className="single-shop-left-list active-list list-style-none">
                <li className="item-search">
                  <input
                    type="text"
                    className="form--control"
                    placeholder="Search Amenities"
                  />
                  <div className="item-search-icon">
                    <i className="las la-search"></i>
                  </div>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Parking </a>
                </li>
                <li className="item active">
                  <a href="javascript:void(0)"> Room Service </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Free Wifi </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Healthy Breakfast </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Flexible Checkout </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Swimming Pool </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Mini Fridge </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Garden View </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)"> Play Ground </a>
                </li>
                <li className="more-amenities">
                  <a href="javascript:void(0)"> 23 More Amenities </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-shop-left bg-white radius-10 mt-4">
          <div className="single-shop-left-title open">
            <h5 className="title">Filter By Rating</h5>
            <div className="single-shop-left-inner">
              <ul className="single-shop-left-filter-list active-list mt-3">
                <li className="item active">
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:void(0)">
                    <i className="las la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                  <a href="javascript:void(0)">
                    <i className="lar la-star"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingFilters;
