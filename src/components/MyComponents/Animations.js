import React from "react";
import { motion } from "framer-motion";

export function FadeInWhenVisible({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.6 }}
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

export function RotateWhenMounted({ children }) {
	return (
		<motion.div
			initial={{ rotate: 270 }}
			animate={{ rotate: 0 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

export function TranslateWhenVisible({ children }) {
	return (
		<motion.div
			initial={{ x: -500 }}
			whileInView={{ x: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: false }}
		>
			{children}
		</motion.div>
	);
}
