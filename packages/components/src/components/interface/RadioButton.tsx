import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.copy};
  ${({ theme }) => theme.fonts.bodyBoldStyle};
  cursor: pointer;
  margin-left: 8px;
`

const Check = styled.span`
  display: flex;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.copy};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  align-items: center;
  & > span {
    display: flex;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    align-self: center;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
  /* stylelint-disable */
  &:checked ~ ${Check} > span {
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
        <Check>
          <span />
        </Check>
        <Label htmlFor={id}>{label}</Label>
      </Wrapper>
    )
  }
}
