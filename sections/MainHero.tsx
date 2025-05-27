import type { ImageWidget, HTMLWidget, VideoWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useId } from "site/sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";
import HubspotForm, { Props as HubspotFormProps } from "../components/HubspotForm.tsx";

const openModal = (modalId: string) => {
    event!.preventDefault();
    const modal = document.getElementById(modalId) as HTMLElement;
    modal?.classList.remove("hidden");
};
const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLElement;
    modal?.classList.add("hidden");
};

export interface TextProps {
    fontFamily?: string;
    /** @format color-input */
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
  }

export interface BulletPoints {
    show?: boolean;
    title?: RichText;
    titleTextProps?: TextProps;
    bulletPointsIcon?: IImage;
    items?: string[];
    textProps?: TextProps;
    /** @format color-input */
    backgroundColor?: string;
}

export interface IImage {
    src?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
}

export interface IVideo {
    src?: VideoWidget;
    width?: string;
    height?: string;
}

export interface Media {
    image?: IImage;
    video?: IVideo;
    use?: "image" | "video" | "embed";
}

/** @title {{text}} */
export interface CTA {
    href?: string;
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

export interface Modal {
    title: string;
    /** @format color-input */
    titleColor?: string;
    text?: string;
    /** @format color-input */
    textColor?: string;
    media?: Media;
    cta?: CTA[];
}
export interface Props {
    hideSection?: boolean;
    id?: string;
    captionAbove?: RichText;
    captionAboveTextProps?: TextProps;
    title: RichText;
    titleLetterSpacing?: string;
    /** @format color-input */
    titleColor?: string;
    titleFont?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
    titleLineHeight?: string;
    caption?: RichText;
    captionLetterSpacing?: string;
    /** @format color-input */
    captionColor?: string;
    captionFontSize?: string;
    captionFont?: string;
    captionFontWeight?: string;
    captionLineHeight?: string;
    inputLabel?: string;
    /** @format color-input */
    inputLabelColor?: string;
    /** @format color-input */
    inputLabelBackgroundColor?: string;
    inputLabelWidth?: 'min' | 'full';
    image?: IImage;
    video?: VideoWidget;
    use?: "image" | "video";
    mediaPosition?: "left" | "center" | "right";
    htmlContent?: HTMLWidget;
    /** @format color-input */
    backgroundColor?: string;
    backgroundImage?: IImage;
    backgroundAnimation?: boolean;
    backgroundVideo?: VideoWidget;
    useBackground?: "image" | "video";
    lcp?: boolean;
    hubspotForm?: HubspotFormProps;
    bulletPoints?: BulletPoints;
    modal?: Modal;
    sectionMinHeight?: string;
    paddingTop?: string;
    paddingBottom?: string;
}

export function HeroMedia({ media }: { media?: Media }) {
    return <div>
        {media?.use == "image" && media.image?.src && <Image
            src={media.image.src}
            alt={media.image.alt || "image"}
            width={media.image.width || 752}
            height={media.image.height || 726}
            class="object-contain"
        />}
        {media?.use == "video" && media.video?.src && <video width={media.video.width || 1280} height={media.video.height || 720} autoPlay playsInline muted loading="lazy" loop
            class="object-cover"
            style={{ width: media.video.width + "px" || "1280px", height: media.video.height + "px" || "720px" }}>
            <source src={media.video.src} type="video/mp4" />
        </video>}
        {media?.use == "embed" && <iframe
            width={"100%"}
            height={"100%"}
            src={media.video?.src}
            frameborder="0"
            style={{ width: media.video?.width || 854, height: media.video?.height || 480 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen gyroscope; picture-in-picture"
        />}
    </div>
}

export default function MainHero({ hideSection, mediaPosition = "right", captionColor, captionFont, captionFontWeight, captionLetterSpacing, captionLineHeight, id, title, titleFontSize, titleFontWeight, titleLineHeight, caption = "", paddingBottom, paddingTop,titleLetterSpacing, backgroundAnimation, inputLabel, captionFontSize, backgroundColor, backgroundVideo, lcp, useBackground = 'image', titleFont, sectionMinHeight, backgroundImage, inputLabelWidth = 'min', image, hubspotForm, htmlContent, titleColor, bulletPoints, inputLabelColor, inputLabelBackgroundColor, video, use, modal, captionAbove, captionAboveTextProps, }: Props) {
    if (hideSection) return <></>
    const randomId = useId();
    const modalId = randomId + "modal";
    const hubspostFormId = randomId + "hubspotForm";
    const position = {
        "left": "items-start",
        "center": "items-center",
        "right": "items-end"
    }
    return <div class="relative overflow-hidden">
        <div id={id} class={`flex flex-wrap gap-y-7 lg:flex-nowrap min-h-96 pt-[92px] lg:pt-40 overflow-hidden ${!bulletPoints?.show && 'pb-12'}`} style={{minHeight: sectionMinHeight, paddingBottom, paddingTop}}>
            
            {useBackground == "image" && backgroundImage?.src && <Image width={backgroundImage.width || 1440} height={backgroundImage.height || 926} 
                class={`w-full h-full absolute object-cover top-0 left-0 -z-40 object-right-top ${backgroundAnimation && 'animate-background-animation'}` }
                alt={backgroundImage?.alt || "background image"} src={backgroundImage.src} loading={lcp ? "eager" : "lazy"} preload={true}
                style={{animationDuration: '7s'}}
            />}
            
            {useBackground == "video" && backgroundVideo && <video width="1280" height="720" autoPlay playsInline muted loading={lcp ? "eager" : "lazy"} loop class="absolute w-full h-full object-cover top-0 left-0 -z-40 ">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>}
            
            {backgroundColor && <div 
                class={`-z-50 absolute top-0 left-0 w-full h-full ${backgroundAnimation && 'animate-background-animation'}`} 
                style={{background: backgroundColor, animationDuration: '7s'}}/>}
            
            <div class={`lg:pb-20 flex-grow flex justify-center items-center w-full ${(use == "image" || use == "video") ? "xl:w-1/2 xl:justify-end" : "justify-center"} px-6 md:px-0 border-base`}>
                <script dangerouslySetInnerHTML={{ __html: useScript(openModal, modalId) }}/>
                <div class={`flex-grow flex flex-col gap-2.5 ${(use == "image" || use == "video") ? "max-w-[630px]" : "items-center max-w-[1220px]"} z-10`}>
                    {captionAbove && <div class="text-base-300 text-lg md:text-[32px] font-normal leading-[120%] w-full" dangerouslySetInnerHTML={{ __html: captionAbove }} style={{...captionAboveTextProps}}/>}
                    <div 
                        class="text-primary w-full text-2xl md:text-[56px] font-normal leading-[1.2] pt-2 lg:pt-0" 
                        style={{ background: titleColor, backgroundClip: "text", color: titleColor && 'transparent', fontFamily: titleFont, letterSpacing: titleLetterSpacing, fontWeight: titleFontWeight, lineHeight: titleLineHeight, fontSize: titleFontSize }} 
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div class="text-base-300 text-lg md:text-[32px] font-normal leading-[1.2] w-full" dangerouslySetInnerHTML={{ __html: caption }} style={{fontSize: captionFontSize, fontFamily: captionFont, letterSpacing: captionLetterSpacing, fontWeight: captionFontWeight, lineHeight: captionLineHeight, color: captionColor}}/>
                    {hubspotForm?.show && <HubspotForm {...hubspotForm} />}
                </div>
            </div>

            <div class={`md:flex-grow md:flex flex-col justify-end ${position[mediaPosition]} ${(use == "image" || use == "video") && "lg:w-1/2"}`}>
                {htmlContent && <div class="px-7 flex justify-center w-[98vw] md:w-auto" dangerouslySetInnerHTML={{ __html: htmlContent }}/>}
                {use == "image" && image?.src && <Image width={image.width || 697} height={image.height || 592} src={image.src} alt={image.src || ""} class=" object-contain hidden md:block"/>}
                {use == "video" && video && <video width="697" height="592" autoPlay playsInline muted loading="lazy" loop class="w-full xl:w-auto max-w-[809px] object-contain hidden md:block">
                    <source src={video} type="video/mp4"/>
                </video>}
            </div>

            <div id={modalId} class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 z-[60] overflow-auto hidden px-6">            
                <div class="bg-primary-content lg:rounded-[30px] p-7 lg:p-12 animate-pop-up relative pt-12" style={{ animationDuration: "0.3s" }}>
                    <button class="text-primary font-black p-2.5 absolute top-2.5 right-[19px]" hx-on:click={useScript(closeModal, modalId)}>
                        <svg width="20" height="20" viewBox="0 0 19 19" class="text-primary fill-current" style={{ color: modal?.titleColor }} xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5997 16.6802C18.8546 16.935 18.9977 17.2807 18.9977 17.6411C18.9977 18.0015 18.8546 18.3471 18.5997 18.602C18.3448 18.8568 17.9992 19 17.6387 19C17.2783 19 16.9326 18.8568 16.6778 18.602L9.5 11.4224L2.31996 18.5997C2.06509 18.8546 1.71943 18.9977 1.359 18.9977C0.99857 18.9977 0.652903 18.8546 0.398042 18.5997C0.14318 18.3449 5.37081e-09 17.9992 0 17.6388C-5.37081e-09 17.2784 0.14318 16.9328 0.398042 16.6779L7.57809 9.50057L0.400302 2.32095C0.145441 2.0661 0.00226112 1.72046 0.00226113 1.36005C0.00226113 0.999641 0.145441 0.653995 0.400302 0.399148C0.655164 0.144302 1.00083 0.00113028 1.36126 0.00113028C1.72169 0.00113028 2.06735 0.144302 2.32222 0.399148L9.5 7.57877L16.68 0.398017C16.9349 0.143171 17.2806 -6.00439e-09 17.641 0C18.0014 6.00439e-09 18.3471 0.143171 18.602 0.398017C18.8568 0.652864 19 0.99851 19 1.35892C19 1.71932 18.8568 2.06497 18.602 2.31982L11.4219 9.50057L18.5997 16.6802Z"/>
                        </svg>
                    </button>
                    <h2 class="font-normal text-[32px] leading-[130%] max-w-[475px] max-w-[700px] " style={{ color: modal?.titleColor }}>{modal?.title}</h2>
                    <p class="mt-7 text-xl text-neutral font-medium leading-[120%] max-w-[700px] " style={{ color: modal?.textColor }}>{modal?.text}</p>
                    <HeroMedia media={modal?.media} />
                    <div class="flex flex-wrap items-center gap-7 mt-5">
                        {modal?.cta?.map((button) => {
                return <a href={button?.href ?? "#"} target={button?.href?.includes("http") ? "_blank" : ""} hx-on:click={useScript(closeModal, modalId)} class={`${button.ctaStyle != "link" && 'btn btn-primary px-7'} flex items-center gap-1 border-primary font-bold hover:scale-110 transition-transform text-lg`} style={button.ctaStyle == "button" ? { backgroundColor: button.backgroundColor, color: button.textColor, borderColor: button.borderColor } : { color: button.textColor }}>
                            {button?.text}
                            {button.underlineText && <span class="underline">{button.underlineText}</span>}
                            {button.showIcon && <svg width="20" height="20" viewBox="0 0 20 20" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3941 4.50977V12.2285C15.3941 12.386 15.3316 12.537 15.2202 12.6484C15.1089 12.7597 14.9579 12.8223 14.8004 12.8223C14.6429 12.8223 14.4919 12.7597 14.3805 12.6484C14.2692 12.537 14.2066 12.386 14.2066 12.2285V5.94293L5.72046 14.4298C5.60905 14.5413 5.45794 14.6038 5.30038 14.6038C5.14282 14.6038 4.99171 14.5413 4.8803 14.4298C4.76889 14.3184 4.7063 14.1673 4.7063 14.0098C4.7063 13.8522 4.76889 13.7011 4.8803 13.5897L13.3672 5.10352H7.08163C6.92416 5.10352 6.77313 5.04096 6.66178 4.92961C6.55043 4.81826 6.48788 4.66724 6.48788 4.50977C6.48788 4.35229 6.55043 4.20127 6.66178 4.08992C6.77313 3.97857 6.92416 3.91602 7.08163 3.91602H14.8004C14.9579 3.91602 15.1089 3.97857 15.2202 4.08992C15.3316 4.20127 15.3941 4.35229 15.3941 4.50977Z"/>
                            </svg>}
                        </a>;
            })}
                    </div>
                </div>
            </div>

        </div>
        {bulletPoints?.show && <div class="backdrop-blur-3xl py-9 px-7 mt-7 lg:mt-0" style={{background: bulletPoints?.backgroundColor}}>
            <div class="max-w-[1260px] mx-auto">
                {bulletPoints?.title && <div class="leading-[130%] text-[32px]" dangerouslySetInnerHTML={{__html: bulletPoints.title}} style={{...bulletPoints.titleTextProps}}/>}
                <div class="flex overflow-auto lg:overflow-visible gap-7 lg:gap-[88px] mt-7 pb-4">
                    {bulletPoints?.items?.map((item) => (
                        <div class="flex gap-3.5 min-w-[210px] lg:min-w-0">
                            {bulletPoints?.bulletPointsIcon?.src && <Image 
                                src={bulletPoints?.bulletPointsIcon?.src}
                                alt={bulletPoints?.bulletPointsIcon.alt}
                                width={bulletPoints?.bulletPointsIcon.width || 18}
                                height={bulletPoints?.bulletPointsIcon.height || 18}
                                class="self-start"
                            />}
                            <p class="font-normal lg:font-semibold text-sm lg:text-lg leading-[120%]" style={{...bulletPoints.textProps}}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>}
    </div>;
}
