import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { HotelsContainer } from './HotelsContainer';
import HotelCard from './HotelCard';

export default function HotelListing({ hotelList, selectedHotel, setSelectedHotel, setSelectedRoom }) {
  const [hotels, setHotels] = useState(false);

  useEffect(() => {
    setHotels(hotelList);
  }, [hotelList]);

  function renderHotelList (){
    if(hotels) {
      return hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} setSelectedHotel={setSelectedHotel} selectedHotel={selectedHotel} setSelectedRoom={setSelectedRoom}/>
      ));
    } else {
      return <StyledTypography variant='h5' color='textSecondary'>Carregando...</ StyledTypography>;  
    }
  };

  return (
    <>
      <StyledTypography variant='h5' color='textSecondary'>Primeiro, escolha seu hotel</StyledTypography>
      <HotelsContainer>
        {renderHotelList()}
      </HotelsContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 16px!important;
`;