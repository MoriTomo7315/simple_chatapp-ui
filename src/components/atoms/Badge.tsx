import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BadgeProps {
  count: number;
}

export const Badge = ({ count }: BadgeProps) => {
  if (count === 0) return null;

  return (
    <ShadcnBadge
      variant="default"
      className={cn(
        "flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full",
        "bg-primary text-primary-foreground font-semibold text-xs",
        "shadow-sm ring-1 ring-primary/20"
      )}
    >
      {count > 99 ? "99+" : count}
    </ShadcnBadge>
  );
};

