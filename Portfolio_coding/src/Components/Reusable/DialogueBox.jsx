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
                        <li>{props.seven}</li>
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
  max-height: 90vh;
  width: 85%;

  box-sizing: border-box;
`

const Description = styled.div`

  margin-top: 20px;
  color: white;

  font-size: 14px;
  font-weight: 200;

`

const Box = styled(motion.div)`

  position: absolute;
  top: 3%;
  left: 8%;

  background: white;
  border: 2px #bb8a52 solid;

  width: 85%;
  height: 90vh;
  
  box-sizing: border-box;


  .p1{
    color: #0b1e26;

    font-size: 14px;
    font-weight: 400;

    margin-left: 100px;
  }

  .p2{
    color: #0b1e26;

    font-size: 14px;
    font-weight: 400;

    margin-left: 100px;

    margin-bottom: 30px;
  }

  ul{

    li{
      color: #0b1e26;

      font-size: 14px;
      font-weight: 400;

      margin-bottom: 30px;
      margin-left: 150px;

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
  padding-right: 10px;

  margin-bottom: 30px;

`

const CloseIcon = styled(MdClose)`
  color: #bb8a52;
  font-size: 30px;

`