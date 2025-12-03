"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Badge from "./Badge";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="relative py-12 xl:py-24 h-[84vh] xl:pt-28 bg-gradient-to-br from-background via-primary/5 to-accent/10 dark:from-background dark:via-primary/10 dark:to-accent/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between gap-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
          >
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-primary"
              >
                Hey there! My name is
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Teja Akella
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-foreground"
              >
                Computer Engineering Student @ Georgia Tech
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-lg text-center md:text-left max-w-xl"
              >
                Specializing in Cybersecurity, Systems & Architecture. Building innovative solutions in AI security research, full-stack development, and distributed systems.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col mt-10 gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2 glow-primary-hover transform-3d hover:scale-105 transition-all duration-300">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/assets/Teja_Akella_Resume.pdf"
                download="Teja Akella Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2 transform-3d hover:scale-105 transition-all duration-300">
                  Download Resume <Download size={18} />
                </Button>
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all hover:scale-125"
              />
            </motion.div>
          </motion.div>
          {/* Image with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden xl:flex relative perspective-1000"
          >
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                containerStyles="absolute top-[24%] -left-[5rem] glow-primary"
                icon={<RiBriefcase4Fill />}
                endCountNum={4}
                endCountText="+"
                badgeText="Years of Experience"
              />
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                containerStyles="absolute top-[70%] -left-[1rem] p-2 glow-primary"
                icon={<RiTodoFill />}
                endCountNum={20}
                endCountText="+"
                badgeText="Completed projects"
              />
            </motion.div>

            {/* Badge 3 */}
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                containerStyles="absolute top-[50%] -right-12 glow-primary"
                icon={<RiTeamFill />}
                endCountNum={5}
                endCountText="+"
                badgeText="Teams satisfied"
              />
            </motion.div>

            {/* Image with 3D Transform */}
            <motion.div
              className="w-[550px] h-[550px] bg-no-repeat relative -top-1 -right-2 transform-3d"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DevImg
                  imgSrc="/developer-2.svg"
                  imgAlt="Hero Dev Image"
                  containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <RiArrowDownSLine className="text-3xl text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
