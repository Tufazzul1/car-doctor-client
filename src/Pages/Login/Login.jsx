import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(Authcontext);
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        signIn(email, password) 
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            const user = {email}
            

            // get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res =>{
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
            })

        })
        .catch(error => {
            console.log(error.code, error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                            <p>New in here ? Please <Link to={'/signUp'} className="font-bold text-blue-500">Sign Up</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;