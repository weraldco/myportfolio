import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<ul className="flex flex-1 flex-row gap-4 text-center justify-center">
			<Link href="/blogs">
				<li className="uppercase">Blogs</li>
			</Link>
			{/* <Link href="/services">
				<li className="uppercase">Services</li>
			</Link> */}
			{/* <Link href="/works">
				<li className="uppercase">Works</li>
			</Link> */}
			{/* <Link href="/blogs">
				<li className='uppercase'>Blogs</li>
			</Link> */}
			<Link href="/contacts">
				<li className="uppercase">Contacts</li>
			</Link>
		</ul>
	);
}
