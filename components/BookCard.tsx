"use client";
import Image from "next/image";
import Link from "next/link";
type Props = {
  imgUrl: string;
  title: string;
  author: string;
  id: string;
};
export default function BookCard({ imgUrl, title, author, id }: Props) {
  return (
    <Link href={`/${id}`}>
      <div className="group mb-2 mr-5 cursor-pointer rounded-3xl shadow-lg max-w-[280px] md:max-w-xs">
        <div className='h-[380px] md:w-[320px] w-[282px] overflow-y-hidden'>
          <Image
            src={imgUrl}
            width={282}
            height={417.5}
            sizes="(min-width: 48rem) 322.28px 477.14px"
            alt="book cover for title"
            className="md:w-[322.28px] rounded-3xl"
            priority
          />
        </div>
        <div className="p-2 flex flex-col gap-2 mb-3">
          <h2 className="text-dark text-base md:text-lg font-medium capitalize">
            {title}
          </h2>
          <p className="text-dark text-xs md:text-base capitalize">{author}</p>
        </div>
      </div>
    </Link>
  );
}
