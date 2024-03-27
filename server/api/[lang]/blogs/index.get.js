import stringSimilarity from "string-similarity";
import blog from "~/data/blog";

// Define the API handler
export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const { page = 1, limit = 6, tag, category, search } = getQuery(event);

  // Check if the provided language is supported
  if (!blog.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided",
    });
  }

  // Helper function to perform smart search
  const smartSearch = (data, searchTerm) => {
    return data.filter((post) => {
      const title = post.title.toLowerCase();
      const categorySlug = post.category.slug.toLowerCase();

      // Calculate similarity score for title and category slug
      const titleSimilarity = stringSimilarity.compareTwoStrings(
        searchTerm,
        title
      );
      const categorySimilarity = stringSimilarity.compareTwoStrings(
        searchTerm,
        categorySlug
      );

      // If either the title or category has a similarity score above a certain threshold, consider it a match
      const threshold =
        searchTerm.length === 1
          ? 0.1
          : searchTerm.length === 2
          ? 0.2
          : searchTerm.length === 3
          ? 0.3
          : 0.4;
      return titleSimilarity > threshold || categorySimilarity > threshold;
    });
  };

  // Filtering blog posts based on query parameters
  let filteredBlog = blog[lang];

  // Smart search
  if (search) {
    filteredBlog = smartSearch(filteredBlog, search.toLowerCase());
  }

  // Filter by category
  if (category) {
    filteredBlog = filteredBlog.filter(
      (post) => post.category.slug === category
    );
  }

  // Filter by tag
  if (tag) {
    filteredBlog = filteredBlog.filter((post) => post.tags.includes(tag));
  }

  // Apply pagination
  const totalPosts = filteredBlog.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalPosts);
  const paginatedBlog = search
    ? filteredBlog
    : filteredBlog.slice(startIndex, endIndex);

  if (page > totalPages && !search) {
    throw createError({
      statusCode: 404,
      message: "Page not found",
    });
  }

  // Collect all categories from filtered blog posts
  const allCategories = filteredBlog.map((post) => post.category);

  // Filter out duplicate categories
  const possibleCategories = allCategories.filter(
    (category, index, self) =>
      index ===
      self.findIndex((c) => c.id === category.id && c.slug === category.slug)
  );

  // Prepare response data
  const response = {
    blogs: paginatedBlog,
    categories: possibleCategories,
    tags: [...new Set(filteredBlog.flatMap((post) => post.tags))],
    pagination: {
      total: totalPosts,
      page: search ? 1 : page,
      limit: search ? totalPosts : limit,
      totalPages: search ? 1 : totalPages,
      hasPrevPage: search ? false : page > 1,
      hasNextPage: search ? false : endIndex < totalPosts,
      prevPage: search ? null : page > 1 ? page - 1 : null,
      nextPage: search ? null : endIndex < totalPosts ? page + 1 : null,
    },
    latest: filteredBlog[0]
  };

  // Return the response
  return response;
});
