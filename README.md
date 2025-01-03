# About

This application is developed in ReactJS. Your goal is to get weather predictions for three different cities, accessible after logging in. Predictions are presented in three-hour intervals, covering a period of up to 24 hours.

# How to start?

To run the project, clone the repository, open the project in your local environment and execute the following commands:

### `npm i`
### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Environment Variables

To run this project, you need to create a `.env` file in the root directory with the following variables:

REACT_APP_API_KEY=your_api_key_here \
REACT_APP_BASE_URL=https://api.openweathermap.org/data/2.5 \
REACT_APP_DEFAULT_UNITS=metric

After the environment variables have been aggravated, the project must be run again.

### Obtaining the API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/).
2. Sign up or log in.
3. Navigate to the "API Keys" section in your account.
4. Copy your API key and paste it in the `.env` file as `REACT_APP_API_KEY`.

# Application deployment

To see the application working, you can access the following link: [https://welfar.github.io/weatherService/](https://welfar.github.io/weatherService/)
