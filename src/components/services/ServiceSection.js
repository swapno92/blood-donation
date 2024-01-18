import { BiDonateBlood, BiSolidTimer, BiSolidHappyHeartEyes  } from "react-icons/bi";

const ServiceSection = () => {
    return (
        <>
            <div className="container max-w-7xl mx-auto my-24">
                <div className="text-center">
                    <h2 className='text-5xl font-bold mb-12'>Our Best Services</h2>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="card shadow-md rounded-md">
                        <figure className="px-10 pt-10">
                            <BiDonateBlood className="text-7xl text-primary"></BiDonateBlood>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">Emergency Blood <br /> Requests</h2>
                            <p className="">Dropsync's emergency blood request feature allows hospitals and blood banks to quickly connect with willing donors, ensuring a rapid response during critical situations.</p>                            
                        </div>
                    </div>
                    <div className="card shadow-md rounded-md">
                        <figure className="px-10 pt-10">
                            <BiSolidTimer className="text-7xl text-primary"></BiSolidTimer>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">Real-Time Availability Updates</h2>
                            <p className="">Dropsync provides real-time updates on blood stocks, helping donors and recipients make informed decisions when it matters most.</p>                            
                        </div>
                    </div>
                    <div className="card shadow-md rounded-md">
                        <figure className="px-10 pt-10">
                            <BiSolidHappyHeartEyes className="text-7xl text-primary"></BiSolidHappyHeartEyes>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl mb-4">Health Monitoring and Insights</h2>
                            <p className="">Our platform provides insights into your blood donation journey, allowing you to monitor your impact on the community and maintain a healthy donation routine.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;