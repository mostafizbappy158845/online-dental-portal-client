import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name, slots } = treatment; //treatment is appointment option just differnt name.
    const date = format(selectedDate, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentdate:date,
            treatment:treatment.name,
            patient:name,
            slot,
            email,
            phone,


        }
        //send data to server
        //once data is saved then close the modal
        //display success toast
        console.log(booking);
        setTreatment(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 grid-cols-1 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            
                            {
                                slots.map((slot,i) => <option 
                                value={slot}
                                key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="text" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className="btn bgtn-accent w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;