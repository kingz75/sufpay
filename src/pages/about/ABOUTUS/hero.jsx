import { motion } from "framer-motion";
import Aboutbg from "../../../assets/back/aboutbg.png";
import heroImage from "../../../assets/images/abimage1.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <section
      className="text-[#FFFFFF] h-[90vh] bg-cover bg-center items-center flex flex-col overflow-x-hidden lg:overflow-hidden"
      style={{
        backgroundImage: `url(${Aboutbg})`,
      }}
    >
      <div className="lg:mx-auto lg:max-w-[2000px] grid lg:grid-cols-[1.45fr_1.05fr] gap-6 lg:gap-14 px-4 pt-[96px] sm:px-6 lg:px-[160px] lg:pt-[140px]">
        <motion.div 
          className="max-w-[650px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="lg:mt-20 mt-3 text-[24px] font-semibold leading-[1.05] text-[#FFFFFF] sm:text-5xl lg:text-[48px]"
          >
            Precision Transparency in Financial Intelligence
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="lg:mt-6 mt-2 text-[15px] leading-8 text-[#FFFFFF] lg:text-[18px]"
          >
            The modern payment ecosystem is built on legacy foundations that
            intentionally obscure cost and flow. We decode complex
            infrastructure through forensic data-driven clarity, empowering
            institutional decision-makers with the raw truth of transaction
            logic.
          </motion.p>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <motion.div 
            className="w-full max-w-[300px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={heroImage} alt="Sufpay team" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
