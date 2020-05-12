/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormReviewFeedbackRequestBuilder } from './FormReviewFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormReviewFeedback" of service "SFOData".
 */
export class FormReviewFeedback extends Entity implements FormReviewFeedbackType {
  /**
   * Technical entity name for FormReviewFeedback.
   */
  static _entityName = 'FormReviewFeedback';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormReviewFeedback.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * appraiserUserEmail.
   * @nullable
   */
  appraiserUserEmail?: string;
  /**
   * appraiserUserId.
   * @nullable
   */
  appraiserUserId?: string;
  /**
   * companyId.
   * @nullable
   */
  companyId?: string;
  /**
   * digiCode.
   * @nullable
   */
  digiCode?: string;
  /**
   * feedbackId.
   */
  feedbackId!: BigNumber;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: BigNumber;
  /**
   * pmFeedback.
   * @nullable
   */
  pmFeedback?: string;
  /**
   * requestDate.
   * @nullable
   */
  requestDate?: Moment;
  /**
   * requestUserEmail.
   * @nullable
   */
  requestUserEmail?: string;
  /**
   * requestUserId.
   * @nullable
   */
  requestUserId?: string;
  /**
   * requestUserRole.
   * @nullable
   */
  requestUserRole?: string;
  /**
   * responseDate.
   * @nullable
   */
  responseDate?: Moment;
  /**
   * responseId.
   * @nullable
   */
  responseId?: string;
  /**
   * subjectUserEmail.
   * @nullable
   */
  subjectUserEmail?: string;
  /**
   * subjectUserId.
   * @nullable
   */
  subjectUserId?: string;

  /**
   * Returns an entity builder to construct instances `FormReviewFeedback`.
   * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
   */
  static builder(): EntityBuilderType<FormReviewFeedback, FormReviewFeedbackTypeForceMandatory> {
    return Entity.entityBuilder(FormReviewFeedback);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormReviewFeedback` entity type.
   * @returns A `FormReviewFeedback` request builder.
   */
  static requestBuilder(): FormReviewFeedbackRequestBuilder {
    return new FormReviewFeedbackRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewFeedback`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
   */
  static customField(fieldName: string): CustomField<FormReviewFeedback> {
    return Entity.customFieldSelector(fieldName, FormReviewFeedback);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormReviewFeedbackType {
  appraiserUserEmail?: string;
  appraiserUserId?: string;
  companyId?: string;
  digiCode?: string;
  feedbackId: BigNumber;
  formDataId?: BigNumber;
  pmFeedback?: string;
  requestDate?: Moment;
  requestUserEmail?: string;
  requestUserId?: string;
  requestUserRole?: string;
  responseDate?: Moment;
  responseId?: string;
  subjectUserEmail?: string;
  subjectUserId?: string;
}

export interface FormReviewFeedbackTypeForceMandatory {
  appraiserUserEmail: string;
  appraiserUserId: string;
  companyId: string;
  digiCode: string;
  feedbackId: BigNumber;
  formDataId: BigNumber;
  pmFeedback: string;
  requestDate: Moment;
  requestUserEmail: string;
  requestUserId: string;
  requestUserRole: string;
  responseDate: Moment;
  responseId: string;
  subjectUserEmail: string;
  subjectUserId: string;
}

export namespace FormReviewFeedback {
  /**
   * Static representation of the [[appraiserUserEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPRAISER_USER_EMAIL: StringField<FormReviewFeedback> = new StringField('appraiserUserEmail', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[appraiserUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPRAISER_USER_ID: StringField<FormReviewFeedback> = new StringField('appraiserUserId', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[companyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_ID: StringField<FormReviewFeedback> = new StringField('companyId', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[digiCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIGI_CODE: StringField<FormReviewFeedback> = new StringField('digiCode', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[feedbackId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_ID: BigNumberField<FormReviewFeedback> = new BigNumberField('feedbackId', FormReviewFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormReviewFeedback> = new BigNumberField('formDataId', FormReviewFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[pmFeedback]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_FEEDBACK: StringField<FormReviewFeedback> = new StringField('pmFeedback', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[requestDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_DATE: DateField<FormReviewFeedback> = new DateField('requestDate', FormReviewFeedback, 'Edm.DateTime');
  /**
   * Static representation of the [[requestUserEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_USER_EMAIL: StringField<FormReviewFeedback> = new StringField('requestUserEmail', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[requestUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_USER_ID: StringField<FormReviewFeedback> = new StringField('requestUserId', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[requestUserRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_USER_ROLE: StringField<FormReviewFeedback> = new StringField('requestUserRole', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[responseDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_DATE: DateField<FormReviewFeedback> = new DateField('responseDate', FormReviewFeedback, 'Edm.DateTime');
  /**
   * Static representation of the [[responseId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_ID: StringField<FormReviewFeedback> = new StringField('responseId', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[subjectUserEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_EMAIL: StringField<FormReviewFeedback> = new StringField('subjectUserEmail', FormReviewFeedback, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<FormReviewFeedback> = new StringField('subjectUserId', FormReviewFeedback, 'Edm.String');
  /**
   * All fields of the FormReviewFeedback entity.
   */
  export const _allFields: Array<StringField<FormReviewFeedback> | BigNumberField<FormReviewFeedback> | DateField<FormReviewFeedback>> = [
    FormReviewFeedback.APPRAISER_USER_EMAIL,
    FormReviewFeedback.APPRAISER_USER_ID,
    FormReviewFeedback.COMPANY_ID,
    FormReviewFeedback.DIGI_CODE,
    FormReviewFeedback.FEEDBACK_ID,
    FormReviewFeedback.FORM_DATA_ID,
    FormReviewFeedback.PM_FEEDBACK,
    FormReviewFeedback.REQUEST_DATE,
    FormReviewFeedback.REQUEST_USER_EMAIL,
    FormReviewFeedback.REQUEST_USER_ID,
    FormReviewFeedback.REQUEST_USER_ROLE,
    FormReviewFeedback.RESPONSE_DATE,
    FormReviewFeedback.RESPONSE_ID,
    FormReviewFeedback.SUBJECT_USER_EMAIL,
    FormReviewFeedback.SUBJECT_USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormReviewFeedback> = new AllFields('*', FormReviewFeedback);
  /**
   * All key fields of the FormReviewFeedback entity.
   */
  export const _keyFields: Array<Selectable<FormReviewFeedback>> = [FormReviewFeedback.FEEDBACK_ID];
  /**
   * Mapping of all key field names to the respective static field property FormReviewFeedback.
   */
  export const _keys: { [keys: string]: Selectable<FormReviewFeedback> } = FormReviewFeedback._keyFields.reduce((acc: { [keys: string]: Selectable<FormReviewFeedback> }, field: Selectable<FormReviewFeedback>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
