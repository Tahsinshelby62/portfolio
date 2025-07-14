import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/md-tahsin12/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Tahsinshelby62"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://wa.me/916290590188?text=Hi%20Md%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
        Icon={FaWhatsapp}
      />
    </div>
  );
};

export default ContactSocial;
