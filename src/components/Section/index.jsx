import {
  Button0,
  Button1,
  Buttons,
  Container,
  Media,
  Subtitle,
  Text,
  Title,
} from "./styles";

import Facebook from "../../assets/svg/facebook.svg";
import Google from "../../assets/svg/google.svg";
import Youtube from "../../assets/svg/youtube.svg";

function Section() {
  return (
    <Container>
      <Title>Label goes here</Title>
      <Subtitle>Lorem Ipsum is simply dummy</Subtitle>
      <Text>
        Welcome to Burger Bliss, where we take your cravings to a whole new
        level! Our mouthwatering burgers are made from 100% beef and are served
        on freshly baked buns.
      </Text>
      <Buttons>
        <Button0>Order Now </Button0>
        <Button1>Explore</Button1>
      </Buttons>

      <h3>Trusted by:</h3>
      <Media>
        <img src={Google} />
        <img src={Youtube} />
        <img src={Facebook} />
      </Media>
    </Container>
  );
}

export default Section;
