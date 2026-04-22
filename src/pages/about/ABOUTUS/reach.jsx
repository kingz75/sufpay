import { motion } from "framer-motion";
import Abimage from "../../../assets/images/abimage4.png";
import Reach1 from "../../../assets/icons/Reach1.svg";
import Reach2 from "../../../assets/icons/Reach2.svg";

const cards = [
  {
    image: Reach1,
    title: "42+ Active Corridors",
    text: "Real-time tracking of FX spreads and institutional settlement efficiency.",
  },
  {
    image: Reach2,
    title: "$12B Annual Telemetry",
    text: "Aggregate transaction volume processed through our forensic models.",
  },
];

function ReachCard({ image, title, text, index }) {
  const bgClass = index % 2 === 0 ? "bg-[#EFEFEF]" : "lg:bg-[#FAF5E1] bg-[#B4C243]";
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className={`rounded-[10px] border border-[#e3e7d6] ${bgClass} p-4 shadow-[0_12px_28px_rgba(0,0,0,0.05)]`}
    >
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="shrink-0" />
        <div>
          <h3 className="text-[17px] sm:text-[20px] font-medium text-[#2C2C2C]">{title}</h3>
          <p className="text-[13px] sm:text-[15px] leading-6 text-[#4E4E4E]">{text}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Reach() {
  return (
    <section id="reach" className="bg-[#F9F9F9] px-4 py-8 sm:px-6 md:px-10 lg:px-[160px] lg:py-10">
      <div className="mx-auto max-w-[2000px]">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mt-4 text-[22px] sm:text-[30px] lg:text-[40px] font-medium text-[#2C2C2C]">
            Global Reach. Local Precision
          </h2>
          <p className="mx-auto mt-3 lg:mt-4 max-w-[850px] text-[14px] sm:text-[15px] lg:text-[18px] leading-7 sm:leading-8 text-[#4E4E4E]">
            Our network of proprietary nodes captures high-fidelity telemetry
            from every major settlement corridor, normalizing regional
            complexity into actionable alpha.
          </p>
        </motion.div>

        <motion.div 
          className="mt-4 lg:mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={Abimage}
            alt="Chart placeholder"
            className="h-auto w-full"
          />
        </motion.div>

        <div className="mt-4 lg:mt-6 grid gap-3 sm:grid-cols-2 lg:gap-5 mx-auto max-w-[950px]">
          {cards.map((card, index) => (
            <ReachCard
              key={card.title}
              image={card.image}
              title={card.title}
              text={card.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
