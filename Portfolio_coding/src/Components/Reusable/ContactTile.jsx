import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactTile = (props) => {
  return (
    
    <ContactWrapper>
      <ContactIcon>
        {props.icon}
      </ContactIcon>
      
      <ContactType to={props.link}>
        {props.type}
      </ContactType>
    </ContactWrapper>

  );
};

export default ContactTile;

const ContactWrapper = styled.div`
  width: 350px;
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ContactIcon = styled.div`
  width: 30%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #bb8a52;
`
const ContactType = styled(Link)`
  width: 60%;
  height: 100px;

  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 300;
  font-family: Roboto;

  display: flex;
  justify-content: start;
  align-items: center;
`