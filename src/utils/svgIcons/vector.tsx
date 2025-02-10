import {IconProps} from "@/utils/svgIcons/interface";

export const VectorIcon = (props: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14L17 17M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)