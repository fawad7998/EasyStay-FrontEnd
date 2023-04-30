import Header from 'src/components/header';
import DashboardSidebar from '@sections/dashboard/home/SideBar';
const DashboardLayout = ({children, active}) => {
  return (
    <>
      <div class="body-overlay"></div>

      <div className="dashboard-area">
        <div className="dashboard-contents-wrapper">
          <div className="dashboard-icon">
            <div className="sidebar-icon">
              <i className="las la-bars"></i>
            </div>
          </div>
          <DashboardSidebar active={active} />
          <div
            className="dashboard-right-contents mt-4 mt-lg-0"
            style={{
              // width: '88% !important',
              borderLeft: '1px solid #EAECF0',
              paddingLeft: '25px',
              paddingRight: '25px',
            }}
          >
            <Header origin={'dashboard'} />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
