import React from 'react';
import styled from 'styled-components';



export default function SuccessCheckout() {
    return (

        <ContainerSuccess>
            <ion-icon name="checkmark-circle"></ion-icon>
            <div>
                <span>Pagamento Confirmado!</span>
                <h3>Prossiga para escolha de hospedagem e atividades</h3>
            </div>
        </ContainerSuccess>


    )
}

const ContainerSuccess = styled.div`
    margin-top: 10px;
    display: flex;
    ion-icon{
        color: green ;
        font-size: 40px;
    }
    h3{
        font-size: 15px;
        font-family: Roboto;
        color: #454545;
        font-weight: 350;
        line-height:23.44px;
    }
    span{
        font-size: 20px;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height:23.44px;
    }
`
