import Image from "next/image";
import LogoPic from "@/app/assets/logo_white.svg";
import Link from "next/link";

const HeaderLayout = () => {
  return (
    <div className="navbar justify-center bg-base-100">
      <Link href="/">
        <Image src={LogoPic} height={70} width={120} alt="Relate" />
      </Link>
    </div>
  );
};

export default HeaderLayout;
