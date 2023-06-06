import React from "react";

export default function VideoComponent() {
  return (
    <video class="w-full pt-24 h-auto max-w-full" autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="miVideo" >
      <source src="video/food.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}
