"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ChatRoomTemplate } from "../../../components/templates/ChatRoomTemplate";
import type { Message } from "../../../components/molecules/MessageItem";
import { Icon } from "../../../components/atoms/Icon";

const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;
};

const getMockMessages = (chatRoomId: string): Message[] => {
  const now = new Date();
  
  if (chatRoomId === "1") {
    return [
      {
        id: "1",
        text: "こんにちは！元気ですか？",
        isSent: false,
        avatarSrc: getAvatarUrl("田中太郎"),
        avatarAlt: "田中太郎",
        timestamp: new Date(now.getTime() - 30 * 60 * 1000),
      },
      {
        id: "2",
        text: "元気ですよ！ありがとうございます。",
        isSent: true,
        timestamp: new Date(now.getTime() - 25 * 60 * 1000),
      },
      {
        id: "3",
        text: "最近何か面白いことありましたか？",
        isSent: false,
        avatarSrc: getAvatarUrl("田中太郎"),
        avatarAlt: "田中太郎",
        timestamp: new Date(now.getTime() - 20 * 60 * 1000),
      },
      {
        id: "4",
        text: "ええ、新しい趣味を見つけました。",
        isSent: true,
        timestamp: new Date(now.getTime() - 15 * 60 * 1000),
      },
      {
        id: "5",
        text: "プログラミングを始めたんです！",
        isSent: true,
        timestamp: new Date(now.getTime() - 10 * 60 * 1000),
      },
    ];
  }
  
  if (chatRoomId === "2") {
    return [
      {
        id: "1",
        text: "おはようございます！",
        isSent: false,
        avatarSrc: getAvatarUrl("鈴木花子"),
        avatarAlt: "鈴木花子",
        timestamp: new Date(now.getTime() - 45 * 60 * 1000),
      },
      {
        id: "2",
        text: "おはようございます！今日もいい天気ですね。",
        isSent: true,
        timestamp: new Date(now.getTime() - 40 * 60 * 1000),
      },
      {
        id: "3",
        text: "そうですね！散歩に行こうと思っています。",
        isSent: false,
        avatarSrc: getAvatarUrl("鈴木花子"),
        avatarAlt: "鈴木花子",
        timestamp: new Date(now.getTime() - 35 * 60 * 1000),
      },
      {
        id: "4",
        text: "それはいいですね。どこに行く予定ですか？",
        isSent: true,
        timestamp: new Date(now.getTime() - 30 * 60 * 1000),
      },
      {
        id: "5",
        text: "近くの公園に行きます。一緒に来ませんか？",
        isSent: false,
        avatarSrc: getAvatarUrl("鈴木花子"),
        avatarAlt: "鈴木花子",
        timestamp: new Date(now.getTime() - 25 * 60 * 1000),
      },
      {
        id: "6",
        text: "ありがとうございます！ぜひ一緒に行きましょう。",
        isSent: true,
        timestamp: new Date(now.getTime() - 20 * 60 * 1000),
      },
    ];
  }
  
  return [];
};

const getChatRoomName = (chatRoomId: string): string => {
  const names: Record<string, string> = {
    "1": "田中 太郎",
    "2": "鈴木花子",
  };
  return names[chatRoomId] || "チャットルーム";
};

export default function ChatRoomPage() {
  const params = useParams();
  const chatRoomId = params.id as string;
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      // simulate api calling delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      const mockMessages = getMockMessages(chatRoomId);
      setMessages(mockMessages);
      setIsLoading(false);
    };

    loadMessages();
  }, [chatRoomId]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isSent: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-foreground">
        <Icon name="loading" size={48} />
      </div>
    );
  }

  return (
    <ChatRoomTemplate
      name={getChatRoomName(chatRoomId)}
      messages={messages}
      onSendMessage={handleSendMessage}
    />
  );
}
