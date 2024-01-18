import Banner from "@/components/HomeBanner/Banner";
import Misstion from "@/components/HomeBanner/Misstion";
import Donate from "@/components/HomeBanner/Donate";
import ServiceSection from "@/components/services/ServiceSection";
import CounterSection from "@/components/about/CounterSection";



const Home = () => {
  return (
    <div>
    <Banner></Banner>
      <Donate></Donate>
      <ServiceSection></ServiceSection>
      <Misstion></Misstion>
      <CounterSection></CounterSection>
    </div>
  );
};

export default Home;