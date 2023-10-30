import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotel';
import BlockedBooking from './BlockedBooking';
import { useState } from 'react';
import HotelListing from './HotelListing';
import RoomListing from './RoomListing';
import useBooking from '../../hooks/api/useBooking';
import BookingResume from './BookinngResume';
import useEnrollment from '../../hooks/api/useEnrollment';
import PaymentContext from '../../contexts/PaymentContext';
import { useContext } from 'react';

export default function HotelReservation() {
  const { payment, typeTicket } = useContext(PaymentContext);
  const hotel = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { booking, getBooking } = useBooking();
  const [changingRoom, setChangingRoom] = useState(false);

  //console.log(hotel.hotels)

  function hotelsContent(){ 
    if (hotel.hotelsError) {
      return <BlockedBooking error={hotel.hotelsError} />;
    } else if ((!hotel.hotelsError && !booking) || changingRoom){
      return (
        <>
          <HotelListing
            hotelList={hotel.hotels}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            setSelectedRoom={setSelectedRoom}
          />
          {selectedHotel ? (
            <RoomListing
              rooms={selectedHotel.Rooms}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              setSelectedHotel={setSelectedHotel}
              getBooking={getBooking}
              changingRoom={changingRoom}
              setChangingRoom={setChangingRoom}
            />
          ) : null}
        </>
      );
    } else if (!hotel.hotelsError && booking) {
      if (hotel.hotels) {
        const reservedHotel = hotel.hotels.find((hotel) => hotel.id === booking.Room.hotelId);

        return <BookingResume hotel={reservedHotel} booking={booking} setChangingRoom={setChangingRoom}/>;
      }
    }
  }

  return (
    typeTicket === 'Online' && payment ? <NotPayment>Sua modalidade de ingresso não necessita escolher
    atividade. Você terá acesso a todas as atividades.</NotPayment> : !payment ? <NotPayment className="validation">Você precisa ter confirmado pagamento antes
        de fazer a escolha de atividades</NotPayment> : <>
      <StyledTypography variant="h4"> Escolha de hotel e quarto</StyledTypography>
      {hotelsContent()}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

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