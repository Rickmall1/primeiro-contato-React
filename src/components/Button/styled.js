import styled from "styled-components";

export const Wrapper = styled.a`
  all: unset;
  border-radius: 50px;
  padding: 12px 20px;
  border: 1px solid #486284;
  color: #ffffff;
  background: ${(props) =>
    props.variant === "outlined" ? "transparent" : "#486284"};
`;
