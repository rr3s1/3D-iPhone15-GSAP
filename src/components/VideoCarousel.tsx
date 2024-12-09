import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { highlightSlides } from "../constants";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });
    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId]?.pause();
            } else {
                startPlay && videoRef.current[videoId]?.play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    useEffect(() => {
        const span = videoSpanRef.current;
        if (span[videoId]) {
            gsap.to(span[videoId], {
                duration: 5,
                width: "100%",
                onUpdate: () => console.log("Animating Progress"),
                onComplete: () => console.log("Progress Complete"),
            });
        }
    }, [videoId, startPlay]);

    return (
        <div className="flex items-center">
            {highlightSlides.map((list, i) => (
                <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                    <div className="video-carousel_container">
                        <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                            <video
                                ref={(el) => (videoRef.current[i] = el)}
                                id="video"
                                playsInline
                                preload="auto"
                                muted
                                onPlay={() => setVideo((prev) => ({ ...prev, isPlaying: true }))}
                            >
                                <source src={list.video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="absolute top-12 left-[5%] z-10">
                            {list.textLists.map((text, j) => (
                                <p key={j} className="md:text-2xl text-xl font-medium">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoCarousel;
