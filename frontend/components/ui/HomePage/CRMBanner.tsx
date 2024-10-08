import * as motion from "framer-motion/client";
import Image from "next/image";
// import CrmLogo from "@/assets/CRM_logo.svg";
import Desk from "@/assets/metallic_desk.png";
import Crm from "@/assets/CRM.png";
import Star from "@/assets/star.svg";

const CRMBanner = () => (
  <div className="w-full flex items-center justify-between py-48">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 10 }}
    >
      <Image className=" drop-shadow-xl" src={Crm} height={350} width={1000} alt="CrmLogo" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 10 }}
      className="flex flex-col gap-2 relative max-h-[202px] max-w-[420px]"
    >
      <h1 className="text-5xl font-bold">Revolutionize</h1>
      <h2 className="text-4xl font-semibold">Your Relationships</h2>
      <h3 className="text-2xl font-medium">
        Experience the Future of CRM with AI Powered Insights and Seamless
        Automation!
      </h3>
      <motion.span
        initial={{ opacity: 0, x: 100, rotate: 90 }}
        whileInView={{ opacity: 1, x: 0, rotate: 25 }}
        transition={{ type: "spring", stiffness: 10 }}
        className="absolute -bottom-10 -right-8"
      >
        <Image
          className="drop-shadow-xl"
          src={Desk}
          height={120}
          width={120}
          alt="desk"
        />
      </motion.span>
    </motion.div>
  </div>
);

export default CRMBanner;
