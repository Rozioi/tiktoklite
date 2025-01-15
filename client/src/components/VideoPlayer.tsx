import React, { useRef, useState } from "react";

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const PlayVideo = () => {
        if (videoRef.current){
            if (videoRef.current.paused){
                videoRef.current.play().catch(() => {
                    console.error('Failed playing video')
                });
                setIsPlaying(true);
            }else{
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }

    return (
        <div onClick={() => PlayVideo()}>
            <video
                ref={videoRef}
                src={src}
                loop
                playsInline
            />
            {!isPlaying && <div style={{zIndex: '1', position: 'relative'}}>▶️</div>}
        </div>
    );
};

export default VideoPlayer;
