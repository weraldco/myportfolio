import { posts } from '@/utils/data';
import React from 'react';

const BlogPostPage = ({ params }: { params: { id: string } }) => {
	const post = posts.filter((post) => post.id == Number(params.id));
	const { title, content } = post[0];

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-semibold">{title}</h1>
			<div>{content}</div>
		</div>
	);
};

export default BlogPostPage;
