import axios from "axios";
import { API_CONFIG } from "../config/ApiConfig";

export const GetWeatherByCity = {
  async get(endpoint: string, params: Record<string, any> = {}) {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}${endpoint}`, {
        params: {
          ...params,
          appid: API_CONFIG.API_KEY,
          units: API_CONFIG.DEFAULT_UNITS,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
      throw error;
    }
  },
};
