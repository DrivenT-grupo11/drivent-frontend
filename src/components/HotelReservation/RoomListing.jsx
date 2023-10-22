import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { RoomsContainer } from './RoomsContainer';
import RoomCard from './RoomCard';

export default function RoomListing({
  rooms,
  selectedRoom,
  setSelectedRoom
}) {
 //console.log(rooms)
  const renderRoomList = () => {
    if (rooms) {
      return rooms
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((room) => (
          <RoomCard key={room.id} room={room} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
        ));
    } else {
      return (
        <StyledTypography variant="h5" color="textSecondary">
          Carregando...
        </StyledTypography>
      );
    }
  };

  return (
    <>
      <StyledTypography variant="h5" color="textSecondary">
        Ótima pedida! Agora escolha seu quarto:
      </StyledTypography>
      <RoomsContainer>{renderRoomList()}</RoomsContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 16px !important;
`;
