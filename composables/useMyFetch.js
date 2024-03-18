export const useMyFetch = async (request, opts) => {
  const { $i18n } = useNuxtApp();
  const locale = $i18n.locale;
  const config = useRuntimeConfig();
  return await useFetch(() => `/api/${locale.value}${request}`, {
    baseURL: config.public.baseURL,
    onResponse({ request, response }) {
      // console.log(request);
      // console.log(response);
    },
    ...opts,
  });
};
