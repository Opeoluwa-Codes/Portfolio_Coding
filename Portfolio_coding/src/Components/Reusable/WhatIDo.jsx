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
  justify-content: space-between;
  align-items: center;

  img{
    width: 50px;
  }
`

const InfoWrapper = styled.div`
  width: 82%;
  height: 100%;
`
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: Cormorant;
  color: #bb8a52;

  margin-bottom: 8px;

`
const Description = styled.div`
  font-size: 14px;
  font-weight: 100;
  font-family: Roboto;
  color: white;

  line-height: 20px;

  text-align: left;
`