import { useState, useRef } from 'react';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted={isMuted} 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Sound Toggle Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/20 shadow-lg"
        title={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
        )}
      </button>
    </section>
  );
}