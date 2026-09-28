import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({
  roleDice, CurrentDice
}) => {

  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>

  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
align-items: center;
display:flex;
justify-content: center;

.dice{
  cursor: pointer;
}

p{
  font-size: 24px
}


`;