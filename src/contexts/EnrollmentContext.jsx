import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const EnrollmentContext = createContext();
export default EnrollmentContext;

export function EnrollmentProvider({ children }) {
  const [EnrollmentData, setEnrollmentData] = useLocalStorage('EnrollmentData', {});
  
  return (
    <EnrollmentContext.Provider value={{ EnrollmentData, setEnrollmentData }}>
      {children}
    </EnrollmentContext.Provider>
  );
}
