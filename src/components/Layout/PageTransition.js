import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
	return (
		<motion.div //crée une balise div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{
				type: "spring",
				mass: 0.35,
				stiffness: 75,
			}}
		>
			{children}
		</motion.div>
	);
}
