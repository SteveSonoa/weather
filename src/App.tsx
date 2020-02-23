import React, { useState } from "react";
import Admin from "./Admin";
import Report from "./Report";
import Branding from "./Branding";
import BackgroundVideo from "./BackgroundVideo";
import { Days, VideoOptions, Weather, WeatherIcons } from "./types";
import "./App.css";

const App = () => {
    const days: Days[] = [Days.W, Days.TH, Days.F, Days.SA, Days.SU, Days.M];

    const initialWeather: Weather = {
        day: days[0],
        high: "",
        low: "",
        icon: WeatherIcons.WEATHER
    };

    const initialWeatherWeek = (numDays: number) => {
        const allDays = [];
        for (let i = 0; i < numDays; i++) {
            allDays.push({
                ...initialWeather,
                day: days[i]
            });
        }

        return allDays;
    };

    const [backgroundVideo, setBackgroundVideo] = useState(
        VideoOptions.byLights
    );
    const [showReport, setShowReport] = useState(false);
    const [sixDayWeather, setSixDayWeather] = useState(initialWeatherWeek(6));
    const [dateRange, setDateRange] = useState(" , 2020");

    return (
        <div className="App">
            {backgroundVideo && <BackgroundVideo video={backgroundVideo} />}
            {showReport ? (
                <>
                    <Branding />
                    <Report
                        dateRange={dateRange}
                        goBack={() => setShowReport(false)}
                        weather={sixDayWeather}
                    />
                </>
            ) : (
                <Admin
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    setVideo={setBackgroundVideo}
                    start={() => setShowReport(true)}
                    weather={sixDayWeather}
                    setWeather={setSixDayWeather}
                />
            )}
        </div>
    );
};

export default App;
