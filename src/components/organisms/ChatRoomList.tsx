import { ChatRoomItem } from "../molecules/ChatRoomItem";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ChatRoom {
  id: string;
  name: string;
  avatarSrc: string;
  avatarAlt: string;
  unreadCount: number;
}

interface ChatRoomListProps {
  chatRooms: ChatRoom[];
  onChatRoomClick?: (chatRoom: ChatRoom) => void;
}

export const ChatRoomList = ({ chatRooms, onChatRoomClick }: ChatRoomListProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      <ScrollArea className="h-full">
        {chatRooms.map((chatRoom) => (
          <ChatRoomItem
            key={chatRoom.id}
            avatarSrc={chatRoom.avatarSrc}
            avatarAlt={chatRoom.avatarAlt}
            name={chatRoom.name}
            unreadCount={chatRoom.unreadCount}
            onClick={() => onChatRoomClick?.(chatRoom)}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

