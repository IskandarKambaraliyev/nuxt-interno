import projects from "~/data/projects.js";

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const projectSlug = getRouterParam(event, "projectSlug");

  // Find the project with the matching slug
  const langProjects = projects[lang];
  
  if (!langProjects) {
    throw createError({
      statusCode: 404,
      message: "Language not found"
    });
  }

  const project = langProjects.find((project) => project.slug === projectSlug);

  // Check if the project with the specified slug exists
  if (!project) {
    throw createError({
      statusCode: 404,
      message: "Project not found"
    });
  }

  // Return the project data
  return project;
});
