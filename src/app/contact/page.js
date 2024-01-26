import Newsletter from "@/components/Footer/Newsletter";
import SharedBanner from "@/components/banner/SharedBanner";
import ContactPage from "@/components/contact/Contact";

const Contact = () => {
    return (
      <div>
        {/* banner  */}
        <SharedBanner
          bannerImg={"https://i.ibb.co/5rsLcx5/header-bg-45474302.jpg"}
          heading={"Contact Us"}
        />
        <ContactPage></ContactPage>
        {/* <Newsletter/> */}
      </div>
    );
};

export default Contact;