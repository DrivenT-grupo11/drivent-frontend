import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotel';
import BlockedBooking from './BlockedBooking';
import { useState } from 'react';
import HotelListing from './HotelListing';
import RoomListing from './RoomListing';

export default function HotelReservation() {
  
  const hotel = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  //console.log(hotel.hotels)

  function hotelsContent(){ 
    if (hotel.hotelsError) {
      return <BlockedBooking error={hotel.hotelsError} />;
    } else if (!hotel.hotelsError){
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
            />
          ) : null}
        </>
      )
    }
  }

  return (
    <>
      <StyledTypography variant="h4"> Escolha de hotel e quarto</StyledTypography>
      {hotelsContent()}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;