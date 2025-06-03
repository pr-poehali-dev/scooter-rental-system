import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const LucideIcon = icons[name] as LucideIcon;
  const FallbackIcon = icons[fallback] as LucideIcon;

  if (!LucideIcon) {
    return <FallbackIcon size={size} className={className} />;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;
