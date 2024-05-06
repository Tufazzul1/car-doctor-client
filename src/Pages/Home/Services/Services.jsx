import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })

    }, [])
    return (
        <div className="mt-24">
            <div className="text-center">
                <h5 className="text-[#FF3811] font-bold">Services</h5>
                <h5 className="text-4xl font-bold">Our Service Area</h5>
                <p className="mt-4">The majority have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}>
                        </ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;