"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/reviews/review-1.mp4",
  "/reviews/review-2.mp4",
  "/reviews/review-3.mp4",
  "/reviews/review-4.mp4",
  "/reviews/review-5.mp4",
  "/reviews/review-6.mp4",
  "/reviews/review-7.mp4",
];





export default function AuthenticReviews() {
  const [activeIndex, setActiveIndex] = useState(2);
  const videoRefs = useRef([]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Play active video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const getPosition = (index) => {
    let position = index - activeIndex;

    // Handle circular positions
    if (position > videos.length / 2) {
      position -= videos.length;
    }

    if (position < -videos.length / 2) {
      position += videos.length;
    }

    return position;
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
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video}
                muted
                playsInline
                loop
                preload="metadata"
                className="h-full w-full object-cover"
              />

              {!isActive && (
                <div className="absolute inset-0 bg-black/10" />
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  const videoElement = videoRefs.current[index];

                  if (!videoElement) return;

                  if (videoElement.paused) {
                    videoElement.play();
                  } else {
                    videoElement.pause();
                  }
                }}
                className="
                  absolute left-1/2 top-1/2
                  flex h-12 w-12
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-white/80
                  bg-black/20
                  backdrop-blur-sm
                  transition
                  hover:scale-110
                "
              >
                <span className="ml-1 text-xl text-white">▶</span>
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