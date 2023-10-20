export function blockedBookingMessage(error) {
  if (error === 'Cannot list hotels! Ticket not paid') {
    return (
      <p>
        Você precisa ter confirmado pagamento antes <br />
        de fazer a escolha de hospedagem.
      </p>
    )
  }
  
  if (error === 'Cannot list hotels! Ticket does not includes hotel') {
    return (
      <p>
        Sua modalidade de ingresso não inclui hospedagem <br />
        Prossiga para a escolha de atividades.
      </p>
    );
  } else {
    return <p>Ocorreu um erro! Tente novamente.</p>
  }
}

export function getHotelCapacity(rooms) {
  let capacity = 0;
  let reserved = 0;
  console.log(rooms[0])
  rooms.forEach((room) => {
    capacity += room.capacity;
    if(room.Booking){
      reserved += room.Booking.length;
    }
  });

  return capacity - reserved;
}

export function getRoomTypes(rooms) {
  const roomTypes = {
    1: false,
    2: false,
    3: false,
  };

  rooms.forEach((room) => {
    roomTypes[room.capacity] = true;
  });

  if (roomTypes[1] && !roomTypes[2] && !roomTypes[3]) {
    return 'Single';
  } else if (roomTypes[2] && !roomTypes[1] && !roomTypes[3]) {
    return 'Double';
  } else if (roomTypes[3] && !roomTypes[1] && !roomTypes[2]) {
    return 'Triple';
  } else if (roomTypes[1] && roomTypes[2] && !roomTypes[3]) {
    return 'Single e Double';
  } else if (roomTypes[1] && roomTypes[3] && !roomTypes[2]) {
    return 'Single e Triple';
  } else if (roomTypes[2] && roomTypes[3] && !roomTypes[1]) {
    return 'Double e Triple';
  } else if (roomTypes[1] && roomTypes[2] && roomTypes[3]) {
    return 'Single, Double e Triple';
  } else {
    return 'Não informado';
  }
}