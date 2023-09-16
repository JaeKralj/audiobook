// import { SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import pollyClient from "@/libs/PollyClient";

export const getSpeechUrl = async (speechInput: string) => {
  const params = {
    OutputFormat: "mp3",
    Text: speechInput,
    TextType: "ssml",
    VoiceId: "Joanna",
    SampleRate: "22050",
  };

  try {
    const url = await getSynthesizeSpeechUrl({
      client: pollyClient,
      params: params,
    });
    console.log(url);
    return url;
  } catch (err) {
    console.log("Error putting object", err);
  }
};
