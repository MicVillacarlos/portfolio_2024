import React from "react";
import { StyledGrid, StyledGridItem } from "./StyledCommonTemplateComponents";
import { CommonAnchor } from "../Atoms/CommonText";
import {
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../Icons/Icons";

export const LinksSection = () => {
  return (
    <StyledGrid>
      <StyledGridItem>
        <CommonAnchor>
          <InstagramIcon width="50" height="50" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <LinkedInIcon width="50" height="50" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GithubIcon width="35" height="35" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GmailIcon width="38" height="38" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <InstagramIcon width="50" height="50" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <LinkedInIcon width="50" height="50" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GithubIcon width="35" height="35" />
        </CommonAnchor>
      </StyledGridItem>
      <StyledGridItem>
        <CommonAnchor>
          <GmailIcon width="38" height="38" />
        </CommonAnchor>
      </StyledGridItem>
    </StyledGrid>
  );
};
