import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, service_id, img, price } = service;

    const { user } = useContext(Authcontext)

    const handleCheckOutOrder = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order)

        fetch('http://localhost:5000/checkOut', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Service added')
            }
        })

    }
    return (
        <div className="mt-10">
            <h2 className="font-bold text-3xl text-center">Check Out services : {title}</h2>

            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                <form onSubmit={handleCheckOutOrder} className="card-body  w-4/5 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={"$" + price} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <input type="text" placeholder="Your message" className="input input-bordered rows-10" required />
                    </div> */}


                    <div className="form-control mt-6 w-full">
                        <button className="btn btn-primary">Login</button>
                        <input type="submit" value="" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOut;