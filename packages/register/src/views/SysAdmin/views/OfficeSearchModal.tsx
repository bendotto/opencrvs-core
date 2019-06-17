import * as React from 'react'
import { InjectedIntlProps, injectIntl, defineMessages } from 'react-intl'
import { connect } from 'react-redux'
import { IStoreState } from 'src/store'
import { getLanguage } from 'src/i18n/selectors'
import {
  ResponsiveModal,
  SearchInputWithIcon,
  RadioButton
} from '@opencrvs/components/lib/interface'
import styled from 'styled-components'
import { PrimaryButton, TertiaryButton } from '@opencrvs/components/lib/buttons'

const ApplyButton = styled(PrimaryButton)`
  height: 40px;
  & div {
    padding: 0 8px;
  }
`
const CancelButton = styled(TertiaryButton)`
  height: 40px;
  & div {
    padding: 0;
  }
`
const ChildContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ListContainer = styled.div`
  padding-top: 15px;

  & > div {
    padding-top: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySmoky};
  }
  & > div:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.greySmoky};
  }
`
const ItemContainer = styled.div.attrs<{ selected?: boolean }>({})`
  width: 650px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  background: ${({ selected, theme }) =>
    selected
      ? theme.colors.chartAreaGradientEnd
      : theme.colors.white} !important;
`

interface IItemProps {
  width?: number
  isRight?: boolean
}

const Item = styled.div.attrs<IItemProps>({})`
  display: flex;
  width: ${({ width }) => (width ? width : 200)}px;
  padding: 5px 10px;
  justify-content: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
`

const messages = defineMessages({
  title: {
    id: 'register.sysAdminHome.OfficeSearchModal.title',
    defaultMessage: 'Assigned registration office',
    description: 'The title'
  }
})
interface IProps {
  language: string
  showModal: boolean
}

interface IState {
  searchParam: string
  selectedValue: string
}

interface ILocation {
  locId: string
  locName: string
  location: string
}

type IFullProps = IProps & InjectedIntlProps

class OfficeSearchModalClass extends React.Component<IFullProps, IState> {
  constructor(props: IFullProps) {
    super(props)
    this.state = {
      searchParam: '',
      selectedValue: ''
    }
  }
  handleClose = () => {
    alert('closed')
  }

  handleSearch = (param: string) => {
    this.setState({
      searchParam: param
    })
  }

  handleChange = (value: string) => {
    this.setState({
      selectedValue: value
    })
  }

  render() {
    const { intl, showModal } = this.props
    const locationArray: ILocation[] = [
      {
        locId: '309842043',
        locName: 'Tunbridge Wells Office',
        location: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      },
      {
        locId: '309842042',
        locName: 'Tunbridge Wells Office2',
        location: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      },
      {
        locId: '309842041',
        locName: 'Tunbridge Wells Office3',
        location: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      }
    ]
    const selectedValue = this.state.selectedValue || locationArray[0].locName
    const listItems = locationArray.map(
      (location: ILocation, index: number) => {
        return (
          <>
            <ItemContainer
              key={'item-container' + index}
              selected={location.locName === selectedValue}
            >
              <Item width={325}>
                <RadioButton
                  id={'location' + index}
                  name="location"
                  label={location.locName}
                  value={location.locName}
                  selected={selectedValue}
                  onChange={this.handleChange}
                />
              </Item>
              <Item>{location.location}</Item>
              <Item width={225} isRight={true}>
                {location.locId}
              </Item>
            </ItemContainer>
          </>
        )
      }
    )

    return (
      <>
        <ResponsiveModal
          id="office-search-modal"
          title={intl.formatMessage(messages.title)}
          width={760}
          height={350}
          show={showModal}
          handleClose={this.handleClose}
          actions={[
            <CancelButton key="cancel" id="modal_cancel">
              {'cancel'}
            </CancelButton>,
            <ApplyButton key="apply" id="apply_change">
              {'apply'}
            </ApplyButton>
          ]}
        >
          <ChildContainer>
            <SearchInputWithIcon searchHandler={this.handleSearch} />
            <ListContainer>{listItems}</ListContainer>
          </ChildContainer>
        </ResponsiveModal>
      </>
    )
  }
}

const mapStateToProps = (store: IStoreState) => {
  return {
    language: getLanguage(store)
  }
}

export const OfficeSearchModal = connect(mapStateToProps)(
  injectIntl(OfficeSearchModalClass)
)
