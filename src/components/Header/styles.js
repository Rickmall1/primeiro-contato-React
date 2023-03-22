import styled from "styled-components";

export const Wropper = styled.header`
  background-color: #ffffff;
  display: flex;
  padding: 2rem 4rem;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 9.8rem;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 48px;
  width: 448px;
  height: 48px;
  margin-right: 9.8rem;
`;

export const Item = styled.li`
  list-style: none;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
