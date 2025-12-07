import { Icon } from "../atoms/Icon";

interface HeaderProps {
  title: string;
  onEditClick?: () => void;
}

export const Header = ({ title, onEditClick }: HeaderProps) => {
  return (
    <header className="flex items-center justify-center relative px-4 py-4 border-b border-gray-700">
      <h1 className="text-white text-lg font-medium">{title}</h1>
      {onEditClick && (
        <button
          onClick={onEditClick}
          className="absolute right-4 p-2 text-orange-500 hover:text-orange-600 transition-colors"
          aria-label="編集"
        >
          <Icon name="edit" size={20} />
        </button>
      )}
    </header>
  );
};

