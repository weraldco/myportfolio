import { posts } from '@/utils/data';
import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
	return (
		<div>
			<h1>Blogs</h1>
			<div>
				<ul className="flex flex-1 flex-col gap-4 ">
					{posts.map((post) => (
						<Link key={post.id} href={`/blogs/${post.id}`}>
							<li className="flex flex-col gap-2 group">
								<h3 className="text-xl font-bold group-hover:text-blue-500">
									{post.title}
								</h3>
								<span className="text-sm">Jul 21, 2024 - 7:30 AM</span>
								<div>{postContent(post.content)}</div>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogsPage;

const postContent = (content: string) => {
	const splitContent = content.split('.');
	return splitContent[0] + '. ' + splitContent[1] + '..';
};
