import Header from 'src/components/header';
import DashboardSidebar from '@sections/dashboard/home/SideBar';
import RoomsDashboard from '@sections/dashboard/home/Rooms';
import DashboardMain from '@sections/dashboard/home/Main';
import DashboardLayout from 'src/layouts/dashboard';

const DashboardRooms = () => {
  return (
    <>
      <DashboardLayout
        active={'/dashboard/rooms'}
        children={<RoomsDashboard />}
      />
    </>
  );
};

export default DashboardRooms;
