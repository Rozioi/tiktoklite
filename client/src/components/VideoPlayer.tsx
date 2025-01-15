import React, { useRef, useState } from "react";
import styles from '../assets/VideoPlayer.module.scss';
import { FaPlay } from "react-icons/fa6";
import { LuPictureInPicture } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots,FaShare } from "react-icons/fa";

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isPiPmode, setIsPiPmode] = useState<boolean>(false);
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
    const togglePictureInPicture = async () => {
        if (videoRef.current){
            if (!isPiPmode){
                await videoRef.current.requestPictureInPicture().catch(() => {
                    console.error('Filed open video in mode Picture In Picture')
                });
                setIsPiPmode(true);
            } else{
                await document.exitPictureInPicture();
                setIsPiPmode(false);
            }
        }
    }

    return (
        <div className={styles['videoBlock']}>
            <div
                className={styles['VideoPlayerBlock']}
                onClick={() => PlayVideo()}
            >
                <video
                    ref={videoRef}
                    src={src}
                    loop
                    playsInline
                />
                {!isPlaying && <div className={styles['PauseOrPlayButton']}><FaPlay/></div>}
                {!isPlaying && <div className={styles['PictureInPicture']} onClick={() => togglePictureInPicture()}><LuPictureInPicture/></div>}
            </div>
            <div className={styles['control-panel']}>
                <div className={styles['control-panel-element']}><img src={'ava.jpg'}/></div>
                <div className={styles['control-panel-element']}><FcLike /></div>
                <div className={styles['control-panel-element']}><FaRegCommentDots /></div>
                <div className={styles['control-panel-element']}><FaShare /></div>
            </div>
        </div>
    );
};

export default VideoPlayer;
