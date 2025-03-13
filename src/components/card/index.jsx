import React from 'react'

import card1 from "../../assets/icons/card.svg"

import card2 from "../../assets/img/card.png"

const Card = () => {
  return (
    <div className='container2 py-5 mt-3'>
      
      <img src={card2} alt="" />

      <div className='grid grid-cols-4 gap-6 mt-4 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1'>
        <div className='shadowBox rounded-xl p-5'>
            <img className='mx-auto' src={card1} alt="" />
            <p className='text-center text-[#2f70d9] font-bold py-3'>Иван Иванов</p>
            <p className='text-[#686868] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, unde!</p>
            <p className='text-[#686868] text-center'>01.02--03.02</p>
        </div>
        <div className='shadowBox rounded-xl p-5'>
            <img className='mx-auto' src={card1} alt="" />
            <p className='text-center text-[#2f70d9] font-bold py-3'>Иван Иванов</p>
            <p className='text-[#686868] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, unde!</p>
            <p className='text-[#686868] text-center'>01.02--03.02</p>
        </div>
        <div className='shadowBox rounded-xl p-5'>
            <img className='mx-auto' src={card1} alt="" />
            <p className='text-center text-[#2f70d9] font-bold py-3'>Иван Иванов</p>
            <p className='text-[#686868] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, unde!</p>
            <p className='text-[#686868] text-center'>01.02--03.02</p>
        </div>
        <div className='shadowBox rounded-xl p-5'>
            <img className='mx-auto' src={card1} alt="" />
            <p className='text-center text-[#2f70d9] font-bold py-3'>Иван Иванов</p>
            <p className='text-[#686868] py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, unde!</p>
            <p className='text-[#686868] text-center'>01.02--03.02</p>
        </div>

        
      </div>
    </div>
  )
}

export default Card
