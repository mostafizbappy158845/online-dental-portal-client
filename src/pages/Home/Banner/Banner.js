import React from 'react';
import chair from '../../../assets/images/chair.png'
import ButtonPrimary from '../../../Components/ButtonPrimary/ButtonPrimary';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div
        style={{
            background:`url(${bg})`,
            backgroundSize: 'cover'
        }}
        className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='dental-chair img'/>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>Getting started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;