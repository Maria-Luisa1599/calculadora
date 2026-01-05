import { InputContainer } from "./styles";

const Input = ({valor}) => {
  return (
      <InputContainer>
        <input disabled value={valor}/>
      </InputContainer>
  );
}

export default Input;
