import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImg from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const textContent = [
    {
      delay: 0,
      boxColor: "blue",
      text: "A auctor pharetra hendrerit mattis amet etiam interdum platea. Est morbi porttitor scelerisque fermentum, sagittis non egestas. Amet odio sit sagittis,",
    },
    {
      delay: 0.2,
      boxColor: "red",
      text: "Urna, egeet pulvinar dolor cursus volutpat dictum odio. Nec ultricies amet in in neque nibh tortor. Libero sed pretium justo nulla blandit nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin faucibus a",
    },
    {
      delay: 0.4,
      boxColor: "yellow",
      text: "Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in curabitur. Lectus libero, egest enim aliquam quis felis amet. Sagittis, amet netus fringilla netus lobortis odio sed platea. Bibendum.",
    },
  ];
  return (
    <section id="skills" className="pt-10 pb-24">
      {/*HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut fames odio in at.</p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="skills"
                src={skillsImg}
                className="hover:filter hover:saturate-200 transition durantion-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              />
            </div>
          ) : (
            <img alt="skills" src={skillsImg} className="hover:filter hover:saturate-200 transition durantion-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
          )}
        </div>
      </div>

      {/*SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {textContent.map((el, i) => {
          return (
            <motion.div
              key={i}
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: el.delay, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">{`0${i + 1}`}</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">Section</p>
                </div>
                <div className={`w-1/2 md:w-3/4 bg-${el.boxColor} h-32 absolute right-0 top-0 z-[-1]`} />
              </div>
              <p className="mt-5">{el.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
