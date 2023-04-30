import DashboardLayout from 'src/layouts/dashboard';

const DashboardBookings = () => {
  return (
    <>
      <DashboardLayout active={'/dashboard/bookings'} children={<></>} />
    </>
  );
};

export default DashboardBookings;
