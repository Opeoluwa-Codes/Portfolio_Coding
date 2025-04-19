import React from 'react'
import { useState } from 'react'
import { MdClose } from "react-icons/md";
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';


const DialogueBox = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <BoxWrapper>

            <a onClick={(e)=>{e.preventDefault(); setIsOpen(true)}}>Read more</a>

            <AnimatePresence>
              { isOpen && (

                <Box
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dialogVariants}
                >
                <Close onClick={() => setIsOpen(false)}>
                    <CloseIcon/>
                </Close>
                <p className='p1'>{props.from}</p>
                <p className='p2'>{props.to}</p>
                <Description>
                    <ul>
                        <li>{props.one}</li>
                        <li>{props.two}</li>
                        <li>{props.three}</li>
                        <li>{props.four}</li>
                        <li>{props.five}</li>
                        <li>{props.six}</li>
                    </ul>
                </Description>
                </Box>
                          )
              }
            </AnimatePresence>


        </BoxWrapper>
  );
;}

export default DialogueBox;

const dialogVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};


const BoxWrapper = styled.div`

  min-width: 30%;
  height: fit-content;
  flex-shrink: 0px;
  
  a{
    margin-top: 0px;

    width: fit-content;
    height: 100%;

    font-size: 14px;
    font-weight: 200;
    color: #cccccc;

    text-decoration: underline;

    display: inline-block;

    cursor: pointer;

    @media (max-width: 705px) {
      font-size: 12px;

    }
  }

  a:hover{
    transform: scale(1.05);
  }

`

const Description = styled.div`

  margin-top: 20px;
  color: white;

  font-size: 14px;
  font-weight: 200;

  width: 89.5%;

  @media (max-width: 914px) {
    width: 78%;

  }

  @media (max-width: 615px) {
    text-align: left;
  }

`

const Box = styled(motion.div)`

  position: absolute;
  top: 0%;
  left: 0%;

  background: black;

  height: 100vh;
  width: 100vw;

  padding-left: 20.5%;
  padding-top: 2%;
  padding-bottom: 2%;
  
  box-sizing: border-box;



  @media (max-width: 914px) {
    padding-top: 0%;

  }


  .p1{
    color: white;

    font-size: 20px;
    font-weight: 400;

    font-family: Montserrat;

    width: 89.5%;

    @media (max-width: 914px) {
        width: 78%;

    }

    @media (max-width: 615px) {
      text-align: left;
    }

  }

  .p2{
    color: white;

    font-size: 20px;
    font-weight: 400;

    font-family: Montserrat;

    width: 89.5%;

    margin-bottom: 2%;

    @media (max-width: 914px) {
        width: 78%;
    }

    @media (max-width: 615px) {
      text-align: left;
    }

  }

  ul{

    li{
      color: #cccccc;

      font-size: 14px;
      font-weight: 200;

      margin-bottom: 30px;
      margin-left: 5%;

      @media (max-width: 914px) {
        width: 78%;
        margin-bottom: 5%;

      }

    }
  }

`

const Close = styled.div`

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row-reverse;

  box-sizing: border-box;

  padding-top: 10px;

  margin-bottom: 30px;

  cursor: pointer;

  @media(max-width: 912px) {
    padding-right: 15px;
  }

  @media(max-width: 768px) {
    padding-right: 0px;
  }

`

const CloseIcon = styled(MdClose)`
  color: white;
  font-size: 30px;


  @media(max-width: 768px) {
    font-size: 22px;
  }

  &:hover{
    color: red;
  }
`