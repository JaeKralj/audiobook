import BookCard from "@/components/BookCard";
import CategoryTab from "@/components/CategoryTab";
import Notification from "@/components/Notification";
import UserAvatar from "@/components/UserAvatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-weird-white">
      <div className="max-w-4xl md:mx-auto px-8 py-3 md:min-w-[48rem]">
        <div className="flex justify-between items-center my-4">
          <UserAvatar />
          {/* notification */}
          <Notification />
        </div>
        <h1 className="text-2xl md:text-3xl font-medium text-weird-black flex-col flex my-5 mb-6">
          <span>
            Hey <span className="text-weird-red">User!</span>
          </span>
          What will you listen today?
        </h1>
        <section>
          <div className="flex items-center gap-3">
            {/* category tabs */}
            {Array(5)
              .fill({ title: "Title" })
              .map((category, index) => (
                <CategoryTab
                  key={index}
                  title={category.title}
                  active={index === 0}
                />
              ))}
          </div>
          <section id="category_slide">
            <div className="flex items-center justify-between mt-4 mb-2">
              <p className="text-dark font-medium text-lg md:text-xl">
                Category title
              </p>
              <Link href="/" className="text-weird-red text-sm md:text-base">
                See all
              </Link>
            </div>
            <div className="book_slider">
              {/* book cards */}
              <BookCard />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
