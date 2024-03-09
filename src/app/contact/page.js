import Newsletter from "@/components/Footer/Newsletter";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import SharedBanner from "@/components/banner/SharedBanner";
import ContactPage from "@/components/contact/Contact";

export const metadata = {
  title: "Drop Sync - Contact",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

const Contact = () => {
    return (
      <div>
        <SharedBanner
          bannerImg={"https://i.ibb.co/5rsLcx5/header-bg-45474302.jpg"}
          heading={"Contact Us"}
        />
      <PrivateRoute>  <ContactPage></ContactPage></PrivateRoute>
      </div>
    );
};

export default Contact;