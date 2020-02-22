import React from "react";
import "./Admin.css";
import { Weather } from "./types";
import { videoOptions, weatherOptions, convertIconToText } from "./helpers";

type Props = {
    setVideo: (event: any) => void;
    start: () => void;
    weather: Weather[];
    setWeather: (weather: Weather[]) => void;
};

const Admin = ({ setVideo, start, weather, setWeather }: Props) => {
    const updateWeatherWeek = (e: any, i: number) => {
        const { name, value } = e.target;
        const newWeatherWeek: Array<Weather> = [];

        weather.forEach((day: Weather, j: number) => {
            if (i === j) {
                const newDay = {
                    ...weather[j],
                    [name]: value
                };
                newWeatherWeek.push(newDay);
            } else {
                newWeatherWeek.push(day);
            }
        });
        setWeather(newWeatherWeek);
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
            <button onClick={start}>Start</button>
        </div>
    );
};

export default Admin;
