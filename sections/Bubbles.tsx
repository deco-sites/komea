import { useScript } from "@deco/deco/hooks";
import { useId } from "../sdk/useId.ts";

const onLoad = (rootId: string, bubblesProps: Bubble[]) => {
  const parent = document.getElementById(rootId) as HTMLElement;
  const bubbles = parent.querySelectorAll('.bubble') as NodeListOf<HTMLElement>;
  const windowHeight = globalThis.innerHeight;

  const handleScroll = () => {
    const parentRect = parent.getBoundingClientRect();
    const parentTop = parentRect.top;

    for (let i = 0; i < bubbles.length; i++) {
      console
      bubbles[i].style.transform = `translateY(${(parentTop + (bubblesProps[i].verticalPosition || 0)) * 0.05}vh) scale(${1 - (parentTop * 0.001)})`;
    }
  };

  globalThis.addEventListener('scroll', handleScroll);

  return () => {
    globalThis.removeEventListener('scroll', handleScroll);
  };
}

interface Bubble {
  size?: string;
  horizontalPosition?: number;
  verticalPosition?: number;
}

interface Props {
  bubbles?: Bubble[];
}

export default function Bubbles({ bubbles = [] }: Props) {
  const rootId = useId();
  return <div id={rootId} class="relative pointer-events-none">
    <script
      type="module"
      dangerouslySetInnerHTML={{ __html: useScript(onLoad, rootId, bubbles) }}
    />
    <div class="absolute h-screen w-full top-0 left-0 -z-30">
      <div class="w-full h-full relative">
        {bubbles.map(bubble => (
          <div class="bubble absolute transition-transform duration-75" style={{ top: bubble.verticalPosition + 'vh', left: bubble.horizontalPosition + 'vw' }}>
            <div
              class="bg-[#eefc58] rounded-full animate-float"
              style={{ height: bubble.size || '300px', width: bubble.size || '300px' }} />
          </div>
        ))}
      </div>
    </div>
  </div>
}