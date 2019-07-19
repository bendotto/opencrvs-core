import {
  IFormSection,
  ViewType,
  IMAGE_UPLOADER_WITH_OPTIONS,
  RADIO_GROUP,
  PARAGRAPH,
  LIST,
  SELECT_WITH_DYNAMIC_OPTIONS
} from '@register/forms'
import { deathFieldToAttachmentTransformer } from '@register/forms/register/fieldDefinitions/death/mappings/mutation/documents-mappings'
import { deathAttachmentToFieldTransformer } from '@register/forms/register/fieldDefinitions/death/mappings/query/documents-mappings'
import { defineMessages } from 'react-intl'

const messages: {
  [key: string]: ReactIntl.FormattedMessage.MessageDescriptor
} = defineMessages({
  documentsTab: {
    id: 'register.form.section.documents.name',
    defaultMessage: 'Documents',
    description: 'Tab title for Documents'
  },
  documentsTitle: {
    id: 'register.form.section.documents.title',
    defaultMessage: 'Supporting documents',
    description: 'Form section title for Documents'
  },
  uploadImage: {
    id: 'register.form.section.documents.uploadImage',
    defaultMessage: 'Upload a photo of the supporting document',
    description: 'Title for the upload image button'
  },
  documentsUploadName: {
    id: 'register.form.section.upload.documentsName',
    defaultMessage: 'Documents Upload',
    description: 'Tab title for Documents Upload'
  },
  documentsUploadTitle: {
    id: 'register.form.section.upload.documentsTitle',
    defaultMessage: 'Supporting documents',
    description: 'Form section title for Documents'
  },
  whatDocToUpload: {
    id: 'form.field.label.whatDocToUpload',
    defaultMessage: 'Which document type are you uploading?',
    description:
      'Question to ask user, what type of documents are being uploaded'
  },
  deceasedIDProof: {
    id: 'form.field.label.deceasedIDProof',
    defaultMessage: "Proof of Deceased's ID",
    description: 'Option for radio group field: Type of Document To Upload'
  },
  deceasedPermanentAddressProof: {
    id: 'form.field.label.deceasedPermanentAddressProof',
    defaultMessage: 'Proof of Permanent Address of Deceased',
    description: 'Option for radio group field: Type of Document To Upload'
  },
  deceasedDeathProof: {
    id: 'form.field.label.deceasedDeathProof',
    defaultMessage: 'Proof of Death of Deceased',
    description: 'Option for radio group field: Type of Document To Upload'
  },
  deceasedDoBProof: {
    id: 'form.field.label.deceasedDoBProof',
    defaultMessage: 'Proof of Date of Birth of Deceased',
    description: 'Option for radio group field: Type of Document To Upload'
  },
  applicantIDProof: {
    id: 'form.field.label.applicantIDProof',
    defaultMessage: "Proof of Applicant's ID",
    description: 'Option for radio group field: Type of Document To Upload'
  },
  paragraph: {
    id: 'form.field.label.deceasedDocumentParagraph',
    defaultMessage:
      'For this death registration, the following documents are required:',
    description: 'Documents Paragraph text'
  },
  typeOfDocument: {
    id: 'form.field.label.typeOfDocument',
    defaultMessage: 'Choose type of document',
    description: 'Label for Select Form Field: Type of Document'
  },
  docTypeBR: {
    id: 'form.field.label.docTypeBR',
    defaultMessage: 'Birth Registration',
    description: 'Label for select option Birth Registration'
  },
  docTypeNIDFront: {
    id: 'form.field.label.docTypeNIDFront',
    defaultMessage: 'National ID (front)',
    description: 'Label for select option radio option NID front'
  },
  docTypeNIDBack: {
    id: 'form.field.label.docTypeNIDBack',
    defaultMessage: 'National ID (back)',
    description: 'Label for select option radio option NID back'
  },
  docTypePostMortemReport: {
    id: 'form.field.label.docTypePostMortemReport',
    defaultMessage: 'Certified Post Mortem Report',
    description: 'Label for select option Post Mortem Report'
  },
  docTypeHospitalDischargeCertificate: {
    id: 'form.field.label.docTypeHospitalDischargeCertificate',
    defaultMessage: 'Hospital Discharge Certificate',
    description: 'Label for select option Hospital Discharge Certificate'
  },
  docTypeLetterOfDeath: {
    id: 'form.field.label.docTypeLetterOfDeath',
    defaultMessage: 'Attested Letter of Death',
    description: 'Label for select option Attested Letter of Death'
  },
  docTypeDeathCertificate: {
    id: 'form.field.label.docTypeDeathCertificate',
    defaultMessage: 'Attested Certificate of Death',
    description: 'Label for select option Attested Certificate of Death'
  },
  docTypeCopyOfBurialReceipt: {
    id: 'form.field.label.docTypeCopyOfBurialReceipt',
    defaultMessage: 'Certified Copy of Burial Receipt',
    description: 'Label for select option Certified Copy of Burial Receipt'
  },
  docTypeFuneralReceipt: {
    id: 'form.field.label.docTypeFuneralReceipt',
    defaultMessage: 'Certified Copy of Funeral Receipt',
    description: 'Label for select option Certified Copy of Funeral Receipt'
  },
  select: {
    id: 'register.select.placeholder',
    defaultMessage: 'Select'
  }
})

export const documentsSection: IFormSection = {
  id: 'documents',
  viewType: 'form' as ViewType,
  name: messages.documentsTab,
  title: messages.documentsTitle,
  optional: true,
  fields: [
    {
      name: 'imageUploader',
      type: IMAGE_UPLOADER_WITH_OPTIONS,
      label: messages.uploadImage,
      required: false,
      initialValue: '',
      validate: [],
      optionSection: {
        id: 'documents-upload',
        viewType: 'form',
        name: messages.documentsUploadName,
        title: messages.documentsUploadTitle,
        fields: [
          {
            name: 'whatDocToUpload',
            type: RADIO_GROUP,
            label: messages.whatDocToUpload,
            required: true,
            hideAsterisk: true,
            initialValue: '',
            validate: [],
            options: [
              {
                value: "Proof of Deceased's ID",
                label: messages.deceasedIDProof
              },
              {
                value: 'Proof Deceased Permanent Address',
                label: messages.deceasedPermanentAddressProof
              },
              {
                value: 'Proof of Death of Deceased',
                label: messages.deceasedDeathProof
              },
              {
                value: 'Proof of Date of Birth of Deceased',
                label: messages.deceasedDoBProof
              },
              {
                value: "Proof of Applicant's ID",
                label: messages.applicantIDProof
              }
            ]
          },
          {
            name: 'typeOfDocument',
            type: SELECT_WITH_DYNAMIC_OPTIONS,
            label: messages.typeOfDocument,
            required: true,
            hideAsterisk: true,
            validate: [],
            placeholder: messages.select,
            initialValue: '',
            dynamicOptions: {
              dependency: 'whatDocToUpload',
              options: {
                "Proof of Deceased's ID": [
                  { value: 'Birth Registration', label: messages.docTypeBR },
                  {
                    value: 'National ID (front)',
                    label: messages.docTypeNIDFront
                  },
                  {
                    value: 'National ID (back)',
                    label: messages.docTypeNIDBack
                  }
                ],
                'Proof Deceased Permanent Address': [
                  { value: 'Birth Registration', label: messages.docTypeBR },
                  {
                    value: 'National ID (front)',
                    label: messages.docTypeNIDFront
                  },
                  {
                    value: 'National ID (back)',
                    label: messages.docTypeNIDBack
                  }
                ],
                'Proof of Death of Deceased': [
                  {
                    value: 'Certified Post Mortem Report',
                    label: messages.docTypePostMortemReport
                  },
                  {
                    value: 'Hospital Discharge Certificate',
                    label: messages.docTypeHospitalDischargeCertificate
                  },
                  {
                    value: 'Attested Letter of Death',
                    label: messages.docTypeLetterOfDeath
                  },
                  {
                    value: 'Attested Certificate of Death',
                    label: messages.docTypeDeathCertificate
                  },
                  {
                    value: 'Certified Copy of Burial Receipt',
                    label: messages.docTypeCopyOfBurialReceipt
                  },
                  {
                    value: 'Certified Copy of Funeral Receipt',
                    label: messages.docTypeFuneralReceipt
                  }
                ],
                'Proof of Date of Birth of Deceased': [
                  { value: 'Birth Registration', label: messages.docTypeBR },
                  {
                    value: 'National ID (front)',
                    label: messages.docTypeNIDFront
                  },
                  {
                    value: 'National ID (back)',
                    label: messages.docTypeNIDBack
                  }
                ],
                "Proof of Applicant's ID": [
                  { value: 'Birth Registration', label: messages.docTypeBR },
                  {
                    value: 'National ID (front)',
                    label: messages.docTypeNIDFront
                  },
                  {
                    value: 'National ID (back)',
                    label: messages.docTypeNIDBack
                  }
                ]
              }
            }
          }
        ]
      },
      mapping: {
        mutation: deathFieldToAttachmentTransformer,
        query: deathAttachmentToFieldTransformer
      }
    },
    {
      name: 'paragraph',
      type: PARAGRAPH,
      label: messages.paragraph,
      initialValue: '',
      validate: []
    },
    {
      name: 'list',
      type: LIST,
      label: messages.documentsTab,
      initialValue: '',
      validate: [],
      items: [
        messages.deceasedIDProof,
        messages.deceasedPermanentAddressProof,
        messages.deceasedDeathProof,
        messages.deceasedDoBProof,
        messages.applicantIDProof
      ]
    }
  ]
}
