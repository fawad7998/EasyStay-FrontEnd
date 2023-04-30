import DashboardMain from '@sections/dashboard/home/Main';
import DashboardLayout from 'src/layouts/dashboard';
const Dashboard = () => {
  return (
    <>
      <DashboardLayout children={<DashboardMain />} active={'/dashboard'} />
    </>
  );
};

export default Dashboard;
