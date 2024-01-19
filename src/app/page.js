import Banner from "@/components/HomeBanner/Banner";
import Misstion from "@/components/HomeBanner/Misstion";
import Donate from "@/components/HomeBanner/Donate";
import CounterSection from "@/components/about/CounterSection";
import ServiceSection from "@/components/services/ServiceSection";



const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Donate></Donate>
    <ServiceSection/>
    <Misstion></Misstion>
    <CounterSection/>
    </div>
  );
};

export default Home;