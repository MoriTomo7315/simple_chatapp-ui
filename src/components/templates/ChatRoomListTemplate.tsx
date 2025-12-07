"use client";

import { Header } from "../organisms/Header";
import { ChatRoomList } from "../organisms/ChatRoomList";
import type { ChatRoom } from "../organisms/ChatRoomList";
import { NavigationBar } from "../organisms/NavigationBar";

// ChatRoom型を再エクスポート
export type { ChatRoom };

interface ChatRoomListTemplateProps {
  chatRooms: ChatRoom[];
  onChatRoomClick?: (chatRoom: ChatRoom) => void;
  onEditClick?: () => void;
  onTabClick?: (tab: "chat" | "create" | "search" | "profile") => void;
}

export const ChatRoomListTemplate = ({
  chatRooms,
  onChatRoomClick,
  onEditClick,
  onTabClick,
}: ChatRoomListTemplateProps) => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Header title="チャットルーム一覧" onEditClick={onEditClick} />
      <ChatRoomList chatRooms={chatRooms} onChatRoomClick={onChatRoomClick} />
      <NavigationBar activeTab="chat" onTabClick={onTabClick} />
    </div>
  );
};

