import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  const textContent = [
    {
      delay: 0,
      boxColor: "blue",
      text: "A auctor pharetra hendrerit mattis amet etiam interdum platea.",
    },
    {
      delay: 0.2,
      boxColor: "red",
      text: "Libero sed pretium justo nulla blandit nulla amet habitant iaculis. Aliquam aliquet integer ut fames odio in at. at magna ornare dictum lectus.",
    },
    {
      delay: 0.4,
      boxColor: "yellow",
      text: "Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in curabitur. Lectus libero, egest enim aliquam quis felis amet. S",
    },
  ];

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/*HEADING*/}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">TESTIMONIALS</p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People Are Saying About My Work.Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut fames odio in at.
        </p>
      </motion.div>

      {/*TESTIMONIALS*/}
      <div className="md:flex md:justify-between gap-8">
        {textContent.map((el, i) => {
          return (
            <motion.div
              key={i}
              /* issue with the img src for some reason*/
              className={`bg-${el.boxColor} ${testimonialStyles} before:content-person2`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: el.delay, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <p className="font-playfair text-6xl">"</p>
              <p className="text-center text-xl">{el.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
