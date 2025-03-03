import React from 'react'
import styled from 'styled-components';
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { TbDualScreen } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


const SideIcons = () => {
  return (
    <SidePanelWrapper>
      <Home/>
      <ThreeVerticalDots/>
      <About/>
      <ThreeVerticalDots/>
      <Resume/>
      <ThreeVerticalDots/>
      <Portfolio/>
      <ThreeVerticalDots/>
      <Contact/>
    </SidePanelWrapper>
  );
};

export default SideIcons;

const SidePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 28%;
  right: 1.5%;
  z-index: 1000000;

  box-sizing: border-box;
  
  width: 40px;
  height: fit-content;

  background-color: #7D5A50;

  border-radius: 20px;
  
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 400px;
`

const Home = styled(IoHome)`
  font-size: 18px;
  color: #F5E8C7;
  :hover{
    color: #E5B299;
  }
`
const About = styled(FaRegUser)`
  font-size: 18px;
  color: #F5E8C7;
  :hover{
    color: #E5B299;
  }
`
const Resume = styled(BsFillBriefcaseFill)`
  font-size: 18px;
  color: #F5E8C7;
  :hover{
    color: #E5B299;
  }
`
const Portfolio = styled(TbDualScreen)`
  font-size: 18px;
  color: #F5E8C7;
  :hover{
    color: #E5B299;
  }
`

const Contact = styled(MdConnectWithoutContact)`
  font-size: 18px;
  color: #F5E8C7;
  :hover{
    color: #E5B299;
  }
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
 font-size: 18px;
 color: #F5E8C7;
 margin-top: 5px;
 margin-bottom: 5px;
`