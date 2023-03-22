import Button from "../Button";
import { Item, List, Navigation, Wropper } from "./styles";
import Logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <Wropper>
      <img src={Logo} />
      <Navigation>
        <List>
          <Item>Home</Item>
          <Item>About Us</Item>
          <Item>Contact</Item>
          <Item>
            <Button>Order Now</Button>
          </Item>
        </List>
      </Navigation>
    </Wropper>
  );
}

export default Header;
