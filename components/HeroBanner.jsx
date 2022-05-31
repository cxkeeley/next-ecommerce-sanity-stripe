import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText1}</p>
                <h3>{heroBanner.midText1}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <img
                    src={urlFor(heroBanner.image)}
                    alt='headphones'
                    className='hero-banner-image'
                />

                <div>
                    <Link href={`/product/${heroBanner.product1}`}>
                        <button type='button'>{heroBanner.buttonText1}</button>
                    </Link>
                </div>

                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.desc1}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
