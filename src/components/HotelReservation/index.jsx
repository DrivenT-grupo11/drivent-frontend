import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotel';
import BlockedBooking from './BlockedBooking';

export default function HotelReservation() {
  
  const hotel = useHotels();
  console.log(hotel)

  function hotelsContent(){ 
    if (hotel.hotelsError) {
      return <BlockedBooking error={hotel.hotelsError} />;
    }
    return <p>oi</p>
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
