import ChooseButton from "./Button.jsx";

import ErrorWithoutSubscription from "./ErrorWithoutSubscription"; // waiting to implement a check whether the user signed up or not
import React, { useState , useEffect } from 'react'

import { Typography } from "@mui/material";
import styled from "styled-components";

export default function TicketsPaymentInfo() {
  const EnrollmentLocalStorage = localStorage.getItem('EnrollmentData');

  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);

  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(false);

  const handleOptionClick1 = () => {
    if (selectedOption3 && !selectedOption1) {
      setSelectedOption3(false)
      setSelectedOption1(true);
    } else if (!selectedOption3 && !selectedOption1){
      setSelectedOption1(true);
    } else if (selectedOption1 && !selectedOption3) {
      setSelectedOption1(false);
    }
  };
  const handleOptionClick3 = () => {
    if (!selectedOption3 && selectedOption1) {
      setSelectedOption3(true)
      setSelectedOption1(false);
    } else if (!selectedOption3 && !selectedOption1){
      setSelectedOption3(true);
    } else {
      setSelectedOption3(false)
    }
  };

  const handleOptionClick2 = () => {
    if (!selectedOption2 && selectedOption4){
      setSelectedOption2(true);
      setSelectedOption4(false);
    } else if (!selectedOption2 && !selectedOption4){
      setSelectedOption2(true);
    } else {
      setSelectedOption2(false);
    }
  };
  const handleOptionClick4 = () => {
    if (selectedOption2 && !selectedOption4){
      setSelectedOption2(false);
      setSelectedOption4(true);
    } else if (!selectedOption2 && !selectedOption4){
      setSelectedOption4(true);
    } else {
      setSelectedOption4(false);
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
      {EnrollmentLocalStorage ? (
        <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Primeiro, escolha sua modalidade de ingresso</StyledTypography>
      ) : (
        <ErrorWithoutSubscription />
      )}
      <ChooseModality>
        {elementsArray.div1.map((element, i) => {
          return <>
            <ChooseButton
              key={i}
              label= {element.label}
              price= {element.price}
              onClick= {element.onClick}
              backgroundColor= {element.backgroundColor}
            />
          </>
        })}
      </ChooseModality>
      {selectedOption1 && 
        <>
          <StyledTypography marginBottom={2} fontFamily={"Roboto, sans-serif"} color={"#8E8E8E"} paragraph={true}>Ótimo! Agora escolha sua modalidade de hospedagem</StyledTypography>
          <ChooseModality>
            {elementsArray.div2.map((element, i) => {
              return <>
                <ChooseButton
                  key={i}
                  label= {element.label}
                  price= {element.price}
                  onClick= {element.onClick}
                  backgroundColor= {element.backgroundColor}
                />
              </>
            })}
          </ChooseModality>
        </>
      }
      
      
    </>
  );
}


const StyledTypography = styled(Typography)`
  /* margin-bottom: 20px!important; */
`;

const ChooseModality = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;
