import React, { useState, useEffect } from 'react';
import useEnrollment from '../../hooks/api/useEnrollment';
import { Typography } from "@mui/material";
import styled from "styled-components";
import ChooseButton from "./Button.jsx";
import ErrorWithoutSubscription from "./ErrorWithoutSubscription";

export default function TicketsPaymentInfo() {
  const enrollment = useEnrollment();
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(false);
  const [showReserveButton, setShowReserveButton] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedPrice = 0;
    if (selectedOption1) {
      calculatedPrice += 450;
    } else if (selectedOption3) {
      calculatedPrice += 50;
    }
    if (selectedOption2) {
      calculatedPrice += 250;
    } else if (selectedOption4) {
      calculatedPrice += 0;
    }
    setTotal(calculatedPrice);

  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);

  const handleOptionClick1 = () => {
    
    if (selectedOption3 && !selectedOption1) {
      setSelectedOption3(false);
      setSelectedOption1(true);
    } else if (!selectedOption3 && !selectedOption1) {
      setSelectedOption1(true);
      } else if (selectedOption1 && !selectedOption3) {
      setSelectedOption1(false);
      setShowReserveButton(false); 
    }
  };
  const handleOptionClick3 = () => {
    if (!selectedOption3 && selectedOption1) {
      setSelectedOption3(true);
      setSelectedOption1(false);
      setShowReserveButton(true);
    } else if (!selectedOption3 && !selectedOption1) {
      setSelectedOption3(true);
      setShowReserveButton(true);
      } else {
      setSelectedOption3(false);
      setShowReserveButton(false);
    }
  };

  const handleOptionClick2 = () => {
    if (!selectedOption2 && selectedOption4) {
      setSelectedOption2(true);
      setSelectedOption4(false);
      setShowReserveButton(true); 
    } else if (!selectedOption2 && !selectedOption4) {
      setSelectedOption2(true);
      setShowReserveButton(true); 
    } else {
      setSelectedOption2(false);
      setShowReserveButton(false); 
    }
  };
  const handleOptionClick4 = () => {
    if (selectedOption2 && !selectedOption4) {
      setSelectedOption2(false);
      setSelectedOption4(true);
      setShowReserveButton(true); 
    } else if (!selectedOption2 && !selectedOption4) {
      setSelectedOption4(true);
      setShowReserveButton(true); 
    } else {
      setSelectedOption4(false);
      setShowReserveButton(false); 
    }
  };

  const elementsArray = {
    div1: [
      {
        label: "Presencial",
        price: 450,
        onClick: handleOptionClick1,
        backgroundColor: selectedOption1 ? '#FFEED2' : ''
      },
      {
        label: "Online",
        price: 50,
        onClick: handleOptionClick3,
        backgroundColor: selectedOption3 ? '#FFEED2' : ''
      }
    ],
    div2: [
      {
        label: "Com hotel",
        price: 250,
        onClick: handleOptionClick2,
        backgroundColor: selectedOption2 ? '#FFEED2' : ''
      },
      {
        label: "Sem hotel",
        price: "0",
        onClick: handleOptionClick4,
        backgroundColor: selectedOption4 ? '#FFEED2' : ''
      }
    ]
  }

  return (
    <>
      {enrollment.enrollment !== null ? (
        <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Primeiro, escolha sua modalidade de ingresso</StyledTypography>
      ) : (
        <ErrorWithoutSubscription />
      )}
      {enrollment.enrollment !== null ?
        <ChooseModality>
          {elementsArray.div1.map((element, i) => {
            return (
              <ChooseButton
                key={i}
                label={element.label}
                price={element.price}
                onClick={element.onClick}
                backgroundColor={element.backgroundColor}
              />
            )
          })}
        </ChooseModality> : null
      }
      {selectedOption1 &&
        <>
          <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Ótimo! Agora escolha sua modalidade de hospedagem</StyledTypography>
          <ChooseModality>
            {elementsArray.div2.map((element, i) => {
              return (
                <ChooseButton
                  key={i}
                  label={element.label}
                  price={element.price}
                  onClick={element.onClick}
                  backgroundColor={element.backgroundColor}
                />
              )
            })}
          </ChooseModality>
        </>
      }
      {showReserveButton && (
        <Container>
          <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} 
          color={"#8E8E8E"} paragraph={true}>
            Fechado! O total ficou em <strong>R$ {total} </strong>. Agora é só confirmar: 
            </StyledTypography>
          <Reservation>
            <h1>RESERVAR INGRESSO</h1>
          </Reservation>
        </Container>
      )}
    </>
  );
}

const Container = styled.div``;

const Reservation = styled.button`
  width: 162px;
  height: 37px;
  border-radius: 4px;
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.20);
  h1{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
  }
`
const StyledTypography = styled(Typography)`
  /* margin-bottom: 20px!important; */
`;

const ChooseModality = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;
