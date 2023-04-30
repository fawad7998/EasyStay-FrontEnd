import DashboardLayout from 'src/layouts/dashboard';
import AdvantureDashboard from '@sections/dashboard/home/Advantures';

const DashboardAdvanture = () => {
  return (
    <>
      <DashboardLayout
        active={'/dashboard/adventures'}
        children={<AdvantureDashboard />}
      />
    </>
  );
};

export default DashboardAdvanture;
