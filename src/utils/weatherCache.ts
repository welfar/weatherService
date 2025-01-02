import Cookies from "universal-cookie";

const cookies = new Cookies();
const CACHE_KEY = "weatherCache";

export const WeatherCache = {
  getCache: (): Record<string, any> => {
    try {
      const cache = cookies.get(CACHE_KEY);

      if (cache && typeof cache === "object") {
        return cache;
      }

      return cache ? JSON.parse(cache) : {};
    } catch (error) {
      console.error("Error al obtener el caché:", error);
      return {};
    }
  },

  setCache: (
    cityName: string,
    data: {
      icon: string;
      description: string;
      temp: number;
      temp_min: number;
      temp_max: number;
    }
  ) => {
    const currentCache = WeatherCache.getCache();
    currentCache[cityName] = data;
    cookies.set(CACHE_KEY, JSON.stringify(currentCache), { path: "/" });
  },

  clearCache: () => {
    cookies.remove(CACHE_KEY, { path: "/" });
  },
};
