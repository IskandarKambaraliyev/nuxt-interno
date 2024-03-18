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
  const remainingProjects = totalProjects % limit; // Calculate remaining projects

  // Adjust page and limit for the last page scenario
  const adjustedPage = Math.min(page, totalPages); // Ensure page doesn't exceed total pages
  const adjustedLimit =
    remainingProjects && adjustedPage === totalPages
      ? remainingProjects
      : limit; // Adjust limit for last page with remaining projects

  const startIndex = (adjustedPage - 1) * adjustedLimit;
  const endIndex = Math.min(
    parseInt(startIndex) + parseInt(adjustedLimit),
    parseInt(totalProjects)
  );

  // Manual pagination
  const paginatedProjects = [];
  for (let i = startIndex; i < endIndex && i < totalProjects; i++) {
    // Include only specific fields in the response
    const { id, title, category, slug, image, pinned } = filteredProjects[i];
    paginatedProjects.push({ id, title, category, slug, image, pinned });
  }

  // Calculate next and previous page information
  const hasNextPage = adjustedPage < totalPages;
  const nextPage = hasNextPage ? adjustedPage + 1 : null;
  const hasPrevPage = adjustedPage > 1;
  const prevPage = hasPrevPage ? adjustedPage - 1 : null;

  if (page > totalPages) {
    throw createError({
      statusCode: 404,
      message: "Page not found"
    });
  }

  // Return the paginated and filtered projects with pagination info
  return {
    projects: paginatedProjects,
    pagination: {
      total: totalProjects,
      page: adjustedPage, // Use adjusted page for accurate information
      limit: parseInt(adjustedLimit), // Use adjusted limit for accurate information
      totalPages,
      hasNextPage,
      nextPage,
      hasPrevPage,
      prevPage,
    },
  };
});
