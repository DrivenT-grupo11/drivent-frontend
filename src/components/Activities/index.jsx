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
        </>
    )
}

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