import type { ImageWidget, VideoWidget, HTMLWidget, RichText } from "apps/admin/widgets.ts";
import AnimateOnShow from "../components/ui/AnimateOnShow.tsx";
import Image from "apps/website/components/Image.tsx";
import { useScript } from "@deco/deco/hooks";
import CTA, { Props as CTAProps } from "site/components/ui/CTA.tsx";

const onClick = (embed = false) => {
  console.log("teste");
  const parent = event!.currentTarget as HTMLElement;
  const overlayDiv = parent.querySelector(".overlayDiv") as HTMLElement || undefined;
  const thumbnail = parent.querySelector(".videoThumbnail") as HTMLElement || undefined;
  if (embed) {
    const embedVideo = parent.querySelector("iframe") as HTMLIFrameElement;
    embedVideo.src += "&autoplay=1";
    embedVideo.classList.remove("hidden");
  } else {
    const video = parent.querySelector("video") as HTMLVideoElement;
    video.classList.remove("hidden");
    video.muted = false;
    video.currentTime = 0;
    video.play();
    video.controls = true;
  }
  thumbnail.classList.add("hidden");
  overlayDiv.classList.add("hidden");
};

export interface IImage {
  src?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface BackgroundMedia {
  /** @format color-input */
  color?: string;
  image?: IImage;
  video?: VideoWidget;
  use?: "image" | "video";
  bleeding?: number;
  lcp?: boolean;
}

export interface TextProps {
  /** @format color-input */
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
}

export interface SectionProps {
  paddingTop?: string;
  paddingBottom?: string;
  marginTop?: string;
  marginBottom?: string;
}

export interface IVideo {
  src?: VideoWidget;
  width?: string;
  height?: string;
  use?: "video" | "embed";
  playButton?: IImage;
  thumbnailImage?: IImage;
}

export interface Props {
  title?: RichText;
  titleTextProps?: TextProps;
  video?: IVideo;
  bottomImage?: IImage;
  bottomText?: RichText;
  bottomTextProps?: TextProps;
  backgroundMedia?: BackgroundMedia;
  sectionProps?: SectionProps;
}

export default function ({ title, titleTextProps, video, sectionProps, bottomImage, bottomText, bottomTextProps, backgroundMedia }: Props) {
  return <div style={{ ...sectionProps}} class="relative">
    <div class="max-w-[1280px] mx-auto flex flex-col items-center">
      <div dangerouslySetInnerHTML={{ __html: title || "" }} class="w-full" style={{ ...titleTextProps }} />

      <div class="relative rounded-[33px] overflow-hidden mt-[60px] cursor-pointer flex justify-center group" hx-on:click={useScript(onClick, video?.use == "embed")}
        style={{ width: video?.width, height: video?.height}}>
        {video?.use == "video" && video?.src && <video width={"100%"} height={"100%"} autoPlay playsInline muted loading="lazy" loop
          class="object-cover mx-auto hidden"
          style={{ width: video.width || "1280px", height: video.height || "720px" }}>
          <source src={video.src} type="video/mp4" />
        </video>}
        {video?.use == "embed" && <iframe
          width={"100%"}
          height={"100%"}
          src={video?.src}
          frameborder="0"
          class="hidden"
          style={{ width: video.width || "1280px", height: video.height || "720px" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        />}

        {video?.thumbnailImage?.src && <Image 
          src={video.thumbnailImage.src}
          alt={video.thumbnailImage.alt || "Video thumbnail"}
          width={video.thumbnailImage.width || 972}
          height={video.thumbnailImage.height || 546}
          class="z-10 absolute top-0 left-0 h-full w-full object-cover videoThumbnail"
        />}

        {video?.playButton?.src && <div class="absolute z-20 w-full h-full top-0 left-0 flex items-center justify-center overlayDiv">
          <Image
            src={video.playButton.src}
            alt={video.playButton.alt || "Play Button"}
            width={video.playButton.width || 130}
            height={video.playButton.height || 130}
            class="object-contain group-hover:scale-110 transition-transform"
          />
        </div>}
      </div>

      {bottomImage?.src && <Image 
        src={bottomImage.src}
        width={bottomImage.width || 260}
        height={bottomImage.height || 88}
        alt={bottomImage.alt || "Bottom image"}
        class="mt-[60px]"
      />}

      <div dangerouslySetInnerHTML={{ __html: bottomText || "" }} class="w-full mt-[60px]" style={{ ...bottomTextProps }} />
    </div>

    {backgroundMedia?.color && <div style={{ background: backgroundMedia.color }} class="absolute top-0 left-0 h-full w-full -z-50" />}
    {backgroundMedia?.use == "image" && backgroundMedia.image?.src && <Image
      src={backgroundMedia.image.src}
      alt={backgroundMedia.image.alt || "background image"}
      width={backgroundMedia.image.width || 1277}
      height={backgroundMedia.image.height || 630}
      class="absolute -z-40 top-0 left-0 h-full w-full object-cover"
      style={{height: backgroundMedia.bleeding && `${backgroundMedia.bleeding + 100}%`}}
      loading={backgroundMedia.lcp ? "eager" : "lazy"}
    />}
    {backgroundMedia?.use == "video" && backgroundMedia.video && <video width={1280} height={720} autoPlay playsInline muted loading={backgroundMedia.lcp ? "eager" : "lazy"} loop
      class="object-cover absolute -z-40 top-0 left-0 h-full w-full"
      style={{height: backgroundMedia.bleeding && `${backgroundMedia.bleeding + 100}%`}}>
      <source src={backgroundMedia.video} type="video/mp4" />
    </video>}
  </div>
}