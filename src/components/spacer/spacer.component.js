import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariants[size];
  const property = positionVariants[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

/**
 * This function creates a space or a margin to be specefic, if for example
 * we pass position="left" and size="medium" it is going to return for us
 * "marginLeft: 8px".
 * - Usage you can either add it as an isolated component <Spacer />
 * or wrap another component <Spacer></Spacer> which better for debugging
 * - Default position="top" size="small"
 * @param {string} position the space position (top, right, bottom, left)
 * @param {string} size the space size (small, medium, large)
 * @param {object} theme the app theme
 * @return {string} the actual css property (ex: "marginTop: 16px;" )
 */
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
