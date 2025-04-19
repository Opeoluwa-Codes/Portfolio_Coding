import React from 'react'
import styled from 'styled-components';
import { Link, useLocation} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { GiTalk } from "react-icons/gi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";

const SideIcons = () => {

  const location = useLocation();
  const {pathname} = location;
  return (
    <SideIconWrapper>
      <Links to='/'><Home active={pathname === "/"}/></Links>
      <ThreeVerticalDots/>
      <Links to='/about'><About active={pathname === "/about"}/></Links>
      <ThreeVerticalDots/>
      <Links to='/resume'><Resume active={pathname === "/resume"}/></Links>
      <ThreeVerticalDots/>
      <Links to='/toolstack'><ToolStack active={pathname === "/toolstack"}/></Links>
      <ThreeVerticalDots/>
      <Links to='/portfolio'><Portfolio active={pathname === "/portfolio"}/></Links>
      <ThreeVerticalDots/>
      <Links to='/contact'><Contact active={pathname === "/contact"}/></Links>
    </SideIconWrapper>
  );
};

export default SideIcons;

const SideIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);

  z-index: 1000000;

  box-sizing: border-box;
  
  width: 40px;
  height: fit-content;

  background-color: transparent;

  border: 1px white solid;
  
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: 915px) {
    display: none;

  }

  @media (max-width: 767px) {
    width: 25px;
    right: 1%;

  }
`

const Home = styled(IoMdHome)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#c0c0c0a0' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`

const ToolStack = styled(VscTools)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#cccccc' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const About = styled(FaRegUser)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#cccccc' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }
  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Resume = styled(IoMdBriefcase)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#cccccc' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Portfolio = styled(GoFileSubmodule)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#cccccc' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`

const Contact = styled(GiTalk)`
  font-size: 18px;
  color: white;
  transition: all 1s ease-in-out;

  color: ${props => props.active ? '#cccccc' : 'white'};

  &:hover{
    color: #cccccc;
    transform: scale(1.2);
  }

  @media (max-width: 596px) {
    font-size: 15px;
  }
`
const ThreeVerticalDots = styled(PiDotsThreeVerticalBold)`
 font-size: 18px;
 color: white;
 margin-top: 5px;
 margin-bottom: 5px;

 @media (max-width: 596px) {
    font-size: 15px;
  }
`
const Links = styled(Link)`
  
  text-decoration: none
`