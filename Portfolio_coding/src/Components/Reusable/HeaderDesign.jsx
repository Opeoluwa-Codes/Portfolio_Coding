import React from 'react'
import styled from 'styled-components';

const HeaderDesign = (props) => {
  return (

    <HeaderDesignWrapper>
      <h1>{props.title}</h1>
    </HeaderDesignWrapper>

  );
};

export default HeaderDesign;

const HeaderDesignWrapper = styled.div`
  width: 970px;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  box-sizing: border-box;

  border: 1px dashed #7D5A50;

  h1{
    font-size: 80px;
    font-weight: 900;
    color: #7D5A50;

    margin: 0px;
  }
`