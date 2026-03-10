interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatItem({
  value,
  label,
  className = "",
}: StatItemProps) {
  return (
    <div className={className}>
      <p className="text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
