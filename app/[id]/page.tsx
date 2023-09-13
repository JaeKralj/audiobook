import Player from "@/components/Player";
import Waveform from "@/components/Player";
import Image from "next/image";

type Props = {};
export default function Book({}: Props) {
  return (
    <main className="flex min-h-screen flex-col bg-weird-white">
      <div className="max-w-4xl md:mx-auto px-8 py-3 md:min-w-[48rem]">
        <div className="flex items-center justify-between">
          {/* back btn */}
          <span className="w-[3.125rem] aspect-square bg-dark rounded-full inline-block flex items-center justify-center">
            <Image
              src="/assets/icons/arrow-prev.svg"
              width={20}
              height={20}
              alt="back button"
            />
          </span>
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
          <div className="text-weird-black text-base md:text-lg" />
        </section>
        <section id="book_player">
          {/* player */}
          <Player />
          {/* player controls */}
        </section>
      </div>
    </main>
  );
}
