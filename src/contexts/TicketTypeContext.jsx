import { createContext, useContext, useState } from 'react';

const TicketTypeContext = createContext();

export function TicketTypeProvider({ children }) {
  const [ticketType, setTicketType] = useState(null);
  const [ticketId, setTicketId] = useState(null);

  return (
    <TicketTypeContext.Provider value={{ ticketType, setTicketType, ticketId, setTicketId }}>
      {children}
    </TicketTypeContext.Provider>
  );
}

export function useTicketType() {
  return useContext(TicketTypeContext);
}
