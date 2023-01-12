import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
    
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img:fluoride
        },
        {
            id:2,
            name:'Cavity Treatment',
            description:'Cavity varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img:cavity
        },
        {
            id:3,
            name:'Whitening Treatment',
            description:'Whitening varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img:whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>

            </div>
            <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service =><Service
                        key={service.id}
                        service = {service}

                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;