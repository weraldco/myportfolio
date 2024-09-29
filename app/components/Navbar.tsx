import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<ul className="flex flex-1 flex-row gap-4 text-center font-semibold justify-center">
			<Link href="/">
				<li>Home</li>
			</Link>
			<Link href="/services">
				<li>Services</li>
			</Link>
			<Link href="/works">
				<li>Works</li>
			</Link>
			<Link href="/blogs">
				<li>Blogs</li>
			</Link>
			<Link href="/contacts">
				<li>Contacts</li>
			</Link>
		</ul>
	);
}
