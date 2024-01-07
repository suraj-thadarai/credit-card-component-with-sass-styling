import React from 'react'
import BankName from './BankName'
import CardNumber from './CardNumber'
import ExpirtyDate from './ExpirtyDate'
import CardHolderName from './CardHolderName'

const CreditCard = ({ cardInfo }) => {
  console.log('cardInfo contains', cardInfo)
  const card = cardInfo[0]
  let newArray = cardInfo.map((card, index)=> {
    return (
      <div className='creditCard' key={index}>
      <BankName bankName={card.bankName} />
      <CardNumber cardNumber={card.creditCardNumber} />
      <ExpirtyDate expiryDate={card.expirationDate} />
      <CardHolderName cardHolderName={card.name} />
    </div>
    )
  })
  console.log('newArray contains', newArray)

  return (
    
    <div>
      {newArray}
    </div>
  )

}



export default CreditCard