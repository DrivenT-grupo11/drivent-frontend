import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotel';
import BlockedBooking from './BlockedBooking';
import { useState } from 'react';
import HotelListing from './HotelListing';

export default function HotelReservation() {
  
  const hotel = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(null);
  //console.log(hotel)

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
          />
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