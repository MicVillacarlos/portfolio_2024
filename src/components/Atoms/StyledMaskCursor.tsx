import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../utils/media_query";

export const ParentMaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const MaskContainer = styled(motion.div)`
    position: absolute;
    -webkit-mask-image: url("/mask.svg");
    mask-image: url("/mask.svg");
    mask-repeat: no-repeat;
    mask-size: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageArt = styled.div`
  background-image: url("https://lh3.googleusercontent.com/d/1wsPqLnIrnPeckXveYqFz5viRF4hYHzX9");
  background-size: cover;
  background-position: top;
  width: 510px;
  height: 320px;

  @media ${device.laptop}{
    width: 380px;
    height: 320px;
  }

  @media ${device.tablet} {
    width: 320px;
    height: 300px;
  }
`;


export const ImageOriginal = styled.div`
  background-image: url('https://lh3.googleusercontent.com/d/1p1r96XjQlYzZdMr07JDrXhTsrmtfYpSV');
  background-size: cover;
  background-position: top;
  width: 510px;
  height: 320px;

  @media ${device.laptop}{
    width: 380px;
    height: 320px;
  }

  @media ${device.tablet} {
    width: 320px;
    height: 300px;
  }
`;
