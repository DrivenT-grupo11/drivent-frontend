import styled from "styled-components";
export default function DateButton({ name,  onClick }) {
    return (
      <Button onClick={onClick}>
        {name}
      </Button>
    );
  }
  
  const Button = styled.button`
    width: 131px;
    height: 37px;
    border-radius: 4px;
    border: none;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 10px 0px #00000040;
    cursor: pointer;
    background-color: ${(props) => (props.clicked ? 'orange' : '#E0E0E0')};
    color: ${(props) => (props.clicked ? 'white' : 'black')};
  `;