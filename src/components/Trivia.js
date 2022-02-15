import React from 'react'
import NavbarGame from './NavbarGame';
import Questions from './Questions';
import RewardList from './RewardList';

const Trivia = () => {
  return (
    <>
      <NavbarGame />  
      <Questions />
      <RewardList />
    </>
  )
}

export default Trivia;