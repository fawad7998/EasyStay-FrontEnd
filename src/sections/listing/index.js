import MainSearchForm from "@sections/common/MainSearchForm";
import ListGridView from "./GridView";
import ListingFilters from "./ListingFilters";
import ListListView from "./ListView";

const ListingMainArea = () => {
  return (
    <section className="hotel-list-area section-bg-2 pat-100 pab-100">
      <div className="container">
        <MainSearchForm />
        <div className="shop-contents-wrapper mt-5">
          <div className="shop-icon">
            <div className="shop-icon-sidebar">
              <i className="las la-bars"></i>
            </div>
          </div>
          <ListingFilters />
          <div className="shop-grid-contents">
            <div className="grid-list-contents">
              <div className="grid-list-contents-flex">
                <p className="grid-list-contents-para">
                  Showing 1-4 of 16 results
                </p>
                <div className="grid-list-view">
                  <ul className="grid-list-view-flex d-flex tabs list-style-none">
                    <li
                      className="grid-list-view-icons active"
                      data-tab="tab-grid"
                    >
                      <a href="javascript:void(0)" className="icon">
                        <i className="las la-border-all"></i>
                      </a>
                    </li>
                    <li className="grid-list-view-icons" data-tab="tab-list">
                      <a href="javascript:void(0)" className="icon">
                        <i className="las la-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ListGridView />
            <ListListView />
            <div className="row mt-5">
              <div className="col">
                <div className="pagination-wrapper">
                  <ul className="pagination-list list-style-none">
                    <li className="pagination-list-item-prev">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-button"
                      >
                        Prev
                      </a>
                    </li>
                    <li className="pagination-list-item">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="pagination-list-item active">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-link"
                      >
                        2
                      </a>
                    </li>
                    <li className="pagination-list-item">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-link"
                      >
                        3
                      </a>
                    </li>
                    <li className="pagination-list-item">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-link"
                      >
                        4
                      </a>
                    </li>
                    <li className="pagination-list-item">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-link"
                      >
                        5
                      </a>
                    </li>
                    <li className="pagination-list-item-next">
                      <a
                        href="javascript:void(0)"
                        className="pagination-list-item-button"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingMainArea;
