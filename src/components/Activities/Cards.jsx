import styled from "styled-components";
import soldOut from "../../assets/images/ant-design_close-circle-outlined.png";
import available from "../../assets/images/pepicons_enter.png";

export default function ActivityCard({ activity, day }) {
  if (!activity) {
    return <div>Não há atividade</div>;
  }

  const durationHours = activity.duration; 
  const heightPerHour = 79;
  const cardHeight = durationHours * heightPerHour;

  const handleClick = (e) => {
    console.log("Clique na atividade");
  };

  return (
    <CardContainer style={{ height: `${cardHeight}px` }}>
      <ActivityLeft>
        <Title>{activity.name}</Title>
        <Hour>{activity.schedule}</Hour>
      </ActivityLeft>
      <ActivityRight>
        <Icon
          activity={activity}
          src={activity.capacity === 0 ? soldOut : available}
          onClick={activity.capacity > 0 ? handleClick : null}
        />
        <Status activity={activity}>
          {activity.capacity === 0 ? "Esgotado" : `${activity.capacity} vagas`}
        </Status>
      </ActivityRight>
    </CardContainer>
  );
}


const CardContainer = styled.div`
  display: flex;
  width: 265px;
  border-radius: 5px;
  background-color: #F1F1F1;
  border-top: 20px;
  padding: 10px;
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
  cursor: ${props => (props.activity[0].capacity !== 0 ? 'pointer' : 'default')};
`;
const Status = styled.h1`
font-family: Roboto;
font-size: 9px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
margin-top: 5px;
color: ${props => (props.activity[0].capacity === 0 ? "#CC6666" : "#247A6B")};
`;
