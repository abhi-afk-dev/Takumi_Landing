import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-black z-[1000] transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}
