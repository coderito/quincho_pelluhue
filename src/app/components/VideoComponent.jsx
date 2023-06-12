import React from "react";

export default function VideoComponent() {
  return (
    <div class="video-container">
    <video class="opacity-90 w-full pt-24 h-auto max-w-full" autoplay="autoplay" loop="loop" muted defaultMuted playsinline oncontextmenu="return false;" preload="auto" id="miVideo">
      <source src="video/food.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <div class="text-overlay mb-6 md:mb-12 bg-black rounded-sm  px-4 md:py-6">
      <p class="text-white text-xl sm:text-5xl lg:text-6xl tracking-wider md:tracking-wide"><span class="underline decoration-2 underline-offset-8 decoration-orange-500	">Irresistibles</span> creaciones <span class="text-orange-500">culinarias</span></p>
    </div>
  </div>
  );
}
