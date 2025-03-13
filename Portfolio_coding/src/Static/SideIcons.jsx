import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTalk } from "react-icons/gi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";

const SideIcons = () => {
  return (
    <SideIconWrapper>
      <Links to='/about'><About/></Links>
      <ThreeVerticalDots/>
      <Links to='/resume'><Resume/></Links>
      <ThreeVerticalDots/>
      <Links to='/toolstack'><ToolStack/></Links>
      <ThreeVerticalDots/>
      <Links to='/portfolio'><Portfolio/></Links>
      <ThreeVerticalDots/>
      <Links to='/contact'><Contact/></Links>
    </SideIconWrapper>
  );
};

export default SideIcons;

const SideIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 32%;
  right: 1.5%;
  z-index: 1000000;

  box-sizing: border-box;
  
  width: 40px;
  height: fit-content;

  background-color: transparent;

  border: 1px #bb8a52 solid;
  
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 400px;
`

const ToolStack = styled(VscTools)`
  font-size: 18px;
  color: #bb8a52;
  :hover{
    color: white;
  }
`
const About = styled(FaRegUser)`
  font-size: 18px;
  color: #bb8a52;
  :hover{
    color: white;
  }
`
const Resume = styled(IoMdBriefcase)`
  font-size: 18px;
  color: #bb8a52;
  :hover{
    color: white;
  }
`
const Portfolio = styled(GoFileSubmodule)`
  font-size: 18px;
  color: #bb8a52;
  :hover{
    color: white;
  }
`

const Contact = styled(GiTalk)`
  font-size: 18px;
  color: #bb8a52;
  :hover{
    color: white;
  }
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
 font-size: 18px;
 color: #bb8a52;
 margin-top: 5px;
 margin-bottom: 5px;
`
const Links = styled(Link)`
  
  text-decoration: none
`