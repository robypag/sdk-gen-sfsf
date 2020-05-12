/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OfferLetterRequestBuilder } from './OfferLetterRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OfferLetter" of service "SFOData".
 */
export class OfferLetter extends Entity implements OfferLetterType {
  /**
   * Technical entity name for OfferLetter.
   */
  static _entityName = 'OfferLetter';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OfferLetter.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application Id.
   */
  applicationId!: BigNumber;
  /**
   * body.
   * @nullable
   */
  body?: string;
  /**
   * bodyLocale.
   * @nullable
   */
  bodyLocale?: string;
  /**
   * bodyTemplateId.
   * @nullable
   */
  bodyTemplateId?: BigNumber;
  /**
   * Bonus Payout Frequency.
   * @nullable
   */
  bonusPayoutFreq?: string;
  /**
   * Candidate Response Comments.
   * @nullable
   */
  candResponseComments?: string;
  /**
   * Candidate Response Date.
   * @nullable
   */
  candResponseDate?: Moment;
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * countryCode.
   * @nullable
   */
  countryCode?: string;
  /**
   * countryName.
   * @nullable
   */
  countryName?: string;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: Moment;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: string;
  /**
   * Currency Code.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Job Start Date.
   * @nullable
   */
  jobStartDate?: Moment;
  /**
   * Job Title.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Last Modified By.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * locale.
   * @nullable
   */
  locale?: string;
  /**
   * localeCode.
   * @nullable
   */
  localeCode?: string;
  /**
   * mailboxes.
   * @nullable
   */
  mailboxes?: string;
  /**
   * Offer Expiration Date.
   * @nullable
   */
  offerExpirationDate?: Moment;
  /**
   * Offer Letter.
   * @nullable
   */
  offerLetter?: string;
  /**
   * Offer Letter Id.
   */
  offerLetterId!: BigNumber;
  /**
   * Offer Sent Date.
   * @nullable
   */
  offerSentDate?: Moment;
  /**
   * Overtime Rate.
   * @nullable
   */
  overtimeRate?: BigNumber;
  /**
   * Salary Rate.
   * @nullable
   */
  salaryRate?: BigNumber;
  /**
   * Salary Rate Type.
   * @nullable
   */
  salaryRateType?: string;
  /**
   * Send Mode.
   * @nullable
   */
  sendMode?: string;
  /**
   * Status.
   * @nullable
   */
  status?: string;
  /**
   * Stock Grant.
   * @nullable
   */
  stockGrant?: BigNumber;
  /**
   * Stock Option.
   * @nullable
   */
  stockOption?: BigNumber;
  /**
   * subject.
   * @nullable
   */
  subject?: string;
  /**
   * Target Bonus Amount.
   * @nullable
   */
  targetBonusAmount?: BigNumber;
  /**
   * Target Bonus Percent.
   * @nullable
   */
  targetBonusPercent?: BigNumber;
  /**
   * templateId.
   * @nullable
   */
  templateId?: BigNumber;
  /**
   * templateName.
   * @nullable
   */
  templateName?: string;
  /**
   * tokens.
   * @nullable
   */
  tokens?: string;
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  attachments!: Attachment[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  offerLetterPdFmail!: Attachment;

  /**
   * Returns an entity builder to construct instances `OfferLetter`.
   * @returns A builder that constructs instances of entity type `OfferLetter`.
   */
  static builder(): EntityBuilderType<OfferLetter, OfferLetterTypeForceMandatory> {
    return Entity.entityBuilder(OfferLetter);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OfferLetter` entity type.
   * @returns A `OfferLetter` request builder.
   */
  static requestBuilder(): OfferLetterRequestBuilder {
    return new OfferLetterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OfferLetter`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OfferLetter`.
   */
  static customField(fieldName: string): CustomField<OfferLetter> {
    return Entity.customFieldSelector(fieldName, OfferLetter);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';

export interface OfferLetterType {
  applicationId: BigNumber;
  body?: string;
  bodyLocale?: string;
  bodyTemplateId?: BigNumber;
  bonusPayoutFreq?: string;
  candResponseComments?: string;
  candResponseDate?: Moment;
  comments?: string;
  countryCode?: string;
  countryName?: string;
  createDate?: Moment;
  createdBy?: string;
  currencyCode?: string;
  jobStartDate?: Moment;
  jobTitle?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  locale?: string;
  localeCode?: string;
  mailboxes?: string;
  offerExpirationDate?: Moment;
  offerLetter?: string;
  offerLetterId: BigNumber;
  offerSentDate?: Moment;
  overtimeRate?: BigNumber;
  salaryRate?: BigNumber;
  salaryRateType?: string;
  sendMode?: string;
  status?: string;
  stockGrant?: BigNumber;
  stockOption?: BigNumber;
  subject?: string;
  targetBonusAmount?: BigNumber;
  targetBonusPercent?: BigNumber;
  templateId?: BigNumber;
  templateName?: string;
  tokens?: string;
  attachments: AttachmentType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
  offerLetterPdFmail: AttachmentType;
}

export interface OfferLetterTypeForceMandatory {
  applicationId: BigNumber;
  body: string;
  bodyLocale: string;
  bodyTemplateId: BigNumber;
  bonusPayoutFreq: string;
  candResponseComments: string;
  candResponseDate: Moment;
  comments: string;
  countryCode: string;
  countryName: string;
  createDate: Moment;
  createdBy: string;
  currencyCode: string;
  jobStartDate: Moment;
  jobTitle: string;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  locale: string;
  localeCode: string;
  mailboxes: string;
  offerExpirationDate: Moment;
  offerLetter: string;
  offerLetterId: BigNumber;
  offerSentDate: Moment;
  overtimeRate: BigNumber;
  salaryRate: BigNumber;
  salaryRateType: string;
  sendMode: string;
  status: string;
  stockGrant: BigNumber;
  stockOption: BigNumber;
  subject: string;
  targetBonusAmount: BigNumber;
  targetBonusPercent: BigNumber;
  templateId: BigNumber;
  templateName: string;
  tokens: string;
  attachments: AttachmentType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
  offerLetterPdFmail: AttachmentType;
}

export namespace OfferLetter {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<OfferLetter> = new BigNumberField('applicationId', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[body]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BODY: StringField<OfferLetter> = new StringField('body', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[bodyLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BODY_LOCALE: StringField<OfferLetter> = new StringField('bodyLocale', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[bodyTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BODY_TEMPLATE_ID: BigNumberField<OfferLetter> = new BigNumberField('bodyTemplateId', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[bonusPayoutFreq]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BONUS_PAYOUT_FREQ: StringField<OfferLetter> = new StringField('bonusPayoutFreq', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[candResponseComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_RESPONSE_COMMENTS: StringField<OfferLetter> = new StringField('candResponseComments', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[candResponseDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_RESPONSE_DATE: DateField<OfferLetter> = new DateField('candResponseDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<OfferLetter> = new StringField('comments', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<OfferLetter> = new StringField('countryCode', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[countryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAME: StringField<OfferLetter> = new StringField('countryName', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[createDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_DATE: DateField<OfferLetter> = new DateField('createDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OfferLetter> = new StringField('createdBy', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<OfferLetter> = new StringField('currencyCode', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[jobStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_START_DATE: DateField<OfferLetter> = new DateField('jobStartDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<OfferLetter> = new StringField('jobTitle', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OfferLetter> = new StringField('lastModifiedBy', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<OfferLetter> = new DateField('lastModifiedDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<OfferLetter> = new StringField('locale', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[localeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE_CODE: StringField<OfferLetter> = new StringField('localeCode', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[mailboxes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAILBOXES: StringField<OfferLetter> = new StringField('mailboxes', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[offerExpirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_EXPIRATION_DATE: DateField<OfferLetter> = new DateField('offerExpirationDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[offerLetter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_LETTER: BinaryField<OfferLetter> = new BinaryField('offerLetter', OfferLetter, 'Edm.Binary');
  /**
   * Static representation of the [[offerLetterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_LETTER_ID: BigNumberField<OfferLetter> = new BigNumberField('offerLetterId', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[offerSentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_SENT_DATE: DateField<OfferLetter> = new DateField('offerSentDate', OfferLetter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[overtimeRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERTIME_RATE: BigNumberField<OfferLetter> = new BigNumberField('overtimeRate', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[salaryRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_RATE: BigNumberField<OfferLetter> = new BigNumberField('salaryRate', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[salaryRateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_RATE_TYPE: StringField<OfferLetter> = new StringField('salaryRateType', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[sendMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_MODE: StringField<OfferLetter> = new StringField('sendMode', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<OfferLetter> = new StringField('status', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[stockGrant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_GRANT: BigNumberField<OfferLetter> = new BigNumberField('stockGrant', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[stockOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_OPTION: BigNumberField<OfferLetter> = new BigNumberField('stockOption', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: StringField<OfferLetter> = new StringField('subject', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[targetBonusAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_BONUS_AMOUNT: BigNumberField<OfferLetter> = new BigNumberField('targetBonusAmount', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[targetBonusPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_BONUS_PERCENT: BigNumberField<OfferLetter> = new BigNumberField('targetBonusPercent', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<OfferLetter> = new BigNumberField('templateId', OfferLetter, 'Edm.Int64');
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: StringField<OfferLetter> = new StringField('templateName', OfferLetter, 'Edm.String');
  /**
   * Static representation of the [[tokens]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOKENS: StringField<OfferLetter> = new StringField('tokens', OfferLetter, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[attachments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS: Link<OfferLetter, Attachment> = new Link('attachments', OfferLetter, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OfferLetter, User> = new OneToOneLink('createdByNav', OfferLetter, User);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<OfferLetter, JobApplication> = new OneToOneLink('jobApplication', OfferLetter, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OfferLetter, User> = new OneToOneLink('lastModifiedByNav', OfferLetter, User);
  /**
   * Static representation of the one-to-one navigation property [[offerLetterPdFmail]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_LETTER_PD_FMAIL: OneToOneLink<OfferLetter, Attachment> = new OneToOneLink('offerLetterPDFmail', OfferLetter, Attachment);
  /**
   * All fields of the OfferLetter entity.
   */
  export const _allFields: Array<BigNumberField<OfferLetter> | StringField<OfferLetter> | DateField<OfferLetter> | BinaryField<OfferLetter> | Link<OfferLetter, Attachment> | OneToOneLink<OfferLetter, User> | OneToOneLink<OfferLetter, JobApplication> | OneToOneLink<OfferLetter, Attachment>> = [
    OfferLetter.APPLICATION_ID,
    OfferLetter.BODY,
    OfferLetter.BODY_LOCALE,
    OfferLetter.BODY_TEMPLATE_ID,
    OfferLetter.BONUS_PAYOUT_FREQ,
    OfferLetter.CAND_RESPONSE_COMMENTS,
    OfferLetter.CAND_RESPONSE_DATE,
    OfferLetter.COMMENTS,
    OfferLetter.COUNTRY_CODE,
    OfferLetter.COUNTRY_NAME,
    OfferLetter.CREATE_DATE,
    OfferLetter.CREATED_BY,
    OfferLetter.CURRENCY_CODE,
    OfferLetter.JOB_START_DATE,
    OfferLetter.JOB_TITLE,
    OfferLetter.LAST_MODIFIED_BY,
    OfferLetter.LAST_MODIFIED_DATE,
    OfferLetter.LOCALE,
    OfferLetter.LOCALE_CODE,
    OfferLetter.MAILBOXES,
    OfferLetter.OFFER_EXPIRATION_DATE,
    OfferLetter.OFFER_LETTER,
    OfferLetter.OFFER_LETTER_ID,
    OfferLetter.OFFER_SENT_DATE,
    OfferLetter.OVERTIME_RATE,
    OfferLetter.SALARY_RATE,
    OfferLetter.SALARY_RATE_TYPE,
    OfferLetter.SEND_MODE,
    OfferLetter.STATUS,
    OfferLetter.STOCK_GRANT,
    OfferLetter.STOCK_OPTION,
    OfferLetter.SUBJECT,
    OfferLetter.TARGET_BONUS_AMOUNT,
    OfferLetter.TARGET_BONUS_PERCENT,
    OfferLetter.TEMPLATE_ID,
    OfferLetter.TEMPLATE_NAME,
    OfferLetter.TOKENS,
    OfferLetter.ATTACHMENTS,
    OfferLetter.CREATED_BY_NAV,
    OfferLetter.JOB_APPLICATION,
    OfferLetter.LAST_MODIFIED_BY_NAV,
    OfferLetter.OFFER_LETTER_PD_FMAIL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OfferLetter> = new AllFields('*', OfferLetter);
  /**
   * All key fields of the OfferLetter entity.
   */
  export const _keyFields: Array<Selectable<OfferLetter>> = [OfferLetter.OFFER_LETTER_ID];
  /**
   * Mapping of all key field names to the respective static field property OfferLetter.
   */
  export const _keys: { [keys: string]: Selectable<OfferLetter> } = OfferLetter._keyFields.reduce((acc: { [keys: string]: Selectable<OfferLetter> }, field: Selectable<OfferLetter>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
