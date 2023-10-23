import React, { createContext, useContext, useState } from 'react';

const TicketTypeContext = createContext();

export function TicketTypeProvider({ children }) {
  const [ticketType, setTicketType] = useState({}); 

  return (
    <TicketTypeContext.Provider value={{ ticketType, setTicketType }}>
      {children}
    </TicketTypeContext.Provider>
  );
}

export function useTicketType() {
  return useContext(TicketTypeContext);
}
