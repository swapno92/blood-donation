import Newsletter from "@/components/Footer/Newsletter";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
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
      <PrivateRoute>  <ContactPage></ContactPage></PrivateRoute>
        {/* <Newsletter/> */}
      </div>
    );
};

export default Contact;