import { Fugaz_One } from 'next/font/google';
import React from 'react';
import Navbar from './Navbar';

const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
	return (
		<>
			<div className="p-6 grid grid-cols-1 md:grid-cols-3 justify-between items-center">
				<div
					className={`text-3xl font-semibold ${fugazOne.className}`}
				>{`{w}`}</div>
				<div className="">
					<Navbar />
				</div>
				<div className="text-center">Talk to me?</div>
			</div>
		</>
	);
}
