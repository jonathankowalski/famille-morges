import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function PhotoStrip() {
  const placeholders = [
    "/images/strip/66b2365c-915a-436e-bf4c-a3369c625df8.jpg",
    "/images/strip/72a84aad-f49e-4d5c-86ea-32db82615d50.jpg",
    "/images/strip/7de97305-e034-466d-8517-ae9d906fd811.jpg",
    "/images/strip/85850540-7fe3-430d-857b-b715f5201995.jpg",
    "/images/strip/Inauguration 1.jpg",
    "/images/strip/MDA EFM 1.jpg",
    "/images/strip/a4346c60-e1ab-4941-81a2-d07978214c71.jpg",
    "/images/strip/ad40b4b4-5e20-432d-a82d-86fb402e74a0.jpg"
  ];
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(20); // seconds

  // duplicate items to create seamless infinite scroll
  const items = [...placeholders, ...placeholders];
  const controls = useAnimation();

  useEffect(() => {
    const calc = () => {
      if (innerRef.current) {
        const totalWidth = innerRef.current.scrollWidth || 0;
        const halfWidth = totalWidth / 2 || 0;
        const speed = 33; // px per second
        const d = halfWidth / speed;
        const dur = isFinite(d) && d > 0 ? d : 20;
        setDuration(dur);

        // start motion animation: translate from 0 to -halfWidth repeatedly
        controls.start({ x: [0, -halfWidth], transition: { duration: dur, ease: "linear", repeat: Infinity, repeatType: "loop" } });
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [controls]);

  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div ref={carouselRef}>
        <motion.div
          ref={innerRef}
          className="flex gap-4 md:gap-6 px-4"
          animate={controls}
        >
          {items.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="shrink-0 w-64 md:w-80 h-48 md:h-64 bg-card rounded-xl border border-border overflow-hidden">
                <img src={item} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


