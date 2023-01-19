import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentoptions, setAppointmentoptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentoptions = [] ,refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json()
            return data;
        }
    })

// useEffect(() => {
//     fetch('http://localhost:5000/appointmentOptions')
//         .then(res => res.json())
//         .then(data => setAppointmentoptions(data))
// }, [])

    if(isLoading){
        return <Loading></Loading>
    }

return (
    <section className='mt-16'>
        <p className='text-center text-secondary font-bold'>Available Appointments on : {format(selectedDate, 'PP')}</p>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                appointmentoptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}

                ></AppointmentOption>)
            }
        </div>
        {
            treatment &&
            <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch = {refetch}
            ></BookingModal>}
    </section>
);
};

export default AvailableAppointment;