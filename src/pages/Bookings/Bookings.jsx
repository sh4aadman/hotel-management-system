import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useContext, useState } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {

  const {user} = useContext(AuthContext);

  const [selected, setSelected] = useState(false);

  const rooms = useLoaderData();
  const roomId = useParams();
  const idInt = parseInt(roomId.id);

  const room = rooms.find(item => item.uid === idInt);

  let footer = <p className="text-slate-400 italic text-center">Please, select a day!</p>
  if (selected) {
    footer = <p className="text-slate-400 italic text-center">You have selected {format(selected, 'PP')}!</p>
  }

  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="flex justify-center items-center mt-5 mb-14">
        <div>
          <div className="space-y-12 w-[550px] border border-1 border-black p-14">
            <h2 className="font-bold text-2xl">Booking Information</h2>
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              defaultValue={user.displayName}
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue={user.email}
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="text"
              name="room_name"
              id="room_name"
              placeholder="Room"
              defaultValue={room.name}
              disabled
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="text"
              name="accommodations"
              id="accommodations"
              placeholder="Room"
              defaultValue={`${room.accommodates} person`}
              disabled
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              defaultValue={`${room.price_per_night} £`}
              disabled
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="text"
              name="duration"
              id="duration"
              placeholder="Duration"
              defaultValue='1 Day (24 hrs)'
              disabled
            />
            <br />
            <div className="flex justify-evenly">
              <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer}></DayPicker>
            </div>
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-semibold placeholder:text-lg placeholder:text-black"
              type="text"
              name="date"
              id="date"
              placeholder={selected ? format(selected, 'PP') : 'Pick a date!'}
              disabled
            />
            <br />
            <input
              className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <br />
            <div>
              <button className="w-full bg-[#F9A51A] font-medium py-4">
                Confirm
              </button>
            </div>
            <div>
              <Link to={`/rooms`}><button className="w-full bg-white border border-black font-medium py-4">
                Back to Room Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
