import React from 'react'
import classnames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'

interface SelectColorItemProp {
  value: string
  active?: boolean
  onClick?: () => void
}

const SelectColorItem = ({ value, active, onClick }: SelectColorItemProp) => {
  return (
    <div
      className={classnames('select-color-item', {
        'select-color-item__active': active
      })}
      style={{ backgroundColor: value }}
      onClick={onClick}
    >
      {active && <CheckOutlined />}
    </div>
  )
}

export default SelectColorItem
