

import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  tube,
  imperial,
  fleetz,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ESG Platform"
          des=" Developed an ESG (Environmental, Social, and Governance) management platform using React and Tailwind CSS. The interface features interactive dashboards, data entry forms, and record approval workflows.!"
          src={projectOne}
          githubLink="https://github.com/STEPHENSAPPOR/ESG-PLATFORM"
          Url="https://my-esg-hub.netlify.app/"
          
        />
        <ProjectsCard
          title="Heaven Waves Real Estate"
          des="Created a responsive, modern website for HeavenWaves Real Estate & Construction using React and Tailwind CSS, featuring property listings, search filters, booking forms, and interactive user interfaces.!"
          src={tube}
          githubLink="https://github.com/STEPHENSAPPOR/Heaven-Waves-Real-Estate"
          Url="https://heaven-waves-real-estate.netlify.app/"
        />

         <ProjectsCard
          title="Shopping List App"
          des="Built a responsive shopping list application that allows users to browse products, view details, add or remove items from a cart, and see the total price dynamically. Includes search functionality, product details view, and adaptive design.!"
          src={imperial}
          githubLink="https://github.com/STEPHENSAPPOR/shopping-list-app"
          Url="https://shopping-product-list.netlify.app/"
        />

        <ProjectsCard
          title="DevLink"
          des="I developed a dynamic and user-friendly platform using the React framework for Devlink,
 where developers can create profiles, bid on projects, and get paid. 
 The site enables clients to post projects.!"
          src={projectTwo}
          githubLink="https://github.com/DevLink-hub/DevLink-Frontend"
          Url="https://dev-linkcs.netlify.app/"
        />
        <ProjectsCard
          title="Azu Shop"
          des="A modern e-commerce platform featuring a sleek UI, trending products, and seamless shopping experience. Built with a focus on performance, responsive design, and user-friendly navigation across devices.!"
          src={projectThree}
          githubLink="https://github.com/STEPHENSAPPOR/ghana-hazard-reporter"
          Url="https://azushop-ecommerce-app.netlify.app/"
        />
         <ProjectsCard
          title="Smart Hearing Device"
          des="Developed an innovative solution to improve accessibility for individuals with hearing impairments. The project focuses on creating affordable, locally-made hearing aids that enhance communication.!"
          src={fleetz}
          githubLink="https://github.com/STEPHENSAPPOR/Hearing-Aid-App"
          Url="https://faila-smart-device.netlify.app/"
        />
        
        
       
       
      </div>
    </section>
  );
};

export default Projects;
