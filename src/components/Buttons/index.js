import { ButtonContainer } from "./styles";

const Buttons = ({label, variant, size, onClick}) => {
  console.log(onClick)
  return (
    <ButtonContainer variant={variant} size={size} onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
}

export default Buttons;
