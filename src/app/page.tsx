"use client";

import { useState, useEffect } from "react";
import { ChatRoomListTemplate, type ChatRoom } from "../components/templates/ChatRoomListTemplate";

const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;
};

// モックデータ（実際のAPI呼び出しに置き換える際は、この関数を削除または修正）
const getMockChatRooms = (): ChatRoom[] => [
  {
    id: "1",
    name: "Project Team",
    avatarSrc: getAvatarUrl("Project Team"),
    avatarAlt: "Project Team",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Design Feedback",
    avatarSrc: getAvatarUrl("Design Feedback"),
    avatarAlt: "Design Feedback",
    unreadCount: 1,
  },
  {
    id: "3",
    name: "Marketing Strategy",
    avatarSrc: getAvatarUrl("Marketing Strategy"),
    avatarAlt: "Marketing Strategy",
    unreadCount: 3,
  },
  {
    id: "4",
    name: "Product Launch",
    avatarSrc: getAvatarUrl("Product Launch"),
    avatarAlt: "Product Launch",
    unreadCount: 5,
  },
  {
    id: "5",
    name: "Customer Support",
    avatarSrc: getAvatarUrl("Customer Support"),
    avatarAlt: "Customer Support",
    unreadCount: 2,
  },
  {
    id: "6",
    name: "Sales Team",
    avatarSrc: getAvatarUrl("Sales Team"),
    avatarAlt: "Sales Team",
    unreadCount: 1,
  },
];

// API呼び出し関数（将来的に実際のAPIエンドポイントに置き換える）
const fetchChatRooms = async (user: { id: string; name: string } | null): Promise<ChatRoom[]> => {
  // 実際のAPI呼び出しをシミュレート（ネットワーク遅延を再現）
  await new Promise((resolve) => setTimeout(resolve, 500));

  // モックデータを返す（実際の実装では、以下のコメントアウト部分を使用）
  // const response = await fetch(`/api/chatrooms?userId=${user?.id}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${user?.token}`,
  //   },
  // });
  // if (!response.ok) {
  //   throw new Error("Failed to fetch chat rooms");
  // }
  // return response.json();

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

  const handleChatRoomClick = (chatRoom: ChatRoom) => {
    console.log("Chat room clicked:", chatRoom);
  };

  const handleEditClick = () => {
    console.log("Edit clicked");
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
        <p>エラーが発生しました: {error.message}</p>
      </div>
    );
  }

  return (
    <ChatRoomListTemplate
      chatRooms={chatRooms}
      onChatRoomClick={handleChatRoomClick}
      onEditClick={handleEditClick}
      onTabClick={handleTabClick}
    />
  );
}
