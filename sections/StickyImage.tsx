import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IImage {
  src?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
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
}

export interface BackgroundMedia {
  /** @format color-input */
  backgroundColor?: string;
}

export interface Fold {
  icon?: IImage;
  title?: RichText;
  titleTextProps?: TextProps;
  text?: RichText;
  textProps?: TextProps;
  textPosition?: 'Left' | 'Right';
}

export interface Props {
  image?: IImage;
  folds?: Fold[];
  backgroundMedia?: BackgroundMedia;
  sectionProps?: SectionProps;
}

export default function StickyImage({ image, folds, sectionProps, backgroundMedia }: Props) {
  return <div class="flex justify-center gap-20" style={{ ...sectionProps, background: backgroundMedia?.backgroundColor }}>
    <div class="w-[312px]">
      {folds?.map(fold => (
        <div class="h-screen flex flex-col justify-center">
          {fold.textPosition == "Left" && <div>
            <div class="flex flex-col gap-3">
              {fold.icon?.src && <Image src={fold.icon.src} alt={fold.icon.alt || 'icon'} width={fold.icon.width || 60} height={fold.icon.height || 60} />}
              <div dangerouslySetInnerHTML={{ __html: fold.title || "" }} style={{ ...fold.titleTextProps }} />
              <div dangerouslySetInnerHTML={{ __html: fold.text || "" }} style={{ ...fold.textProps }} />
            </div>
          </div>}
        </div>
      ))}
    </div>

    <div>
      {image?.src && <div class="sticky h-screen top-0 flex items-center"><Image
        src={image.src}
        alt={image.alt || "Sticky image"}
        width={image.width || 336}
        height={image.height || 690}
      /></div>}
    </div>

    <div class="w-[312px]">
      {folds?.map(fold => (
        <div class="h-screen flex flex-col justify-center">
          {fold.textPosition == "Right" && <div>
            <div class="flex flex-col gap-3">
              {fold.icon?.src && <Image src={fold.icon.src} alt={fold.icon.alt || 'icon'} width={fold.icon.width || 60} height={fold.icon.height || 60} />}
              <div dangerouslySetInnerHTML={{ __html: fold.title || "" }} style={{ ...fold.titleTextProps }} />
              <div dangerouslySetInnerHTML={{ __html: fold.text || "" }} style={{ ...fold.textProps }} />
            </div>
          </div>}
        </div>
      ))}
    </div>
  </div>
}