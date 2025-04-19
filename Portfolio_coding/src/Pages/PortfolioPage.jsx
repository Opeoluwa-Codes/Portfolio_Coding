import React from 'react'
import styled from 'styled-components';
import { useState, useRef } from 'react';

import HeaderDesign from '../Components/Reusable/HeaderDesign'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import PortfolioItem from '../Components/Reusable/PortfolioItem';

import Farm from '../Assets/PNG/farmera.png'
import Pf1 from '../Assets/PNG/pf1.png'

import NextButton from '../Components/Reusable/NextButton';

const portfolioItems = [
  { id: 1, type: 'Portfolio', img: Pf1, alt: 'Portfolio_One', title: 'Freelancing Portfolio', description: 'This is a simple portfolio website a freelancer can use to display their resume and past works. This solution was created using ReactJS.', demolink: '', sourcelink: ''},
  { id: 2, type: 'E-commerce', img: Farm, alt: 'Farmera', title: 'Farmera', description: 'Farmera is a platform that connects farmers and buyers, enabling a seamless marketplace for agricultural goods. Our mission is to empower farmers and provide fresh, high-quality products to buyers efficiently. This solution was created using ReactJS.', demolink: 'https://farm-olive.vercel.app/', sourcelink: '' },
  // { id: 3, type: '', img: '/images/portfolio3.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 4, type: '', img: '/images/portfolio4.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 5, type: '', img: '/images/portfolio5.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 6, type: '', img: '/images/portfolio6.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 7, type: '', img: '/images/portfolio7.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 8, type: '', img: '/images/portfolio8.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 9, type: '', img: '/images/portfolio9.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 10, type: '', img: '/images/portfolio10.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 11, type: '', img: '/images/portfolio11.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
  // { id: 12, type: '', img: '/images/portfolio12.jpg', alt: '', title: '', description: '', demolink: '', sourcelink: '' },
];

const PortfolioPage = () => {

  const [filter, setFilter] = useState('All');
  const filterRef = useRef(null);

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === filter) 

  const scrollFilter = (direction) =>{
    if (filterRef.current) {
      const scrollAmount = 100;
      const currentPosition = filterRef.current.scrollLeft;

      if (direction === "left") {
        filterRef.current.scrollTo({
          left: currentPosition - scrollAmount,
          behavior: "smooth"
        });
      } else {
        filterRef.current.scrollTo({
          left: currentPosition + scrollAmount,
          behavior: "smooth"
        });
      }

    }
  }

  return (

    <PortfolioWrapper>

      <HeaderDesign title='MY PORTFOLIO'/>

      <Buttons>

        <LeftArrow onClick={() => scrollFilter("left")}/>

        <Filter ref={filterRef}>
          <FilterButton
            active={filter === 'All'}
            onClick={() => setFilter('All')}
          >All</FilterButton>
          <FilterButton
            active={filter === 'E-commerce'}
            onClick={() => setFilter('E-commerce')}       
          >E-commerce</FilterButton>
          <FilterButton
            active={filter === 'Portfolio'}
            onClick={() => setFilter('Portfolio')}        
          >Portfolio</FilterButton>
          <FilterButton
            active={filter === 'Landing Page'}
            onClick={() => setFilter('Landing Page')}       
          >Landing Page</FilterButton>
          <FilterButton
            active={filter === 'Corporate'}
            onClick={() => setFilter('Corporate')}       
          >Corporate</FilterButton>
          <FilterButton
            active={filter === 'Online Magazine'}
            onClick={() => setFilter('Online Magazine')}       
          >Online Magazine</FilterButton>
          <FilterButton
            active={filter === 'Streaming'}
            onClick={() => setFilter('Streaming')}        
          >Streaming</FilterButton>

        </Filter>
          
          <RightArrow onClick={() => scrollFilter ("right")}/>

      </Buttons>

      <PortfolioDisplay>

        {filteredItems.map(item => (
          <PortfolioItem
            key={item.id}
            img={item.img}
            alt={item.alt}
            title={item.title}
            description={item.description}
            demolink={item.demolink}
            sourcelink={item.sourcelink}
          />
        ))}
        
  
      </PortfolioDisplay>

      <NextButton link="/contact"/>

    </PortfolioWrapper>

  );
};

export default PortfolioPage;

const PortfolioWrapper = styled.div`
  
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  padding-top: 3%;
  padding-left: 12%;

  position: relative;

  background-color: black;

  @media (max-width: 914px) {
    padding-left: 0%;
      
  }

`

const Buttons = styled.div`

  width: 89.5%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3%;

  @media (max-width: 914px) {
    width: 78%;
    
    justify-content: space-between;
  }

`

const Filter = styled.div`

  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2%;

  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  scroll-behavior: smooth;  

  scrollbar-color: white white;

  /* border: 1px blue solid; */

  &::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 918px){
    justify-content: start;
  }

  @media (max-width: 910px) {
    
    width: 85%;
  }

  @media (max-width: 780px){
    gap: 5%;

  }

`


const FilterButton = styled.div`

    font-size: 14px;
    font-weight: 800;

    font-family: Montserrat;

    min-width: fit-content;

    display: flex;

    flex-wrap: nowrap;

    background-color: transparent;

    color: ${props => props.active ? '#c0c0c0a0' : 'white'};

    cursor: pointer;

    &:hover{
      color: #c0c0c0a0;
      transform: scale(1.05);
    }

    /* @media (max-width: 990px){
      font-size: 12px;
    } */
`

const LeftArrow = styled(MdKeyboardDoubleArrowLeft)`
  font-size: 20px;

  color: white;

  @media (min-width: 915px){
    display: none;

  }

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }
`

const RightArrow = styled(MdKeyboardDoubleArrowRight)`
  font-size: 20px;

  color: white;

  @media (min-width: 915px){
    display: none;

  }

  &:hover{
    color: #c0c0c0a0;
    transform: scale(1.2);
  }
`


const PortfolioDisplay = styled.div`

  width: 80%; 
  height: 62%;
  overflow-y: auto;
  overflow-x: hidden;
  
  scroll-behavior: smooth;
  scrollbar-color: white white;
  scrollbar-width: thin;

  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  padding: 5px 2.5%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    height: 70%;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
    padding-left: 6%;

    margin-bottom: 18%;

  }

`


