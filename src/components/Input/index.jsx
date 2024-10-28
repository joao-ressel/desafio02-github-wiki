import { InputContainer } from "./styles";

// eslint-disable-next-line react/prop-types
export const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange}/>
    </InputContainer>
  );
};
