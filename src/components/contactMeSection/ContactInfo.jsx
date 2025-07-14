import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mdtahsin38@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 6290590188" Image={FiPhone} />
      <SingleInfo text="Kolkata, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
