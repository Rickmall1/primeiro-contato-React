import { Wrapper } from "./styled";

function Button({ children, variant }) {
  return <Wrapper variant={variant}>{children}</Wrapper>;
}

export default Button;
