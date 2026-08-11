import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
           <ResumeCard
            title="Frontend Developer"
            subTitle="RoxyApps - (January 2025 - August 2026)"
            result="Accra"
            des={[ "Built apps and platforms using React and delivering responsive and user-friendly interfaces with optimized performance across devices.", "Integrated RESTful APIs from backend services to display dynamic data and enable real-time user interactions.", "Analyzed and resolved UI/UX and functionality issues, ensuring high performance and reliability of web applications." 

            ]}
             />
          
          <ResumeCard
            title="Frontend Web Developer"
            subTitle="Mest Africa - (June 2024 - August 2024)"
            result="Accra"
            des={[ "Developed web interfaces using React, HTML, CSS, and JavaScript for client-facing applications.", "Coordinated project activities, tracked deliverables, and supported cross-functional teams.", "Applied analytical skills to monitor outputs, identify gaps, and improve operational efficiency." ]}
          />
          <ResumeCard
            title="AWS Cloud Practitioner"
            subTitle="Amalitech Ghana - (February 2024 - May 2024)"
            result="Accra"
            des={[ "Designed scalable cloud architectures and implemented automation using AWS services such as EC2, S3, Lambda, and CloudFormation.", "Ensured security and cost-effective deployment of cloud-based solutions.", "Integrated cloud solutions with existing systems for improved reliability and performance." ]}
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
