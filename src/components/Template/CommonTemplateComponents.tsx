import styled from "styled-components";
import { device, size } from "../../utils/media_query";

export const PageHolder = styled.div`
  margin: auto;
  width: 1024px;

  @media ${device.tablet} {
    width: ${size.tablet};
  }

  @media ${device.mobileL} {
    width: ${size.mobileS};
  }
`;
