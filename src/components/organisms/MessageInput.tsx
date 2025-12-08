"use client";

import { useState, FormEvent } from "react";
import { Icon } from "../atoms/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      className="flex items-center gap-2 px-4 py-4"
    >
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力"
        className={cn(
          "flex-1 rounded-2xl px-4 py-3 text-base bg-secondary border-secondary"
        )}
      />
      <Button
        type="submit"
        disabled={!message.trim()}
        size="icon"
        className={cn(
          "w-12 h-12 rounded-full",
          "bg-primary hover:bg-primary/90"
        )}
        aria-label="送信"
      >
        <Icon name="send" size={20} />
      </Button>
    </form>
  );
};
