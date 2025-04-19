import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from 'styled-components';

const NextButton = (props) => {
  return (
    <NextWrapper>

        <Links to={props.link}>
            <ArrowLeft/>
        </Links>

    </NextWrapper>
  );
};

export default NextButton;

const NextWrapper = styled.div`

    width: fit-content;
    height: fit-content;
    margin: 0px;
    padding: 0px;

    position: absolute;
    bottom: 0px;

    @media (min-width: 499px){
        display: none;
    }

`

const Links = styled(Link)`
  
  
`
const ArrowLeft = styled(FaLongArrowAltRight)`
   font-size: 30px;
   color: white;
   transition: all 1s ease-in-out;
   
   &:hover{
    transform: scale(1.05);
    color: #c0c0c0a0;
   }
`