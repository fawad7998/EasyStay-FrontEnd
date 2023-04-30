const NewsLetterArea= ()=>{
    return(
        <div className="newsletter-area pat-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="newsletter-wrapper newsletter-bg radius-20 newsletter-wrapper-padding wow zoomIn"
                data-wow-delay=".3s"
              >
                <div className="newsletter-wrapper-shapes">
                  <img
                    src="/img/single-page/newsletter-shape1.png"
                    alt="shapes"
                  />
                  <img
                    src="/img/single-page/newsletter-shape2.png"
                    alt="shapes"
                  />
                </div>
                <div className="newsletter-contents center-text">
                  <h3 className="newsletter-contents-title">
                    Get discounts, newsletters in your email
                  </h3>
                  <p className="newsletter-contents-para mt-3">
                    Get discounts and newsletters on our hotels in your email. We
                    promise to not spam. Unsubscribe anytime
                  </p>
                  <div className="newsletter-contents-form custom-form mt-4">
                    <div className="single-input">
                      <input
                        type="text"
                        className="form--control"
                        placeholder="Enter Email"
                      />
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default NewsLetterArea;