import React, {useState, useEffect} from 'react'
import {styled} from 'styled-components';
import Picture from '../Assets/JPG/Picture.jpg'

const HomePage = () => {
  const name = "OPEOLUWA"
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndex < name.length){
        setDisplayedName((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 500); 

    return () => clearInterval(interval);
    
  }, [currentIndex, name]);

  return (
    <HomeWrapper>

      <LeftSide>
        <h2>HI THERE!</h2>
        <Name>
          <POne>I'M</POne>
          <PTwo>{displayedName}</PTwo>
        </Name>
        <RoleDisplay>FrontEnd Developer</RoleDisplay>
        <p>My passion is building scalable, easy-to-use, and efficient solutions using the latest web technologies. I am open to productive collaborations. I am eager to work on exciting projects. Let's create something amazing together!</p>
        <button>MORE ABOUT ME</button>
      </LeftSide>
      
      <RightSide>
        <img src={Picture} alt="#" />
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
`
const LeftSide = styled.div`
  width: 50%;
  height: fit-content;

  box-sizing: border-box;
  padding: 5%;

  h2{
    font-size: 40px;
    margin-bottom: 15px;
    color: #7D5A50;
  }

  p{
    font-size: 14px;
    
    color: #7D5A50;

    line-height: 23px;

    text-align: justify;

    margin-bottom: 30px;

    width: 90%;
  }

  button{
    height: 40px;
    width: fit-content;

    border-radius: 20px;
    border: 2px #7D5A50 solid;

    background-color: transparent;
    color: #7D5A50;

    font-size: 14px;
    font-weight: 600;
    font-family: Libre Baskerville;

    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
  }

  button:hover{
    border: transparent;

    background-color: #7D5A50;
    color: #F5E8C7;
  }
`
const RightSide = styled.div`
  width: 50%;
  height: 100vh;
  img{
    width: 100%;
    height: inherit;
  }

`
const RoleDisplay = styled.div`
  width: fit-content;
  height: 25px;

  font-size: 14px;
  font-weight: 600;
  font-family: Libre BaskerVille;

  letter-spacing: 2px;

  color: #F5E8C7;
  background-color: #7D5A50;

  
  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;

  margin-bottom: 30px;
`
const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;

  margin-bottom: 10px;
`
const POne = styled.div`
  font-size: 60px;
  font-weight: 900;
  font-family: Libre Baskerville;

  color: #7D5A50;
`

const PTwo = styled.div`
  font-size: 60px;
  font-weight: 900;
  font-family: Libre Baskerville;

  color: #7D5A50;

  letter-spacing: 5px;
`
