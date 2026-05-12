// Centralized business configuration
// All values are strictly sourced from environment variables to prevent leaking secrets in the codebase.

export const BUSINESS_INFO = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
  location: process.env.NEXT_PUBLIC_LOCATION || "",
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "",
  tagline: process.env.NEXT_PUBLIC_TAGLINE || "",
  adminPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "",
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
