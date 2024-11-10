import styled from "styled-components";
import { size } from "../../utils/media_query";

export const CommonGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: ${size.laptop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
`;
