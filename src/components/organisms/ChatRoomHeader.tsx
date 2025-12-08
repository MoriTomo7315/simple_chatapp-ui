"use client";

import { Icon } from "../atoms/Icon";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ChatRoomHeaderProps {
  name: string;
}

export const ChatRoomHeader = ({ name }: ChatRoomHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center gap-4 px-4 py-4">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          aria-label="戻る"
        >
          <Icon name="arrow-left" size={24} />
        </Button>
        <h1 className="text-foreground text-lg font-normal flex-1">{name}</h1>
      </header>
      <Separator />
    </>
  );
};
