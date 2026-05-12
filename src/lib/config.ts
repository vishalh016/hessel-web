// Centralized business configuration
// All values sourced from environment variables

export const BUSINESS_INFO = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "HALDER'S HESSEL",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+916291799615",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "916291799615",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@haldershessel.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/haldershessel",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "https://facebook.com/haldershessel",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "Kolkata, West Bengal, India",
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
  tagline: process.env.NEXT_PUBLIC_TAGLINE ?? "Make Your Events Hassle-Free With Us",
};

/**
 * Generate a WhatsApp deep-link URL with a pre-filled message.
 * Uses the centralized whatsapp number from env.
 */
export function waLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
}

/** Default WhatsApp CTA link (no custom message) */
export const WA_DEFAULT = waLink(
  `Hi ${BUSINESS_INFO.name}! I'd like to plan an event. Please get in touch.`
);
