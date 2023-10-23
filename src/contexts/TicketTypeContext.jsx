import { createContext, useContext, useState } from 'react';

const TicketTypeContext = createContext();

export function TicketTypeProvider({ children }) {
  const [ticketType, setTicketType] = useState({
    name: null,
    price: 0,
    isRemote: false,
    includesHotel: false,
    id: null,
  });

  return (
    <TicketTypeContext.Provider value={{ ticketType, setTicketType }}>
      {children}
    </TicketTypeContext.Provider>
  );
}

export function useTicketType() {
  return useContext(TicketTypeContext);
}
