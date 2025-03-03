import React from 'react'
import styled from 'styled-components';

const BoxDisplay = () => {
  return (
    <BoxWrapper>
      <LeftBox>
        <TopLeftBox>
          <InnerX>
            <Stat>1+</Stat>
            <Label>Years of Experience</Label>
          </InnerX>
        </TopLeftBox>
        <BottomLeftBox>
          <InnerY1>
            <Stat>100%</Stat>
            <Label>Task Completion Rate</Label>
          </InnerY1>
        </BottomLeftBox>
      </LeftBox>

      <RightBox>
        <TopRightBox>
          <InnerY2>
            <Stat>5+</Stat>
            <Label>Projects Completed</Label>
          </InnerY2>
        </TopRightBox>
        <BottomRightBox>
          <InnerZ>
            <Stat>1+</Stat>
            <Label>Clients Satisfied</Label>
          </InnerZ>
        </BottomRightBox>
      </RightBox>
    </BoxWrapper>
  );
};

export default BoxDisplay;

const BoxWrapper = styled.div`
  width: 53%;
  height: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 20px;

  background-color: #7D5A50;
`
const LeftBox = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const RightBox = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const TopLeftBox = styled.div`
  width: 100%;
  height: 50%;
`
const BottomLeftBox = styled.div`
  width: 100%;
  height: 50%;
`
const TopRightBox = styled.div`
  width: 100%;
  height: 50%;
`
const BottomRightBox = styled.div`
  width: 100%;
  height: 50%;
`

const InnerX = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-right: 1px dotted #F5E8C7;
  border-bottom: 1px dotted #F5E8C7;
`

const InnerY1 = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InnerY2 = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: 1px dotted #F5E8C7;
`

const InnerZ = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-left: 1px dotted #F5E8C7;
`

const Stat = styled.div`
  font-size: 50px;
  font-weight: 500;
  font-family: Squada One;

  color: #F5E8C7;

  margin-bottom: 5px;
`

const Label = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: Libre Baskerville;

  color: #F5E8C7;

  margin-top: 5px;
  margin-bottom: 8px;
`