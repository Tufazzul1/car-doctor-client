import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(Authcontext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/checkOut?email=${user.email}`;

    useEffect(() => {

        axios.get(url , { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setBookings(res.data)
            })


        //     fetch(url)
        //         .then(res => res.json())
        //         .then((data) => {
        //             console.log("Booking data", data);
        //             setBookings(data)
        //         });
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/checkOut/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    };

    const handleCheckOut = id => {

        fetch(`http://localhost:5000/checkOut/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newCheckOut = [updated, ...remaining];
                    setBookings(newCheckOut);

                }
            })
    }

    return (
        <div>
            <h2>Bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleCheckOut={handleCheckOut}
                            ></BookingRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Bookings;