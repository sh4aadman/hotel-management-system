import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

  const {user, logoutUser} = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar font-medium text-black p-0">
      <div className="flex-grow lg:flex-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="text-2xl border border-black px-7 py-3">Hotel I/O</a>
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="navbar hidden lg:flex justify-around">
          <ul className="menu-horizontal gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end flex justify-end">
          {
            user ? <button onClick={logoutUser} className="bg-primary px-7 py-3 text-black">Log out</button> : <Link to='/login'><button className="bg-primary px-7 py-3 text-black">Log in</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
