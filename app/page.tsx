import BookCard from "@/components/BookCard";
import { BooksSlider } from "@/components/BooksSlider";
import CategoryTab from "@/components/CategoryTab";
import Notification from "@/components/Notification";
import UserAvatar from "@/components/UserAvatar";
import { db } from "@/libs/firebase";
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import Link from "next/link";

export default async function Home() {
  // const url = await getSpeechUrl("Hello David, How are you?");
  let categories: DocumentData = [];
  let books: DocumentData = [];
  const categoriesSnap = await getDocs(collection(db, "categories"));

  if (categoriesSnap.empty) {
    console.log("No matching documents.");
    return;
  } else {
    categoriesSnap.forEach((doc) => categories.push(doc.data()));

    const booksSnap = await getDocs(collection(db, "books"));
    !booksSnap.empty && booksSnap.forEach((book) => books.push(book.data()));
  }

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
            {categories.length > 0 &&
              categories.map((category: any, i: number) => (
                <>
                  <div
                    className="flex items-center justify-between mt-4 mb-2"
                    key={i}
                  >
                    <p className="text-dark font-medium text-lg md:text-xl capitalize">
                      {category.title}
                    </p>
                    <Link
                      href="/"
                      className="text-weird-red text-sm md:text-base"
                    >
                      See all
                    </Link>
                  </div>
                  <div className="book_slider">
                    {/* book cards */}

                    {books.length > 0 && (
                      <BooksSlider
                        slides={books
                          .filter((book: any) =>
                            book.categoryArr?.includes(category.title)
                          )
                          .map((book: any, i: number) => (
                            <BookCard
                              key={i}
                              imgUrl={book.imgURL}
                              author={book.author}
                              title={book.title}
                              id={book.id}
                            />
                          ))}
                      />
                    )}
                  </div>
                </>
              ))}
          </section>
        </section>
      </div>
    </main>
  );
}
