import { RichText, ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "../sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";

const onLoad = (rootId: string, lines: Line[]) => {
  const parent = document.getElementById(rootId) as HTMLElement;
  const sticky = parent.querySelector('.sticky') as HTMLElement;
  const lineElements: NodeListOf<HTMLElement> = parent.querySelectorAll(".line");

  const windowHeight = globalThis.innerHeight;

  let progressPercent = 0;

  const handleScroll = () => {
    const parentRect = parent.getBoundingClientRect();
    const stickyRect = sticky.getBoundingClientRect();

    const distanceFromParentTop = stickyRect.top - parentRect.top;
    const parentHeight = parentRect.height - stickyRect.height;

    progressPercent = (distanceFromParentTop / parentHeight) * 100;

    lineElements.forEach((line, index) => {
      line.style.background = `linear-gradient(to right, ${lines[index].color} ${(distanceFromParentTop * 0.1) - 10 - (index * windowHeight * 0.1)}%, transparent ${(distanceFromParentTop * 0.1) - (index * windowHeight * 0.1)}%)`
    })
  };

  globalThis.addEventListener('scroll', handleScroll);

  return () => {
    globalThis.removeEventListener('scroll', handleScroll);
  };
}

export interface BackgroundMedia {
  /** @format color-input */
  backgroundColor?: string;
}

export interface TextProps {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  marginTop?: string;
}

/** @title {{text}} */
export interface Line {
  text?: RichText;
  /** @format color-input */
  color?: string;
  textProps?: TextProps;
}

export interface Props {
  lines?: Line[];
  backgroundMedia?: BackgroundMedia
}

export default function RevealingText({ lines = [], backgroundMedia }: Props) {
  const rootId = useId();
  return <div id={rootId} class="relative min-h-[240vh]" style={{ height: `${lines.length * (180 - lines.length * 10)}vh` }} >
    <script
      type="module"
      dangerouslySetInnerHTML={{ __html: useScript(onLoad, rootId, lines) }}
    />
    <div class="h-[100vh] bg-blue-400 sticky top-0 flex flex-col items-center justify-center" style={{ background: backgroundMedia?.backgroundColor }}>
      {lines.map(line => (
        <div
          dangerouslySetInnerHTML={{ __html: line.text || "" }}
          class="!text-transparent !bg-clip-text line leading-none"
          style={{ ...line.textProps, background: `linear-gradient(to right, ${line.color} 100%, transparent 110%)` }} />
      ))}
    </div>
  </div>
}