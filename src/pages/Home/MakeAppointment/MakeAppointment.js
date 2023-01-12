import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
const MakeAppointment = () => {
    return (
        <section  className='mt-16'
        style={{
            background:`url(${appointment})`
        }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-32 lg:w-1/2 hidden md:block rounded-lg shadow-2xl" alt='doctor img' />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla officia sint architecto recusandae.
                        Dolor nesciunt perferendis unde facere cumque laborum porro, eos, mollitia repellendus quod distinctio optio!
                        Culpa soluta nam eius fugiat numquam, vel molestiae animi expedita, veritatis tempora, explicabo pariatur.
                        Similique ut deserunt vero dignissimos sapiente consequuntur, eius totam ad quod quidem assumenda ea.
                        Similique nisi ut iusto unde aliquam, error nihil minima? Quisquam nostrum facere voluptate! Iure!.</p>
                        <ButtonPrimary>Appointment</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;