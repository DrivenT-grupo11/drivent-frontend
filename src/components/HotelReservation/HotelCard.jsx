import styled from 'styled-components';
import useHotelDetails from '../../hooks/api/useHotelDetails';
import { useEffect, useState } from 'react';
import { getHotelCapacity, getRoomTypes } from './hotelUtils';

export default function HotelCard({ hotel, setSelectedHotel, selectedHotel, setSelectedRoom }) {
  const { hotelDetails } = useHotelDetails(hotel.id);
  const [emptyVacancy, setEmptyVacancy] = useState('Carregando');
  const [roomTypes, setRoomTypes] = useState('Carregando');


  useEffect(() => {
    if (hotelDetails) {
      setEmptyVacancy(getHotelCapacity(hotelDetails.Rooms));
      setRoomTypes(getRoomTypes(hotelDetails.Rooms));
    }
  }, [hotelDetails]);

  function selectCard() {
    console.log('Clicou no cartão:', hotel.id);
    setSelectedHotel(hotelDetails);
    
    if (selectedHotel && hotel.id !== selectedHotel.id) {
      setSelectedRoom(null);
    }
  };

  const cardColor = () => {
    if ((selectedHotel && selectedHotel.id === hotel.id)) {
      return '#FFEED2';
    }
    return '#EBEBEB';
  };

  return (
    <HotelCOntainer onClick={selectCard} cardColor={cardColor}>
      <Picture src={hotel.image} />
      <Name>{hotel.name}</Name>
      <Title>{'Tipos de acomodação:'}</Title>
      <Content>{roomTypes}</Content>
      <Title>{'Vagas disponíveis:'}</Title>
      <Content>{emptyVacancy}</Content>
    </HotelCOntainer>
  );
}

const HotelCOntainer = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background-color: ${(props) => props.cardColor};
  padding: 16px 14px;
  box-sizing: border-box;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Picture = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  color: #343434;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  max-width: 168px;
  max-height: 23px;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #3c3c3c;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 168px;
  max-height: 14px;
  margin-bottom: 2px;
`;

const Content = styled.h3`
  color: #3c3c3c;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 168px;
  max-height: 14px;
  margin-bottom: 14px;
`;