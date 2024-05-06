import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(Authcontext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password) 
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
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
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <input type="submit" value="Sign UP" className="btn btn-primary" />
                            </div>
                            <p>Already have an account ? Please <Link to={'/login'} className="font-bold text-blue-500">Login</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;