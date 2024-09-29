'use client';
import { motion } from 'framer-motion';
export default function Home() {
	return (
		<div className="h-screen bg-slate-600 flex flex-col items-center justify-center">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl font-fbold mb-8"
			>
				Home
			</motion.div>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="px-4 py-2 bg-blue-500 text-white rounded-md"
			>
				Click me!
			</motion.button>
		</div>
	);
}
