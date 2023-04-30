const BrandArea = () => {
  return (
    <div className="brand-area pat-50 pab-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="global-slick-init attraction-slider slider-inner-margin"
              data-slidesToShow="6"
              data-infinite="true"
              data-arrows="false"
              data-dots="false"
              data-swipeToSlide="true"
              data-autoplay="true"
              data-autoplaySpeed="2500"
              data-prevArrow='<div className="prev-icon"><i className="las la-angle-left"></i></div>'
              data-nextArrow='<div className="next-icon"><i className="las la-angle-right"></i></div>'
              data-responsive='[{"breakpoint": 1400,"settings": {"slidesToShow": 5}},{"breakpoint": 1200,"settings": {"slidesToShow": 4}},{"breakpoint": 992,"settings": {"slidesToShow": 3}},{"breakpoint": 576, "settings": {"slidesToShow": 2} }]'
            >
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo1.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo2.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo3.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo4.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo5.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo6.png" alt="brandLogo" />
                </a>
              </div>
              <div className="single-brand">
                <a href="javascript:void(0)" className="single-brand-thumb">
                  <img src="/img/single-page/logo3.png" alt="brandLogo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandArea;
