import testimonials from "~/data/testimonials.js";

export default defineEventHandler(async (event) => {
  const lang = getRouterParam(event, "lang");
  return testimonials[lang];
});
