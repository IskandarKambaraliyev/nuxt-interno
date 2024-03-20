import blog from '~/data/blog';

// Define the API handler
export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const blogSlug = getRouterParam(event, "blogSlug");

  // Check if the provided language is supported
  if (!blog.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided"
    });
  }

  // Find the blog post by slug
  const blogPost = blog[lang].find(post => post.slug === blogSlug);

  // Throw error if blog post not found
  if (!blogPost) {
    throw createError({
      statusCode: 404,
      message: "Blog post not found"
    });
  }

  // Collect all categories from all blog posts
  const allCategories = blog[lang].map(post => post.category);

  // Filter out duplicate categories
  const possibleCategories = allCategories.filter((category, index, self) =>
    index === self.findIndex((c) => (
      c.id === category.id && c.slug === category.slug
    ))
  );

  // Collect all tags from all blog posts
  const allTags = blog[lang].flatMap(post => post.tags);

  // Filter out duplicate tags
  const possibleTags = [...new Set(allTags)];

  // Prepare response data
  const response = {
    blog: blogPost,
    categories: possibleCategories,
    tags: possibleTags,
  };

  // Return the response
  return response;
});
