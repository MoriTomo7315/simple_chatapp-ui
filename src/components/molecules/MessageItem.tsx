import { Avatar } from "../atoms/Avatar";
import { cn } from "@/lib/utils";

export type Message = {
  id: string;
  text: string;
  isSent: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  isConsecutive?: boolean;
  timestamp: Date;
};

interface MessageItemProps {
  message: Message;
}

const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  if (message.isSent) {
    return (
      <div className="flex flex-col items-end px-4 mb-2">
        <div className={cn(
          "max-w-[70%] rounded-2xl px-4 py-2 bg-primary text-primary-foreground",
          "border border-primary"
        )}>
          <p className="text-base break-words">{message.text}</p>
        </div>
        <span className="text-muted-foreground text-xs mt-1 px-1">{formatTime(message.timestamp)}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start px-4 mb-2">
      <div className="flex items-end gap-2">
        {message.avatarSrc && message.avatarAlt && (
          <Avatar
            src={message.avatarSrc}
            alt={message.avatarAlt}
            size="sm"
          />
        )}
        <div className={cn(
          "max-w-[70%] rounded-2xl px-4 py-2 bg-secondary text-secondary-foreground",
          "border border-border"
        )}>
          <p className="text-base break-words">{message.text}</p>
        </div>
      </div>
      <span className="text-muted-foreground text-xs mt-1 px-1 ml-10">{formatTime(message.timestamp)}</span>
    </div>
  );
};
