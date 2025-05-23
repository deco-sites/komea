import type { ImageWidget, VideoWidget, HTMLWidget, RichText } from "apps/admin/widgets.ts";
import AnimateOnShow from "../components/ui/AnimateOnShow.tsx";
import Image from "apps/website/components/Image.tsx";
import CampaignTimer from "../components/CampaignTimer.tsx";
import CTA, { Props as CTAProps } from "site/components/ui/CTA.tsx";

/** @title {{text}} {{underlineText}} */
export interface CTA {
    href: string;
    text?: string;
    underlineText?: string;
    /** @format color-input */
    backgroundColor?: string;
    /** @format color-input */
    textColor?: string;
    /** @format color-input */
    borderColor?: string;
    ctaStyle: "button" | "link";
    showIcon?: boolean;
}

export interface CampaignTimer {
    expiredText?: RichText;
    expiredTextProps?: TextProps;
    /**
     * @title Expires at date
     * @format datetime
     */
    expiresAt?: string;
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
    /** @format color-input */
    labelsColor?: string;
    /** @format color-input */
    numbersColor?: string;
}

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

export interface Props {
    hideSection?: boolean;
    title?: RichText;
    titleTextProps?: TextProps;
    text?: RichText;
    textProps?: TextProps;
    campaignTimer?: CampaignTimer;
    cta?: CTAProps[];
    image?: IImage;
    video?: VideoWidget;
    use?: "video" | "image";
    mediaPosition?: "aside" | "bellow";
    invertPlacement?: boolean;
    backgroundImage?: IImage;
}

export default function CampaignTimerHero({ hideSection, campaignTimer, title, titleTextProps, text, textProps, cta = [], image, use, video, mediaPosition, backgroundImage, invertPlacement = false }: Props) {
    if (hideSection) return <></>
    return <div class={`relative min-h-[550px] lg:min-h-screen flex ${mediaPosition == "bellow" && 'flex-col items-center'} justify-center flex-wrap py-5 gap-y-8 px-7 ${invertPlacement && 'flex-row-reverse'}`}>
        <div class="max-w-[1280px] flex flex-col justify-center">
            {title && <AnimateOnShow animation="animate-pop-up">
                <div class="text-2xl lg:text-5xl font-semibold text-center leading-[120%] w-full" dangerouslySetInnerHTML={{ __html: title }} style={{ ...titleTextProps }} />
            </AnimateOnShow>}
            {text && <AnimateOnShow animation="animate-fade-up">
                <div class="text-base text-center lg:text-left lg:text-sm font-normal mt-11 lg:mt-[60px] leading-normal" dangerouslySetInnerHTML={{ __html: text }} style={{ ...textProps }} />
            </AnimateOnShow>}
            <CampaignTimer {...campaignTimer} labelsColor={campaignTimer?.labelsColor} numbersColor={campaignTimer?.numbersColor} />
            <AnimateOnShow divClass="flex flex-wrap items-center justify-center lg:justify-start gap-7 mt-7" animation="animate-fade-up" delay={300}>
                {cta.map((button) => {
                    <CTA {...button} />
                })}
            </AnimateOnShow>
        </div>

        {use && <AnimateOnShow animation={mediaPosition == "bellow" ? "animate-fade-down" : "animate-fade-left"} divClass="flex items-center">
            {use == "image" && image?.src && <Image
                src={image.src}
                alt={image.alt || "figure"}
                width={image.width || 607}
                height={image.height || 435}
                class="object-contain"
            />}
            {use == 'video' && video && <video
                width="1280"
                height="720"
                autoPlay
                playsInline
                muted
                loading="lazy"
                loop
                class="object-contain"
            >
                <source src={video} type="video/mp4" />
            </video>}
        </AnimateOnShow>}

        {backgroundImage?.src && <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt || "background image"}
            width={backgroundImage.width || 1440}
            height={backgroundImage.height || 770}
            class="absolute top-0 left-0 h-full w-full -z-50 object-cover"
        />}
    </div>
}