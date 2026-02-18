import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(); // When you want more controls over properties of a video, you use Ref hook. Then, you attach it to a video

  useEffect(() => {
    // Condition that checks if videoRef has been attached to any element
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Video plays 2x faster
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook hero image" />
      </div>
      <video
          ref={videoRef}
          src="/videos/hero.webm"
          autoPlay
          muted
          playsInline
        ></video>
        <button>Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
