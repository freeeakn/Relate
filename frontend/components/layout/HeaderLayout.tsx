import Image from "next/image";
import * as motion from "framer-motion/client";
import LogoPic from "@/assets/logo_white.svg";
import Link from "next/link";

const HeaderLayout = () => {
  return (
    <div className="navbar justify-center bg-base-100">
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        <Link href="/">
          <Image src={LogoPic} height={70} width={120} alt="Relate" />
        </Link>
      </motion.span>
    </div>
  );
};

export default HeaderLayout;
