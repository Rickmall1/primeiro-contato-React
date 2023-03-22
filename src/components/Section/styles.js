import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 22px;
    /* identical to box height, or 105% */

    text-align: center;
    letter-spacing: 0.15px;

    /* Neutral/6 */

    color: #9cb0c9;

    margin-top: 6.4rem;
  }
`;

export const Title = styled.h2`
  width: 898px;
  height: 32px;

  /* subtitle/large */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;

  line-height: 3.2rem;
  /* identical to box height, or 114% */

  display: flex;
  align-items: center;
  text-align: center;
  width: fit-content;
  margin: auto;
  margin-top: 12rem;

  color: #486284;
`;

export const Subtitle = styled.h1`
  width: 898px;
  height: 76px;
  margin: auto;

  /* title/large */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 76px;
  /* identical to box height, or 127% */

  text-align: center;
  letter-spacing: 0.5px;
  color: #486284;
`;

export const Text = styled.div`
  width: 898px;
  height: 64px;
  margin: auto;
  margin-top: 1.6rem;

  /* body/large */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: center;
  letter-spacing: 0.5px;

  /* Neutral/7 */

  color: #8ca2c0;
`;

export const Buttons = styled.div`
  margin: auto;
  margin-top: 2.4rem;
  display: flex;
  gap: 2.6rem;
`;

export const Button0 = styled.button`
  all: unset;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.5px;

  /* Neutral/0 */

  color: #ffffff;

  /* Neutral/10 */

  background: #486284;
  /* Neutral/10 */

  border: 1px solid #486284;
  border-radius: 50px;
`;

export const Button1 = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  width: 98px;
  height: 48px;

  /* Neutral/10 */

  border: 1px solid #486284;
  border-radius: 50px;

  /* body/small */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.5px;

  /* Neutral/10 */

  color: #486284;
`;

export const Media = styled.div`
  margin: auto;
  display: flex;
  gap: 6.4rem;
  margin-top: 2rem;
`;
