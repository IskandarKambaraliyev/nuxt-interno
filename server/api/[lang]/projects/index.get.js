import projects from "~/data/projects.js";

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const { page = 1, limit = 6, tag, category, pinned } = getQuery(event);

  if (!projects.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided"
    });
  }

  // Filter projects based on query parameters
  const filteredProjects = projects[lang].filter((project) => {
    // Check if the project is pinned (if the "pinned" query parameter is provided and set to true)
    if (pinned && pinned.toLowerCase() === 'true') {
      return project.pinned === true;
    }
    // Filter by tag and category as before
    if (tag && !project.tags.includes(tag)) return false;
    if (category && project.category.slug !== category) return false;
    return true;
  });

  if (filteredProjects.length === 0) {
    throw createError({
      statusCode: 404,
      message: "No projects found"
    });
  }

  // Apply pagination with handling for last page and remaining projects
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / limit);
  
  // Corrected logic to handle pagination
  const adjustedPage = Math.max(1, Math.min(page, totalPages)); // Ensure page is within valid range
  const startIndex = (adjustedPage - 1) * limit; // Calculate start index based on page and limit
  const endIndex = Math.min(startIndex + limit, totalProjects); // Calculate end index

  // Get the projects for the current page
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Calculate next and previous page information
  const hasNextPage = adjustedPage < totalPages;
  const nextPage = hasNextPage ? adjustedPage + 1 : null;
  const hasPrevPage = adjustedPage > 1;
  const prevPage = hasPrevPage ? adjustedPage - 1 : null;

  // Return the paginated and filtered projects with pagination info
  return {
    projects: paginatedProjects,
    pagination: {
      total: totalProjects,
      page: adjustedPage,
      limit: limit,
      totalPages,
      hasNextPage,
      nextPage,
      hasPrevPage,
      prevPage,
    },
  };
});
