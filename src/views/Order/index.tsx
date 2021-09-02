import React from 'react'

const Order = (props: any) => {
  const list = []
  for (let i = 0; i < 99; i++) {
    list.push(i)
  }
  return (
    <div>
      {list.map((item, index) => (
        <p key={index}>
          Really
          <br />
        </p>
      ))}
    </div>
  )
}

export default Order
