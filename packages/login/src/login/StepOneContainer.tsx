import * as React from 'react'
import { InputField } from '@opencrvs/components/lib/InputField'
// import { connect } from 'react-redux'
// import { Dispatch } from 'redux'
// import { STEP_ONE_FORM } from './Constants'
// import { injectIntl } from 'react-intl'
// import { reduxForm } from 'redux-form'
// import { IStepOne, StepOne } from './StepOne'
// import { actions as loginActions } from './LoginActions'

// type StateProps = Partial<IStepOne>
// type DispatchProps = Partial<IStepOne>

// const mapStateToProps = (store: any): StateProps => {
//   const formId = STEP_ONE_FORM
//   return {
//     formId
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
//   submitAction: (values: any) => dispatch(loginActions.startStepOne(values))
// })

// const stepOneForm = reduxForm<{}, IStepOne>({
//   form: STEP_ONE_FORM,
//   destroyOnUnmount: true
// })(injectIntl(StepOne))

import Form from 'react-jsonschema-form'

const schema = {
  title: 'Login to OpenCRVS',
  type: 'object' as any,
  required: ['phone', 'password'],
  properties: {
    phone: {
      type: 'string' as any,
      title: 'Mobile number',
      default: ''
    },
    password: {
      type: 'string' as any,
      title: 'Password',
      default: ''
    }
  }
}

const customFields = { StringField: InputField as any }

const log = (type: string) => console.log.bind(console, type)

export const StepOneContainer = () => (
  <Form
    schema={schema}
    fields={customFields}
    onChange={log('changed')}
    onSubmit={log('submitted')}
    onError={log('errors')}
  />
)

// export const StepOneContainer = connect<StateProps, DispatchProps>(
//   mapStateToProps,
//   mapDispatchToProps
// )(stepOneForm)
