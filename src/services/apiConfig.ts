export const API_CONFIGURATION_ERROR =
  "Backend não configurado. Configure VITE_API_BASE_URL na publicação para habilitar os recursos de rede.";

const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? "";
export const apiBaseUrl = configuredApiBaseUrl.endsWith("/")
  ? configuredApiBaseUrl.slice(0, -1)
  : configuredApiBaseUrl;

/** Returns the configured backend URL or throws when it is missing. */
export const requireApiBaseUrl = () => {
  if (!apiBaseUrl) {
    throw new Error(API_CONFIGURATION_ERROR);
  }

  try {
    const parsedUrl = new URL(apiBaseUrl);
    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
      throw new Error(API_CONFIGURATION_ERROR);
    }
  } catch {
    throw new Error(API_CONFIGURATION_ERROR);
  }

  return apiBaseUrl;
};
