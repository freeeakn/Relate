"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Auto from "@/assets/metallic_auto.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const DemoCard = () => {
  const title = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const titleTyped = new Typed(title.current, {
      strings: [
        "Shoes!",
        "Men's shoes",
        "Sneakers",
        "Running shoes",
        "Nike superrep",
      ],
      typeSpeed: 100,
      showCursor: false,
    });
    const textTyped = new Typed(text.current, {
      strings: [
        "If a dog chews shoes whose shoes does he choose?",
        "Men's sports running shoes",
        "Newly designed to support and stabilize every move, set after set.",
      ],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      titleTyped.destroy();
      textTyped.destroy();
    };
  }, []);
  return (
    <div className="w-full flex items-center justify-between py-48">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
        className="flex flex-col gap-2 relative max-h-[202px] max-w-[420px]"
      >
        <h1 className="text-5xl font-bold">Automation</h1>
        <h2 className="text-4xl font-semibold">Your product card generation</h2>
        <h3 className="text-2xl font-medium">For your online business</h3>
        <motion.span
          initial={{ opacity: 0, x: -100, rotate: 90 }}
          whileInView={{ opacity: 1, x: 0, rotate: 19 }}
          transition={{ type: "spring", stiffness: 10 }}
          className="absolute -bottom-12 -right-8"
        >
          <Image
            className="drop-shadow-xl"
            src={Auto}
            height={150}
            width={150}
            alt="automation"
          />
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 10 }}
        className="card lg:card-side max-w-[1000px] bg-base-100 shadow-xl"
      >
        <figure>
          <img
            className="h-full object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-between w-[350px]">
            <span ref={title} />
            <div className="flex items-center gap-2">
              <div className="badge badge-secondary">NEW</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
          </h2>
          <p ref={text} />
          <div className="card-actions flex-nowrap items-center justify-between">
            <div className="flex gap-2">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <button className="btn btn-success  rounded-full">Buy Now</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoCard;
