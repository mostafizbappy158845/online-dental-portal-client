import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentoptions, setAppointmentoptions] = useState([])

    useEffect(() => {
      fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data =>setAppointmentoptions(data))
    }, [])
    
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on : {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentoptions.map(option =><AppointmentOption
                    key={option._id}
                    appointmentOption = {option}

                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;