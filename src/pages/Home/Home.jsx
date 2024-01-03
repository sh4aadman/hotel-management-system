import { Link } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";

const Home = () => {
  return (
    <div className="">

      {/* Used Header component to integrate navigation panel */}
      <Header></Header>

      
      <div className="min-h-screen">
        <div>
          <div className="hero pt-10">
            <div className="hero-content text-center">
              <div className="space-y-10">
                <h1 className="text-5xl font-bold">Welcome!</h1>
                <p className="py-6 max-w-4xl">
                  A hotel management application revolutionizes hospitality by
                  centralizing operations like reservations, staff scheduling,
                  and financial tracking. Seamlessly integrating booking
                  systems, it optimizes guest experiences with personalized
                  services, mobile check-ins, and feedback channels. This
                  digital solution empowers efficient coordination among
                  departments, enhancing productivity and ensuring a smooth
                  workflow. With robust features for real-time updates, billing,
                  and analytics, it enables informed decision-making for hotel
                  owners. Ultimately, this all-in-one platform elevates service
                  quality, operational efficiency, and guest satisfaction,
                  cementing its pivotal role in modern hotel management.
                </p>
                <Link to='/login'><button className="bg-primary px-7 py-3 text-black">Log in</button></Link>
                <Link to='/rooms'><button className="bg-primary px-7 py-3 text-black ml-3">Rooms</button></Link>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center py-3">* Browse other pages through the navigation panel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
