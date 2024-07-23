"use client";
import styled from "styled-components";

interface IContentContainer {
  children: React.ReactNode;
  width?: number;
}

interface IStyledContentContainer {
  $width?: number;
}

const StyledContentContainer = styled.div<IStyledContentContainer>`
  // border: 1px solid red;
  ${({ $width }) => ($width ? `width: ${$width}%;` : "")}
  margin: 0 2rem;

  /* Desktop and above */
  @media (min-width: 1120px) {
    // border: 1px solid green;
    max-width: 1120px;
  }
`;

const ContentContainer = ({ children, width }: IContentContainer) => {
  return (
    <StyledContentContainer $width={width}>{children}</StyledContentContainer>
  );
};

export default ContentContainer;
