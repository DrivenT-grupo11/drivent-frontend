import { Typography } from "@mui/material";
import TicketsPaymentInfo from "../../../components/TicketsPaymentInfo";
import styled from "styled-components";
import TicketCard from "../../../components/Payment/TicketCard";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import React, { useState } from "react";


export default function Payment() {
  
    const [state, setState] = useState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    });
  
  
    const handleInputChange = (evt) => {
      const { name, value } = evt.target;
      
      setState((prev) => ({ ...prev, [name]: value }));
    }
  
    const handleInputFocus = (evt) => {
      setState((prev) => ({ ...prev, focus: evt.target.name }));
    }
  
  return (
    <>
      <Typography marginBottom={3.4} variant="h4">Ingresso e Pagamento</Typography>
      <ContainerMain>
        <h2>Ingresso escolhido</h2>
        <TicketContainer>
          <TicketCard/>
        </TicketContainer>
        <h2>Pagamento</h2>
          
          <CreditCard>
          
              <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <form>
              <input type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus} />
              <input type="number"
              name="date"
              placeholder="Valid thru"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus} />
              <input type="number"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus} />
            
              <input type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus} />
              </form>
          </CreditCard>
          <button>FINALIZAR PAGAMENTO</button>
          
   

      </ContainerMain>
      <TicketsPaymentInfo />
    </>
  );
}


const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height:23.44px;
    color: #8E8E8E;
  }
`
const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

const CreditCard = styled.div`
  display: flex;
 
`