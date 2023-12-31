import styled from "styled-components";
import soldOut from "../../assets/images/ant-design_close-circle-outlined.png";
import available from "../../assets/images/pepicons_enter.png";
import check from "../../assets/images/checkmark.png";
import axios from "axios";
import useToken from "../../hooks/useToken";
import { useState } from "react";
import somarHoras from "../../utils/date";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
export default function ActivityCard({ activity, day, key}) {
  const duration = (activity.duration * 60);
  const dateString = activity.schedule;
  const inicialTime = dateString.split("T")[1].split(":").slice(0, 2).join(":");
  const finalTime = somarHoras(inicialTime, duration)

  const token = useToken();
  const [isJoin, setIsJoin] = useState(false);
  if (!activity) {
    return <div>Não há atividade</div>;
  }

  const durationHours = activity.duration; 
  const heightPerHour = 79;
  const cardHeight = durationHours * heightPerHour;

  async function handleClick(){
    try {
      const response = await axios.post('/activities/reservation', {activityId: activity.id}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log('atividade reservada')
      setIsJoin(true);
    } catch (error) {
      console.log(error.data)
      setIsJoin(false)
    }
  };

  return (
    <>
    <CardContainer isJoin = {isJoin} style={{ height: `${cardHeight}px` }}>
      <ActivityLeft>
        <Title>{activity.name}</Title>
        <Hour>{inicialTime} - {finalTime}</Hour>
      </ActivityLeft>
      <ActivityRight>
        <Icon
          activity={activity}
          src={isJoin ? check : (activity.capacity === 0 ? soldOut : available)}
          onClick={activity.capacity > 0 ? handleClick : null}
        />
        <Status activity={activity} isJoin = {isJoin}>
          {activity.capacity === 0 ? "Esgotado" : isJoin ? "Inscrito" : `${activity.capacity} vagas`}
        </Status>
      </ActivityRight>
    </CardContainer>
    
    </>
  );
}


const CardContainer = styled.div`
  display: flex;
  width: 265px;
  border-radius: 5px;
  border-top: 20px;
  padding: 10px;
  background-color: ${props => (props.isJoin ? "#D0FFDB" : "#F1F1F1")};
`;
const Title = styled.h1`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 5px;
`

const Hour = styled.h1`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #343434;
`

const ActivityLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
`

const ActivityRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%; 
    border-left: 1px solid #CFCFCF;
`
const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: ${props => (props.activity.capacity !== 0 ? 'pointer' : 'default')};
`;
const Status = styled.h1`
font-family: Roboto;
font-size: 9px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
margin-top: 5px;
color: ${props => (props.activity.capacity === 0 ? "#CC6666" : props.isJoin ? "#078632" : "#247A6B")};
`;
