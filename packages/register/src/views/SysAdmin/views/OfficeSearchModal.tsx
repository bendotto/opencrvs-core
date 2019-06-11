import * as React from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { IStoreState } from 'src/store'
import { getLanguage } from 'src/i18n/selectors'

interface IProps {
  language: string
}

type IFullProps = IProps & InjectedIntlProps

class OfficeSearchModalClass extends React.Component<IFullProps> {
  render() {
    return <></>
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
