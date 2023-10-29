import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { RoomsContainer } from './RoomsContainer';
import RoomCard from './RoomCard';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import { toast } from 'react-toastify';
import useUpdateBooking from '../../hooks/api/useUpdateRoom';

export default function RoomListing({
  rooms,
  selectedRoom,
  setSelectedRoom,
  changingRoom,
  setChangingRoom,
  getBooking,
  setSelectedHotel
}) {
 //console.log(rooms)
  const { saveBookingLoading, saveBooking } = useSaveBooking();
  const { updateBookingLoading, updateBooking } = useUpdateBooking();
  console.log(updateBookingLoading, saveBookingLoading)

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

  async function bookRoom() {
    try {
      await saveBooking({ roomId: selectedRoom.id });
      getBooking();
    } catch (err) {
      toast('Não foi possível reservar o quarto!');
    }
  }

  async function changeRoom() {
    try {
      await updateBooking({ roomId: selectedRoom.id }, selectedRoom.capacity);
      getBooking();
      setChangingRoom(false);
      setSelectedHotel(null);
      setSelectedRoom(null);
      // window.location.reload()
    } catch (err) {
      toast('Não foi possível alterar o quarto!');
    }
  }
  //atualizar o quarto reservado sem reload
  getBooking()

  return (
    <>
      <StyledTypography variant="h5" color="textSecondary">
        Ótima pedida! Agora escolha seu quarto:
      </StyledTypography>
      <RoomsContainer>{renderRoomList()}</RoomsContainer>
      {selectedRoom ? (
        <ReserveRoomButton
          disabled={saveBookingLoading || updateBookingLoading}
          onClick={changingRoom ? changeRoom : bookRoom}
        >
          RESERVAR QUARTO
        </ReserveRoomButton>
      ) : null}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 16px !important;
`;

const ReserveRoomButton = styled.button`
  width: 182px;
  height: 37px;
  border-radius: 4px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
  border: none;
  cursor: pointer;
`;