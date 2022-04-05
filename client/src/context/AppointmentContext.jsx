import { createContext, useState } from 'react';
export const ScheduleContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const [Appointment, setAppointment] = useState({});
    return (
        <ScheduleContext.Provider value={{Appointment, setAppointment} }>
            {children}
        </ScheduleContext.Provider>
    )
};