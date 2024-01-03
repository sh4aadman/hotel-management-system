import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Shared/Carousel/Carousel";
import Header from "../../components/Shared/Header/Header";

const Rooms = () => {
  const hotels = useLoaderData();

  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="py-10">
        <div className="carousel h-[75vh] w-full">
          {hotels.map((hotel) => (
            <Carousel hotel={hotel} key={hotel.uid}></Carousel>
          ))}
        </div>
        <div className="flex justify-center w-full gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
          <a href="#item5" className="btn btn-xs">
            5
          </a>
          <a href="#item6" className="btn btn-xs">
            6
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
