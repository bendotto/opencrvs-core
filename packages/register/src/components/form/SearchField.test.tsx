import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { createShallowRenderedComponent } from '@register/tests/util'
import { SearchField } from './SearchField'

describe('Search Field component', () => {
  const mock = jest.fn()
  const testComponent = createShallowRenderedComponent(
    <IntlProvider locale="en">
      <SearchField
        fieldName="registrationOffice"
        isFieldRequired={true}
        fieldLabel="registrationOffice"
        fieldValue=""
        onModalComplete={mock}
      />
    </IntlProvider>
  )

  it('renders without crashing', () => {
    expect(testComponent).toMatchSnapshot()
  })
})