"use client";
import { useMobileNavMenuContext } from "@/app/context/MobileNavMenu";
import React, { useState } from "react";
import styled from "styled-components";

const hamburgerHeight = 20;

const hamburgerWidth = Math.round(hamburgerHeight * 1.33);
const stripeHeight = hamburgerHeight / 5;

interface IStripe {
  $open: boolean;
  $first?: boolean;
}

const Hamburger = styled.button`
  border: none;
  background: none;
  width: ${hamburgerWidth}px;
  height: ${hamburgerHeight}px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer !important;
  &:focus {
    outline: 0;
  }
  div {
    position: absolute;
    height: ${stripeHeight}px;
    width: 100%;
    background: var(--cream);
    border-radius: ${stripeHeight}px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  @media (min-width: 701px) {
    display: none;
  }
`;

const StripeTop = styled.div<IStripe>`
  top: ${({ $open }) => ($open ? `${stripeHeight * 2}px` : "0px")};
  width: ${({ $open }) => ($open ? "0%" : "inherit")} !important;
  left: ${({ $open }) => ($open ? "50%" : "0")} !important;
`;

const StripeMiddle = styled.div<IStripe>`
  top: ${stripeHeight * 2}px;

  transform: ${({ $open, $first }) =>
    $first && $open
      ? "rotate(45deg) !important"
      : $open
      ? "rotate(-45deg) !important"
      : "none"};
`;

const StripeBottom = styled.div<IStripe>`
  top: ${({ $open }) =>
    $open ? `${stripeHeight * 2}px` : `${stripeHeight * 4}px`};
  width: ${({ $open }) => ($open ? "0%" : "inherit")} !important;
  left: ${({ $open }) => ($open ? "50%" : "0")} !important;
`;

const HamburgerIcon = () => {
  const [mobileNavMenu, setMobileNavMenuOpen] = useMobileNavMenuContext();

  return (
    <Hamburger
      onClick={() => {
        setMobileNavMenuOpen({ isOpen: !mobileNavMenu.isOpen });
      }}
    >
      <StripeTop $open={mobileNavMenu.isOpen || false} />
      <StripeMiddle $open={mobileNavMenu.isOpen || false} $first />
      <StripeMiddle $open={mobileNavMenu.isOpen || false} />
      <StripeBottom $open={mobileNavMenu.isOpen || false} />
    </Hamburger>
  );
};
export default HamburgerIcon;
