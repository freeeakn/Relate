import * as motion from "framer-motion/client";
import Image from "next/image";
import Statistic from "@/assets/statistic.png";
import MetallicStat from "@/assets/metallic_statistic.png";
const DemoStatistic = () => {
  return (
    <div className="w-full flex items-center justify-between py-48">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Image
          className="shadow-xl rounded-xl"
          src={Statistic}
          height={500}
          width={1000}
          alt="StatisticDemo"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
        className="flex flex-col gap-2 relative max-w-[420px]"
      >
        <h1 className="text-5xl font-bold">Convenient control panel</h1>
        <h2 className="text-4xl font-semibold">
          full of statistics and automated analytics from AI
        </h2>
        <h3 className=" max-w-64 text-2xl font-medium">
          with sales status assessment and recommendations for improvement
        </h3>
        <motion.span
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ type: "spring", stiffness: 10 }}
          className="absolute -bottom-8 right-5"
        >
          <Image
            className="drop-shadow-xl"
            src={MetallicStat}
            height={150}
            width={150}
            alt="desk"
          />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default DemoStatistic;
