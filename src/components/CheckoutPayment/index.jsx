import { Typography } from "@mui/material";
import styled from "styled-components";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import React, { useState } from "react";
import TicketCard from "./TicketCard";


export default function CheckoutPayment() {
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
          <TicketCard />
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
            <div className="form-group">
              <input type="number"
                name="number"
                placeholder="Card Number"
                className="form-control"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus} />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus} />
            </div>
            <div className="row">
              <div className="col-6">
                <input type="tel"
                  name="expiry"
                  placeholder="Valid thru"
                  className="form-control"
                  pattern="\d\d/\d\d"
                  required
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus} />
              </div>
              <div className="col-6">
                <input type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus} />
              </div>
            </div>
          </form>
        </CreditCard>
        <button type="submit">FINALIZAR PAGAMENTO</button>
      </ContainerMain>
    </>
  )
}

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height:23.44px;
    color: #8E8E8E;
  }
  button{
    width: 182px;
    height: 37px;
    border-radius: 4px;
    margin-top: 20px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`
const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

const CreditCard = styled.div`
  display: flex;
  box-sizing: border-box;
  form{
    input {
      width: 300px;
      
    }
    small {
      color: #8E8E8E;
      font-size: 12px;
    }
    margin-left: 30px;
    .form-group{
    
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    }
    .row{
      display: flex;
      width: 300px
      
    }
    .col-6{
      display: flex;
      width: 40%;
      
    }
  }
  
 
 
`