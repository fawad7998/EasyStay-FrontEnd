const QuestionArea = ()=>{
    return(
        <section className="question-area pat-50 pab-50">
        <div className="container">
          <div className="section-title center-text">
            <h2 className="title">Frequently Asked Question</h2>
            <div className="section-title-shapes"></div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-xl-8 col-lg-7">
              <div className="faq-wrapper">
                <div className="faq-contents">
                  <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                    <h3 className="faq-title">How does it works?</h3>
                    <div className="faq-panel">
                      <p className="faq-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non ipsum purus erat aliquam fermentum, tincidunt. Massa
                        id faucibus orci nunc sed turpis nibh neque. Ut tellus
                        curabitur arcu, mollis malesuada arcu.
                      </p>
                    </div>
                  </div>
                  <div
                    className="faq-item active open wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <h3 className="faq-title">Do I get full refund if I cancel?</h3>
                    <div className="faq-panel">
                      <p className="faq-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non ipsum purus erat aliquam fermentum, tincidunt. Massa
                        id faucibus orci nunc sed turpis nibh neque. Ut tellus
                        curabitur arcu, mollis malesuada arcu.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item wow fadeInLeft" data-wow-delay=".3s">
                    <h3 className="faq-title">Do you offer pool service?</h3>
                    <div className="faq-panel">
                      <p className="faq-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non ipsum purus erat aliquam fermentum, tincidunt. Massa
                        id faucibus orci nunc sed turpis nibh neque. Ut tellus
                        curabitur arcu, mollis malesuada arcu.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                    <h3 className="faq-title">What if I want to cancel?</h3>
                    <div className="faq-panel">
                      <p className="faq-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non ipsum purus erat aliquam fermentum, tincidunt. Massa
                        id faucibus orci nunc sed turpis nibh neque. Ut tellus
                        curabitur arcu, mollis malesuada arcu.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                    <h3 className="faq-title">What’s the closure time?</h3>
                    <div className="faq-panel">
                      <p className="faq-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non ipsum purus erat aliquam fermentum, tincidunt. Massa
                        id faucibus orci nunc sed turpis nibh neque. Ut tellus
                        curabitur arcu, mollis malesuada arcu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="faq-question faq-question-border radius-10 sticky-top">
                <h3 className="faq-question-title">Still got questions?</h3>
                <div className="faq-question-form custom-form mat-20">
                  <form action="#">
                    <div className="single-input">
                      <label className="label-title"> Name </label>
                      <input
                        type="text"
                        className="form--control radius-10"
                        placeholder="Type Name"
                      />
                    </div>
                    <div className="single-input">
                      <label className="label-title"> Email </label>
                      <input
                        type="text"
                        className="form--control radius-10"
                        placeholder="Type Email"
                      />
                    </div>
                    <div className="single-input">
                      <label className="label-title"> Questions </label>
                      <textarea
                        name="message"
                        className="form--control form-message radius-10"
                        placeholder="Type Your Questons..."
                      ></textarea>
                    </div>
                    <button className="submit-btn w-100 radius-10" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default QuestionArea;