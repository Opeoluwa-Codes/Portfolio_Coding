import React from 'react'
import styled from 'styled-components';

const WhatIDo = (props) => {
  return (
    <WhatIDoWrapper>
      <img src={props.image} alt="" />

      <InfoWrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </InfoWrapper>
    </WhatIDoWrapper>
  );
};

export default WhatIDo;

const WhatIDoWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: start;

  gap: 10px;

  @media (max-width: 618px) {
    gap: 4px;

  }

  img{
    width: 40px;

    @media (max-width: 594px) {
      display: none;

    }
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: Cormorant;
  color: white;

  @media (max-width: 705px) {
    font-size: 14px;

  }

`
const Description = styled.div`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 200;

  color: #cccccc;

  line-height: 20px;

  text-align: left;

  @media (max-width: 705px) {
    font-size: 12px;

  }
`