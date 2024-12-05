"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";

export default function Cards() {
  const containerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 }, // Start hidden and moved down
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-sm p-2 mx-1 text-center items-center flex flex-col bg-gray-800 bg-opacity-30 shadow-lg rounded-lg overflow-hidden"
    >
      <Card className="flex flex-col items-center">
        <CardHeader>
          <CardTitle>
            <img
              src="/logo.jpg"
              alt="Card Image"
              className="w-44 object-cover"
            />
          </CardTitle>
          <CardDescription>Your Name</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            excepturi laudantium amet, illo ad minus quos maxime eaque, placeat
            ipsum explicabo corporis aspernatur aliquam recusandae laborum quam
            sint adipisci suscipit!
          </p>
        </CardContent>
        <CardFooter>
          <p>Date</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
