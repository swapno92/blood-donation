import { FaArrowRightToBracket } from "react-icons/fa6";
const Donate = () => {
    return (
        <div className="container max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-20 px-5 md:px-10 lg:px-0">
                <div className="bg-primary md:p-10 p-5 mb-5 lg:mb-0">
                    <h2 className="md:text-4xl text-3xl text-white font-semibold">Register Now</h2>
                    <div className="flex align-top md:gap-16 gap-5">
                        <p className="md:text-xl text-base text-white py-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
                        <FaArrowRightToBracket className="text-7xl text-white m-2"/>
                    </div>
                </div>
                <div className="bg-black md:p-10 p-5 mb-5 lg:mb-0">
                    <h2 className="md:text-4xl text-3xl text-white font-semibold">Donate Now</h2>
                    <div className="flex align-top md:gap-16 gap-5">
                        <p className="md:text-xl text-base text-white py-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
                        <FaArrowRightToBracket  className="text-7xl text-white m-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;