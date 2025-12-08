import { Avatar } from "../atoms/Avatar";

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
        <div className="max-w-[70%] rounded-2xl px-4 py-2 bg-[#FF7B29] text-white rounded-tl-2xl">
          <p className="text-white text-base wrap-break-word">{message.text}</p>
        </div>
        <span className="text-gray-400 text-xs mt-1 px-1">{formatTime(message.timestamp)}</span>
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
        <div className="max-w-[70%] rounded-2xl px-4 py-2 bg-[#2B2E33] text-white rounded-bl-2xl">
          <p className="text-white text-base wrap-break-word">{message.text}</p>
        </div>
      </div>
      <span className="text-gray-400 text-xs mt-1 px-1 ml-10">{formatTime(message.timestamp)}</span>
    </div>
  );
};
