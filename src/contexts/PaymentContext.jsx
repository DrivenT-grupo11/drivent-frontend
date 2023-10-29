import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [priceTicket, setPriceTicket] = useLocalStorage('priceTicket', 0);
  const [typeTicket, setTypeTicket] = useLocalStorage('typeTicket','');
  const [hotelTicket, setHotelTicket]= useLocalStorage('hotelTicket' ,false)
  const [payment, setPayment] = useState(false);

  return (
    <PaymentContext.Provider value={{ priceTicket, setPriceTicket, typeTicket, setTypeTicket, hotelTicket, setHotelTicket, payment, setPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}