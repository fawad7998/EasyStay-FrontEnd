import NearbyCard from "src/components/cards/NearbyCard";

const AttractionArea = () => {
  return (
    <section className="attraction-area pat-50 pab-50">
      <div className="container">
        <div className="section-title text-left append-flex">
          <h2 className="title">Nearby Attractions</h2>
          <div className="append-attraction"></div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="global-slick-init attraction-slider nav-style-one slider-inner-margin"
              data-appendArrows=".append-attraction"
              data-infinite="true"
              data-arrows="true"
              data-dots="false"
              data-slidesToShow="4"
              data-swipeToSlide="true"
              data-autoplay="true"
              data-autoplaySpeed="2500"
              data-prevArrow='<div className="prev-icon"><i className="las la-angle-left"></i></div>'
              data-nextArrow='<div className="next-icon"><i className="las la-angle-right"></i></div>'
              data-responsive='[{"breakpoint": 1400,"settings": {"slidesToShow": 4}},{"breakpoint": 1200,"settings": {"slidesToShow": 3}},{"breakpoint": 992,"settings": {"slidesToShow": 2}},{"breakpoint": 480, "settings": {"slidesToShow": 1} }]'
            >
              <NearbyCard
                bg={`/img/attraction/a1.jpg`}
                heading={`Eiffel Tower`}
                details={`We have over 28K reviews to assure you top notch service.`}
              />
              <NearbyCard
                bg={`/img/attraction/a2.jpg`}
                heading={`Disney Land`}
                details={`We have over 28K reviews to assure you top notch service.`}
              />
              <NearbyCard
                bg={`/img/attraction/a3.jpg`}
                heading={`Palace de justice`}
                details={`We have over 28K reviews to assure you top notch service.`}
              />
              <NearbyCard
                bg={`/img/attraction/a4.jpg`}
                heading={`Arc de trimorph `}
                details={`We have over 28K reviews to assure you top notch service.`}
              />
              <NearbyCard
                bg={`/img/attraction/a2.jpg`}
                heading={`Disney Land`}
                details={`We have over 28K reviews to assure you top notch service.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionArea;
