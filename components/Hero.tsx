import { Arvo } from 'next/font/google';
import React from 'react';
const arvoFont = Arvo({ subsets: ['latin'], weight: '700' });

export default function Hero() {
	return (
		<div className="hero-section">
			<div
				className={`h-[80vh] md:h-[100vh] flex flex-col justify-center items-center gap-10 md:gap-8 text-center`}
			>
				<span className=" text-base md:text-2xl">
					Hi, I&#39;m Werald Opolento a{' '}
				</span>
				<span
					className={`${arvoFont.className} text-[40px] md:text-[80px] lg:text-[110px] font-bold grid leading-[1em] `}
				>
					FRONT-END <br />
					WEB DEVELOPER
				</span>
				<span className="w-full md:w-[500px]  text-base md:text-xl">
					I build web apps and website that are user-friendly and convert your
					target audience. Currently based in the Philippines.
				</span>
				<div className="grid grid-flow-col gap-4">
					<button className="px-6 p-4 bg-gray-700 text-white rounded-lg hover:opacity-80 active:opacity-90 duration-200 hover:scale-105 active:scale-110">
						Let&#39;s Work Together
					</button>
					<button className="px-6 p-4 bg-gray-300 rounded-lg hover:opacity-80 active:opacity-90 duration-200 hover:scale-105 active:scale-110">
						My CV
					</button>
				</div>
			</div>
		</div>
	);
}
