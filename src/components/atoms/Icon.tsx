import { 
  Edit, 
  MessageSquare, 
  Plus, 
  Search, 
  User, 
  ArrowLeft, 
  Send, 
  Loader2 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  name: "edit" | "chat" | "plus" | "search" | "profile" | "arrow-left" | "send" | "loading";
  className?: string;
  size?: number;
}

export const Icon = ({ name, className = "", size = 24 }: IconProps) => {
  const iconProps = {
    size,
    className: cn(className),
  };

  const icons = {
    edit: <Edit {...iconProps} />,
    chat: <MessageSquare {...iconProps} />,
    plus: <Plus {...iconProps} />,
    search: <Search {...iconProps} />,
    profile: <User {...iconProps} />,
    "arrow-left": <ArrowLeft {...iconProps} />,
    send: <Send {...iconProps} />,
    loading: <Loader2 {...iconProps} className={cn(className, "animate-spin")} />,
  };

  return icons[name];
};

