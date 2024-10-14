import styled from "styled-components";
import DiceImg from "./assets/icon-dice.svg";

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 1rem;
  background-color: #53ffab;
  border: none;
  position: absolute;
  bottom: -10%;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: -17%;
  }
`;
const Img = styled.img`
  width: 50%;
`;
function Button({ onClick }) {
  return (
    <Btn onClick={onClick}>
      <Img src={DiceImg} />
    </Btn>
  );
}

export default Button;
