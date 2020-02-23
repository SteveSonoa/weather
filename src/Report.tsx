import React from "react";
import { Weather } from "./types";
import "./Report.css";
import "./Stars.css";

type Props = {
    dateRange: string;
    goBack: () => void;
    weather: Weather[];
};

const Report = ({ dateRange, goBack, weather }: Props) => {
    return (
        <>
            <h1 className="date-range">{dateRange}</h1>
            <div className="report-area" onClick={goBack}>
                {weather.map(weatherDay => (
                    <div className="weather-day" key={weatherDay.day}>
                        <span className="day">{weatherDay.day}</span>
                        <span className="icon">
                            <img src={`/icons/${weatherDay.icon}`} alt={""} />
                        </span>
                        <span className="temp high">{weatherDay.high}</span>
                        <span className="temp low stars-container">
                            <div className="stars" />
                            <div className="stars2" />
                            <div className="stars3" />
                            {weatherDay.low}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Report;
