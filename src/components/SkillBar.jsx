import { motion } from "framer-motion";

export default function SkillBar({ name, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-pink-600">{level}%</span>
      </div>

      <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"
        />
      </div>
    </div>
  );
}