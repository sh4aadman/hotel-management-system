import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-mont">
      <div className="max-w-6xl mx-auto">

        {/* Used Outlet to display multiple pages setup as Single-page application */}
        <Outlet></Outlet> 
      
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
