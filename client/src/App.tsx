import React from "react";
import VideoPlayer from "./components/VideoPlayer";

const App: React.FC = () => {
    return (
        <div>
            <VideoPlayer src="v.mp4" />
        </div>
    );
};

export default App;
