import React, { useEffect } from 'react';
import video from '../images/Walk.mp4';
const Test = () => {
  return (
    <div>
      <h1>sehun</h1>
      <video width='1000rem' loop autoPlay muted>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Test;
