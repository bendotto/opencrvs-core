import * as React from 'react'
import { connect } from 'react-redux'
import { injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import { IStoreState } from '@register/store'
import { getUserDetails } from '@register/profile/profileSelectors'
import { IUserDetails } from '@register/utils/userUtils'
import { GQLHumanName } from '@opencrvs/gateway/src/graphql/schema'
import styled from '@register/styledComponents'
import { Header } from '@register/components/interface/Header/Header'
import { AvatarLarge, Avatar } from '@opencrvs/components/lib/icons'
import { DataSection } from '@opencrvs/components/lib/interface/ViewData'
import {
  ResponsiveModal,
  NOTIFICATION_TYPE,
  Notification
} from '@opencrvs/components/lib/interface'
import { Select } from '@opencrvs/components/lib/forms'
import { PrimaryButton, TertiaryButton } from '@opencrvs/components/lib/buttons'
import { roleMessages } from '@register/utils/roleTypeMessages'
import { modifyUserDetails as modifyUserDetailsAction } from '@register/profile/profileActions'

export const messages: {
  [key: string]: ReactIntl.FormattedMessage.MessageDescriptor
} = defineMessages({
  settingsTitle: {
    id: 'settings.title',
    defaultMessage: 'Settings',
    description: 'Title of the settings page'
  },
  profileTitle: {
    id: 'settings.profile.tile',
    defaultMessage: 'Profile',
    description: 'Profile header'
  },
  securityTitle: {
    id: 'settings.security.tile',
    defaultMessage: 'Security',
    description: 'Security header'
  },
  accountTitle: {
    id: 'settings.account.tile',
    defaultMessage: 'Account',
    description: 'Account header'
  },
  systemTitle: {
    id: 'settings.system.tile',
    defaultMessage: 'System',
    description: 'System header'
  },
  labelEnglishName: {
    id: 'settings.user.label.nameEN',
    defaultMessage: 'English name',
    description: 'English name label'
  },
  labelBanglaName: {
    id: 'settings.user.label.nameBN',
    defaultMessage: 'Bengali name',
    description: 'Bengali name label'
  },
  labelPhone: {
    id: 'constants.phoneNumber',
    defaultMessage: 'Phone number',
    description: 'Phone label'
  },
  labelRole: {
    id: 'constants.role',
    defaultMessage: 'Role',
    description: 'Role label'
  },
  labelPassword: {
    id: 'settings.user.label.password',
    defaultMessage: 'Password',
    description: 'Password label'
  },
  labelPin: {
    id: 'settings.user.label.pin',
    defaultMessage: 'PIN',
    description: 'PIN label'
  },
  labelLanguage: {
    id: 'settings.user.label.language',
    defaultMessage: 'Language',
    description: 'language label'
  },
  actionChange: {
    id: 'buttons.change',
    defaultMessage: 'Change',
    description: 'Change action'
  },
  changeLanguageMessege: {
    id: 'settings.message.changeLanguage',
    defaultMessage: 'Your prefered language that you want to use on OpenCRVS',
    description: 'Change language message'
  },
  changeLanguageTitle: {
    id: 'settings.changeLanguage',
    defaultMessage: 'Change language',
    description: 'Change language title'
  },
  changeLanguageSuccessMessage: {
    id: 'settings.changeLanguage.success',
    defaultMessage: 'Language updted to English',
    description: 'Change language success'
  },
  buttonApply: {
    id: 'buttons.apply',
    defaultMessage: 'Apply',
    description: 'Apply button label'
  },
  buttonCancel: {
    id: 'form.field.label.fetchButton.cancel',
    defaultMessage: 'Cancel',
    description: 'Cancel button label'
  }
})

const Container = styled.div`
  ${({ theme }) => theme.fonts.regularFont};
  ${({ theme }) => theme.shadows.mistyShadow};
  color: ${({ theme }) => theme.colors.copy};
  background: ${({ theme }) => theme.colors.white};
  padding: 40px 80px;
  margin: 36px auto 0;
  width: 1156px;
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    margin: 0;
    padding: 24px 0;
    width: 100%;
    min-height: 100vh;
    margin-top: 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`

const SettingsTitle = styled.div`
  ${({ theme }) => theme.fonts.h1Style};
  height: 72px;
  margin-left: 16px;
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    display: none;
  }
`
const Content = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    flex-direction: column-reverse;
  }
`
const Left = styled.div`
  margin: 0 16px;
  flex-grow: 1;
`
const Right = styled.div`
  display: flex;
  padding-top: 80px;
  margin-left: 112px;
  & .desktop {
    display: block;
  }
  & .tablet {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.grid.breakpoints.lg}px) {
    padding-top: 0;
    margin-left: 24px;
    & .desktop {
      display: none;
    }
    & .tablet {
      display: block;
    }
  }
`

const Message = styled.div`
  margin-bottom: 16px;
`
const Label = styled.label`
  margin-bottom: 8px;
`
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
type IProps = InjectedIntlProps & {
  language: string
  userDetails: IUserDetails | null
  modifyUserDetails: typeof modifyUserDetailsAction
}

interface IState {
  showLanguageSettings: boolean
  selectedLanguage: string
  showSuccessNotification: boolean
}

interface ILanguageOptions {
  [key: string]: string
}

class SettingsView extends React.Component<IProps & IState, IState> {
  constructor(props: IProps & IState) {
    super(props)
    this.state = {
      showLanguageSettings: false,
      showSuccessNotification: false,
      selectedLanguage: this.props.userDetails
        ? this.props.userDetails.language
        : window.config.LANGUAGE
    }
  }

  toggleLanguageSettingsModal = () => {
    this.setState(state => ({
      showLanguageSettings: !state.showLanguageSettings
    }))
  }

  toggleSuccessNotification = () => {
    this.setState(state => ({
      showSuccessNotification: !state.showSuccessNotification
    }))
  }

  cancelLanguageSettings = () => {
    this.setState(state => ({
      selectedLanguage: this.props.userDetails
        ? this.props.userDetails.language
        : window.config.LANGUAGE,
      showLanguageSettings: !state.showLanguageSettings
    }))
  }

  changeLanguage = () => {
    if (this.props.userDetails) {
      this.props.userDetails.language = this.state.selectedLanguage
      this.props.modifyUserDetails(this.props.userDetails)

      this.toggleLanguageSettingsModal()
      this.toggleSuccessNotification()
    }
  }

  render() {
    const { userDetails, intl } = this.props
    let bengaliName = ''
    if (userDetails && userDetails.name) {
      const nameObj = userDetails.name.find(
        (storedName: GQLHumanName | null) => {
          const name = storedName as GQLHumanName
          return name.use === 'bn'
        }
      ) as GQLHumanName
      if (nameObj) {
        bengaliName = `${String(nameObj.firstNames)} ${String(
          nameObj.familyName
        )}`
      }
    }

    let englishName = ''
    if (userDetails && userDetails.name) {
      const nameObj = userDetails.name.find(
        (storedName: GQLHumanName | null) => {
          const name = storedName as GQLHumanName
          return name.use === 'en'
        }
      ) as GQLHumanName

      englishName = `${String(nameObj.firstNames)} ${String(
        nameObj.familyName
      )}`
    }

    const mobile = (userDetails && userDetails.mobile) || ''

    const role =
      userDetails && userDetails.role
        ? intl.formatMessage(roleMessages[userDetails.role])
        : ''

    const language: ILanguageOptions = {
      bn: 'বাংলা',
      en: 'English'
    }

    const sections = [
      {
        title: intl.formatMessage(messages.profileTitle),
        items: [
          {
            label: intl.formatMessage(messages.labelBanglaName),
            value: bengaliName,
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          },
          {
            label: intl.formatMessage(messages.labelEnglishName),
            value: englishName,
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          },
          {
            label: intl.formatMessage(messages.labelPhone),
            value: mobile,
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          }
        ]
      },
      {
        title: intl.formatMessage(messages.accountTitle),
        items: [
          {
            label: intl.formatMessage(messages.labelRole),
            value: role,
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          }
        ]
      },
      {
        title: intl.formatMessage(messages.securityTitle),
        items: [
          {
            label: intl.formatMessage(messages.labelPassword),
            placeHolder: 'Last change 4 days ago',
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          },
          {
            label: intl.formatMessage(messages.labelPin),
            placeHolder: 'Last change 4 days ago',
            action: {
              label: intl.formatMessage(messages.actionChange),
              disabled: true
            }
          }
        ]
      },
      {
        title: intl.formatMessage(messages.systemTitle),
        items: [
          {
            label: intl.formatMessage(messages.labelLanguage),
            value: language[this.state.selectedLanguage],
            action: {
              id: 'BtnChangeLanguage',
              label: intl.formatMessage(messages.actionChange),
              handler: this.toggleLanguageSettingsModal
            }
          }
        ]
      }
    ]
    return (
      <>
        <Header title={intl.formatMessage(messages.settingsTitle)} />
        <Container>
          <SettingsTitle>
            {intl.formatMessage(messages.settingsTitle)}
          </SettingsTitle>
          <Content>
            <Left>
              {sections.map((sec, index: number) => (
                <DataSection key={index} {...sec} />
              ))}
            </Left>
            <Right>
              <Avatar className="tablet" />
              <AvatarLarge className="desktop" />
            </Right>
          </Content>
        </Container>
        <ResponsiveModal
          id="ChangeLanguageModal"
          title={intl.formatMessage(messages.changeLanguageTitle)}
          show={this.state.showLanguageSettings}
          actions={[
            <CancelButton
              key="cancel"
              id="modal_cancel"
              onClick={this.cancelLanguageSettings}
            >
              {intl.formatMessage(messages.buttonCancel)}
            </CancelButton>,
            <ApplyButton
              key="apply"
              id="apply_change"
              onClick={this.changeLanguage}
            >
              {intl.formatMessage(messages.buttonApply)}
            </ApplyButton>
          ]}
          handleClose={this.cancelLanguageSettings}
        >
          <Message>
            {intl.formatMessage(messages.changeLanguageMessege)}
          </Message>
          <Label>{intl.formatMessage(messages.labelLanguage)}</Label>
          <Select
            id="SelectLanguage"
            onChange={(val: string) => {
              this.setState({
                selectedLanguage: val
              })
            }}
            value={this.state.selectedLanguage}
            options={[
              { value: 'bn', label: 'বাংলা' },
              { value: 'en', label: 'English' }
            ]}
            placeholder=""
          />
        </ResponsiveModal>
        <Notification
          type={NOTIFICATION_TYPE.SUCCESS}
          show={this.state.showSuccessNotification}
          callback={this.toggleSuccessNotification}
        >
          {intl.formatMessage(messages.changeLanguageSuccessMessage)}
        </Notification>
      </>
    )
  }
}

export const SettingsPage = connect(
  (store: IStoreState) => ({
    language: store.i18n.language,
    userDetails: getUserDetails(store)
  }),
  {
    modifyUserDetails: modifyUserDetailsAction
  }
)(injectIntl(SettingsView))
