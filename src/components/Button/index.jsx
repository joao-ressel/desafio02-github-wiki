import { ButtonContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export const Button = ({onClick}) => {
  return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
};
