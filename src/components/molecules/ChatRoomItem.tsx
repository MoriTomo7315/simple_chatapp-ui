import { Avatar } from "../atoms/Avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ChatRoomItemProps {
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  unreadCount: number;
  onClick?: () => void;
}

export const ChatRoomItem = ({
  avatarSrc,
  avatarAlt,
  name,
  unreadCount,
  onClick,
}: ChatRoomItemProps) => {
  const hasUnread = unreadCount > 0;

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        onClick={onClick}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 rounded-none h-auto justify-start relative",
          "active:bg-accent hover:bg-accent",
          hasUnread && [
            "bg-primary/5",
            "border-l-4 border-l-primary",
            "font-semibold"
          ]
        )}
      >
        <Avatar src={avatarSrc} alt={avatarAlt} size="md" />
        <div className="flex-1 flex items-center justify-between min-w-0">
          <span className={cn(
            "text-base truncate",
            hasUnread ? "text-foreground font-semibold" : "text-foreground font-normal"
          )}>
            {name}
          </span>
        </div>
      </Button>
      <Separator />
    </>
  );
};
