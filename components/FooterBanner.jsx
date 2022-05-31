import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText2,
    largeText3,
    saleTime,
    smallText2,
    midText2,
    product2,
    buttonText2,
    desc2,
    imageFooter
  }
}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText2}</p>
          <h3>{midText2}</h3>
          <p>{desc2}</p>
          <Link href={`/product/${product2}`}>
            <button type='button'>{buttonText2}</button>
          </Link>
        </div>

        <img src={urlFor(imageFooter)} className='footer-banner-image' alt='' />
      </div>
    </div>
  );
};

export default FooterBanner;
