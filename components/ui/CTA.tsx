import { useScript } from "@deco/deco/hooks";
import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IImage {
  src?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface CustomProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  letterSpacing?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}

/** @title {{text}} {{underlineText}}*/
export interface Props {
  href?: string;
  text?: RichText;
  underlineText?: string;
  /** @format color-input */
  textColor?: string;
  /** @format color-input */
  backgroundColor?: string;
  /** @format color-input */
  borderColor?: string;
  type?: 'Button' | 'Only text';
  size?: 'Large' | 'Medium' | 'Small';
  openModal?: 'Komea wait list' | 'No Modal';
  createStorePlanId?: string;
  showIcon?: boolean;
  customIcon?: IImage;
  iconGap?: string;
  singleLine?: boolean;
  customProps?: CustomProps;
  /** @format color-input */
  glowColor1?: string;
  /** @format color-input */
  glowColor2?: string;
  customSection?: string;
  customType?: string;
  customTitle?: string;
}

const openModalFunction = (modal: string, planId: string, customSection: string, customType: string, customTitle: string) => {
  if (modal == 'Komea wait list') {
    const form = document.getElementById("waitlist-form") as HTMLElement;
    form.classList.remove("hidden");
  }

  if (customSection && customType && customTitle) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'clique',
      'custom_section': customSection,
      'custom_type': customType,
      'custom_title': customTitle
    });
  }
};

export default function CTA({ href = "", text, underlineText, textColor, glowColor1, glowColor2, backgroundColor, iconGap, borderColor, size = "Medium", type = "Button", singleLine = false, showIcon = false, openModal, createStorePlanId, customIcon, customProps, customSection, customTitle, customType }: Props) {
  const sizeClasses = {
    "Large": "py-4 px-8 text-base font-semibold border",
    "Medium": "py-2 px-8 text-sm font-semibold leading-[171%] border",
    "Small": "py-1 px-6 text-xs font-semibold border leading-loose"
  }

  const iconSizes = {
    "Large": "24",
    "Medium": "16",
    "Small": "16"
  }
  let boxShadow;
  if (glowColor1 || glowColor2) boxShadow = `0px 4px 100px 0px ${glowColor1 || 'transparent'}, 0px 0px 10px 0px ${glowColor2 || 'transparent'}`

  return <a
    hx-on:click={openModal && useScript(openModalFunction, openModal, createStorePlanId || '172', customSection || '', customType || '', customTitle || '')}
    class={`${sizeClasses[size]} rounded-lg hover:scale-110 transition-transform cursor-pointer flex justify-center items-center gap-2.5 text-center ${singleLine && 'whitespace-nowrap'}`}
    style={type == "Button"
      ? { background: backgroundColor, color: textColor, borderColor, gap: iconGap, boxShadow, ...customProps }
      : { color: textColor, border: 'none', padding: 0, gap: iconGap, ...customProps }}
    href={openModal ? undefined : href}
    target={href.includes("http") ? "_blank" : "_self"}>

    {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
    {underlineText && <span class="underline ">{underlineText}</span>}

    {showIcon && (customIcon?.src
      ? <Image src={customIcon.src} width={customIcon.width || 20} height={customIcon.height || 20} alt={customIcon.alt || "button icon"} />
      : <svg xmlns="http://www.w3.org/2000/svg" width={iconSizes[size]} height={iconSizes[size]} viewBox="0 0 24 25" fill="none" class="inline-block">
        <path d="M9 17.9028L15 11.9028L9 5.90283" stroke={textColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>)}
  </a>
}