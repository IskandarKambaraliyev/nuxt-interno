import team from "~/data/team.js";

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");

  if (!team.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided",
    });
  }

  // Reduce data to include only required fields
  const reducedTeamData = team[lang].map((member) => {
    const { id, name, position, image, contact, social } = member;
    return { id, name, position, image, contact, social };
  });

  return reducedTeamData;
});
