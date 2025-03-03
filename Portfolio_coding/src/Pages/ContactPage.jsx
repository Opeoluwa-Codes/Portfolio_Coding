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
        <h2 className='top'>If you wish to work with me, reach out.</h2>
        <Display>
          <ContactTile icon={<Call/>} type="(+234)-7067007134"/>
          <ContactTile icon={<Whatsapp/>} type="(+234)-7067007134"/>
          <ContactTile icon={<Twitter/>} type="@code____r" link ="https://x.com/code____r?t=soOD2wIx_IqSMcGd3u9-8w&s=09"/>
          <ContactTile icon={<Gmail/>} type="opeoluwa.codes@gmail.com"/>
        </Display>
        <h2 className='thankYou'>Thank you!</h2>
      </MainSection>
    </ContactWrapper>
  );
};

export default ContactPage;

const ContactWrapper = styled.div`
  width: 87.92%;
  height: 100vh;

  position: fixed;
  left: 164px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 30px;
`
const MainSection = styled.div`
  width: 970px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;
  padding-left: 30px;
  
  .top{
    font-size: 30px;
    font-weight: 500;
    color: #7D5A50;

    margin-top: 0px;
  }

  .thankYou{
    font-size: 30px;
    font-weight: 500;
    color: #7D5A50;

    width: 100%;

    margin-bottom: 0px;

    text-align: center;
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
  font-size: 60px;
  color: #7D5A50;
`
const Whatsapp = styled(FaWhatsapp)`
  font-size: 60px;
  color: #7D5A50;
`
const Gmail = styled(CgMail)`
  font-size: 60px;
  color: #7D5A50;
`
const Twitter = styled(FaXTwitter)`
  font-size: 60px;
  color: #7D5A50;
`