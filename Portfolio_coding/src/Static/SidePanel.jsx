import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Picture from '../Assets/JPG/Picture.jpg'
import { RxDotFilled } from "react-icons/rx";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const SidePanels= () => {
  return (
    <SideIconsWrapper>
      {/* <PictureDiv>
        <img src={Picture} alt="#" />
      </PictureDiv> */}

      <NavList>
        <Dots>
          <FilledDot/>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/'><p>HOME</p></Links>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/about'><p>ABOUT ME</p></Links>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/resume'><p>MY RESUME</p></Links>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/toolstack'><p>MY TOOLSTACK</p></Links>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/portfolio'><p>MY PORTFOLIO</p></Links>

        <Dots>
          <ThreeVerticalDots/>
        </Dots>

        <Links to='/contact'><p>CONTACT</p></Links>

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
  width: 165px;
  height: 100vh;

  position: fixed;
  left: 0px;
  z-index: 1000000;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0b1e26;
  border-right: 1px #bb8a52 solid;
`
// const PictureDiv = styled.div`
//   width: 100%;
//   height: 28%;

//   margin-bottom: 70px;

//   img{
//     width: inherit;
//     height: 100%;
//   }
// `
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 14px;
    font-weight: 600;
    color: #bb8a52;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  p:hover{
    color: white;
  }
`

const Links = styled(Link)`
  
  text-decoration: none
`

const Dots = styled.div`
  display: flex;
  flex-direction: column;

  color: #bb8a52;
`
const FilledDot = styled(RxDotFilled)`
  color: #bb8a52
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
  color: #bb8a52;
` 