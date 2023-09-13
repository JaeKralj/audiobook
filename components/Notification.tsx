import Image from "next/image";

type Props = {};
export default function Notification({}: Props) {
  return (
    <span className="w-[3.125rem] aspect-square bg-dark rounded-full inline-block flex items-center justify-center">
      <Image
        src="/assets/icons/bell.svg"
        width={20}
        height={20}
        alt="notification icon"
        sizes="(min-width: 768px) 1.5rem 1.5rem"
      />
    </span>
  );
}
