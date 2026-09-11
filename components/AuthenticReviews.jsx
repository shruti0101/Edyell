"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/testimonial1.mp4",
  "/testimonial2.mp4",
  "/testimonial3.mp4",
  "/testimonial4.mp4",
  "/testimonial5.mp4",
  "/testimonial6.mp4",
  "/testimonial7.mp4",
];

export default function AuthenticReviews() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [playingIndex, setPlayingIndex] = useState(null);
const [muted, setMuted] = useState(
  videos.map(() => true)
);

  const videoRefs = useRef([]);

  /*
   * Auto slider
   * Slider only moves when no video is playing.
   */
  useEffect(() => {
    if (playingIndex !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [playingIndex]);

  /*
   * Pause videos when active slide changes.
   */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // New active video starts paused
    setPlayingIndex(null);
  }, [activeIndex]);

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > videos.length / 2) {
      position -= videos.length;
    }

    if (position < -videos.length / 2) {
      position += videos.length;
    }

    return position;
  };

  /*
   * Play / Pause video
   */
 const togglePlay = (index) => {
  const video = videoRefs.current[index];

  if (!video) return;

  if (video.paused) {
    // Pause all other videos
    videoRefs.current.forEach((otherVideo, otherIndex) => {
      if (otherVideo && otherIndex !== index) {
        otherVideo.pause();
      }
    });

    // Apply this video's own mute state
    video.muted = muted[index];

    video
      .play()
      .then(() => {
        setPlayingIndex(index);
      })
      .catch(() => {});
  } else {
    video.pause();
    setPlayingIndex(null);
  }
};

  /*
   * Mute / Unmute
   */
const toggleMute = (e, index) => {
  e.stopPropagation();

  const video = videoRefs.current[index];

  if (!video) return;

  const newMuted = !video.muted;

  video.muted = newMuted;

  setMuted((prev) => {
    const updated = [...prev];
    updated[index] = newMuted;
    return updated;
  });
};

  return (
    <section className="w-full overflow-hidden bg-white py-19">
      <div className="mx-auto w-full">

        {/* Heading */}
        <h2 className="mb-16 text-center heading-size">
          Authentic Reviews
        </h2>

        {/* Slider */}
        <div className="relative mx-auto flex h-[536px] w-full max-w-[1600px] items-center justify-center">
          {videos.map((video, index) => {
            const position = getPosition(index);

            if (Math.abs(position) > 2) return null;

            const isActive = position === 0;
            const isPlaying = playingIndex === index;

            return (
              <div
                key={video}
                onClick={() => setActiveIndex(index)}
                className={`
                  absolute left-1/2 top-1/2
                  w-[180px]
                  md:w-[220px]
                  lg:w-[260px]
                  xl:w-[302px]
                  overflow-hidden
                  cursor-pointer
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? "z-30" : "z-10"}
                `}
                style={{
                  aspectRatio: "40 / 71",
                  transform: `
                    translate(-50%, -50%)
                    translateX(calc(${position} * clamp(190px, 19vw, 310px)))
                    scale(${isActive ? 1 : 0.82})
                  `,
                }}
              >
                <div className="relative h-full w-full bg-black">

                  {/* Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video}
                  muted={muted[index]}
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    onPlay={() => {
                      setPlayingIndex(index);
                    }}
                    onPause={() => {
                      if (playingIndex === index) {
                        setPlayingIndex(null);
                      }
                    }}
                  />

                  {/* Overlay for side videos */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/10" />
                  )}

                  {/* Play / Pause */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(index);
                    }}
                    className="
                      absolute left-1/2 top-1/2
                      flex h-12 w-12
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center justify-center
                      rounded-full
                      border border-white/80
                      bg-black/30
                      backdrop-blur-sm
                      transition
                      hover:scale-110
                    "
                  >
                    {isPlaying ? (
                      <span className="text-xl text-white">
                        ❚❚
                      </span>
                    ) : (
                      <span className="ml-1 text-xl text-white">
                        ▶
                      </span>
                    )}
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={(e) => toggleMute(e, index)}
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/80
                      bg-black/40
                      text-white
                      backdrop-blur-sm
                      transition
                      hover:scale-110
                    "
                  aria-label={muted[index] ? "Unmute video" : "Mute video"}
                  >
                {muted[index] ? "🔇" : "🔊"}
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}