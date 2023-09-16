import Image from "next/image";

type Props = {};
export default function UserAvatar({}: Props) {
  return (
    <div className="rounded-full">
      {/* avatar */}
      <Image
        src="/assets/images/avatar.jpeg"
        width={50}
        height={50}
        alt="avatar for username"
        className="rounded-full aspect-square md:w-[4.375rem]] w-[3.125rem]"
        sizes="(min-width: 768px) 4.375rem 4.375rem"
      />
    </div>
  );
}
