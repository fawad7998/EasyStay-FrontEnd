import DashboardLayout from 'src/layouts/dashboard';
import TripsDashboard from '@sections/dashboard/home/Trips';

const DashboardTrips = () => {
  return (
    <>
      <DashboardLayout
        active={'/dashboard/trips'}
        children={<TripsDashboard />}
      />
    </>
  );
};
export default DashboardTrips;
