"use client";

import { useState, useEffect } from "react";
import { ChatRoomListTemplate, type ChatRoom } from "../components/templates/ChatRoomListTemplate";

const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;
};

// mock data since this development is just for learning websocket communication
const getMockChatRooms = (): ChatRoom[] => [
  {
    id: "1",
    name: "田中太郎",
    avatarSrc: getAvatarUrl("田中太郎"),
    avatarAlt: "田中太郎",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "鈴木花子",
    avatarSrc: getAvatarUrl("鈴木花子"),
    avatarAlt: "鈴木花子",
    unreadCount: 1,
  }
];

const fetchChatRooms = async (user: { id: string; name: string } | null): Promise<ChatRoom[]> => {
  // for simulating api calling delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return getMockChatRooms();
};

export default function Home() {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadChatRooms = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchChatRooms(user);
        setChatRooms(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    loadChatRooms();
  }, [user]);

  //TODO: implement chat room click handler to navigate to the chat room
  const handleChatRoomClick = (chatRoom: ChatRoom) => {
    console.log("Chat room clicked:", chatRoom);
  };

  const handleTabClick = (tab: "chat" | "create" | "search" | "profile") => {
    console.log("Tab clicked:", tab);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <p>読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <p>チャットルームの読み込みに失敗しました</p>
      </div>
    );
  }

  return (
    <ChatRoomListTemplate
      chatRooms={chatRooms}
      onChatRoomClick={handleChatRoomClick}
      onTabClick={handleTabClick}
    />
  );
}
