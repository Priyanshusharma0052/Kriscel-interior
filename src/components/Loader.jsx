import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
        className="text-center"
      >
        <div className="h-20 w-20 mx-auto rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
        <h1 className="mt-6 text-3xl font-bold">Kriscel Interiors</h1>
      </motion.div>
    </div>
  );
}

export default Loader;