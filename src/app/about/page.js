import SharedBanner from "@/components/banner/SharedBanner";
import aboutImage from './public/about-image.jpg'

const About = () => {
    return (
        <div>
            <SharedBanner bannerImg={aboutImage} heading={'About'}></SharedBanner>
        </div>
    );
};

export default About;