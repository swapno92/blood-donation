import Misstion from "@/components/HomeBanner/Misstion";
import Donate from "@/components/HomeBanner/Donate";
import CounterSection from "@/components/about/CounterSection";
import ServiceSection from "@/components/services/ServiceSection";
import Banner2 from "@/components/HomeBanner/Banner2";
import DonationProcess from "@/components/HomeBanner/DonationProcess";
import Volunteers from "@/components/HomeBanner/Volunteers";
import Sponsors from "@/components/HomeBanner/Sponsors";
import AbleToDonate from "@/components/AbleToDonate/AbleToDonate";



const Home = () => {
  return (
    <div>
      <Banner2></Banner2>
      <Donate></Donate>
      <DonationProcess></DonationProcess>
      <AbleToDonate></AbleToDonate>
      <ServiceSection />
      <Misstion></Misstion>
      <CounterSection />
      <Volunteers></Volunteers>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;