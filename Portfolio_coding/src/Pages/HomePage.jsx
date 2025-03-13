import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {styled} from 'styled-components';
import Picture from '../Assets/JPG/Picture.jpg'



const HomePage = () => {
  const name = "OPEOLUWA"
  const action = "CODES"
  const [displayedName, setDisplayedName] = useState("");
  const [displayedAction, setDisplayedAction] = useState("");
  const [currentIndexOne, setCurrentIndexOne] = useState(0);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndexOne < name.length){
        setDisplayedName((prev) => prev + name[currentIndexOne]);
        setCurrentIndexOne((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 100); 

    return () => clearInterval(interval);
    
  }, [currentIndexOne, name]);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndexTwo < action.length){
        setDisplayedAction((prev) => prev + action[currentIndexTwo]);
        setCurrentIndexTwo((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 1000); 

    return () => clearInterval(interval);
    
  }, [currentIndexTwo, action]);

  return (
    <HomeWrapper>

      <LeftSide>
        <BusinessName>

          <NOne>
            {displayedName}
          </NOne>
          <NTwo>
            {displayedAction}
          </NTwo>

        </BusinessName>
        <RoleDisplay>FrontEnd Developer</RoleDisplay>
        <p>My passion is building scalable, easy-to-use, and efficient solutions using the latest web technologies. I am open to productive collaborations. I am eager to work on exciting projects. Let's create something amazing together!</p>
        <Links to='/about'><button>MORE ABOUT ME</button></Links>
      </LeftSide>
      
      <RightSide>
        <FirstBox>
          
        </FirstBox>

        <SecondBox>

            <img src={Picture} alt="Opeoluwa" />

        </SecondBox>
        
      </RightSide>

    </HomeWrapper>
    
  );
};

export default HomePage;

const HomeWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;

  background-color: #0b1e26;

`
const LeftSide = styled.div`
  width: 70%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  box-sizing: border-box;
  padding: 5%;

  position: relative;

  p{
    font-size: 14px;
    
    font-weight: 100;

    color: white;

    line-height: 32px;

    text-align: left;

    margin-bottom: 50px;

    width: 70%;

  }

  button{
    height: 40px;
    width: fit-content;

    border: 1px #bb8a52 solid;

    background-color: transparent;
    color: #bb8a52;

    font-size: 14px;
    font-weight: 600;
    font-family: Roboto;

    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
  }

  button:hover{
    border-color: white;
    color: white;
  }
`

const BusinessName = styled.div`
  
  position: absolute;
  top: 5%;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  font-size: 14px;

  letter-spacing: 5px;
`

const NOne = styled.div`
  color: white;

`

const NTwo = styled.div`
  color: #bb8a52;
`

const RightSide = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #0b1e26;

  position: relative;

  border-left: 1px #bb8a52 solid;

  img{
    width: 50%;
    height: 50%;
  }
`

const RoleDisplay = styled.div`
  width: fit-content;
  height: 25px;

  font-size: 50px;
  font-weight: 800;
  font-family: Cormorant;

  letter-spacing: 2px;

  color: #bb8a52;
  
  display: flex;
  align-items: center;

  box-sizing: border-box;

  margin-bottom: 20px;
`


const FirstBox = styled.div`
  
  width: 250px;
  height: 300px;

  background-color: #0b1e26;
  
  border: 1px #bb8a52 solid;

  position: absolute;

  left: -25%;
  top: 27%;

  position: relative;

`

const SecondBox = styled.div`
  
  width: 250px;
  height: 300px;

  background-color: #0b1e26;

  position: absolute;

  left: -30%;
  top: 23.5%;

  img{
  width: inherit;
  height: inherit;
  }


`
const Links = styled(Link)`
  
  text-decoration: none
`