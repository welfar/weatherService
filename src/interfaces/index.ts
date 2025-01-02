//context
export interface Translation {
  languageLabel: string;
  cities: string[];
  contact: string;
  errorContext: string;
  loginRequired: string;
}

export interface AppContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, Translation>;
  isAuthenticated: boolean;
  authChecked: boolean;
  login: (email: string) => void;
  logout: () => void;
}

//sidebar
export interface SidebarProps {
  onSelectCity?: (city: string) => void;
  onContactClick?: () => void;
}

//error messages
export interface ValidationMessageProps {
  message: string;
  type: "error" | "success";
}

//weather data
export interface WeatherForecast {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
