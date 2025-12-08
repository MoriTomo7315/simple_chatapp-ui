"use client";

import { ChatRoomHeader } from "../organisms/ChatRoomHeader";
import { MessageList } from "../organisms/MessageList";
import { MessageInput } from "../organisms/MessageInput";
import type { Message } from "../molecules/MessageItem";

interface ChatRoomTemplateProps {
  name: string;
  messages: Message[];
  onSendMessage?: (message: string) => void;
}

export const ChatRoomTemplate = ({
  name,
  messages,
  onSendMessage,
}: ChatRoomTemplateProps) => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <ChatRoomHeader name={name} />
      <MessageList messages={messages} />
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};
