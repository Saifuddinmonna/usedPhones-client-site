const generateMockBlogPosts = (count) => {
	const posts = [];
	for (let i = 1; i <= count; i++) {
		posts.push({
			id: i,
			title: `Blog Post Title ${i}: Exploring Topic ${String.fromCharCode(
				65 + (i % 26)
			)}`,
			excerpt: `This is a short excerpt for blog post ${i}. It discusses interesting concepts and provides valuable insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			imageUrl: `https://picsum.photos/seed/${i}/600/400`,
			date: new Date(
				2023,
				Math.floor(i / 4) % 12,
				1 + (i % 28)
			).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
			author: `Author ${String.fromCharCode(97 + (i % 10))}`,
			slug: `blog-post-title-${i}`,
			category: `Category ${String.fromCharCode(65 + (i % 5))}`,
		});
	}
	return posts;
};

export const allBlogPosts = generateMockBlogPosts(40);