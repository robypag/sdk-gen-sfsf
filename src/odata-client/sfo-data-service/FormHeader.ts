/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormHeaderRequestBuilder } from './FormHeaderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormHeader" of service "SFOData".
 */
export class FormHeader extends Entity implements FormHeaderType {
  /**
   * Technical entity name for FormHeader.
   */
  static _entityName = 'FormHeader';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormHeader.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * creationDate.
   */
  creationDate!: Moment;
  /**
   * Current Step.
   * @nullable
   */
  currentStep?: string;
  /**
   * Data Assigned.
   * @nullable
   */
  dateAssigned?: Moment;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * formDataStatus.
   */
  formDataStatus!: BigNumber;
  /**
   * formDataVersion.
   */
  formDataVersion!: string;
  /**
   * formLastModifiedDate.
   */
  formLastModifiedDate!: Moment;
  /**
   * formOriginator.
   */
  formOriginator!: string;
  /**
   * formReviewDueDate.
   */
  formReviewDueDate!: Moment;
  /**
   * formReviewEndDate.
   */
  formReviewEndDate!: Moment;
  /**
   * formReviewStartDate.
   * @nullable
   */
  formReviewStartDate?: Moment;
  /**
   * formSubjectId.
   */
  formSubjectId!: string;
  /**
   * formTemplateId.
   */
  formTemplateId!: BigNumber;
  /**
   * formTemplateType.
   */
  formTemplateType!: string;
  /**
   * formTitle.
   */
  formTitle!: string;
  /**
   * isRated.
   */
  isRated!: boolean;
  /**
   * rating.
   */
  rating!: BigNumber;
  /**
   * Send From.
   * @nullable
   */
  sender?: string;
  /**
   * Step Due Date.
   * @nullable
   */
  stepDueDate?: Moment;
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  formAttachments!: Attachment[];
  /**
   * One-to-many navigation property to the [[FormAuditTrail]] entity.
   */
  formAuditTrails!: FormAuditTrail[];
  /**
   * One-to-many navigation property to the [[FormContent]] entity.
   */
  formContents!: FormContent[];
  /**
   * One-to-one navigation property to the [[FormReviewFeedbackList]] entity.
   */
  formFeedbackList!: FormReviewFeedbackList;
  /**
   * One-to-one navigation property to the [[FormContent]] entity.
   */
  formLastContent!: FormContent;
  /**
   * One-to-one navigation property to the [[FormRouteMap]] entity.
   */
  formRouteMap!: FormRouteMap;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  formSender!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  formSubject!: User;
  /**
   * One-to-one navigation property to the [[FormTemplate]] entity.
   */
  formTemplate!: FormTemplate;

  /**
   * Returns an entity builder to construct instances `FormHeader`.
   * @returns A builder that constructs instances of entity type `FormHeader`.
   */
  static builder(): EntityBuilderType<FormHeader, FormHeaderTypeForceMandatory> {
    return Entity.entityBuilder(FormHeader);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormHeader` entity type.
   * @returns A `FormHeader` request builder.
   */
  static requestBuilder(): FormHeaderRequestBuilder {
    return new FormHeaderRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormHeader`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormHeader`.
   */
  static customField(fieldName: string): CustomField<FormHeader> {
    return Entity.customFieldSelector(fieldName, FormHeader);
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
import { FormAuditTrail, FormAuditTrailType } from './FormAuditTrail';
import { FormContent, FormContentType } from './FormContent';
import { FormReviewFeedbackList, FormReviewFeedbackListType } from './FormReviewFeedbackList';
import { FormRouteMap, FormRouteMapType } from './FormRouteMap';
import { User, UserType } from './User';
import { FormTemplate, FormTemplateType } from './FormTemplate';

export interface FormHeaderType {
  creationDate: Moment;
  currentStep?: string;
  dateAssigned?: Moment;
  formDataId: BigNumber;
  formDataStatus: BigNumber;
  formDataVersion: string;
  formLastModifiedDate: Moment;
  formOriginator: string;
  formReviewDueDate: Moment;
  formReviewEndDate: Moment;
  formReviewStartDate?: Moment;
  formSubjectId: string;
  formTemplateId: BigNumber;
  formTemplateType: string;
  formTitle: string;
  isRated: boolean;
  rating: BigNumber;
  sender?: string;
  stepDueDate?: Moment;
  formAttachments: AttachmentType[];
  formAuditTrails: FormAuditTrailType[];
  formContents: FormContentType[];
  formFeedbackList: FormReviewFeedbackListType;
  formLastContent: FormContentType;
  formRouteMap: FormRouteMapType;
  formSender: UserType;
  formSubject: UserType;
  formTemplate: FormTemplateType;
}

export interface FormHeaderTypeForceMandatory {
  creationDate: Moment;
  currentStep: string;
  dateAssigned: Moment;
  formDataId: BigNumber;
  formDataStatus: BigNumber;
  formDataVersion: string;
  formLastModifiedDate: Moment;
  formOriginator: string;
  formReviewDueDate: Moment;
  formReviewEndDate: Moment;
  formReviewStartDate: Moment;
  formSubjectId: string;
  formTemplateId: BigNumber;
  formTemplateType: string;
  formTitle: string;
  isRated: boolean;
  rating: BigNumber;
  sender: string;
  stepDueDate: Moment;
  formAttachments: AttachmentType[];
  formAuditTrails: FormAuditTrailType[];
  formContents: FormContentType[];
  formFeedbackList: FormReviewFeedbackListType;
  formLastContent: FormContentType;
  formRouteMap: FormRouteMapType;
  formSender: UserType;
  formSubject: UserType;
  formTemplate: FormTemplateType;
}

export namespace FormHeader {
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<FormHeader> = new DateField('creationDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currentStep]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STEP: StringField<FormHeader> = new StringField('currentStep', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[dateAssigned]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_ASSIGNED: DateField<FormHeader> = new DateField('dateAssigned', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormHeader> = new BigNumberField('formDataId', FormHeader, 'Edm.Int64');
  /**
   * Static representation of the [[formDataStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_STATUS: BigNumberField<FormHeader> = new BigNumberField('formDataStatus', FormHeader, 'Edm.Int64');
  /**
   * Static representation of the [[formDataVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_VERSION: StringField<FormHeader> = new StringField('formDataVersion', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[formLastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_LAST_MODIFIED_DATE: DateField<FormHeader> = new DateField('formLastModifiedDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formOriginator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ORIGINATOR: StringField<FormHeader> = new StringField('formOriginator', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[formReviewDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_REVIEW_DUE_DATE: DateField<FormHeader> = new DateField('formReviewDueDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formReviewEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_REVIEW_END_DATE: DateField<FormHeader> = new DateField('formReviewEndDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formReviewStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_REVIEW_START_DATE: DateField<FormHeader> = new DateField('formReviewStartDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formSubjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SUBJECT_ID: StringField<FormHeader> = new StringField('formSubjectId', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[formTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_ID: BigNumberField<FormHeader> = new BigNumberField('formTemplateId', FormHeader, 'Edm.Int64');
  /**
   * Static representation of the [[formTemplateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_TYPE: StringField<FormHeader> = new StringField('formTemplateType', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[formTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TITLE: StringField<FormHeader> = new StringField('formTitle', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[isRated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_RATED: BooleanField<FormHeader> = new BooleanField('isRated', FormHeader, 'Edm.Boolean');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: BigNumberField<FormHeader> = new BigNumberField('rating', FormHeader, 'Edm.Decimal');
  /**
   * Static representation of the [[sender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENDER: StringField<FormHeader> = new StringField('sender', FormHeader, 'Edm.String');
  /**
   * Static representation of the [[stepDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_DUE_DATE: DateField<FormHeader> = new DateField('stepDueDate', FormHeader, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-many navigation property [[formAttachments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ATTACHMENTS: Link<FormHeader, Attachment> = new Link('formAttachments', FormHeader, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[formAuditTrails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_AUDIT_TRAILS: Link<FormHeader, FormAuditTrail> = new Link('formAuditTrails', FormHeader, FormAuditTrail);
  /**
   * Static representation of the one-to-many navigation property [[formContents]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENTS: Link<FormHeader, FormContent> = new Link('formContents', FormHeader, FormContent);
  /**
   * Static representation of the one-to-one navigation property [[formFeedbackList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_FEEDBACK_LIST: OneToOneLink<FormHeader, FormReviewFeedbackList> = new OneToOneLink('formFeedbackList', FormHeader, FormReviewFeedbackList);
  /**
   * Static representation of the one-to-one navigation property [[formLastContent]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_LAST_CONTENT: OneToOneLink<FormHeader, FormContent> = new OneToOneLink('formLastContent', FormHeader, FormContent);
  /**
   * Static representation of the one-to-one navigation property [[formRouteMap]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ROUTE_MAP: OneToOneLink<FormHeader, FormRouteMap> = new OneToOneLink('formRouteMap', FormHeader, FormRouteMap);
  /**
   * Static representation of the one-to-one navigation property [[formSender]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SENDER: OneToOneLink<FormHeader, User> = new OneToOneLink('formSender', FormHeader, User);
  /**
   * Static representation of the one-to-one navigation property [[formSubject]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SUBJECT: OneToOneLink<FormHeader, User> = new OneToOneLink('formSubject', FormHeader, User);
  /**
   * Static representation of the one-to-one navigation property [[formTemplate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE: OneToOneLink<FormHeader, FormTemplate> = new OneToOneLink('formTemplate', FormHeader, FormTemplate);
  /**
   * All fields of the FormHeader entity.
   */
  export const _allFields: Array<DateField<FormHeader> | StringField<FormHeader> | BigNumberField<FormHeader> | BooleanField<FormHeader> | Link<FormHeader, Attachment> | Link<FormHeader, FormAuditTrail> | Link<FormHeader, FormContent> | OneToOneLink<FormHeader, FormReviewFeedbackList> | OneToOneLink<FormHeader, FormContent> | OneToOneLink<FormHeader, FormRouteMap> | OneToOneLink<FormHeader, User> | OneToOneLink<FormHeader, FormTemplate>> = [
    FormHeader.CREATION_DATE,
    FormHeader.CURRENT_STEP,
    FormHeader.DATE_ASSIGNED,
    FormHeader.FORM_DATA_ID,
    FormHeader.FORM_DATA_STATUS,
    FormHeader.FORM_DATA_VERSION,
    FormHeader.FORM_LAST_MODIFIED_DATE,
    FormHeader.FORM_ORIGINATOR,
    FormHeader.FORM_REVIEW_DUE_DATE,
    FormHeader.FORM_REVIEW_END_DATE,
    FormHeader.FORM_REVIEW_START_DATE,
    FormHeader.FORM_SUBJECT_ID,
    FormHeader.FORM_TEMPLATE_ID,
    FormHeader.FORM_TEMPLATE_TYPE,
    FormHeader.FORM_TITLE,
    FormHeader.IS_RATED,
    FormHeader.RATING,
    FormHeader.SENDER,
    FormHeader.STEP_DUE_DATE,
    FormHeader.FORM_ATTACHMENTS,
    FormHeader.FORM_AUDIT_TRAILS,
    FormHeader.FORM_CONTENTS,
    FormHeader.FORM_FEEDBACK_LIST,
    FormHeader.FORM_LAST_CONTENT,
    FormHeader.FORM_ROUTE_MAP,
    FormHeader.FORM_SENDER,
    FormHeader.FORM_SUBJECT,
    FormHeader.FORM_TEMPLATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormHeader> = new AllFields('*', FormHeader);
  /**
   * All key fields of the FormHeader entity.
   */
  export const _keyFields: Array<Selectable<FormHeader>> = [FormHeader.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormHeader.
   */
  export const _keys: { [keys: string]: Selectable<FormHeader> } = FormHeader._keyFields.reduce((acc: { [keys: string]: Selectable<FormHeader> }, field: Selectable<FormHeader>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
