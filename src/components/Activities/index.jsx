import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DateButton from './DateButton';
import styled from 'styled-components';
import ActivityCard from './Cards';
import { useContext } from 'react';
import PaymentContext from '../../contexts/PaymentContext';
import useToken from '../../hooks/useToken';
import UserContext from '../../contexts/UserContext';

export default function ActivitiesReservation() {
  const { payment, typeTicket } = useContext(PaymentContext);
  const [activities, setActivities] = useState([]);
  const [activitiesForDate, setActivitiesForDate] = useState();
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showActivities, setShowActivities] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const token = useToken();
  axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;


  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get('/activities', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActivities(response.data);
        // console.log('data', response.data);
     
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function showActivitiesForDay(day) {
    setSelectedDate(day);
    setShowActivities(true);
    const correntDay = filterActivitiesByDay(activities, day)
    setActivitiesForDate(correntDay)
    // console.log(a)
  }
  
 
    // activitiesForDate, setActivitiesForDate
  

  
    function filterActivitiesByDay(activities, day) {
      return activities.filter(activity => {
        const activityDate = new Date(activity.schedule);
        const activityDay = `${activityDate.getMonth() + 1}-${activityDate.getDate()}`;
        return activityDay === day;
      });
    }
 
   return (
        <>
            <Title>Escolha de Atividades</Title>
{/*        {typeTicket === 'Online' && payment ? <NotPayment>Sua modalidade de ingresso não necessita escolher
                atividade. Você terá acesso a todas as atividades.</NotPayment> : !payment ? <NotPayment className="validation">Você precisa ter confirmado pagamento antes
                    de fazer a escolha de atividades</NotPayment> : <> */}
               <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
             
                <Container>
                  <DateButton
                    onClick={() => showActivitiesForDay('10-27')}
                    isClicked={clickedButton === '10-27'}
                    name={'Sexta, 27/10'}
                  />
                  <DateButton
                    onClick={() => showActivitiesForDay('10-28')}
                    isClicked={clickedButton === '10-28'}
                    name={'Sábado, 28/10'}
                  />
                  <DateButton
                    onClick={() => showActivitiesForDay('10-29')}
                    isClicked={clickedButton === '10-29'}
                    name={'Domingo, 29/10'}
                  />
              </Container>
        
                <LabelContainer>
                    <Label>Auditorio principal</Label>
                    <Label>Auditorio lateral</Label>
                    <Label>Sala de workshop</Label>
                </LabelContainer>
                {showActivities && (
                <AuditoriumContainer>
                {activitiesForDate.map((activity, index) => (
                  <ActivityCard key={index} activity={activitiesForDate} day={selectedDate}/>
                ))}
              </AuditoriumContainer>
      )} </> //} 
/*         </> */
    );
}

const AuditoriumContainer = styled.div`
    display: flex;
    flex-direction: column;
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
