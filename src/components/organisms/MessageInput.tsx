"use client";

import { useState, FormEvent } from "react";
import { Icon } from "../atoms/Icon";

interface MessageInputProps {
  onSend?: (message: string) => void;
}

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      onSend?.(message.trim());
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 py-4 bg-black"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力"
        className="flex-1 bg-[#2B2E33] text-white rounded-2xl px-4 py-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7B29] focus:ring-offset-2 focus:ring-offset-black"
      />
      <button
        type="submit"
        disabled={!message.trim()}
        className="w-12 h-12 rounded-full bg-[#FF7B29] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        aria-label="送信"
      >
        <Icon name="send" size={20} />
      </button>
    </form>
  );
};
