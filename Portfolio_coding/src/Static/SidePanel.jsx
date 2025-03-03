import React from 'react'
import styled from 'styled-components';
import Picture from '../Assets/JPG/Picture.jpg'
import { RxDotFilled } from "react-icons/rx";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const SidePanels= () => {
  return (
    <SideIconsWrapper>
      <PictureDiv>
        <img src={Picture} alt="#" />
      </PictureDiv>

      <NavList>
        <Dots>
          <FilledDot/>
          <ThreeVerticalDots/>
        </Dots>

        <p>HOME</p>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <p>ABOUT ME</p>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <p>RESUME</p>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <p>PORTFOLIO</p>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <p>CONTACT</p>

        <Dots>
          <ThreeVerticalDots/>
          <FilledDot/>
        </Dots>

      </NavList>
    </SideIconsWrapper>
  );
};

export default SidePanels;

const SideIconsWrapper = styled.div`
  width: 12%;
  height: 100vh;

  position: fixed;
  left: 0px;
  z-index: 1000000;

  box-sizing: border-box;

  background-color: #7D5A50;
`
const PictureDiv = styled.div`
  width: 100%;
  height: 28%;

  margin-bottom: 70px;

  img{
    width: inherit;
    height: 100%;
  }
`
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 14px;
    color: #F5E8C7;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  p:hover{
    color: #E5B299;
  }
`
const Dots = styled.div`
  display: flex;
  flex-direction: column;

  color: #F5E8C7;
`
const FilledDot = styled(RxDotFilled)`
  color: #F5E8C7
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
  color: #F5E8C7;
` 