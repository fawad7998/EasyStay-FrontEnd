const HotelVerticalCards = () => {
  return (
    <div className="col-md-6">
      <div className="hotel-view bg-white radius-20">
        <a
          href="hotel_details.html"
          className="hotel-view-thumb hotel-view-grid-thumb bg-image"
          style={{
            backgroundImage: `url(/img/single-page/hotel-grid1.jpg)`,
          }}
        ></a>
        <div className="hotel-view-contents">
          <div className="hotel-view-contents-header">
            <span className="hotel-view-contents-review">
              <i className="las la-star"></i> 4.5
              <span className="hotel-view-contents-review-count">(380)</span>
            </span>
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
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Car Parking"
              >
                <i className="las la-parking"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Free Wifi"
              >
                <i className="las la-wifi"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Free Breakfast"
              >
                <i className="las la-coffee"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Home Service"
              >
                <i className="las la-quidditch"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Swimming Pool"
              >
                <i className="las la-swimming-pool"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Reception"
              >
                <i className="las la-receipt"></i>
              </div>
              <div
                className="hotel-view-contents-icon myTooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Gym"
              >
                <i className="las la-dumbbell"></i>
              </div>
              <div className="hotel-view-contents-icon">
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
              <div className="hotel-view-contents-bottom-contents">
                <h4 className="hotel-view-contents-bottom-title">
                  $230 <sub>/Night</sub>
                </h4>
                <p className="hotel-view-contents-bottom-para">
                  (4 Nights, 2 Rooms, 4 Persons)
                </p>
              </div>
              <div className="btn-wrapper">
                <a
                  href="javascript:void(0)"
                  className="cmn-btn btn-bg-1 btn-small"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelVerticalCards;
