/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360SummaryViewRaterRequestBuilder } from './Form360SummaryViewRaterRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360SummaryViewRater" of service "SFOData".
 */
export class Form360SummaryViewRater extends Entity implements Form360SummaryViewRaterType {
  /**
   * Technical entity name for Form360SummaryViewRater.
   */
  static _entityName = 'Form360SummaryViewRater';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360SummaryViewRater.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   * @nullable
   */
  category?: string;
  /**
   * comment.
   * @nullable
   */
  comment?: string;
  /**
   * displayName.
   * @nullable
   */
  displayName?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * formStatus.
   * @nullable
   */
  formStatus?: string;
  /**
   * formStatusDisplayString.
   * @nullable
   */
  formStatusDisplayString?: string;
  /**
   * isDisplayAnonymous.
   */
  isDisplayAnonymous!: boolean;
  /**
   * isFixedParticipant.
   */
  isFixedParticipant!: boolean;
  /**
   * isFormRecallable.
   */
  isFormRecallable!: boolean;
  /**
   * isShowContentLink.
   */
  isShowContentLink!: boolean;
  /**
   * isShowDocCommentsForSendBack.
   */
  isShowDocCommentsForSendBack!: boolean;
  /**
   * isShowReminderEmail.
   */
  isShowReminderEmail!: boolean;
  /**
   * maxRating.
   * @nullable
   */
  maxRating?: number;
  /**
   * order.
   */
  order!: number;
  /**
   * overallRating.
   * @nullable
   */
  overallRating?: number;
  /**
   * overallRatingDisplayString.
   * @nullable
   */
  overallRatingDisplayString?: string;
  /**
   * participantId.
   */
  participantId!: string;
  /**
   * showContentLinkURL.
   * @nullable
   */
  showContentLinkUrl?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  participantUser!: User;

  /**
   * Returns an entity builder to construct instances `Form360SummaryViewRater`.
   * @returns A builder that constructs instances of entity type `Form360SummaryViewRater`.
   */
  static builder(): EntityBuilderType<Form360SummaryViewRater, Form360SummaryViewRaterTypeForceMandatory> {
    return Entity.entityBuilder(Form360SummaryViewRater);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360SummaryViewRater` entity type.
   * @returns A `Form360SummaryViewRater` request builder.
   */
  static requestBuilder(): Form360SummaryViewRaterRequestBuilder {
    return new Form360SummaryViewRaterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewRater`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360SummaryViewRater`.
   */
  static customField(fieldName: string): CustomField<Form360SummaryViewRater> {
    return Entity.customFieldSelector(fieldName, Form360SummaryViewRater);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';

export interface Form360SummaryViewRaterType {
  category?: string;
  comment?: string;
  displayName?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  formStatus?: string;
  formStatusDisplayString?: string;
  isDisplayAnonymous: boolean;
  isFixedParticipant: boolean;
  isFormRecallable: boolean;
  isShowContentLink: boolean;
  isShowDocCommentsForSendBack: boolean;
  isShowReminderEmail: boolean;
  maxRating?: number;
  order: number;
  overallRating?: number;
  overallRatingDisplayString?: string;
  participantId: string;
  showContentLinkUrl?: string;
  participantUser: UserType;
}

export interface Form360SummaryViewRaterTypeForceMandatory {
  category: string;
  comment: string;
  displayName: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  formStatus: string;
  formStatusDisplayString: string;
  isDisplayAnonymous: boolean;
  isFixedParticipant: boolean;
  isFormRecallable: boolean;
  isShowContentLink: boolean;
  isShowDocCommentsForSendBack: boolean;
  isShowReminderEmail: boolean;
  maxRating: number;
  order: number;
  overallRating: number;
  overallRatingDisplayString: string;
  participantId: string;
  showContentLinkUrl: string;
  participantUser: UserType;
}

export namespace Form360SummaryViewRater {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<Form360SummaryViewRater> = new StringField('category', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<Form360SummaryViewRater> = new StringField('comment', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[displayName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_NAME: StringField<Form360SummaryViewRater> = new StringField('displayName', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360SummaryViewRater> = new BigNumberField('formContentId', Form360SummaryViewRater, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360SummaryViewRater> = new BigNumberField('formDataId', Form360SummaryViewRater, 'Edm.Int64');
  /**
   * Static representation of the [[formStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_STATUS: StringField<Form360SummaryViewRater> = new StringField('formStatus', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[formStatusDisplayString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_STATUS_DISPLAY_STRING: StringField<Form360SummaryViewRater> = new StringField('formStatusDisplayString', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[isDisplayAnonymous]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DISPLAY_ANONYMOUS: BooleanField<Form360SummaryViewRater> = new BooleanField('isDisplayAnonymous', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[isFixedParticipant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FIXED_PARTICIPANT: BooleanField<Form360SummaryViewRater> = new BooleanField('isFixedParticipant', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[isFormRecallable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FORM_RECALLABLE: BooleanField<Form360SummaryViewRater> = new BooleanField('isFormRecallable', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowContentLink]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_CONTENT_LINK: BooleanField<Form360SummaryViewRater> = new BooleanField('isShowContentLink', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowDocCommentsForSendBack]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_DOC_COMMENTS_FOR_SEND_BACK: BooleanField<Form360SummaryViewRater> = new BooleanField('isShowDocCommentsForSendBack', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowReminderEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_REMINDER_EMAIL: BooleanField<Form360SummaryViewRater> = new BooleanField('isShowReminderEmail', Form360SummaryViewRater, 'Edm.Boolean');
  /**
   * Static representation of the [[maxRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_RATING: NumberField<Form360SummaryViewRater> = new NumberField('maxRating', Form360SummaryViewRater, 'Edm.Double');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: NumberField<Form360SummaryViewRater> = new NumberField('order', Form360SummaryViewRater, 'Edm.Int32');
  /**
   * Static representation of the [[overallRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_RATING: NumberField<Form360SummaryViewRater> = new NumberField('overallRating', Form360SummaryViewRater, 'Edm.Double');
  /**
   * Static representation of the [[overallRatingDisplayString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_RATING_DISPLAY_STRING: StringField<Form360SummaryViewRater> = new StringField('overallRatingDisplayString', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[participantId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ID: StringField<Form360SummaryViewRater> = new StringField('participantId', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the [[showContentLinkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_CONTENT_LINK_URL: StringField<Form360SummaryViewRater> = new StringField('showContentLinkURL', Form360SummaryViewRater, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER: OneToOneLink<Form360SummaryViewRater, User> = new OneToOneLink('participantUser', Form360SummaryViewRater, User);
  /**
   * All fields of the Form360SummaryViewRater entity.
   */
  export const _allFields: Array<StringField<Form360SummaryViewRater> | BigNumberField<Form360SummaryViewRater> | BooleanField<Form360SummaryViewRater> | NumberField<Form360SummaryViewRater> | OneToOneLink<Form360SummaryViewRater, User>> = [
    Form360SummaryViewRater.CATEGORY,
    Form360SummaryViewRater.COMMENT,
    Form360SummaryViewRater.DISPLAY_NAME,
    Form360SummaryViewRater.FORM_CONTENT_ID,
    Form360SummaryViewRater.FORM_DATA_ID,
    Form360SummaryViewRater.FORM_STATUS,
    Form360SummaryViewRater.FORM_STATUS_DISPLAY_STRING,
    Form360SummaryViewRater.IS_DISPLAY_ANONYMOUS,
    Form360SummaryViewRater.IS_FIXED_PARTICIPANT,
    Form360SummaryViewRater.IS_FORM_RECALLABLE,
    Form360SummaryViewRater.IS_SHOW_CONTENT_LINK,
    Form360SummaryViewRater.IS_SHOW_DOC_COMMENTS_FOR_SEND_BACK,
    Form360SummaryViewRater.IS_SHOW_REMINDER_EMAIL,
    Form360SummaryViewRater.MAX_RATING,
    Form360SummaryViewRater.ORDER,
    Form360SummaryViewRater.OVERALL_RATING,
    Form360SummaryViewRater.OVERALL_RATING_DISPLAY_STRING,
    Form360SummaryViewRater.PARTICIPANT_ID,
    Form360SummaryViewRater.SHOW_CONTENT_LINK_URL,
    Form360SummaryViewRater.PARTICIPANT_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360SummaryViewRater> = new AllFields('*', Form360SummaryViewRater);
  /**
   * All key fields of the Form360SummaryViewRater entity.
   */
  export const _keyFields: Array<Selectable<Form360SummaryViewRater>> = [Form360SummaryViewRater.FORM_CONTENT_ID, Form360SummaryViewRater.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360SummaryViewRater.
   */
  export const _keys: { [keys: string]: Selectable<Form360SummaryViewRater> } = Form360SummaryViewRater._keyFields.reduce((acc: { [keys: string]: Selectable<Form360SummaryViewRater> }, field: Selectable<Form360SummaryViewRater>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
