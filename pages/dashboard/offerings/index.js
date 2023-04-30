import {useRouter} from 'next/router';
import {useState} from 'react';
const Offerings = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  console.log(selected);
  return (
    <>
      {/* <div className="container"> */}
      <div className="">
        <div className="login-padding section-bg-2" style={{height: '100%'}}>
          <section class="booking-area pat-100 ">
            <div class="">
              <div class="section-title center-text">
                <h2 class="title">What are your offerings?</h2>
                <p className="sigle-para mt-2">
                  Please choose your one or more products.
                </p>
                <div class="section-title-shapes"></div>
              </div>
              <div class="row gy-4 mt-5">
                <div
                  class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight"
                  data-wow-delay=".2s"
                  onClick={() =>
                    setSelected((prevState) => [...prevState, 'rooms'])
                  }
                >
                  <div
                    class={`cursor-pointer single-why center-text bg-white ${
                      selected.includes('rooms')
                        ? 'single-why-border-selected'
                        : 'single-why-border'
                    } radius-10`}
                  >
                    <div class="single-why-icon">
                      <img src="/icons/room.png" alt="icon" />
                    </div>
                    <div class="single-why-contents mt-3">
                      <h4 class="single-why-contents-title">
                        <a href="javascript:void(0)"> Rooms </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-4 col-lg-4 col-md-6 wow zoomIn"
                  data-wow-delay=".4s"
                  onClick={() =>
                    setSelected((prevState) => [...prevState, 'tours'])
                  }
                >
                  <div
                    class={`cursor-pointer single-why center-text bg-white ${
                      selected.includes('tours')
                        ? 'single-why-border-selected'
                        : 'single-why-border'
                    } radius-10`}
                  >
                    <div class="single-why-icon">
                      <img src="/icons/traveler.png" alt="icon" />
                    </div>
                    <div class="single-why-contents mt-3">
                      <h4 class="single-why-contents-title">
                        <a href="javascript:void(0)"> Trips & Tours </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                  data-wow-delay=".2s"
                  onClick={() =>
                    setSelected((prevState) => [...prevState, 'adventures'])
                  }
                >
                  <div
                    class={`cursor-pointer single-why center-text bg-white ${
                      selected.includes('adventures')
                        ? 'single-why-border-selected'
                        : 'single-why-border'
                    } radius-10`}
                  >
                    <div class="single-why-icon">
                      <img src="/icons/adventure.png" alt="icon" />
                    </div>
                    <div class="single-why-contents mt-3">
                      <h4 class="single-why-contents-title">
                        <a href="javascript:void(0)"> Sports & Adventures </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-4 mt-5">
                <div className="btn-wrapper text-center">
                  <a
                    onClick={() => router.push('/dashboard')}
                    className="cmn-btn btn-bg-1 radius-10"
                  >
                    Proceed To Dashboard
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Offerings;
