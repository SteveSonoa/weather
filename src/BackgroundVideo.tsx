import React from "react";

const BackgroundVideo = ({ video }: any) => (
    <>
        <div
            className="dark-background"
            style={{
                background: "rgba(0,0,0,0.25)",
                height: "100vh",
                width: "100vw",
                zIndex: -1,
                position: "fixed",
                top: "0",
                left: "0"
            }}
        />
        <video id="background-video" autoPlay muted loop>
            <source src={`/${video}`} type="video/mp4" />
        </video>
    </>
);

export default BackgroundVideo;
