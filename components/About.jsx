"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";
import {
  MailIcon,
  GraduationCap,
  MapPin,
  Briefcase,
  Phone,
  Globe,
} from "lucide-react";

const infoData = [
  { icon: <Phone size={20} />, text: "(614) 441-7609" },
  { icon: <MailIcon size={20} />, text: "takella6315@gmail.com" },
  { icon: <MapPin size={20} />, text: "Atlanta, GA" },
  { icon: <Globe size={20} />, text: "U.S. Citizen" },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        school: "Georgia Institute of Technology",
        qualification: "Bachelor of Science in Computer Engineering w/ Cybersecurity, Systems and Architecture",
        years: "Expected: December 2026 | GPA: 3.92",
        details: "Courses: Advanced Malware Analysis, GPU Programming, Computer Architecture, Intro to Malware Reverse Engineering, Digital Design Lab, Programming HW/SW Systems, Data Structures and Algorithms, Objects and Design, Discrete Math for CS, Linear Algebra, Digital Systems and Design 2, Statistics and Applications",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Georgia Tech CyFI Lab",
        role: "AI Security Research Intern",
        years: "March 2025 - Present",
        location: "Atlanta, GA",
        details: "Designed a framework to detect Architectural Backdoors (ABs) and code-level triggers in state-of-the-art models, forming the basis of an upcoming research publication. Developed a custom Volatility3 plugin on Linux to analyze memory dumps from AI/ML processes, achieving 95% extraction accuracy of neural network-related Python objects.",
      },
      {
        company: "NASA Ames Research Center",
        role: "Software Engineer Intern",
        years: "June 2025 - August 2025",
        location: "Mountain View, CA",
        details: "Designed and developed an interactive GUI for NASA's HADES tool using Electron.js, React, Redux, TypeScript, and PouchDB, enabling early-stage safety assessments of autonomous airspace systems and improving workflow efficiency and hazard identification speed by over 65% through simulation-based analysis. Also conducted Graph-RAG AI Research - Competitive AI research paper coming soon.",
      },
      {
        company: "Reffy Inc.",
        role: "Founding Engineer",
        years: "January 2024 - Present",
        location: "Atlanta, GA",
        details: "Designed and implemented a scalable, secure distributed infrastructure using TypeScript, React, Next.js, PostgreSQL, Golang, GCP, Azure, and Docker, reducing customer and enterprise labor by 80% through a client-facing web application and microservice backend. Currently partnered with many top universities, such as Emory. Expecting more than 50,000 users this year.",
      },
      {
        company: "Purdue VIPER Lab",
        role: "Research Intern",
        years: "January 2024 - May 2024",
        location: "West Lafayette, IN",
        details: "Improved brain tumor detection accuracy by 30% by automating MRI scan analysis using CNNs built with TensorFlow; used Python, NumPy, OpenCV, and scikit-learn for data processing and model training.",
      },
      {
        company: "Air Force Research Lab",
        role: "Research Scholar",
        years: "June 2022 - July 2023",
        location: "Dayton, OH",
        details: "Supported Artemis 3 lunar mission prep by developing a moon surface simulation in Unreal Engine 5 using the JPL SPICE protocol, enabling realistic astronaut training for South Pole operations. Cut RPG training costs by 85% by building a mixed-reality multiplayer simulator in Unreal Engine 5 using Distributed Interactive Simulation (DIS) protocol, with backend development, Raspberry Pi integration, and real-time sensor tracking.",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        title: "Computer Programming",
        list: "CUDA, GPUs, OOP, Java, Python, JavaScript, TypeScript, React, Next.js, C, Git, HTML, CSS, TailwindCSS, Bootstrap, Go, Docker, SQL, Postgres, x86, MIPS, MATLAB, Arduino, AWS, GCP, Tensorflow, Django, FPGA",
      },
      {
        title: "Cybersecurity",
        list: "Network cabling, Cisco switch and router configuration, DNS Structure and Server Configuration, Troubleshooting, Networking Theory, Network Security Methods, Wireshark, Nmap, Metasploit, Kali, Ghidra, IDAPro",
      },
      {
        title: "Certifications",
        list: "CompTIA Security+, CompTIA Network+, GFACT",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:min-h-[860px] pb-12 pt-36 xl:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden xl:flex flex-1 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="transform-3d"
            >
              <DevImg
                containerStyles="w-[505px] h-[505px] bg-no-repeat relative"
                imgSrc="/developer-2.svg"
                imgAlt="About Dev Image"
              />
            </motion.div>
          </motion.div>
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 mb-10"
          >
            <Tabs defaultValue="Personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="Personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="Qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Tab */}
                <TabsContent value="Personal">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center xl:text-left"
                  >
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Computer Engineering student at Georgia Tech with a passion for cybersecurity, AI security research, and full-stack development. 
                      Currently working on cutting-edge AI security research at Georgia Tech CyFI Lab, developing frameworks to detect architectural backdoors 
                      in state-of-the-art models. Previously contributed to NASA's HADES tool, improving workflow efficiency by over 65%, and built scalable 
                      distributed systems at Reffy Inc. that reduced enterprise labor by 80%. <br />
                      <br />
                      With experience spanning from AI/ML security research to brain tumor detection using CNNs, and from mixed-reality simulators for 
                      Artemis 3 mission prep to network traffic visualization tools, I bring a unique blend of security expertise and software engineering 
                      skills to every project. Certified in CompTIA Security+, Network+, and GFACT.
                      <br />
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Qualifications Tab */}
                <TabsContent value="Qualifications">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience and Education */}
                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* Experience List */}
                        <div className="flex flex-col gap-y-8 mb-10">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { company, role, years, location, details } = item;
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ x: 5 }}
                                  className="flex gap-x-8 group"
                                >
                                  <div className="h-auto min-h-[120px] w-px bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:scale-150 transition-all duration-300 glow-primary"></div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-xl leading-none mb-2 text-primary">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-foreground mb-1 font-medium">
                                      {role}
                                    </div>
                                    {location && (
                                      <div className="text-sm text-muted-foreground mb-2">
                                        {location}
                                      </div>
                                    )}
                                    <div className="text-base font-medium mb-2">
                                      {years}
                                    </div>
                                    {details && (
                                      <div className="text-sm text-muted-foreground leading-relaxed">
                                        {details}
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4>
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* Education List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { school, qualification, years, details } = item;
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ x: 5 }}
                                  className="flex gap-x-8 group"
                                >
                                  <div className="h-auto min-h-[120px] w-px bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:scale-150 transition-all duration-300 glow-primary"></div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-xl leading-none mb-2 text-primary">
                                      {school}
                                    </div>
                                    <div className="text-lg leading-none text-foreground mb-2 font-medium">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium mb-2">
                                      {years}
                                    </div>
                                    {details && (
                                      <div className="text-sm text-muted-foreground leading-relaxed">
                                        {details}
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="Skills">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center xl:text-left"
                  >
                    <h4 className="h3 mb-8">Skills & Technologies</h4>
                    <div className="mb-16 space-y-6">
                      {/* Skills */}
                      {getData(skillsData, "Skills").data.map(
                        (item, index) => {
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="w-full xl:w-auto text-center xl:text-left mx-auto xl:mx-0 p-4 rounded-lg hover:bg-accent/50 transition-colors"
                            >
                              <div className="font-medium">
                                <p className="font-bold text-primary text-lg mb-2">
                                  {item.title}:
                                </p>
                                <p className="text-muted-foreground leading-relaxed">{item.list}</p>
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
