import AboutSection from "@/components/about/AboutSection";
import SharedBanner from "@/components/banner/SharedBanner";

const About = () => {
    return (
        <>
            <SharedBanner bannerImg={'https://i.ibb.co/vQxmhLd/about-image.jpg'} heading={'About Us'} />
            <AboutSection />
        </>
    );
};

export default About;