import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface IconProps {
  height?: string;
  width?: string;
  color?: string;
  paddingTop?: string;
  text?: string;
  hoverTextColor?: string;
  marginBottom?: string;
  isTransformX?: boolean;
  isNoHover?: boolean;
  fontWeight?: number;
}

const IconWrapper = styled(motion.div) <IconProps>`
  font-weight: ${(props)=>props.fontWeight};
  padding-top: ${(props) => props.paddingTop};
  transition: fill 0.2s ease-in, color 0.2s ease-in;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: ${(props) => props.marginBottom};

  svg {
    fill: ${(props) =>
      props.color ? props.theme[props.color] : props.theme.text};
    transition: transform 0.2s ease-in, fill 0.2s ease-in;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.hoverTextColor && props.theme[props.hoverTextColor]};

    svg {
      fill: ${(props) =>
        props.hoverTextColor && props.theme[props.hoverTextColor]};
      transform: ${(props) =>
        props.isNoHover
          ? ""
          : props.isTransformX
          ? `translateY(-2px) translateX(2px)`
          : `translateY(-2px)`};
    }
  }
`;

export const SunIcon = (props: IconProps) => {
  return (
    <IconWrapper color={props.color} isNoHover={props.isNoHover}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
      >
        <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z" />
      </svg>
    </IconWrapper>
  );
};

export const MoonIcon = (props: IconProps) => {
  return (
    <IconWrapper color={props.color} isNoHover={props.isNoHover}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
      >
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
      </svg>
    </IconWrapper>
  );
};

export const LinkedInIcon = (props: IconProps) => {
  return (
    <IconWrapper color={props.color}>
      <svg
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
      </svg>
    </IconWrapper>
  );
};

export const InstagramIcon = (props: IconProps) => {
  return (
    <IconWrapper color={props.color}>
      <svg
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
        <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
      </svg>
    </IconWrapper>
  );
};

export const NorthEastArrowIcon = (props: IconProps) => {
  return (
    <IconWrapper
      isNoHover={props.isNoHover}
      isTransformX={props.isTransformX}
      color={props.color}
      paddingTop={props.paddingTop}
      hoverTextColor={props.hoverTextColor}
      marginBottom={props.marginBottom}
    >
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 -960 960 960"
      >
        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
      </svg>
    </IconWrapper>
  );
};

export const GatsbyIcon = (props: IconProps) => {
  return (
    <IconWrapper isNoHover={props.isNoHover} fontWeight={props.fontWeight}>
      {props.text}
      <svg
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.32267 0 0 5.31733 0 12C0 18.6827 5.31733 24 12 24C18.6827 24 24 18.6773 24 12C24 5.32267 18.6827 0 12 0ZM2.608 12.1013L11.8987 21.3867C6.784 21.392 2.608 17.216 2.608 12.1013ZM14.0853 21.184L2.82133 9.90933C3.76 5.73333 7.51467 2.60267 12 2.60267C15.008 2.61333 17.8347 4.04267 19.616 6.464L18.2613 7.61067C16.8267 5.50933 14.4427 4.256 11.8987 4.26667C8.64533 4.24533 5.74933 6.30933 4.69333 9.38133L14.5067 19.2C16.9067 18.3627 18.784 16.2773 19.3067 13.7707H15.2373V12H21.392C21.392 16.4853 18.2613 20.2453 14.0853 21.184Z"
          fill={props.color ? props.color : "#000000"}
        />
      </svg>
    </IconWrapper>
  );
};

export const GithubIcon = (props: IconProps) => {
  return (
    <IconWrapper isNoHover={props.isNoHover}>
      <svg
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" stroke="none" stroke-width="1">
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7559.000000)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                id="github-[#142]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </IconWrapper>
  );
};

export const FramerIcon = (props: IconProps) => {
  return (
    // <IconWrapper fontWeight={props.fontWeight} isNoHover={props.isNoHover}>
    // {props.text}
    <svg
      height={props.height ? props.height : "24"}
      width={props.width ? props.width : "24"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="none" />
      <path d="M9.3,2H38.7V16.7H24Zm0,14.7H24L38.7,31.3H9.3Zm0,14.6H24V46Z" />
    </svg>
    // </IconWrapper>
  );
};

export const GmailIcon = (props: IconProps) => {
  return (
    <IconWrapper>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 512 512"
      >
        <g id="7935ec95c421cee6d86eb22ecd11f972">
          <path
            d="M511.5,446.753V65.247H0.5v381.506H511.5L511.5,446.753
		L511.5,446.753z M438.245,368.552v74.224H79.53v-70.247h0.615l1.816-0.605l134.664-108.435l40.74,34.519l36.176-31.78
		L438.245,368.552L438.245,368.552L438.245,368.552z M438.245,355.428l-137.114-95.917l137.114-118.819V355.428L438.245,355.428
		L438.245,355.428z M415.453,69.215L396.898,86.93l-8.811,8.569l-8.205,8.532l-8.514,7.944l-7.898,7.945l-7.6,7.33l-7.004,7.33
		l-7.294,6.725l-6.688,6.725l-12.462,12.519l-11.867,11.298l-5.457,5.197l-4.871,5.188l-5.16,4.285l-4.574,4.266l-8.195,7.954
		l-3.959,3.354l-3.344,3.371l-3.344,2.72l-2.748,3.074l-5.16,4.284l-2.123,1.509l-1.527,1.845l-1.816,0.912l-1.221,1.229
		l-1.518,1.211L101.102,68.609L415.453,69.215L415.453,69.215L415.453,69.215z M208.727,256.764L79.53,360.001l0.298-212.893
		L208.727,256.764L208.727,256.764L208.727,256.764z"
          ></path>
        </g>
      </svg>
    </IconWrapper>
  );
};


export const LeetCodeIcon = (props:IconProps) => {
  return (
    <IconWrapper>
      <svg
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    </IconWrapper>
  );
};
