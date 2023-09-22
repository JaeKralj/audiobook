import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  playPause: () => void;
  skip: (seconds: number) => void;
  playerState: boolean;
};
export default function PlayerControls({
  playPause,
  skip,
  playerState,
}: Props) {
  return (
    <div className="px-5 py-2 bg-dark max-w-max flex items-center gap-3 mx-auto rounded-3xl mt-4">
      <div aria-hidden>
        <Image
          src="/assets/icons/music-library.svg"
          width={24}
          height={24}
          alt="rewind 10 seconds"
        />
      </div>
      <button
        type="button"
        title="rewind 10 seconds"
        aria-label="rewind-10-seconds"
        onClick={() => skip(-10)}
      >
        <Image
          src="/assets/icons/backward-10-seconds.svg"
          width={24}
          height={24}
          alt="rewind 10 seconds"
        />
        <span className="hidden">rewind 10 seconds</span>
      </button>
      <button
        type="button"
        title="toggle play/pause"
        aria-label="toggle-play-pause"
        className={cn(
          "p-2 rounded-full transition-all ease-linear duration-300",
          playerState ? "bg-weird-white" : "bg-weird-red"
        )}
        onClick={playPause}
      >
        <Image
          src={`/assets/icons/${playerState ? "pause" : "play"}.svg`}
          width={24}
          height={24}
          alt="toggle play/pause"
        />
        <span className="hidden">toggle play/pause</span>
      </button>
      <button
        type="button"
        title="forward 10 seconds"
        aria-label="forward-10-seconds"
      >
        <Image
          src="/assets/icons/forward-10-seconds.svg"
          width={24}
          height={24}
          alt="forward 10 seconds"
          onClick={() => skip(10)}
        />
        <span className="hidden">forward 10 seconds</span>
      </button>
      <div aria-hidden>
        <Image
          src="/assets/icons/repeat-one.svg"
          width={24}
          height={24}
          alt="repeat one"
        />
      </div>
    </div>
  );
}
