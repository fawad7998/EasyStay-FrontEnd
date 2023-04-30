const NearbyCard = ({ bg, heading, details }) => {
  return (
    <div className="attraction-item">
      <div className="single-attraction radius-20">
        <div className="single-attraction-thumb">
          <a href="hotel_details.html">
            <img src={bg} alt="img" />
          </a>
        </div>
        <div className="single-attraction-contents">
          <h4 className="single-attraction-contents-title">
            <a href="hotel_details.html"> {heading} </a>
          </h4>
          <p className="single-attraction-contents-para">{details}</p>
        </div>
      </div>
    </div>
  );
};
export default NearbyCard;
