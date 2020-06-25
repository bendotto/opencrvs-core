/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */
import { IFormField, RADIO_GROUP, TEXTAREA } from '@client/forms'
import { messages } from '@client/i18n/messages/views/sysAdmin'
import { RadioSize } from '@opencrvs/components/lib/forms'

export interface IUserAuditForm {
  fields: IFormField[]
}

export const userAuditForm: IUserAuditForm = {
  fields: [
    {
      name: 'deactivateReason',
      type: RADIO_GROUP,
      required: true,
      validate: [],
      initialValue: '',
      label: messages.deactivateReason,
      size: RadioSize.LARGE,
      options: [
        { label: messages.deactivateReasonNotEmployee, value: 'NOT_EMPLOYEE' },
        {
          label: messages.deactivateReasonInvestigated,
          value: 'BEING_INVESTIGATED'
        },
        { label: messages.deactivateReasonOther, value: 'OTHER' }
      ]
    },
    {
      name: 'comments',
      type: TEXTAREA,
      label: messages.comments,
      initialValue: '',
      validate: [],
      required: false
    }
  ]
}
