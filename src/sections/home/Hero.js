import MainSearchForm from "@sections/common/MainSearchForm";

const HeroSection = () => {
  return (
    <div className="banner-area banner-area-one">
      <div className="container-fluid p-0">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="banner-single banner-single-one percent-padding">
              <div className="banner-single-content">
                <h2 className="banner-single-content-title fw-700">
                  Enjoy holidays, vacations & family time with us.
                </h2>
                <p className="banner-single-content-para mt-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim.
                </p>
                <MainSearchForm />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 bg-image banner-right-bg radius-20"
            style={{backgroundImage: 'url(/img/banner/banner.jpg)'}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
