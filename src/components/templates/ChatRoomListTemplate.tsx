"use client";

import { Header } from "../organisms/Header";
import { ChatRoomList } from "../organisms/ChatRoomList";
import type { ChatRoom } from "../organisms/ChatRoomList";
import { NavigationBar } from "../organisms/NavigationBar";

export type { ChatRoom };

interface ChatRoomListTemplateProps {
  chatRooms: ChatRoom[];
  onChatRoomClick?: (chatRoom: ChatRoom) => void;
  onTabClick?: (tab: "chat" | "create" | "search" | "profile") => void;
}

export const ChatRoomListTemplate = ({
  chatRooms,
  onChatRoomClick,
  onTabClick,
}: ChatRoomListTemplateProps) => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header title="チャットルーム一覧" />
      <ChatRoomList chatRooms={chatRooms} onChatRoomClick={onChatRoomClick} />
      <NavigationBar activeTab="chat" onTabClick={onTabClick} />
    </div>
  );
};

