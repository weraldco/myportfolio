import { faGears } from '@fortawesome/free-solid-svg-icons/faGears';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faPenNib } from '@fortawesome/free-solid-svg-icons/faPenNib';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons/faPenRuler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Services() {
	return (
		<div>
			<div className="grid grid-flow-row justify-center items-center ">
				<h2>Services</h2>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between w-full gap-10 ">
					<Card
						title="Front-end Development"
						content="Deliver all application needs for the client for easy to
							understand and communicate to the client/user."
					>
						<FontAwesomeIcon size="3x" icon={faLaptopCode} />
					</Card>

					<Card
						title="Back-end Development"
						content="Make your website fully functional with extremely good database structure and server-side controls to update the client
					perspective."
					>
						<FontAwesomeIcon size="3x" icon={faGears} />
					</Card>
					<Card
						title="UI/UX Design"
						content="Give a client an user-friendly experience where user eyes and mind connect to your interface."
					>
						<FontAwesomeIcon size="3x" icon={faPenRuler} />
					</Card>
					<Card
						title="Branding"
						content="Give a client an user-friendly experience where user eyes and mind connect to your interface."
					>
						<FontAwesomeIcon size="3x" icon={faPenNib} />
					</Card>
				</ul>
			</div>
		</div>
	);
}

type CardProps = {
	title: string;
	content: string;
	children: React.ReactNode;
};
function Card({ title, content, children }: CardProps) {
	return (
		<li className="p-6 bg-slate-100 w-full grid place-content-start gap-4 ">
			<div className=" grid place-content-center p-4">{children}</div>
			<div className="">
				<h2 className="text-[1.25em] font-bold ">{title}</h2>
				<span>{content}</span>
			</div>
		</li>
	);
}
