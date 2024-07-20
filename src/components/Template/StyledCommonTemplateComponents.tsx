import styled from "styled-components";
import { device, size } from "../../utils/media_query";

export const PageHolder = styled.div`
  margin: auto;
  width: 1024px;
  padding-left: 5px;
  padding-right: 5px;

  @media ${device.laptop} {
    width: ${size.tablet};
  }

  @media ${device.tablet} {
    width: ${size.mobileS};
  }
`;
