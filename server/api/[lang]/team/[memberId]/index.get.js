import team from "~/data/team.js";

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  const memberId = getRouterParam(event, "memberId");

  if (!team.hasOwnProperty(lang)) {
    throw createError({
      statusCode: 400,
      message: "Invalid language provided",
    });
  }

  const members = team[lang];

  // Find the team member by memberId
  const member = members.find((m) => m.id === parseInt(memberId));

  if (!member) {
    throw createError({
      statusCode: 404,
      message: "Member not found",
    });
  }

  return member;
});
