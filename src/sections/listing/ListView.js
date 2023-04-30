import HotelHorizontalCards from "src/components/cards/hotel/HotelHorizontalCard";

const ListListView = () => {
  return (
    <div id="tab-list" className="tab-content-item mt-4">
      <div className="row gy-4">
        <HotelHorizontalCards />
        <HotelHorizontalCards />
        <HotelHorizontalCards />
      </div>
    </div>
  );
};
export default ListListView;
