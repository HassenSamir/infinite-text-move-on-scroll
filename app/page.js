"use client";

import styles from "@/app/page.module.css";
import background from "@/app/assets/images/background.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DIRECTIONS = {
  LEFT: -1,
  RIGHT: 1,
};

const ANIMATION_SPEED = 0.1;

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = DIRECTIONS.LEFT;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25, // slight easing
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    // infinite animation for both directions
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += ANIMATION_SPEED * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main className={styles.main}>
      <Image fill={true} src={background} alt="image" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Photographer -</p>
          {/* Using two words here to create the infinite effect */}
          <p ref={secondText}>Freelance Photographer -</p>
        </div>
      </div>
    </main>
  );
}
