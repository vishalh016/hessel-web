"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";
import {
  Heart,
  GlassWater,
  Briefcase,
  Cake,
  Home,
  Palmtree,
  Utensils,
  Sparkles,
  X,
  Calendar,
  Users,
  Leaf,
  Zap,
  Link,
  ArrowRight
} from "lucide-react";

// --- Data ---
const EVENT_TYPES = [
  { id: 1, label: "Wedding", icon: Heart, basePrice: 250000, energy: 95, relatedIds: [2, 8] },
  { id: 2, label: "Reception", icon: GlassWater, basePrice: 180000, energy: 88, relatedIds: [1, 8] },
  { id: 3, label: "Corporate", icon: Briefcase, basePrice: 150000, energy: 92, relatedIds: [7] },
  { id: 4, label: "Birthday", icon: Cake, basePrice: 80000, energy: 75, relatedIds: [5] },
  { id: 5, label: "Housewarming", icon: Home, basePrice: 60000, energy: 65, relatedIds: [4] },
  { id: 6, label: "Traditional", icon: Palmtree, basePrice: 200000, energy: 82, relatedIds: [1, 2] },
  { id: 7, label: "Dining", icon: Utensils, basePrice: 40000, energy: 60, relatedIds: [3] },
  { id: 8, label: "Grand Celebration", icon: Sparkles, basePrice: 350000, energy: 98, relatedIds: [1, 2] },
];

const RADIUS = 230;

export default function OrbitalQuote() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [guests, setGuests] = useState(1);
  const [isVeg, setIsVeg] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(0);

  // High-performance animation loop
  useAnimationFrame((time) => {
    if (autoRotate && !selectedEventId) {
      setRotationAngle(prev => (prev + 0.1) % 360);
    }

    // Atmospheric floating effect
    const xOffset = Math.sin(time / 2000) * 15;
    const yOffset = Math.cos(time / 2500) * 10;
    setCenterOffset({ x: xOffset, y: yOffset });
  });

  const selectedEvent = useMemo(() =>
    EVENT_TYPES.find(e => e.id === selectedEventId),
    [selectedEventId]);

  const toggleItem = (id: number) => {
    if (selectedEventId === id) {
      setSelectedEventId(null);
      setAutoRotate(true);
    } else {
      setSelectedEventId(id);
      setAutoRotate(false);

      // Center view on node (Target 270 degrees - TOP)
      const index = EVENT_TYPES.findIndex(e => e.id === id);
      const targetAngle = (index / EVENT_TYPES.length) * 360;
      setRotationAngle(270 - targetAngle);
    }
  };

  const calculatePosition = (index: number) => {
    const angle = ((index / EVENT_TYPES.length) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    // Add center offset for atmospheric feel
    const x = RADIUS * Math.cos(radian) + (selectedEventId ? 0 : centerOffset.x);
    const y = RADIUS * Math.sin(radian) + (selectedEventId ? 0 : centerOffset.y);

    // Depth calculations for 3D feel
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.3, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    const scale = 0.8 + 0.4 * ((1 + Math.sin(radian)) / 2);

    return { x, y, zIndex, opacity, scale };
  };

  const budgetRange = useMemo(() => {
    if (!selectedEvent) return { min: 0, max: 0 };
    const base = selectedEvent.basePrice;
    const vegDiscount = isVeg ? 0.85 : 1;
    const guestMultiplier = Math.max(1, guests / 100);
    const min = Math.round(base * vegDiscount * guestMultiplier);
    return { min, max: Math.round(min * 1.25) };
  }, [selectedEvent, guests, isVeg]);

  const formatPrice = (val: number) => {
    if (val >= 100000) return `${(val / 100000).toFixed(1)}L`;
    return `${(val / 1000).toFixed(0)}k`;
  };

  return (
    <section id="quote" className="w-full h-[900px] flex items-center justify-center bg-black overflow-hidden relative"
      ref={containerRef}
      onClick={() => {
        setSelectedEventId(null);
        setAutoRotate(true);
      }}
    >

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative w-full max-w-5xl h-full flex items-center justify-center">

        {/* ── ORBITAL SYSTEM ── */}
        <div className="relative w-[800px] h-[800px] flex items-center justify-center" style={{ perspective: "1000px" }}>

          {/* Central Intelligent Core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-40"></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5"></div>

          {/* Nodes */}
          {EVENT_TYPES.map((item, index) => {
            const pos = calculatePosition(index);
            const isSelected = selectedEventId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-700 cursor-pointer flex flex-col items-center"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${isSelected ? 1.4 : pos.scale})`,
                  zIndex: isSelected ? 300 : pos.zIndex,
                  opacity: isSelected ? 1 : pos.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isSelected ? "bg-white text-black" : "bg-black text-white"}
                  border border-white/40 transition-all duration-300
                  ${isSelected ? "shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "shadow-xl"}
                `}>
                  <Icon size={16} />
                </div>

                <div className={`mt-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isSelected ? "text-white opacity-100" : "text-white/40 opacity-100"}`}>
                  {item.label}
                </div>
              </div>
            );
          })}

          {/* ── QUOTE INTERFACE ── */}
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-black/60 backdrop-blur-3xl border border-white/5 py-16 px-10 rounded-[2rem] z-[400] shadow-[0_0_60px_rgba(0,0,0,0.4)]"
                onClick={(e) => e.stopPropagation()}
              >

                <button
                  onClick={() => {
                    setSelectedEventId(null);
                    setAutoRotate(true);
                  }}
                  className="absolute top-5 right-5 text-white/20 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>

                <div className="flex flex-col items-center w-full">


                  {/* Elegant Title */}
                  <h3 className="font-serif text-2xl tracking-wide text-white uppercase text-center mt-6 mb-10">
                    {selectedEvent.label}
                  </h3>

                  <div className="w-full flex flex-col gap-10">
                    {/* Linear Guests Section */}
                    <div className="flex flex-col w-[80%] self-center gap-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">Guest Count</span>
                        <span className="text-white text-2xl font-serif tracking-widest">{guests}</span>
                      </div>
                      <input
                        type="range" min={1} max={1000} step={1} value={guests}
                        onChange={e => setGuests(parseInt(e.target.value))}
                        className="w-full h-[2px] bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    {/* Centered Interaction Controls */}
                    <div className="flex justify-center items-center gap-8 w-full mt-6">
                      <div
                        onClick={() => setIsVeg(!isVeg)}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isVeg ? "bg-white border-white" : "border-white/40"}`}>
                          {isVeg && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.1em] text-white/70 group-hover:text-white transition-colors">Vegetarian</span>
                      </div>

                      <div className="flex items-center gap-3 cursor-pointer group relative">
                        <Calendar size={14} className="text-white/50 group-hover:text-white transition-colors" />
                        <span className="text-[11px] uppercase tracking-[0.1em] text-white/70 group-hover:text-white transition-colors">Schedule</span>
                        <input type="date" className="absolute inset-0 opacity-0 cursor-pointer" />
                      </div>
                    </div>

                    {/* Estimate Section - The Focal Point */}
                    <div className="pt-8 text-center flex flex-col items-center">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3">Estimated Investment</div>
                      <div className="font-serif text-4xl text-white mb-8 tracking-wide">
                        ₹{formatPrice(budgetRange.min)} – {formatPrice(budgetRange.max)}
                      </div>

                      {/* Integrated CTA */}
                      <button className="px-12 py-4 border border-white/30 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black hover:border-white transition-all w-full max-w-[240px]">
                        Generate Proposal
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
