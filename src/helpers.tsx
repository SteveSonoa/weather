import { VideoOptions, WeatherIcons } from "./types";

export const videoOptions = [VideoOptions.byLights];

export const weatherOptions = [
    WeatherIcons.CLOUDY,
    WeatherIcons.CLOUDY_DAY_1,
    WeatherIcons.CLOUDY_DAY_2,
    WeatherIcons.CLOUDY_DAY_3,
    WeatherIcons.DAY,
    WeatherIcons.RAINY_1,
    WeatherIcons.RAINY_2,
    WeatherIcons.RAINY_3,
    WeatherIcons.RAINY_4,
    WeatherIcons.RAINY_5,
    WeatherIcons.RAINY_6,
    WeatherIcons.RAINY_7,
    WeatherIcons.THUNDER,
    WeatherIcons.WEATHER
];

export const convertIconToText: any = (filenameWithExtension: WeatherIcons) => {
    const filenameOnly = filenameWithExtension.split(".")[0];
    return filenameOnly.replace("-", " ");
};
