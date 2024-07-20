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
}

const IconWrapper = styled(motion.div)<IconProps>`
  padding-top: ${(props) => props.paddingTop};
  transition: fill 0.2s ease-in, color 0.2s ease-in;
  display: flex;
  align-items: center;
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

export const CvIcon = (props: IconProps) => {
  return (
    <IconWrapper color={props.color}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 360"
        height={props.height ? props.height : "24"}
        width={props.width ? props.width : "24"}
      >
        <title>CV</title>
        <path d="M180,5.42A174.58,174.58,0,1,0,354.58,180,174.58,174.58,0,0,0,180,5.42ZM167.47,231a64.89,64.89,0,0,1-8.74,23.75,43.41,43.41,0,0,1-18,15.92q-11.62,5.74-30.15,5.75-21.13,0-33.67-6.79a45.72,45.72,0,0,1-19.18-19.58q-6.66-12.78-8.62-30.54a360.12,360.12,0,0,1-2-39.15,361.24,361.24,0,0,1,2-39q2-17.88,8.62-30.67a48.24,48.24,0,0,1,19.18-20q12.52-7.17,33.67-7.18,20.1,0,31.72,6.53t17.35,16.57a57.5,57.5,0,0,1,7.18,21.67,179.64,179.64,0,0,1,1.44,21.79H130.67q0-20.36-4.83-29.62t-17.62-9.27A17.59,17.59,0,0,0,96.61,115q-4.58,3.78-7.18,12.26t-3.66,22.19q-1,13.71-1,33.54a324.93,324.93,0,0,0,1.44,34.2q1.42,13.05,4.43,20.22t7.57,9.66a21.75,21.75,0,0,0,10.57,2.48,24.88,24.88,0,0,0,9.27-1.7c2.87-1.12,5.35-3.39,7.44-6.78s3.74-8.18,5-14.36,1.83-14.31,1.83-24.4h37.58A167.89,167.89,0,0,1,167.47,231Zm102.58,42.54H221.76L179,87.21h40.2L245.51,225h.79L274,87.21h38.9Z" />
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
