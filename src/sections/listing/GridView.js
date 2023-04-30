import HotelVerticalCards from "src/components/cards/hotel/HotelVerticalCard";
const ListGridView = () => {
  return (
    <div id="tab-grid" className="tab-content-item active mt-4">
      <div className="row gy-4">
        <HotelVerticalCards />
        <HotelVerticalCards />
        <HotelVerticalCards />
        <HotelVerticalCards />
        
      </div>
    </div>
  );
};

export default ListGridView;
