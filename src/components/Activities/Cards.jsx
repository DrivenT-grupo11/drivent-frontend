import styled from "styled-components";
import soldOut from "../../assets/images/ant-design_close-circle-outlined.png";
import available from "../../assets/images/pepicons_enter.png";

export default function ActivityCard({ activity }) {
  if (!activity) {
    return console.log('não tem activity'); 
  }

  const calculateDuration = (startTime, endTime) => {
    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);
    return endHour - startHour;
  };

  const durationHours = calculateDuration(
    activity.schedule.split("T")[1], 
    activity.schedule.split("T")[1]
  );

  const heightPerHour = 79;
  const cardHeight = durationHours * heightPerHour;

  return (
    <CardContainer style={{ height: `${cardHeight}px` }}>
      <ActivityLeft>
        <Title>{activity.name}</Title>
    {/*   <Hour>{activity.schedule}</Hour> */}
      </ActivityLeft>
      <ActivityRight>
        <Icon src={activity.soldOut ? soldOut : available} />
        <Status activity={activity}>
          {activity.soldOut ? "Esgotado" : `${activity.vagas} vagas`}
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
`
const Status = styled.h1`
    font-family: Roboto;
    font-size: 9px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 5px;
    color: ${props => (props.activity.soldOut ? "#CC6666" : "#247A6B")};
`;
