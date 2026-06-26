// Add or remove links here — the nav reads from this list.
// Use any Lucide icon name for the icon field.
import type { icons } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: keyof typeof icons;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", icon: "Linkedin" },
  { label: "Credly", href: "https://www.credly.com/users/your-handle", icon: "BadgeCheck" },
  { label: "GitHub", href: "https://github.com/your-handle", icon: "Github" },
];
