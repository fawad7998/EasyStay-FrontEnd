import Header from 'src/components/header';

const DashboardMain = () => {
  return (
    <div className="dashboard-reservation">
      <div className="single-reservation bg-white base-padding show open">
        <div className="single-reservation-expandIcon">
          <i className="las la-angle-down"></i>
        </div>
        <div className="single-reservation-head">
          <div className="single-reservation-flex">
            <div className="single-reservation-content">
              <h5 className="single-reservation-content-title">
                Reservation ID
              </h5>
              <span className="single-reservation-content-id">
                #824409583563
              </span>
            </div>
            <div className="single-reservation-btn">
              <a href="javascript:void(0)" className="dash-btn btn-pending">
                Pending
              </a>
            </div>
          </div>
        </div>
        <div className="single-reservation-inner">
          <div className="single-reservation-item">
            <div className="single-reservation-name">
              <h5 className="single-reservation-name-title">Nelson Norman</h5>
              <p className="single-reservation-name-para">
                (208) 555-0112 · 8502 Preston Rd. Inglewood, Maine 98380
              </p>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-details">
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check in
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 23 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check Out
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 28 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Guests & Rooms
                </span>
                <h5 className="single-reservation-details-title">
                  4 Adults, 2 Children, 3 Rooms
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Booked
                </span>
                <h5 className="single-reservation-details-title">28 Jun 22</h5>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-content">
                <h5 className="single-reservation-content-title">Total Bill</h5>
                <span className="single-reservation-content-price">$250</span>
              </div>
              <div className="single-reservation-logoPrice">
                <span className="single-reservation-logoPrice-thumb">
                  <img src="assets/img/dashboard/mslogo.png" alt="img" />
                </span>
                <span className="single-reservation-logoPrice-code">
                  ***9320
                </span>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-name">
                <h5 className="single-reservation-name-title">Beyond Hotel</h5>
                <p className="single-reservation-name-para">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
              <div className="single-reservation-btn">
                <a href="javascript:void(0)" className="dash-btn popup-click">
                  <i className="las la-exclamation-circle"></i> Cancel?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-reservation bg-white base-padding">
        <div className="single-reservation-expandIcon">
          <i className="las la-angle-down"></i>
        </div>
        <div className="single-reservation-head">
          <div className="single-reservation-flex">
            <div className="single-reservation-content">
              <h5 className="single-reservation-content-title">
                Reservation ID
              </h5>
              <span className="single-reservation-content-id">
                #824409583563
              </span>
            </div>
            <div className="single-reservation-btn">
              <a href="javascript:void(0)" className="dash-btn btn-cancelled">
                Cancelled
              </a>
            </div>
          </div>
        </div>
        <div className="single-reservation-inner">
          <div className="single-reservation-item">
            <div className="single-reservation-name">
              <h5 className="single-reservation-name-title">Nelson Norman</h5>
              <p className="single-reservation-name-para">
                (208) 555-0112 · 8502 Preston Rd. Inglewood, Maine 98380
              </p>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-details">
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check in
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 23 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check Out
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 28 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Guests & Rooms
                </span>
                <h5 className="single-reservation-details-title">
                  4 Adults, 2 Children, 3 Rooms
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Booked
                </span>
                <h5 className="single-reservation-details-title">28 Jun 22</h5>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-content">
                <h5 className="single-reservation-content-title">Total Bill</h5>
                <span className="single-reservation-content-price">$280</span>
              </div>
              <div className="single-reservation-logoPrice">
                <span className="single-reservation-logoPrice-thumb">
                  <img src="assets/img/dashboard/mslogo.png" alt="img" />
                </span>
                <span className="single-reservation-logoPrice-code">
                  ***9520
                </span>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-name">
                <h5 className="single-reservation-name-title">Beyond Hotel</h5>
                <p className="single-reservation-name-para">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
              <div className="single-reservation-btn">
                <a href="javascript:void(0)" className="dash-btn popup-click">
                  <i className="las la-exclamation-circle"></i> Cancel?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-reservation bg-white base-padding">
        <div className="single-reservation-expandIcon">
          <i className="las la-angle-down"></i>
        </div>
        <div className="single-reservation-head">
          <div className="single-reservation-flex">
            <div className="single-reservation-content">
              <h5 className="single-reservation-content-title">
                Reservation ID
              </h5>
              <span className="single-reservation-content-id">
                #82443454765
              </span>
            </div>
            <div className="single-reservation-btn">
              <a href="javascript:void(0)" className="dash-btn btn-pending">
                Pending
              </a>
            </div>
          </div>
        </div>
        <div className="single-reservation-inner">
          <div className="single-reservation-item">
            <div className="single-reservation-name">
              <h5 className="single-reservation-name-title">Nelson Norman</h5>
              <p className="single-reservation-name-para">
                (208) 555-0112 · 8502 Preston Rd. Inglewood, Maine 98380
              </p>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-details">
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check in
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 23 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Check Out
                </span>
                <h5 className="single-reservation-details-title">
                  10:30 AM, 28 Jun 22
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Guests & Rooms
                </span>
                <h5 className="single-reservation-details-title">
                  4 Adults, 2 Children, 3 Rooms
                </h5>
              </div>
              <div className="single-reservation-details-item">
                <span className="single-reservation-details-subtitle">
                  Booked
                </span>
                <h5 className="single-reservation-details-title">28 Jun 22</h5>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-content">
                <h5 className="single-reservation-content-title">Total Bill</h5>
                <span className="single-reservation-content-price">$280</span>
              </div>
              <div className="single-reservation-logoPrice">
                <span className="single-reservation-logoPrice-thumb">
                  <img src="assets/img/dashboard/mslogo.png" alt="img" />
                </span>
                <span className="single-reservation-logoPrice-code">
                  ***9520
                </span>
              </div>
            </div>
          </div>
          <div className="single-reservation-item">
            <div className="single-reservation-flex">
              <div className="single-reservation-name">
                <h5 className="single-reservation-name-title">Beyond Hotel</h5>
                <p className="single-reservation-name-para">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
              <div className="single-reservation-btn">
                <a href="javascript:void(0)" className="dash-btn popup-click">
                  <i className="las la-exclamation-circle"></i> Cancel?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
