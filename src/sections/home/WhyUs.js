import WhyUsCard from 'src/components/cards/WhyUsCard';

const WhyUs = () => {
  return (
    <section className="booking-area pat-100 pab-50">
      <div className="container">
        <div className="section-title center-text">
          <h2 className="title">Why book our hotels?</h2>
          <div className="section-title-shapes"></div>
        </div>
        <div className="row gy-4 mt-5">
          <WhyUsCard
            icon={`/img/icons/b1.svg`}
            heading={`Hassle Free Booking`}
            details={`Book your hotel from our website without any hassle.`}
          />
          <WhyUsCard
            icon={`/img/icons/b2.svg`}
            heading={`28K Reviews`}
            details={`Book your hotel from our website without any hassle.`}
          />
          <WhyUsCard
            icon={`/img/icons/b3.svg`}
            heading={`Free Cancellation`}
            details={`Book your hotel from our website without any hassle.`}
          />
          <WhyUsCard
            icon={`/img/icons/b4.svg`}
            heading={`24/7 Support`}
            details={`Book your hotel from our website without any hassle.`}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
