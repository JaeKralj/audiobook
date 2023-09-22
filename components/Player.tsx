"use client";
import { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import PlayerControls from "./PlayerControls";

type Props = {
  url: String | undefined;
};

type State = {
  playing: boolean;
  loading: boolean;
};

export default class Player extends Component<Props, State> {
  waveform: WaveSurfer | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      playing: false,
      loading: false,
    };
  }

  componentDidMount() {
    const track = document.querySelector("#track");
    // @ts-ignore
    const url = this.props.url;
    const waveform: WaveSurfer = WaveSurfer.create({
      barWidth: 2,
      barGap: 2,
      cursorWidth: 1,
      container: "#waveform",
      height: 80,
      progressColor: "#E06065",
      waveColor: "#191815",
      cursorColor: "transparent",
    });
    this.waveform = waveform;
    // @ts-ignore
    waveform.load(url);

    waveform.on("finish", () => {
      this.setState((prevState) => ({ ...prevState, playing: false }));
    });
    waveform.on("loading", () => {
      this.setState((prevState) => ({ ...prevState, loading: true }));
    });
    waveform.on("ready", () => {
      this.setState((prevState) => ({ ...prevState, loading: false }));
    });
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform?.playPause();
  };

  handleSkip = (seconds: number) => {
    this.waveform?.skip(seconds);
  };

  render() {
    const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

    return (
      <>
        <div className="flex flex-col items-center justify-center h-[6.25rem] bg-transparent bg-blue-500 max-w-lg mx-auto">
          <div className="w-full h-[5.625rem]" id="waveform"></div>
          <ScaleLoader
            loading={this.state.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        {/* play, pause, skip 10seconds ahead / behind, state */}
        <PlayerControls
          playPause={this.handlePlay}
          skip={this.handleSkip}
          playerState={this.state.playing}
        />
      </>
    );
  }
}
