import { Typography } from "@mui/material";
import styled from "styled-components";
import ErrorWithoutSubscription from "./ErrorWithoutSubscription"; // waiting to implement a check whether the user signed up or not

export default function TicketsPaymentInfo() {
  return (
    <>
      {/* <ErrorWithoutSubscription /> //waiting to implement a check whether the user signed up or not */}
      <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Primeiro, escolha sua modalidade de ingresso</StyledTypography>
    </>
  );
}

//Primeiro, escolha sua modalidade de ingresso

const StyledTypography = styled(Typography)`
  /* margin-bottom: 20px!important; */
`;
