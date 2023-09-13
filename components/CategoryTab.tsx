import { cn } from "@/utils";

type Props = {
  title: string;
  active?: boolean;
};
export default function CategoryTab({ title, active }: Props) {
  return (
    <div
      className={cn(
        "bg-weird-cream px-5 py-2 rounded-3xl text-dark text-sm md:text-base",
        active && "bg-dark text-weird-white"
      )}
    >
      {title}
    </div>
  );
}
