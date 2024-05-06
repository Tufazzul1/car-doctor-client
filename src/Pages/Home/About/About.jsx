
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className="absolute w-1/2 right-5 top-1/2  border-8 border-white" alt="" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h5 className="text-[#FF3811] font-bold">About Us</h5>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <br />
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-primary mt-8">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;