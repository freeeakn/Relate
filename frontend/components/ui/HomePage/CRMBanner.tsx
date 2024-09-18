import * as motion from "framer-motion/client";
import Image from "next/image";
// import CrmLogo from "@/assets/CRM_logo.svg";
import Crm from "@/assets/CRM.svg";
import Star from "@/assets/star.svg";

const CRMBanner = () => (
  <div className="flex items-center justify-center gap-12">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 10 }}
    >
      <Image src={Crm} height={500} width={550} alt="CrmLogo" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 10 }}
      className=" relative max-h-[202px] max-w-[420px]"
    >
      <h1 className="text-5xl font-bold">Revolutionize</h1>
      <h2 className="text-4xl font-semibold">Your Relationships</h2>
      <h3 className="text-2xl font-medium">
        Experience the Future of CRM with AI Powered Insights and Seamless
        Automation!
      </h3>
      <motion.span
        initial={{ opacity: 0, x: 100, rotate: 180 }}
        whileInView={{ opacity: 1, x: 0, rotate: 90 }}
        transition={{ type: "spring", stiffness: 5 }}
        className="absolute -bottom-4 right-10"
      >
        <Image src={Star} height={55} width={55} alt="star" />
      </motion.span>
    </motion.div>
  </div>
);

export default CRMBanner;
