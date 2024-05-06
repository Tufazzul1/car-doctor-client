import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} className="p-4 rounded-3xl h-[250px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex justify-between text-[#FF3811]">
                        <p className="text-xl font-semibold">${price}</p>

                        <Link className="btn btn-primary" to={`/checkOut/${_id}`}>Book Now<FaArrowRight /></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;