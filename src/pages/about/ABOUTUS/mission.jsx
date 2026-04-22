import { motion } from "framer-motion";
import Abimage from "../../../assets/images/abimage3.png";

export default function Mission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#f4f1e3] px-4 py-10 sm:px-6 md:px-10 lg:px-[160px] lg:py-20">
      <div className="mx-auto max-w-[2000px] grid gap-8 lg:grid-cols-[1.05fr_1.25fr] lg:gap-[71px] lg:items-center">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={Abimage}
            alt="Community impact"
            className="w-full rounded-xl object-center"
          />
        </motion.div>

        <motion.div 
          className="space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium text-[#2C2C2C]">
              Our Mission
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[18px] leading-7 sm:leading-8 text-[#4E4E4E]">
              SufPay empowers Nigerians with innovative and secure financial
              technology solutions, while providing a comprehensive suite of
              information and communication technology services and business
              support. We build trust through exceptional customer service and
              unwavering adherence to regulations, becoming the catalyst for
              seamless digital transformation for individuals, businesses, and
              governments in Nigeria.
            </p>
          </motion.div>

          <motion.div variants={textVariants}>
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium text-[#2C2C2C]">
              Our Vision
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[18px] leading-7 sm:leading-8 text-[#4E4E4E]">
              To become the trusted advisor and one-stop partner for digital
              transformation, enabling success for Individuals, Businesses,
              and Governments in Nigeria.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
