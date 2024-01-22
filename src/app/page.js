import Banner from "@/components/HomeBanner/Banner";
import Misstion from "@/components/HomeBanner/Misstion";
import Donate from "@/components/HomeBanner/Donate";
import CounterSection from "@/components/about/CounterSection";
import ServiceSection from "@/components/services/ServiceSection";
import Newsletter from "@/components/Footer/Newsletter";



const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Donate></Donate>
    <ServiceSection/>
    <Misstion></Misstion>
    <CounterSection/>
    <Newsletter></Newsletter>
    </div>
  );
};

export default Home;