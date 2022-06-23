import React, { cloneElement, useState } from 'react'
import SelectColorItem from './SelectColorItem'
import './index.less'

interface SelectColorProp {
  children: React.ReactNode[] | React.ReactNode
  defaultValue?: string
}

const SelectColor = ({ children, defaultValue }: SelectColorProp) => {
  const [value, setValue] = useState(defaultValue)

  const getCopyChildren = () => {
    return (
      Array.isArray(children) &&
      children.map(
        (child: any, index: number): React.ReactNode =>
          cloneElement(child, {
            key: index,
            active: value === child.props.value,
            onClick: () => {
              setValue(child.props.value)
            }
          })
      )
    )
  }

  return (
    <div className="select-color">
      {Array.isArray(children) ? getCopyChildren() : children}
    </div>
  )
}

SelectColor.Item = SelectColorItem

export default SelectColor
