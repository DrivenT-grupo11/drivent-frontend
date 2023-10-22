import styled from "styled-components"

export default function TicketCard(){
    return (
        <>
            <CardContainer>
                <h4>Presencial + Com Hotel</h4>
                <h3>R$600</h3>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 20px;
    flex-direction: column;
    background-color: #FFEED2;
    width: 290px;
    height: 108px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    h4{
        font-family: Roboto;
        font-weight: 400;
        font-size: 16px;
        line-height: 18.75px;
        
    }
    h3{
        color: #898989;
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.41px;
        margin-top: 5px;
    }
`