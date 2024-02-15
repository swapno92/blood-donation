import { BiDonateBlood, BiSolidTimer, BiSolidHappyHeartEyes  } from "react-icons/bi";

const ServiceSection = () => {
    return (
        <>
            <div className="container max-w-7xl mx-auto my-24 lg:px-0 md:px-10 px-5">
                <div className="text-center">
                    <h2 className='lg:text-5xl text-4xl font-bold mb-12'>Our Best Services</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-5">
                    <div className="card shadow-xl shadow-gray-100 rounded-md border border-primary/15 ">
                        <figure className="px-10 pt-10">
                            <BiDonateBlood className="text-7xl text-primary"></BiDonateBlood>
                        </figure>
                        <div className="card-body shadow-md  hover:shadow-2xl hover:shadow-red-50">
                            <h2 className="card-title text-2xl text-justify mb-4">Emergency Blood  Requests</h2>
                            <p className="text-gray-500 font-medium">Dropsync's emergency blood request feature allows hospitals and blood banks to quickly connect with willing donors, ensuring a rapid response during critical situations.</p>                            
                        </div>
                    </div>
                    <div className="card shadow-xl shadow-gray-100 rounded-md border border-primary/15">
                        <figure className="px-10 pt-10">
                            <BiSolidTimer className="text-7xl text-primary"></BiSolidTimer>
                        </figure>
                        <div className="card-body shadow-md  hover:shadow-2xl hover:shadow-red-50">
                            <h2 className="card-title text-2xl text-justify mb-4">Real-Time Availability Updates</h2>
                            <p className="text-gray-500 font-medium">Dropsync provides real-time updates on blood stocks, helping donors and recipients make informed decisions when it matters most.</p>                            
                        </div>
                    </div>
                    <div className="card shadow-xl shadow-gray-100 rounded-md border border-primary/15">
                        <figure className="px-10 pt-10">
                            <BiSolidHappyHeartEyes className="text-7xl text-primary"></BiSolidHappyHeartEyes>
                        </figure>
                        <div className="card-body shadow-md  hover:shadow-2xl hover:shadow-red-50">
                            <h2 className="card-title text-2xl  mb-4">Health Monitoring & Insights</h2>
                            <p className="text-gray-500 font-medium">Our platform provides insights into your blood donation journey, allowing you to monitor your impact on the community and maintain a healthy donation routine.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;