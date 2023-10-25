import styled from "styled-components"

export default function DateButton({name}){
    return(
        <>
            <Button>{name}</Button>
        </>
    )   
}


const Button = styled.button`
    width: 131px;
    height: 37px;
    border-radius: 4px;
    background-color:  #E0E0E0;
    border: none;
    margin-right:20px;
    margin-top: 20px;
    box-shadow: 0px 2px 10px 0px #00000040;
    cursor: pointer;
`