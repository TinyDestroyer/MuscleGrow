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

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function Cards({ title, description, image }: Props) {
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
      className="max-w-sm h-full p-2 mx-1 text-center items-center flex flex-col bg-opacity-30 shadow-lg rounded-lg overflow-hidden bg-gray-400"
    >
      <Card className="flex flex-col h-full items-center justify-center">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <img
              src={image}
              alt="Card Image"
              className="w-50 object-cover rounded-lg"
            />
          </CardTitle>
          <CardDescription className="text-xl h-full">{title}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        {/* <CardFooter>
          <p>Date</p>
        </CardFooter> */}
      </Card>
    </motion.div>
  );
}
