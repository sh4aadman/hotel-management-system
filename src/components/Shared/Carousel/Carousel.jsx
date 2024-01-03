import PropTypes from 'prop-types';
import { BiHotel } from "react-icons/bi";
import { RiHotelLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Carousel = ({hotel}) => {
  
    const {uid, category, name, description, accommodates, price_per_night, space, image} = hotel;

    return (
    <div id={`item${uid}`} className="carousel-item w-full grid grid-cols-2 gap-5">
      <div className='space-y-5'>
        <h2 className="text-2xl text-black font-bebas">{category}</h2>
        <h4 className='text-8xl text-black font-bebas'>{name}</h4>
        <p className="text-black font-mont">{description}</p>
        <p className='text-2xl text-black font-bebas flex gap-2 items-center'>Number of Guest Accommodation: <BiHotel /> {accommodates} person</p>
        <p className='text-2xl text-black font-bebas'>Price-per-night: £ {price_per_night} Pounds</p>
        <p className='text-2xl text-black font-bebas flex gap-2 items-center'>Space: <RiHotelLine /> {space} sq.</p><br />
        <Link to={`/bookings/${uid}`}><button className="bg-primary px-7 py-3 text-black">Book Now</button></Link>
      </div>
      <div>
        <img src={image} alt="carousel-image" />
      </div>
    </div>
  );
};

Carousel.propTypes = {
    hotel: PropTypes.object
}

export default Carousel;
