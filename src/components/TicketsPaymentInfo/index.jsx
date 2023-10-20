import React, { useState , useEffect } from 'react';
import { Typography } from "@mui/material";
import styled from "styled-components";
import ErrorWithoutSubscription from "./ErrorWithoutSubscription";

export default function TicketsPaymentInfo() {
  const EnrollmentLocalStorage = localStorage.getItem('EnrollmentData')

  useEffect(() => {
    
  }, []);

  return (
    <>
      {EnrollmentLocalStorage ? <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Primeiro, escolha sua modalidade de ingresso</StyledTypography> : <ErrorWithoutSubscription />}
    </>
  );
}

//Primeiro, escolha sua modalidade de ingresso

const StyledTypography = styled(Typography)`
  /* margin-bottom: 20px!important; */
`;
