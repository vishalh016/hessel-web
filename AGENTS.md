<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Halder's Hessel | Project Intelligence & Learnings

## 1. Project Vision
Transforming Hessel from a generic catering site into a **"Warm Premium Hospitality Discovery Universe."** The focus is on cinematic storytelling, emotional engagement, and effortless consultation.

## 2. The "Warm Hospitality" Design System
*   **Primary Palette**: 
    *   `Midnight Navy` (#0F172A) for deep cinematic sections.
    *   `Warm Ivory` (#F8F4EC) for light, breathable sections.
    *   `Champagne Gold` (#E5D3A1 / #C9A14A) for metallic accents and borders.
    *   `Deep Maroon` (#5A0B16) for high-end CTAs and highlights.
*   **Anti-Patterns**: 
    *   **NO PURE WHITE**: Avoid `#FFFFFF` for backgrounds or cards. Use Ivory or Champagne.
    *   **NO HARSH BLACK**: Use Charcoal or Midnight Navy.
    *   **NO ROBOTIC UI**: Avoid standard dashboards, grids, and wizard-style steps.
*   **Typography**: Playfair Display (Serif) for headings; Outfit/Geist (Sans) for body. Letter spacing should be spacious and editorial.

## 3. Core Component Architecture
### A. Orbital Quote (The Discovery Universe)
*   **Mechanism**: A continuous, uninterrupted orbital rotation (driven by `requestAnimationFrame`) that feels organic and alive.
*   **Center Orb**: A mysterious atmospheric energy source (Gold/Maroon pulse) that illuminates the surroundings.
*   **Interaction**: Selecting a node moves it to the **Top Focal Position** elegantly while the orbit softly slows.
*   **Popup**: Contextual, high-blur glassmorphism cards that float near the composition.

### B. Interactive Menu Builder
*   **Experience**: A single-page categorized planner. No "wizard" steps.
*   **Veg Toggle**: High-priority feature that completely hides non-veg items and reflows categories instantly.
*   **Service Options**: Buffet, Table, and Live Counter selections that dynamically update a sticky summary.

## 4. Technical Implementation Rules
*   **Centralized Config**: All business data (names, numbers, links) MUST be sourced from `src/lib/config.ts` which reads from `.env.local`.
*   **State Management**: Use `Zustand` for complex cross-component state if needed, otherwise standard `useState` for self-contained UI logic.
*   **Animations**: Favor `framer-motion` for complex transitions and `requestAnimationFrame` for continuous, high-performance background motion.
*   **Privacy**: Never hardcode secrets. Ensure `.env.local` handles passwords and PATs.

## 5. Current Status & Learnings
*   **User Preference**: The user prefers "fluid/dynamic" AI interactions over "structured/operational" ones.
*   **UI Sensitivity**: Highly sensitive to "white" elements; prefers warm, blended tones.
*   **Spatial Awareness**: Components should feel like they exist in a "universe" rather than on a "grid."

## 6. Premium Intelligence UI & Data Learnings (Orbital System)
*   **Data Architecture Anticipation**: All frontend pricing data (like base prices in `EVENT_TYPES`) is currently a placeholder. The architecture MUST anticipate that these values will be managed entirely by the Admin through a secure DB backend. The UI must render dynamic, server-fetched values seamlessly.
*   **Strict Centered Gravity**: Popups and structural panels must avoid "HUD-like" horizontal stretching. They must be compact, vertically balanced, and explicitly centered within their orbits to maintain a premium feel.
*   **Restrained Glows**: Overpowering light blooms break the luxury aesthetic. Highlighting must be strictly limited to the *exact* element selected (e.g., using `box-shadow` directly on a circle to ensure perfect geometry) and avoid "bleed" onto related items.
*   **Typography Hierarchy**: Rely on stark contrast between ultra-clean metadata (`text-white/50`, wide tracking, `10px` size) and grand, high-contrast focal points (Estimate pricing in large Serif).
*   **Clean Rhythms**: Avoid huge auto-gaps (`gap-10`). Use explicitly controlled margins to tightly group related interactions (like Veg/Schedule) while providing massive breathing room for Call to Actions (CTA).
