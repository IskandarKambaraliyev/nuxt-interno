import stringSimilarity from "string-similarity";
import blogData from "~/data/blog.js";
import projectData from "~/data/projects.js";

// Define the API handler
export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const search = getRouterParam(event, "search");

  // Check if the provided language is supported for blogs
  if (!blogData.hasOwnProperty(lang) || !projectData.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided for blogs",
    });
  }

  // Helper function to filter and format data
  const formatData = (data) => {
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      date: item.date,
      slug: item.slug,
      image: item.image,
    }));
  };

  const smartSearch = (data, searchTerm) => {
    return data.filter((item) => {
      // Tokenize search term and title/category slug for advanced comparison
      const searchTokens = searchTerm.toLowerCase().split(" ");
      const titleTokens = item.title.toLowerCase().split(" ");
      const categoryTokens = item.category.slug.toLowerCase().split(" ");

      // Calculate similarity score for each token combination using fuzzy matching
      const titleSimilarities = searchTokens.map((token) =>
        Math.max(
          ...titleTokens.map((titleToken) =>
            stringSimilarity.compareTwoStrings(token, titleToken)
          )
        )
      );
      const categorySimilarities = searchTokens.map((token) =>
        Math.max(
          ...categoryTokens.map((categoryToken) =>
            stringSimilarity.compareTwoStrings(token, categoryToken)
          )
        )
      );

      // Calculate average similarity score for both title and category
      const titleAvgSimilarity =
        titleSimilarities.reduce((sum, val) => sum + val, 0) /
        titleSimilarities.length;
      const categoryAvgSimilarity =
        categorySimilarities.reduce((sum, val) => sum + val, 0) /
        categorySimilarities.length;

      // If either the title or category has an average similarity score above a certain threshold, consider it a match
      const threshold = 0.6; // You can adjust this threshold as needed
      return (
        titleAvgSimilarity > threshold || categoryAvgSimilarity > threshold
      );
    });
  };

  // Filter and format blogs based on advanced smart search
  let filteredBlogs = search
    ? smartSearch(blogData[lang], search)
    : blogData[lang];

  // Filter and format projects based on advanced smart search
  let filteredProjects = search
    ? smartSearch(projectData[lang], search)
    : projectData[lang];

  // Prepare response data
  const response = {
    blogs: formatData(filteredBlogs),
    projects: formatData(filteredProjects),
    totalResults: filteredBlogs.length + filteredProjects.length,
  };

  // Return the response
  return response;
});
