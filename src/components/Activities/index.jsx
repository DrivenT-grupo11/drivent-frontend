import DateButton from "./DateButton"
import styled from "styled-components"

export default function ActivitiesReservation() {
    return (
        <>
            <Title>Escolha de Atividades</Title>
            <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
            <Container>
                <DateButton name = {'Sexta 22/10'}/>
                <DateButton name = {'Sábado 23/10'}/>
                <DateButton name = {'Domingo 24/10'}/>
            </Container>
            <LabelContainer>
                <Label>Auditorio principal</Label>
                <Label>Auditorio lateral</Label>
                <Label>Sala de workshop</Label>
            </LabelContainer>
            <AuditoriumContainer>
                <Rooms></Rooms>
                <Rooms></Rooms>
                <Rooms></Rooms>
            </AuditoriumContainer>
        </>
    );
}

const AuditoriumContainer = styled.div`
    display: flex;
    height: 391px;
    width: 864px;
    border: 1px solid #D7D7D7;
`
const Rooms = styled.div`
    border-right: 1px solid #D7D7D7;
    width: 288px;
    height: 100%;
`

const Container = styled.div`
    display: flex;

`
const Title = styled.h1`
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
`
const Subtitle = styled.h2`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color:#8E8E8E;
    margin-top: 50px;
`
const LabelContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 864px;
    height: 40px;
    margin-top: 40px;
`
const Label = styled.h3`
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #7B7B7B;
`