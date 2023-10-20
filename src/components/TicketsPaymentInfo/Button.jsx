import styled from "styled-components";

export default function ChooseButton({ label, price, onClick, backgroundColor }) {
  return (
    <Button onClick={onClick} style={{ backgroundColor: backgroundColor }}>
      <ButtonContent>
        <ButtonLabel>{label}</ButtonLabel>
        {price && (
          <ButtonPrice>
            R$ {price}
          </ButtonPrice>
        )}
      </ButtonContent>
    </Button>
  );
}

const Button = styled.button`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #E5E5E5;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonLabel = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #454545;
`;

const ButtonPrice = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #898989;
`;