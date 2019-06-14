import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  list-style-type: none;
`

const Label = styled.label`
  position: relative;
  left: 10px;
  top: -5px;
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.bodyBoldStyle};
  cursor: pointer;
`

const Check = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.copy};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
  z-index: 1;

  &::after {
    display: block;
    position: relative;
    content: '';
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    height: 12px;
    width: 12px;
    top: -13px;
    left: 5px;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }

  &::before {
    display: block;
    position: relative;
    content: '';
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    height: 18px;
    width: 18px;
    top: 2px;
    left: 2px;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
`

const Input = styled.input`
  position: absolute;
  width: 16px;
  height: 16px;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
  /* stylelint-disable */
  &:checked ~ ${Check}::after {
    /* stylelint-enable */
    background: ${({ theme }) => theme.colors.copy};
  }
`

type Value = string | number | boolean

interface IRadioButton {
  id: string
  name: string
  label: string
  value: Value
  selected?: string
  onChange: (value: Value) => void
}

export class RadioButton extends React.Component<IRadioButton> {
  onChange = () => {
    this.props.onChange(this.props.value)
  }
  render() {
    const { id, name, selected, label, value } = this.props
    return (
      <Wrapper>
        <Input
          {...this.props}
          role="radio"
          checked={value === selected}
          type="radio"
          name={name}
          value={value.toString()}
          onChange={this.onChange}
        />
        <Check />
        <Label htmlFor={id}>{label}</Label>
      </Wrapper>
    )
  }
}
