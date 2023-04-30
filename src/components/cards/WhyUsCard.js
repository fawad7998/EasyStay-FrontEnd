const WhyUsCard = ({icon, heading, details}) => {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 wow fadeInRight"
      data-wow-delay=".2s"
    >
      <div className="single-why center-text bg-white single-why-border radius-10">
        <div className="single-why-icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="single-why-contents mt-3">
          <h4 className="single-why-contents-title">
            <a href="javascript:void(0)"> {heading} </a>
          </h4>
          <p className="single-why-contents-para mt-3">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
