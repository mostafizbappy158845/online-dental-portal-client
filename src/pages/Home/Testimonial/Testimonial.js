import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name:'Andrew simon',
            reviewing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero possimus, doloribus dolorem error ipsa.',
            img: people1,
            location:'London'
        },
        {
            _id:2,
            name:'Henrey simon',
            reviewing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero possimus, doloribus dolorem error ipsa.',
            img: people2,
            location:'califonia'
        },
        {
            _id:3,
            name:'Simon costa',
            reviewing: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero possimus, doloribus dolorem error ipsa.',
            img: people3,
            location:'tokyo'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div className="">
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="quote img" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key= {review._id}
                    review= {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;