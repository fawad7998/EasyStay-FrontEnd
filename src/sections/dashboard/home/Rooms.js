import Image from 'next/image';
import {isMobile} from 'react-device-detect';

const RoomsDashboard = () => {
  return (
    <div className="dashboard-promo">
      <div className="breadcrumb-area breadcrumb-padding">
        <div className="container custom-container-one">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-contents">
                <h4 className="breadcrumb-contents-title">Rooms</h4>
                <ul className="breadcrumb-contents-list list-style-none">
                  <li className="breadcrumb-contents-list-item">
                    <a
                      href="index.html"
                      className="breadcrumb-contents-list-item-link"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="breadcrumb-contents-list-item">Rooms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div
          className={`${
            isMobile ? 'mt-2 mb-2' : 'mt-4 mb-4'
          } d-flex align-items-center justify-content-between`}
        >
          <div className="d-flex align-items-center">
            <Image
              className="radius-10"
              src={`/img/single-page/hotel-grid1.jpg`}
              width={60}
              height={60}
              alt={'room-image'}
            />
            <p style={{marginLeft: '15px'}} className="text-secondary">
              King Suite Room
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span
              style={{
                marginRight: '150px',
                fontSize: '12px',
                padding: '1px 15px 1px 15px',
                fontWeight: 600,
                letterSpacing: '1px',
                display: isMobile ? 'none' : 'block',
              }}
              className="bg-info radius-5 text-light mt-1"
            >
              Vacant
            </span>
            <a className="btn btn-success radius-5">
              <i className="las la-edit"></i>
              {!isMobile ? 'Edit' : ''}
            </a>
            <a className="btn btn-danger radius-5 mx-1">
              <i className="las la-trash"></i>
              {!isMobile ? 'Delete' : ''}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDashboard;
