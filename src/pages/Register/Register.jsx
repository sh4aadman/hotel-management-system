import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../components/Private/Social/Social";
import Header from "../../components/Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const c_password = form.get('c_password');

    console.log(password, c_password);

    if (password === c_password) {
      createUser(email, password)
        .then(response => {
          if (response) {
            toast.success('Created account successfully!', {
              style: {
                border: '1px solid #F9A51A'
              },
              iconTheme: {
                primary: '#000000'
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
                border: '1px solid #F9A51A'
              },
              iconTheme: {
                primary: '#000000'
              }
            });
          }
        })
    }
  }

  return (
    <div>
      <div className="text-black">
        <Header></Header>
      </div>
      <Toaster></Toaster>
      <div className="flex justify-center items-center mt-5">
        <div>
          <form onSubmit={handleRegister}>
            <div className="space-y-12 w-[550px] border border-1 border-[#ABABAB] p-14">
              <h2 className="font-bold text-2xl">Create an account</h2>
              <input
                className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                type="text"
                name="f_name"
                id="f_name"
                placeholder="First Name"
              />
              <br />
              <input
                className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                type="text"
                name="l_name"
                id="l_name"
                placeholder="Last Name"
              />
              <br />
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
              <input
                className="w-full border-b border-black font-semibold text-lg placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                type="password"
                name="c_password"
                id="c_password"
                placeholder="Confirm Password"
              />
              <br />
              <div>
                <button className="w-full bg-[#F9A51A] font-medium py-4">
                  Create an account
                </button>
              </div>
              <div className="text-center">
                <p>Already have an account? <Link className="text-[#F9A51A] underline" to='/login'>Login</Link></p>
              </div>
            </div>
          </form>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Register;
