import Image from "next/image";
type Props = {};
export default function BookCard({}: Props) {
  return (
    <div className="group mb-2 mr-5 cursor-pointer rounded-3xl shadow-lg max-w-[280px] md:max-w-xs">
      <div>
        <Image
          src="/assets/images/dummy_book.jpeg"
          width={280}
          height={400}
          sizes="(min-width: 48rem) 320px 320px"
          alt="book cover for title"
          className="md:w-[320px] rounded-3xl h-[380px]"
        />
      </div>
      <div className="p-2 flex flex-col gap-2 mb-3">
        <h2 className="text-dark text-base md:text-lg font-medium">
          Book Title
        </h2>
        <p className="text-dark text-xs md:text-base">Author</p>
      </div>
    </div>
  );
}
