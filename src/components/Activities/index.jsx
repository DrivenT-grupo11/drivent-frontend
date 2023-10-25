import DateButton from "./DateButton"
import styled from "styled-components"
import ActivityCard from "./Cards";
import { useContext } from "react";
import PaymentContext from "../../contexts/PaymentContext";

export default function ActivitiesReservation() {
    const { payment, typeTicket } = useContext(PaymentContext);
    const activity = {
        name: "Palestra 1",
        hour: "13:00 - 14:00",
        soldOut: false,
        vagas: 10
    }
    const activity2 = {
        name: "Palestra 2",
        hour: "13:00 - 16:00",
        soldOut: true,
        vagas: 10
    }
    console.log(typeTicket);
    return (
        <>
            <Title>Escolha de Atividades</Title>
            {typeTicket === 'Online' && payment ? <NotPayment>Sua modalidade de ingresso não necessita escolher
                atividade. Você terá acesso a todas as atividades.</NotPayment> : !payment ? <NotPayment className="validation">Você precisa ter confirmado pagamento antes
                    de fazer a escolha de atividades</NotPayment> : <>
                <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
                <Container>
                    <DateButton name={'Sexta 22/10'} />
                    <DateButton name={'Sábado 23/10'} />
                    <DateButton name={'Domingo 24/10'} />
                </Container>
                <LabelContainer>
                    <Label>Auditorio principal</Label>
                    <Label>Auditorio lateral</Label>
                    <Label>Sala de workshop</Label>
                </LabelContainer>
                <AuditoriumContainer>
                    <Rooms>
                        <ActivityCard activity={activity} />
                    </Rooms>
                    <Rooms>
                        <ActivityCard activity={activity2} />
                    </Rooms>
                    <Rooms></Rooms>
                </AuditoriumContainer> </>}
        </>
    );
}

const AuditoriumContainer = styled.div`
    display: flex;
    height: 391px;
    width: 864px;
    
`
const Rooms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
    height: 100%;
    border: 1px solid #D7D7D7;
    padding-top: 10px;
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
const NotPayment = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top:45%;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #7B7B7B;
`
