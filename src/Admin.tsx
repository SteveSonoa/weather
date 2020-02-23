import React from "react";
import "./Admin.css";
import { Days, Weather } from "./types";
import {
    videoOptions,
    weatherOptions,
    convertIconToText,
    rng
} from "./helpers";

type Props = {
    dateRange: string;
    setDateRange: Function;
    setVideo: (event: any) => void;
    start: () => void;
    weather: Weather[];
    setWeather: (weather: Weather[]) => void;
};

const Admin = ({
    dateRange,
    setDateRange,
    setVideo,
    start,
    weather,
    setWeather
}: Props) => {
    const updateWeatherWeek = (e: any, i: number) => {
        const newWeatherWeek: Array<Weather> = [];

        weather.forEach((day: Weather, j: number) => {
            if (i === j) {
                const newDay = {
                    ...weather[j],
                    ...handleChange(e)
                };
                newWeatherWeek.push(newDay);
            } else {
                newWeatherWeek.push(day);
            }
        });
        setWeather(newWeatherWeek);
    };

    const updateDateRange = (e: any) => {
        setDateRange(e.target.value);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        return { [name]: value };
    };

    const setTempWeatherDay = () => ({
        high: rng(70, 110).toString(),
        low: rng(40, 70).toString(),
        icon:
            weatherOptions[
                Math.floor(Math.random() * (weatherOptions.length - 1))
            ]
    });

    const setDefaultValues = () => {
        setWeather([
            {
                ...setTempWeatherDay(),
                day: Days.W
            },
            {
                ...setTempWeatherDay(),
                day: Days.TH
            },
            {
                ...setTempWeatherDay(),
                day: Days.F
            },
            {
                ...setTempWeatherDay(),
                day: Days.SA
            },
            {
                ...setTempWeatherDay(),
                day: Days.SU
            },
            {
                ...setTempWeatherDay(),
                day: Days.M
            }
        ]);
        setDateRange("September 26 - October 2, 2020");
    };

    return (
        <div className="admin-area">
            {videoOptions.length > 1 && (
                <>
                    <div className="label-text">Select a background</div>
                    <div className="video-options">
                        {videoOptions.map(video => (
                            <button key={video} onClick={() => setVideo(video)}>
                                <video className="video-selection">
                                    <source
                                        src={`/${video}`}
                                        type="video/mp4"
                                    />
                                </video>
                            </button>
                        ))}
                    </div>
                </>
            )}
            <div className="label-text">
                Setup The Weather{" "}
                <a
                    href="https://weather.com/weather/tenday/l/e9d51af76a1b382b08b959cd488ed0d4c95c71832b044f62a39b4949880923d4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Weather.com
                </a>
            </div>
            <label className="label-text inline">
                Date Range:{" "}
                <input
                    name="dates"
                    value={dateRange}
                    onChange={e => updateDateRange(e)}
                />
            </label>
            {weather.map((weatherDay, i) => (
                <div className="weather-day" key={i}>
                    <div className="label-text">{weatherDay.day}</div>
                    <div className="labels-container">
                        <label className="label-text inline">
                            High:{" "}
                            <input
                                name="high"
                                value={weatherDay.high}
                                onChange={e => updateWeatherWeek(e, i)}
                                className="temperature"
                            />
                        </label>
                        <label className="label-text inline">
                            Low:{" "}
                            <input
                                name="low"
                                value={weatherDay.low}
                                onChange={e => updateWeatherWeek(e, i)}
                                className="temperature"
                            />
                        </label>
                        <label className="label-text inline">
                            Icon:{" "}
                            <select
                                id="icon"
                                name="icon"
                                value={weatherDay.icon}
                                onChange={e => updateWeatherWeek(e, i)}
                            >
                                {weatherOptions.map(icon => (
                                    <option value={icon} key={icon}>
                                        {convertIconToText(icon)}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <img
                            src={`/icons/${weatherDay.icon}`}
                            alt={weatherDay.icon}
                        />
                    </div>
                </div>
            ))}
            <button onClick={setDefaultValues}>Set Defaults</button>
            <button onClick={start}>Start</button>
        </div>
    );
};

export default Admin;
