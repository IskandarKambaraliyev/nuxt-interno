import blog from '~/data/blog';

// Define the API handler
export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const { page = 1, limit = 6, tag, category, search } = getQuery(event);

  // Check if the provided language is supported
  if (!blog.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided"
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

  // Filtering blog posts based on query parameters
  let filteredBlog = blog[lang];

  // Filter by category
  if (category) {
    filteredBlog = filteredBlog.filter(post => post.category.slug === category);
  }

  // Filter by tag
  if (tag) {
    filteredBlog = filteredBlog.filter(post => post.tags.includes(tag));
  }

  // Filter by search query (search by title)
  if (search) {
    filteredBlog = filteredBlog.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
  }

  // Apply pagination
  const totalPosts = filteredBlog.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalPosts);
  const paginatedBlog = filteredBlog.slice(startIndex, endIndex);

  if(page > totalPages) {
    throw createError({
      statusCode: 404,
      message: "Page not found"
    });
  }

  // Prepare response data
  const response = {
    blogs: paginatedBlog,
    categories: possibleCategories,
    tags: [...new Set(filteredBlog.flatMap(post => post.tags))],
    pagination: {
      total: totalPosts,
      page: page,
      limit: limit,
      totalPages: totalPages,
      hasPrevPage: page > 1,
      hasNextPage: endIndex < totalPosts,
      prevPage: page > 1 ? page - 1 : null,
      nextPage: endIndex < totalPosts ? page + 1 : null,
    },
  };

  // Return the response
  return response;
});
