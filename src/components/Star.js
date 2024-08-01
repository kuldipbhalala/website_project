import React from 'react';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

function Star({ stars, reviews  }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='icon' />
        ) : stars >= number ? (
          <FaStarHalfAlt className='icon' />
        ) : (
          <AiOutlineStar className='icon' />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='icon-style' style={{ display: 'flex', whiteSpace: 1 / 1}}>
        {ratingStar}
        <p>{reviews}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  justify-content: flex-start;
  gap:20px;
  margin-top:20px;
  margin-bottom:15px;

  .icon {
    font-size: 1rem;
    color: orange;
    min-height: 1.5rem;
    min-width: 1.9rem;
  }
 
  p {
    margin: 0;
    padding-left: 1.2rem;
  }

`;

export default Star;
