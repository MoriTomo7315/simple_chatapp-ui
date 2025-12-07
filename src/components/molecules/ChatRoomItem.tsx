import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";

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
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-700 active:bg-gray-800 transition-colors"
    >
      <Avatar src={avatarSrc} alt={avatarAlt} size="md" />
      <div className="flex-1 flex items-center justify-between min-w-0">
        <span className="text-white text-base font-normal truncate">{name}</span>
        <Badge count={unreadCount} />
      </div>
    </button>
  );
};
