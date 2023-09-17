import Player from "@/components/Player";
import Image from "next/image";
import { DocumentData, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { getSpeechUrl } from "@/utils/polly_synthesize";
import Link from "next/link";

type Props = {
  params: { id: string };
};
export default async function Book({ params }: Props) {
  let book: DocumentData = {};
  let audioUrl: String | undefined = "";
  const bookSnap = await getDoc(doc(db, "books", params.id));
  if (bookSnap.exists()) {
    book = bookSnap.data();
    const audio = book.audioUrl
      ? book.audioUrl
      : await getSpeechUrl(book.contentSSML);
    if (!book.audioUrl) {
      const audio = await getSpeechUrl(book.contentSSML);
      await updateDoc(doc(db, "books", params.id), {
        audioUrl: audio,
      });
    } else {
      audioUrl = audio;
    }
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return (
    <main className="flex min-h-screen flex-col bg-weird-white pb-3">
      <div className="max-w-4xl md:mx-auto px-8 py-3 md:min-w-[48rem]">
        <div className="flex items-center justify-between">
          {/* back btn */}
          <Link
            className="w-[3.125rem] aspect-square bg-dark rounded-full inline-block flex items-center justify-center"
            href={`/`}
          >
            <Image
              src="/assets/icons/arrow-prev.svg"
              width={20}
              height={20}
              alt="back button"
            />
          </Link>
          <p className="text-dark text-base md:text-lg font-medium capitalize">
            title
          </p>
          {/* ellipsis icon */}
          <span className="w-[3.125rem] aspect-square bg-dark rounded-full inline-block flex items-center justify-center">
            <Image
              src="/assets/icons/ellipsis.svg"
              width={20}
              height={20}
              alt="back button"
            />
          </span>
        </div>
        <section id="book_text">
          {/*   ..... content here*/}
          <div
            className="text-weird-black text-base md:text-lg my-3"
            dangerouslySetInnerHTML={{ __html: book && book.contentText }}
          />
        </section>
        <section id="book_player">
          {/* player */}
          <Player url={audioUrl} />
        </section>
      </div>
    </main>
  );
}
