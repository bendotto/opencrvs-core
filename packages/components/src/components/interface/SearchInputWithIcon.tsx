import * as React from 'react'
import { SearchBlue } from '../icons'
import styled from 'styled-components'

const Wrapper = styled.form`
  align-items: center;
  background: ${({ theme }) => theme.colors.greyPearl};
  display: flex;
  padding-left: 5px;
  margin-bottom: 1px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.blackStormy};
  border-radius: 2px;
  max-width: 400px;
`
const SearchTextInput = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.greyPearl};
  margin: 1px 5px;
  ${({ theme }) => theme.fonts.bigBodyStyle};
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`

interface IState {
  searchParam: string
}
interface IProps {
  searchHandler: (searchText: string) => void
}
export class SearchInputWithIcon extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      searchParam: ''
    }
  }

  search = () => {
    return (
      this.state.searchParam && this.props.searchHandler(this.state.searchParam)
    )
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchParam: event.target.value })
  }

  render() {
    return (
      <Wrapper action="javascript:void(0);" onSubmit={this.search}>
        <SearchBlue id="searchInputIcon" onClick={this.search} />
        <SearchTextInput
          id="searchInputText"
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.searchParam}
        />
      </Wrapper>
    )
  }
}
