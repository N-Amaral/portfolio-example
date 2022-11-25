import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import projectImg1 from "../assets/project-1.jpeg";
import projectImg2 from "../assets/project-2.jpeg";
import projectImg3 from "../assets/project-3.jpeg";
import projectImg4 from "../assets/project-4.jpeg";
import projectImg5 from "../assets/project-5.jpeg";
import projectImg6 from "../assets/project-6.jpeg";
import projectImg7 from "../assets/project-7.jpeg";

const projectImgArr = [projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6, projectImg7];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imgSrc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nula porttitor accumsan tincidunt.</p>
      </div>
      <img src={imgSrc} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut fames odio in at. At magna ornare dictum lectus. Purus massa morbi purus nec eget
          eleifend ut elit.
        </p>
      </motion.div>

      {/*PROJECTS*/}

      <div className="flex justify-center">
        <motion.div className="sm:grid sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          {/*ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            USER INTERFACES
          </div>
          {projectImgArr.map((el, i) => {
            return <Project title={`Project ${i + 1}`} imgSrc={el} key={i} />;
          })}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
