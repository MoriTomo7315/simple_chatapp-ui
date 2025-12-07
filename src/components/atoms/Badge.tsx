interface BadgeProps {
  count: number;
}

export const Badge = ({ count }: BadgeProps) => {
  if (count === 0) return null;

  return (
    <div className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-orange-500 text-white text-xs font-medium">
      {count > 99 ? "99+" : count}
    </div>
  );
};

