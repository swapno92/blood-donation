import AboutSection from "@/components/about/AboutSection";
import SharedBanner from "@/components/banner/SharedBanner";
import ServiceSection from "@/components/services/ServiceSection";

const About = () => {
    return (
        <>
            <SharedBanner bannerImg={'https://i.ibb.co/vQxmhLd/about-image.jpg'} heading={'About Us'} />
            <AboutSection />
            <ServiceSection></ServiceSection>
        </>
    );
};

export default About;