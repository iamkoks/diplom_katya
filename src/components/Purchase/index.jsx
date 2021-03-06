import React from 'react'

import './index.scss'
import { PURCHASE } from '../../styles/images'

import ContentText from './ContentText'

import { list, conditions } from './data'


const Purchase = () => {
  return (
    <div className='purchase'>
      <div className='purchase__container'>
        <div className='purchase__wrapper'>
          <div className ='purchase__text'>
            <span className ='purchase__text-title'>ОАО «Березовский комбикормовый завод» закупает:</span>
            <ul className ='purchase__text-list'>
              {
                list.map((item, index) => <li key={index}>{item}</li>)
              }
            </ul>
          </div>
          <div className ='purchase__conditions'>
            <span className ='purchase__conditions-title'>Условия</span>
            <img
                src={PURCHASE}
                alt='logo'
                className='purchase__conditions-image'
              />
            <div className ='purchase__conditions-content'>
              <ContentText conditions = {conditions}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
