import { Avatar as ShadcnAvatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export const Avatar = ({ src, alt, size = "md" }: AvatarProps) => {
  const sizeValue = size === "sm" ? 32 : size === "md" ? 48 : 64;
  
  return (
    <ShadcnAvatar className={cn(sizeClasses[size], "flex-shrink-0")}>
      <AvatarImage src={src} alt={alt} width={sizeValue} height={sizeValue} />
      <AvatarFallback>{alt.charAt(0)}</AvatarFallback>
    </ShadcnAvatar>
  );
};

