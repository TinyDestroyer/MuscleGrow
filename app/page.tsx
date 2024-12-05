"use client";
import "./landing.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Cards from "@/components/Cards";
import { MoveRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 }, // Start hidden and moved down
    visible: {
      opacity: 1,
      y: 0,
      scale: [1.05, 1],
      times: [0.75, 0.25],
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const words = `Transform the way you exercise with AI-powered form correction and personalized plans that help you improve with every move.`;
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col items-center justify-center text-white font-bold min-h-screen min-w-screen">
          <div className="bg-black bg-opacity-30 px-4 rounded-lg text-center">
            <motion.div
              className="text-7xl p-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              MuscleGrow
            </motion.div>
            <div className="text-lg text-center max-w-lg pb-2">
              <TextGenerateEffect duration={2} filter={false} words={words} />
            </div>
          </div>
          <Button variant="outline" className="mt-4 text-gray-700">
            Get Started
            <MoveRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}
