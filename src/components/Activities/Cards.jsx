import styled from "styled-components";
import soldOut from "../../assets/images/ant-design_close-circle-outlined.png";
import available from "../../assets/images/pepicons_enter.png";

export default function ActivityCard({ activity, day }) {
  // console.log(day)
  console.log(activity)
  if (!activity) {
    return console.log('não tem activity'); 
  }

  const calculateDuration = (startTime, endTime) => {
    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);
    return endHour - startHour;
  };

  const durationHours = calculateDuration(
    activity[0].schedule.split("T")[1], 
    activity[0].schedule.split("T")[1]
  );

  const heightPerHour = 79;
  const cardHeight = 1 * heightPerHour;



  return (
    <CardContainer style={{ height: `${cardHeight}px` }}>
      <ActivityLeft>
        <Title>{activity[0].name}</Title>
      <Hour>{activity[0].schedule}</Hour>
      </ActivityLeft>
      <ActivityRight>
       <Icon activity={activity}  src={activity[0].capacity === 0 ? soldOut : available} onClick={activity.available ? handleClick(e) : null}/> {/*TODO: implement the handleClick to reserve a activity */}
        <Status activity={activity}>
          {activity[0].capacity === 0 ? "Esgotado" : `${activity[0].capacity} vagas`}
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
