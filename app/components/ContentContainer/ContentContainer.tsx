"use client";
import styled from "styled-components";

interface IContentContainer {
  children: React.ReactNode;
}

const StyledContentContainer = styled.div`
  margin: 0 2rem;
  width: calc(100% - 4rem);

  /* Desktop and above */
  @media (min-width: 1120px) {
    width: calc(100% - 4rem);
    max-width: 1120px;
  }
`;

const ContentContainer = ({ children }: IContentContainer) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default ContentContainer;
