import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-weird-white">
      <div className="max-w-4xl md:mx-auto p-8 md:min-w-[48rem]">
        <div className="flex justify-between items-center my-4">
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
          <div>
            {/* notification */}
            <span className="w-[3.125rem] aspect-square bg-dark rounded-full inline-block flex items-center justify-center">
              <Image
                src="/assets/icons/bell.svg"
                width={20}
                height={20}
                alt="notification icon"
                sizes="(min-width: 768px) 1.5rem 1.5rem"
              />
            </span>
          </div>
        </div>
        <h1>
          <span>
            Hey <span>User</span>
          </span>
          What will you listen today?
        </h1>
        <section>
          <div>{/* category tabs */}</div>
          <section id="category_slide">
            <div>
              <p>Category title</p>
              <Link href="/">See all</Link>
            </div>
            <div className="book_slider">{/* book cards */}</div>
          </section>
        </section>
      </div>
    </main>
  );
}
