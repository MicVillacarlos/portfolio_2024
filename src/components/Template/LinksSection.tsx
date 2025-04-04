import React from "react";
import { StyledGrid, StyledGridItem } from "./StyledCommonTemplateComponents";
import { CommonAnchor } from "../Atoms/CommonText";
import {
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "../Icons/Icons";

export const LinksSection = () => {
  return (
    <StyledGrid>
      <StyledGridItem>
        <CommonAnchor href="https://www.instagram.com/micodes/">
          <InstagramIcon width="32" height="32" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor href="www.linkedin.com/in/michael-villacarlos">
          <LinkedInIcon width="32" height="32" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor href="https://github.com/MicVillacarlos">
          <GithubIcon width="17" height="17" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor href="mailto:micvillacarlos@gmail.com">
          <GmailIcon width="21" height="21" />
        </CommonAnchor>
      </StyledGridItem>
      {/* <StyledGridItem>
        <CommonAnchor>
          <LeetCodeIcon width="21" height="21" />
        </CommonAnchor>
      </StyledGridItem> */}
    </StyledGrid>
  );
};
