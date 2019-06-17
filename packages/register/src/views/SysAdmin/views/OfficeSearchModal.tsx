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

const SelectButton = styled(PrimaryButton)`
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
  },
  cancel: {
    id: 'register.sysAdminHome.OfficeSearchModal.cancel',
    defaultMessage: 'Cancel',
    description: 'The cancel title'
  },
  select: {
    id: 'register.sysAdminHome.OfficeSearchModal.select',
    defaultMessage: 'SELECT',
    description: 'The select title'
  }
})
interface IProps {
  language: string
  searchText: string
  placeholder: string
  onModalClose: () => void
  onModalComplete: (location: ILocation) => void
}
interface IState {
  searchText: string
  selectedValue: string
}
interface ILocation {
  id: string
  name: string
  detailedLocation: string
}

type IFullProps = IProps & InjectedIntlProps
class OfficeSearchModalClass extends React.Component<IFullProps, IState> {
  constructor(props: IFullProps) {
    super(props)
    this.state = {
      searchText: this.props.searchText ? this.props.searchText : '',
      selectedValue: ''
    }
  }

  handleSearch = (param: string) => {
    this.setState({
      searchText: param
    })
  }

  handleChange = (value: string) => {
    this.setState({
      selectedValue: value
    })
  }

  render() {
    const { intl } = this.props
    const locationArray: ILocation[] = [
      {
        id: '309842043',
        name: 'Tunbridge Wells Office',
        detailedLocation: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      },
      {
        id: '309842042',
        name: 'Tunbridge Wells Office2',
        detailedLocation: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      },
      {
        id: '309842041',
        name: 'Tunbridge Wells Office3',
        detailedLocation: 'Lamberhurst, Tunbridge Wells TN3 8JN'
      }
    ]
    const selectedValue = this.state.selectedValue || locationArray[0].name
    let selectedLocation: ILocation = locationArray[0]
    const listItems = locationArray.map(
      (location: ILocation, index: number) => {
        if (location.name === selectedValue) {
          selectedLocation = location
        }
        return (
          <ItemContainer
            key={'item-container-' + index}
            selected={location.name === selectedValue}
          >
            <Item width={325}>
              <RadioButton
                id={'location-' + index}
                name="location"
                label={location.name}
                value={location.name}
                selected={selectedValue}
                onChange={this.handleChange}
              />
            </Item>
            <Item>{location.detailedLocation}</Item>
            <Item width={225} isRight={true}>
              {location.id}
            </Item>
          </ItemContainer>
        )
      }
    )

    return (
      <>
        <ResponsiveModal
          id="office-search-modal"
          title={intl.formatMessage(messages.title)}
          width={693}
          height={280}
          show={true}
          handleClose={this.props.onModalClose}
          actions={[
            <CancelButton
              key="cancel"
              id="modal_cancel"
              onClick={this.props.onModalClose}
            >
              {intl.formatMessage(messages.cancel)}
            </CancelButton>,
            <SelectButton
              key="select"
              id="modal_select"
              onClick={() => this.props.onModalComplete(selectedLocation)}
            >
              {intl.formatMessage(messages.select)}
            </SelectButton>
          ]}
        >
          <ChildContainer>
            <SearchInputWithIcon
              placeHolderText={this.props.placeholder}
              searchText={this.state.searchText}
              searchHandler={this.handleSearch}
            />
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
