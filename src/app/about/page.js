
import AboutSection from "@/components/about/AboutSection";
import CounterSection from "@/components/about/CounterSection";
import SharedBanner from "@/components/banner/SharedBanner";
import ServiceSection from "@/components/services/ServiceSection";

export const metadata = {
    title: "Drop Sync - About",
    description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};
const About = () => {
    return (
        <>
            <SharedBanner bannerImg={'https://i.ibb.co/vQxmhLd/about-image.jpg'} heading={'About Us'} />
            <AboutSection />
            <ServiceSection />
            <CounterSection />
        </>
    );
};

export default About;