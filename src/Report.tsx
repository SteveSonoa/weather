import React from "react";
import { Weather } from "./types";
import "./Report.css";

type Props = {
    goBack: () => void;
    weather: Weather[];
};

const Report = ({ goBack, weather }: Props) => {
    return (
        <div className="report-area" onClick={goBack}>
            {weather.map(weatherDay => (
                <div className="weather-day" key={weatherDay.day}>
                    <span className="day">{weatherDay.day}</span>
                    <span className="icon">
                        <img src={`/icons/${weatherDay.icon}`} alt={""} />
                    </span>
                    <span className="temp high">{weatherDay.high}</span>
                    <span className="temp low">{weatherDay.low}</span>
                </div>
            ))}
        </div>
    );
};

export default Report;
