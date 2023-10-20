

import { Typography } from "@mui/material";
import styled from "styled-components";
import ChooseButton from "./Button.jsx";
import ErrorWithoutSubscription from "./ErrorWithoutSubscription"; // waiting to implement a check whether the user signed up or not
import React, { useState , useEffect } from 'react'

export default function TicketsPaymentInfo() {
  const EnrollmentLocalStorage = localStorage.getItem('EnrollmentData')

  useEffect(() => {
    
  }, []);

  return (
    <>     
      {EnrollmentLocalStorage ? <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Primeiro, escolha sua modalidade de ingresso</StyledTypography> : <ErrorWithoutSubscription />}
      <ChooseModality>
        <ChooseButton label="Com hotel" price="R$100"/>
        <ChooseButton label="Sem hotel" price="R$0"/>
      </ChooseModality>
    </>
  );
}

//Primeiro, escolha sua modalidade de ingresso

const StyledTypography = styled(Typography)`
  /* margin-bottom: 20px!important; */
`;
const ChooseModality = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;

`;