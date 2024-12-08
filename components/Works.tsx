import React from 'react';

export default function Works() {
	return (
		<div>
			<h1>Works</h1>
			<ul>
				<WorkCards
					title="Test test"
					content="test content detials for now"
				></WorkCards>
			</ul>
		</div>
	);
}

type WorkCards = {
	title: string;
	content: string;
};
function WorkCards({ title, content }: WorkCards) {
	return (
		<>
			<li>
				<h2>{title}</h2>
				<span>{content}</span>
			</li>
		</>
	);
}
