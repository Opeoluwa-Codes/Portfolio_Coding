import React from 'react'
import styled from 'styled-components';
import HeaderDesign from '../Components/Reusable/HeaderDesign';
import ContactTile from '../Components/Reusable/ContactTile';
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <ContactWrapper>
      <HeaderDesign title="CONTACT"/>
      <MainSection>
        <h2 className='top'>Contact me via:</h2>
        <Display>
          <ContactTile icon={<Call/>} type="(+234)-7067007134"/>
          <ContactTile icon={<Whatsapp/>} type="(+234)-7067007134"/>
          <ContactTile icon={<Twitter/>} type="" link ="https://x.com/code____r?t=soOD2wIx_IqSMcGd3u9-8w&s=09"/>
          <ContactTile icon={<Gmail/>} type="opeoluwa.codes@gmail.com"/>
        </Display>
      </MainSection>
    </ContactWrapper>
  );
};

export default ContactPage;

const ContactWrapper = styled.div`
  height: 100vh;

  margin-left: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding-top: 2%;
  padding-bottom: 2%;

  background-color: #0b1e26;
`
const MainSection = styled.div`
  width: 970px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;
  
  .top{
    font-size: 30px;
    font-weight: 500;
    color: #bb8a52;

    margin-top: 0px;
  }

`
const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 100%;
  height: fit-content;

  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
`
const Call = styled(IoCallOutline)`
  font-size: 50px;
  color: #bb8a52;
`
const Whatsapp = styled(FaWhatsapp)`
  font-size: 50px;
  color: #bb8a52;
`
const Gmail = styled(CgMail)`
  font-size: 50px;
  color: #bb8a52;
`
const Twitter = styled(FaXTwitter)`
  font-size: 50px;
  color: #bb8a52;
`