"use client"
import Newsletter from "@/components/Footer/Newsletter";
import AboutSection from "@/components/about/AboutSection";
import CounterSection from "@/components/about/CounterSection";
import SharedBanner from "@/components/banner/SharedBanner";
import ServiceSection from "@/components/services/ServiceSection";

const About = () => {
    return (
        <>
            <SharedBanner bannerImg={'https://i.ibb.co/vQxmhLd/about-image.jpg'} heading={'About Us'} />
            <AboutSection />
            <ServiceSection />
            <CounterSection />
            <Newsletter/>
        </>
    );
};

export default About;