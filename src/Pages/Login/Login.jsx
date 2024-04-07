import { Link , useLocation,useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {


    const {signIn} = useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()
console.log('location in the log in page', location);



    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })

        // Navigate after login:
        navigate(location?.state ? location.state: '/')
        .catch(error=>{
            console.log(error)
        })
        
    }


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please Login</h2>
            <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered  bg-slate-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered bg-slate-200" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary hover:bg-slate-800 hover:text-white  bg-slate-400">Login</button>
                    </div>
                </form>
                <p className="text-center">Don't have an account! <Link to='/register' className="text-blue-700">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;