import React from "react";
import { motion } from "framer-motion";

export function FadeInWhenVisible({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
}

export function ScaleWhenHover({ children }) {
	return (
		<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
			{children}
		</motion.div>
	);
}
