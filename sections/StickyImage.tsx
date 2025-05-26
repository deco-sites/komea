import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IImage {
  src?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface TextProps {
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
  sectionProps?: SectionProps;
}

export default function StickyImage({ image, folds, sectionProps }: Props) {
  return <div class="flex justify-center gap-20 py-20" style={{ ...sectionProps }}>
    <div class="w-[312px]">
      {folds?.map(fold => (
        <div class="h-screen flex flex-col justify-center bg-purple-500">
          {fold.textPosition == "Left" && <div>
            <div dangerouslySetInnerHTML={{ __html: fold.title || "" }} />
          </div>}
        </div>
      ))}
    </div>

    <div>
      {image?.src && <Image
        src={image.src}
        alt={image.alt || "Sticky image"}
        width={image.width || 336}
        height={image.height || 690}
        class="sticky top-20"
      />}
    </div>

    <div class="w-[312px]">
      {folds?.map(fold => (
        <div class="h-screen flex flex-col justify-center bg-green-400">
          {fold.textPosition == "Right" && <div>
            <div dangerouslySetInnerHTML={{ __html: fold.title || "" }} />
          </div>}
        </div>
      ))}
    </div>
  </div>
}