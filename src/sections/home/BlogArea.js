const BlogArea = ()=>{
    return(
        <section className="blog-area pat-50 pab-50">
        <div className="container">
          <div className="section-title center-text">
            <h2 className="title">Latest News</h2>
            <div className="section-title-shapes"></div>
          </div>
          <div className="row gy-4 mt-4">
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="single-blog-thumbs">
                  <a href="blog_details.html">
                    <img
                      className="lazyloads"
                      src="/img/blog/blog1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-thumbs-date">
                    <a href="javascript:void(0)">
                      <span className="date"> 18 </span>
                      <span className="month"> Jun </span>
                    </a>
                  </div>
                </div>
                <div className="single-blog-contents mt-3">
                  <div className="single-blog-contents-tags mt-3">
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)">
                        <i className="las la-tag"></i> Hotel
                      </a>
                    </span>
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)"> 22 Comments </a>
                    </span>
                  </div>
                  <h4 className="single-blog-contents-title mt-3">
                    <a href="blog_details.html">
                      Great Deals to Send Your Loved Ones Somewhere Nice
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="single-blog-thumbs">
                  <a href="blog_details.html">
                    <img
                      className="lazyloads"
                      src="/img/blog/blog2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-thumbs-date">
                    <a href="javascript:void(0)">
                      <span className="date"> 19 </span>
                      <span className="month"> Jun </span>
                    </a>
                  </div>
                </div>
                <div className="single-blog-contents mt-3">
                  <div className="single-blog-contents-tags mt-3">
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)">
                        <i className="las la-tag"></i> Hotel
                      </a>
                    </span>
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)"> 25 Comments </a>
                    </span>
                  </div>
                  <h4 className="single-blog-contents-title mt-3">
                    <a href="blog_details.html">
                      Read Real Guest Reviews. 24/7 Customer Service and others.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="single-blog-thumbs">
                  <a href="blog_details.html">
                    <img
                      className="lazyloads"
                      src="/img/blog/blog3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-thumbs-date">
                    <a href="javascript:void(0)">
                      <span className="date"> 20 </span>
                      <span className="month"> Jun </span>
                    </a>
                  </div>
                </div>
                <div className="single-blog-contents mt-3">
                  <div className="single-blog-contents-tags mt-3">
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)">
                        <i className="las la-tag"></i> Hotel
                      </a>
                    </span>
                    <span className="single-blog-contents-tags-item">
                      <a href="javascript:void(0)"> 12 Comments </a>
                    </span>
                  </div>
                  <h4 className="single-blog-contents-title mt-3">
                    <a href="blog_details.html">
                      Compare hotel prices and find an amazing price for the
                      Resort
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    )
}
export default BlogArea;