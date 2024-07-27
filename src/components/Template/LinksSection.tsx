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
        <CommonAnchor>
          <InstagramIcon width="40" height="40" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <LinkedInIcon width="40" height="40" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GithubIcon width="25" height="25" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GmailIcon width="28" height="28" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <LeetCodeIcon width="28" height="28" />
        </CommonAnchor>
      </StyledGridItem>
    </StyledGrid>
  );
};
