import { Fugaz_One } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
	return (
		<>
			<div className="p-6 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-4 ">
				<Link
					className={`text-5xl md:text-3xl font-semibold ${fugazOne.className} hover:text-blue-600 duration-200 text-center md:text-left `}
					href="/"
				>{`{w}`}</Link>
				<div className="">
					<Navbar />
				</div>
			</div>
		</>
	);
}
