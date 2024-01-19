import { FaArrowRightToBracket } from "react-icons/fa6";
const Donate = () => {
    return (
        <div className="md:flex justify-center gap-5 my-16">
            <div className="bg-red-600 p-10">
                  <h2 className="text-3xl text-white font-semibold">Register Now</h2>
                <div className="flex gap-16">
                   <p className="text-xl text-white py-4">Nor again is there anyone who loves or pursues or <br/> desires to obtain pain of itself, because it is pain,</p>
                   <FaArrowRightToBracket  className="text-4xl text-white m-2"/>
                </div>
            </div>
            <div className="bg-black p-10">
                  <h2 className="text-3xl text-white font-semibold">Donate Now</h2>
                <div className="flex gap-16">
                   <p className="text-xl text-white py-4">Nor again is there anyone who loves or pursues or <br/> desires to obtain pain of itself, because it is pain,</p>
                   <FaArrowRightToBracket  className="text-4xl text-white m-2"/>
                </div>
            </div>
        </div>
    );
};

export default Donate;