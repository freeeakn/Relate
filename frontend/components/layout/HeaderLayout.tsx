import Image from "next/image";
import * as motion from "framer-motion/client";
import LogoPic from "@/assets/logo_white.svg";
import Link from "next/link";

const HeaderLayout = () => {
  return (
    <div className="container navbar justify-center bg-base-100">
      <motion.span
        className="navbar-start gap-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
      >
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/crm">CRM</Link>
            </li>
            <li>
              <Link href="/price">Pricing</Link>
            </li>
            <li>
              <Link href="/about/us">About us</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image src={LogoPic} height={70} width={120} alt="Relate" />
        </Link>
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        className="navbar-center hidden lg:flex"
      >
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="rounded-full" href="/crm">
              CRM
            </Link>
          </li>
          <li>
            <Link className="rounded-full" href="/price">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="rounded-full" href="/about/us">
              About us
            </Link>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        className="navbar-end"
      >
        <button className="btn btn-primary btn-sm rounded-full">
          Start for free
        </button>
      </motion.div>
    </div>
  );
};

export default HeaderLayout;
