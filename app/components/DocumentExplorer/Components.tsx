import styled from "styled-components";
import Flex from "../Flex";

export const FlexContainer = styled(Flex)`
  margin-inline: -24px;
  margin-block-end: -24px;
  outline: none;
`;

export const Footer = styled(Flex)`
  height: 64px;
  border-top: 1px solid ${(props) => props.theme.horizontalRule};
  padding-inline: 24px;
  flex-shrink: 0;
`;
