import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../components/Private/Social/Social";
import Header from "../../components/Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const {loginUser} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    
    loginUser(email, password)
    .then(response => {
      if (response) {
        toast.success('Logged in successfully!', {
          style: {
            border: '1px solid black'
          },
          iconTheme: {
            primary: '#F9A51A'
          }
        });
      }
      navigate(location.state ? location.state : '/');
    })
    .catch(error => {
      if (error) {
        toast('Please check your credentials!', {
          icon: '⚠',
          style: {
            border: '1px solid black'
          },
          iconTheme: {
            primary: '#F9A51A'
          }
        });
      }
    })
  }

  return (
    <div>
      <div className="text-black">
        <Header></Header>
      </div>
      <Toaster></Toaster>
      <div className="flex justify-center items-center mt-5">
        <div>
          <form onSubmit={handleLogin}>
            <div className="space-y-12 w-[550px] border border-1 border-black p-14">
              <h2 className="font-bold text-2xl">Login</h2>
              <input
                className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <br />
              <input
                className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <br />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <label className="label cursor-pointer p-0">
                    <input type="checkbox" className="checkbox border-black" />
                  </label>
                  <span className="font-medium">Remember me</span>
                </div>
                <div>
                  <a className="underline text-[#F9A51A]" href="http://">
                    Forgot Password
                  </a>
                </div>
              </div>
              <div>
                <button className="w-full bg-[#F9A51A] font-medium py-4">
                  Login
                </button>
              </div>
              <div className="text-center">
                <p>Do not have an account? <Link className="text-[#F9A51A] underline" to='/register'>Create an account</Link></p>
              </div>
            </div>
          </form>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;
