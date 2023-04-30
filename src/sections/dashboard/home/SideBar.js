import {useRouter} from 'next/router';
const DashboardSidebar = ({active}) => {
  const router = useRouter();
  return (
    <div
      className="dashboard-left-content"
      style={
        {
          // width: '22% !important',
        }
      }
    >
      <div className="dashboard-close-main">
        <div className="close-bars">
          <i className="las la-times"></i>
        </div>
        <div className="dashboard-bottom">
          <div
            className={`logo-wrapper pb-5 ${
              active == 'dashboard' ? 'd-none' : 'd-block'
            }`}
          >
            <a href="index.html" className={`logo `}>
              <img src="/img/logo.png" alt="" />
            </a>
          </div>
          <ul className="dashboard-list list-style-none">
            <li className={`list ${active == '/dashboard' ? `active` : ''}`}>
              <a onClick={() => router.push('/dashboard')}>
                <i className="las la-briefcase"></i> Dashboard
              </a>
            </li>
            <li
              className={`list ${active == '/dashboard/rooms' ? `active` : ''}`}
            >
              <a onClick={() => router.push('/dashboard/rooms')}>
                <i className="las la-bed"></i> Rooms
              </a>
            </li>
            <li
              className={`list ${active == '/dashboard/trips' ? `active` : ''}`}
            >
              <a onClick={() => router.push('/dashboard/trips')}>
                <i className="las la-plane"></i> Trips & Tours
              </a>
            </li>
            <li
              className={`list ${
                active == '/dashboard/adventures' ? `active` : ''
              }`}
            >
              <a onClick={() => router.push('/dashboard/adventures')}>
                <i className="las la-hiking"></i> Adventures
              </a>
            </li>
            <li
              className={`list ${
                active == '/dashboard/bookings' ? `active` : ''
              }`}
            >
              <a onClick={() => router.push('/dashboard/bookings')}>
                <i className="las la-list"></i> Bookings
              </a>
            </li>
            <li
              className={`list ${
                active == '/dashboard/payments' ? `active` : ''
              }`}
            >
              <a onClick={() => router.push('/dashboard/payments')}>
                <i className="las la-money-check-alt"></i> Payments
              </a>
            </li>
            <li
              className={`list ${
                active == '/dashboard/refunds' ? `active` : ''
              }`}
            >
              <a onClick={() => router.push('/dashboard/refunds')}>
                <i className="las la-times-circle"></i> Cancellation & Refund
              </a>
            </li>
            <li
              className={`list ${
                active == '/dashboard/reports' ? `active` : ''
              }`}
            >
              <a onClick={() => router.push('/dashboard/reports')}>
                <i className="las la-exclamation-triangle"></i> Report an issue{' '}
                <span className="badge-notification"> 12 </span>
              </a>
            </li>
            <li className={`list has-children`}>
              <a href="javascript:void(0)">
                <i className="las la-user-circle"></i> Profile
              </a>
              <ul className="submenu list-style-none">
                <li className="list">
                  <a href="dashboard_profile.html"> Profile </a>
                </li>
                <li className="list">
                  <a href="dashboard_edit_profile.html"> Edit Profile </a>
                </li>
                <li className="list">
                  <a href="dashboard_pass_change.html">Password Change</a>
                </li>
              </ul>
            </li>
            <li className="list has-children">
              <a href="javascript:void(0)">
                <i className="las la-headset"></i> Support
              </a>
              <ul className="submenu list-style-none">
                <li className="list">
                  <a href="dashboard_support.html"> Support </a>
                </li>
                <li className="list">
                  <a href="dashboard_tickets.html"> Tickets </a>
                </li>
                <li className="list">
                  <a href="dashboard_add_tickets.html"> Add Tickets </a>
                </li>
              </ul>
            </li>
            <li className="list">
              <a onClick={() => router.push('/auth/login')}>
                <i className="las la-sign-out-alt"></i> Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
