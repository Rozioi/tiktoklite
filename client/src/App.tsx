import React from "react";
import VideoPlayer from "./components/VideoPlayer";

const App: React.FC = () => {
    return (
        <div style={{width: "100vw", height: "100vw"}}>
            <VideoPlayer src="v.mp4" />
        </div>
    );
};

export default App;
