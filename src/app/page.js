import Banner from "@/components/HomeBanner/Banner";
import Misstion from "@/components/HomeBanner/Misstion";
import Donate from "@/components/HomeBanner/Donate";
import CounterSection from "@/components/about/CounterSection";
import ServiceSection from "@/components/services/ServiceSection";
import Newsletter from "@/components/Footer/Newsletter";
import Banner2 from "@/components/HomeBanner/Banner2";
import DonationProcess from "@/components/HomeBanner/DonationProcess";



const Home = () => {
  return (
    <div>
    {/* <Banner></Banner> */}
    <Banner2></Banner2>
    <Donate></Donate>
    <DonationProcess></DonationProcess>
    <ServiceSection/>
    <Misstion></Misstion>
    <CounterSection/>
    <Newsletter></Newsletter>
    </div>
  );
};

export default Home;