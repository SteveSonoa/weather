export enum Days {
    SU = "Sunday",
    M = "Monday",
    T = "Tuesday",
    W = "Wednesday",
    TH = "Thursday",
    F = "Friday",
    SA = "Saturday"
}

export enum VideoOptions {
    byLights = "blue_yellow_lights_loop.mp4"
}

export enum WeatherIcons {
    CLOUDY = "cloudy.svg",
    CLOUDY_DAY_1 = "cloudy-day-1.svg",
    CLOUDY_DAY_2 = "cloudy-day-2.svg",
    CLOUDY_DAY_3 = "cloudy-day-3.svg",
    CLOUDY_NIGHT_1 = "cloudy-night-1.svg",
    CLOUDY_NIGHT_2 = "cloudy-night-2.svg",
    CLOUDY_NIGHT_3 = "cloudy-night-3.svg",
    DAY = "day.svg",
    NIGHT = "night.svg",
    RAINY_1 = "rainy-1.svg",
    RAINY_2 = "rainy-2.svg",
    RAINY_3 = "rainy-3.svg",
    RAINY_4 = "rainy-4.svg",
    RAINY_5 = "rainy-5.svg",
    RAINY_6 = "rainy-6.svg",
    RAINY_7 = "rainy-7.svg",
    SNOWY_1 = "snowy-1.svg",
    SNOWY_2 = "snowy-2.svg",
    SNOWY_3 = "snowy-3.svg",
    SNOWY_4 = "snowy-4.svg",
    SNOWY_5 = "snowy-5.svg",
    SNOWY_6 = "snowy-6.svg",
    THUNDER = "thunder.svg",
    WEATHER = "weather.svg"
}

export type Weather = {
    day: Days;
    high: string;
    low: string;
    icon: WeatherIcons;
};
