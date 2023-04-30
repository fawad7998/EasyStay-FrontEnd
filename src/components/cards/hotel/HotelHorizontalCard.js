const HotelHorizontalCards = ({isUserAdmin}) => {
  return (
    <div className="col-12">
      <div className="hotel-view bg-white radius-20">
        <div className="hotel-view-flex">
          <a
            href="hotel_details.html"
            className="hotel-view-thumb hotel-view-list-thumb bg-image"
            style={{
              backgroundImage: `url(/img/single-page/hotel-list1.jpg)`,
            }}
          ></a>
          <div className="hotel-view-contents">
            <div className="hotel-view-contents-header">
              <div className="hotel-view-contents-header-flex d-flex flex-wrap gap-3 align-items-center justify-content-between">
                <span className="hotel-view-contents-review">
                  <i className="las la-star"></i> 4.5
                  <span className="hotel-view-contents-review-count">
                    (380)
                  </span>
                </span>
                <div className="btn-wrapper">
                  <a
                    href="javascript:void(0)"
                    className="cmn-btn btn-bg-1 btn-small"
                    style={{
                      display: !isUserAdmin ? 'block' : 'none',
                    }}
                  >
                    Reserve Now
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="cmn-btn btn-bg-1 btn-small"
                    style={{
                      display: !isUserAdmin ? 'none' : 'block',
                    }}
                  >
                    Edit Info
                  </a>
                </div>
              </div>
              <h3 className="hotel-view-contents-title">
                <a href="hotel_details.html"> King Suite Room </a>
              </h3>
              <div className="hotel-view-contents-location mt-2">
                <span className="hotel-view-contents-location-icon">
                  <i className="las la-map-marker-alt"></i>
                </span>
                <span className="hotel-view-contents-location-para">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </span>
              </div>
            </div>
            <div className="hotel-view-contents-middle">
              <div className="hotel-view-contents-flex">
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-parking"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Parking
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-wifi"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Wifi
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-coffee"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Breakfast
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-quidditch"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Room Service
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    <i className="las la-swimming-pool"></i>
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Pool
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-receipt"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Reception
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <span>
                    {' '}
                    <i className="las la-dumbbell"></i>{' '}
                  </span>
                  <p className="hotel-view-contents-icon-title flex-fill">
                    Gym
                  </p>
                </div>
                <div className="hotel-view-contents-icon d-flex gap-1">
                  <a
                    className="hotel-view-contents-icon-more"
                    href="javascript:void(0)"
                  >
                    +8 More
                  </a>
                </div>
              </div>
            </div>
            <div className="hotel-view-contents-bottom">
              <div className="hotel-view-contents-bottom-flex">
                <div className="hotel-view-contents-bottom-contents d-flex flex-wrap gap-4 gap-sm-1">
                  <h4 className="hotel-view-contents-bottom-title">
                    $230 <sub>/Night</sub>
                  </h4>
                  <p className="hotel-view-contents-bottom-para">
                    (4 Nights, 2 Rooms, 4 Persons)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHorizontalCards;
