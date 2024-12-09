"use client";
import "./landing.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Cards from "@/components/Cards";
import { MoveRight } from "lucide-react";

export default function Home() {
  const Card = [
    {
      title: "Workouts Tailored Just for You",
      description:
        "Our AI-powered system designs custom workout plans based on your fitness goals, body type, and preferences. Whether you're aiming to lose weight, build muscle, improve endurance, or stay active, we’ve got you covered with routines crafted just for you.",
      image: "/workout.jpg",
    },
    {
      title: "Exercise Smarter with Real-Time Feedback",
      description:
        "Our advanced AI tracks your form during workouts and provides live corrections to ensure you’re exercising safely and effectively. Minimize injury risks and maximize results, whether you’re lifting weights, performing yoga poses, or doing HIIT.",
      image: "/trainer.jpg",
    },
    {
      title: "Track Progress. Celebrate Wins.",
      description:
        "Stay motivated with our intuitive dashboard that tracks every step of your fitness journey. From workout history and calorie burn to milestones achieved, we keep you informed and inspired.",
      image: "/Progress.jpg",
    },
    {
      title: "Join a Thriving Fitness Community",
      description:
        "Work out together, compete in challenges, and share your progress with a supportive community of like-minded fitness enthusiasts. Motivation is better when shared!",
      image: "/Community.jpg",
    },
  ];
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
      <div id="Products" className="flex h-full flex-col mb-12">
        <h3 className="text-7xl text-white font-bold m-2">Products</h3>
        <div className="flex flex-wrap justify-center h-full gap-1 cursor-pointer">
          {Card.map((c, index) => (
            <div key={index} className="flex-1 w-full h-full items-stretch">
              <Cards
                title={c.title}
                description={c.description}
                image={c.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="About-us" className="flex-flex-col mb-12">
        <h3 className="m-2 font-bold text-7xl">About Us</h3>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold m-4">
            Empowering Your Fitness Journey—Every Step of the Way
          </h4>
          <div className="flex items-center">
            <p className="text-lg max-w-[700px]">
              At MuscleGrow, we believe fitness is not a one-size-fits-all
              solution. That’s why we’re dedicated to providing a personalized,
              interactive, and data-driven workout experience that adapts to
              your unique goals and lifestyle.
            </p>
            <img
              src="/gym-interaction.jpg"
              alt=""
              className="w-64 m-4 rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <h4 className="text-2xl font-bold text-center m-4">
            What Makes Us Different?
          </h4>
          <ul className="list-square list-inside text-lg">
            <div className="mb-8 flex gap-10 justify-center items-center">
              <p className="w-3/5">
                <span className="font-bold">Personalized Fitness Plans:</span>{" "}
                Our AI-powered technology creates customized workout routines
                tailored to your needs, whether you're just starting out or
                aiming to reach the next level.
              </p>
              <img
                src="/planning.png"
                alt=""
                className="w-24 rounded-lg shadow-xl"
              />
            </div>
            <div className="mb-8 flex gap-10 justify-center items-center">
              <img
                src="/feedback.png"
                alt=""
                className="w-24 rounded-lg shadow-xl"
              />
              <p className="w-3/5">
                <span className="font-bold">Real-Time Form Feedback:</span> Our
                cutting-edge form correction system ensures you exercise safely
                and effectively, helping you achieve better results with every
                session.
              </p>
            </div>
            <div className="mb-8 flex gap-10 justify-center items-center">
              <p className="w-3/5">
                <span className="font-bold">Progress Tracking Made Easy:</span>{" "}
                From tracking your milestones to celebrating achievements, our
                intuitive dashboard keeps you motivated and informed.
              </p>
              <img
                src="/progress-2.jpg"
                alt=""
                className="w-24 rounded-lg shadow-xl"
              />
            </div>
            <div className="mb-8 flex gap-10 justify-center items-center">
              <img
                src="/community-2.jpg"
                alt=""
                className="w-24 rounded-lg shadow-xl"
              />
              <p className="w-3/5">
                <span className="font-bold">Community at Your Core:</span> Join
                challenges, connect with like-minded fitness enthusiasts, and
                share your journey in a supportive and vibrant community.
              </p>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-center m-4">Our Mission</h4>
          <div className="flex items-center gap-10">
            <p className="text-lg text-center max-w-[700px]">
              We’re here to make fitness accessible, engaging, and rewarding for
              everyone. By combining advanced technology with a human touch, we
              empower you to achieve your health and wellness goals at your own
              pace, on your own terms
            </p>
            <img src="help-gym.jpg" alt="" className="w-56 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-center m-4">
            Your Goals, Our Commitment
          </h4>
          <div className="flex gap-10 items-center">
            <img src="couple-workout.jpg" alt="" className="w-56 rounded-lg" />
            <p className="text-lg text-center max-w-[700px]">
              Whether you're looking to build strength, improve flexibility, or
              simply stay active, MuscleGrow is your trusted partner in fitness.
              Together, we’ll create a healthier, happier you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
