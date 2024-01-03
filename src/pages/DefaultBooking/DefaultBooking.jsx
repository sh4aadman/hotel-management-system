import { Link } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";

const DefaultBooking = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen max-w-5xl mx-auto mt-5">
                <h2 className="text-4xl italic text-center">You need to pick a room first!</h2>
                <div className="flex justify-center mt-10"><Link to='/rooms'><button className="bg-primary px-7 py-3 text-black text-lg">Check Rooms</button></Link></div>
            </div>
        </div>
    );
};

export default DefaultBooking;