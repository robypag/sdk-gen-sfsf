/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormContentRequestBuilder } from './FormContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormContent" of service "SFOData".
 */
export class FormContent extends Entity implements FormContentType {
  /**
   * Technical entity name for FormContent.
   */
  static _entityName = 'FormContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormContent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * Form Subject.
   * @nullable
   */
  formSubjectId?: string;
  /**
   * lastModifiedDate.
   */
  lastModifiedDate!: Moment;
  /**
   * status.
   */
  status!: BigNumber;
  /**
   * One-to-many navigation property to the [[FormFolder]] entity.
   */
  folders!: FormFolder[];
  /**
   * One-to-many navigation property to the [[Form360ReviewContentDetail]] entity.
   */
  form360ReviewContentDetail!: Form360ReviewContentDetail[];
  /**
   * One-to-one navigation property to the [[FormHeader]] entity.
   */
  formHeader!: FormHeader;
  /**
   * One-to-many navigation property to the [[FormPmReviewContentDetail]] entity.
   */
  pmReviewContentDetail!: FormPmReviewContentDetail[];

  /**
   * Returns an entity builder to construct instances `FormContent`.
   * @returns A builder that constructs instances of entity type `FormContent`.
   */
  static builder(): EntityBuilderType<FormContent, FormContentTypeForceMandatory> {
    return Entity.entityBuilder(FormContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormContent` entity type.
   * @returns A `FormContent` request builder.
   */
  static requestBuilder(): FormContentRequestBuilder {
    return new FormContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormContent`.
   */
  static customField(fieldName: string): CustomField<FormContent> {
    return Entity.customFieldSelector(fieldName, FormContent);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormFolder, FormFolderType } from './FormFolder';
import { Form360ReviewContentDetail, Form360ReviewContentDetailType } from './Form360ReviewContentDetail';
import { FormHeader, FormHeaderType } from './FormHeader';
import { FormPmReviewContentDetail, FormPmReviewContentDetailType } from './FormPmReviewContentDetail';

export interface FormContentType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formSubjectId?: string;
  lastModifiedDate: Moment;
  status: BigNumber;
  folders: FormFolderType[];
  form360ReviewContentDetail: Form360ReviewContentDetailType[];
  formHeader: FormHeaderType;
  pmReviewContentDetail: FormPmReviewContentDetailType[];
}

export interface FormContentTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formSubjectId: string;
  lastModifiedDate: Moment;
  status: BigNumber;
  folders: FormFolderType[];
  form360ReviewContentDetail: Form360ReviewContentDetailType[];
  formHeader: FormHeaderType;
  pmReviewContentDetail: FormPmReviewContentDetailType[];
}

export namespace FormContent {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormContent> = new BigNumberField('formContentId', FormContent, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormContent> = new BigNumberField('formDataId', FormContent, 'Edm.Int64');
  /**
   * Static representation of the [[formSubjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_SUBJECT_ID: StringField<FormContent> = new StringField('formSubjectId', FormContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<FormContent> = new DateField('lastModifiedDate', FormContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: BigNumberField<FormContent> = new BigNumberField('status', FormContent, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[folders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLDERS: Link<FormContent, FormFolder> = new Link('folders', FormContent, FormFolder);
  /**
   * Static representation of the one-to-many navigation property [[form360ReviewContentDetail]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_360_REVIEW_CONTENT_DETAIL: Link<FormContent, Form360ReviewContentDetail> = new Link('form360ReviewContentDetail', FormContent, Form360ReviewContentDetail);
  /**
   * Static representation of the one-to-one navigation property [[formHeader]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_HEADER: OneToOneLink<FormContent, FormHeader> = new OneToOneLink('formHeader', FormContent, FormHeader);
  /**
   * Static representation of the one-to-many navigation property [[pmReviewContentDetail]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_REVIEW_CONTENT_DETAIL: Link<FormContent, FormPmReviewContentDetail> = new Link('pmReviewContentDetail', FormContent, FormPmReviewContentDetail);
  /**
   * All fields of the FormContent entity.
   */
  export const _allFields: Array<BigNumberField<FormContent> | StringField<FormContent> | DateField<FormContent> | Link<FormContent, FormFolder> | Link<FormContent, Form360ReviewContentDetail> | OneToOneLink<FormContent, FormHeader> | Link<FormContent, FormPmReviewContentDetail>> = [
    FormContent.FORM_CONTENT_ID,
    FormContent.FORM_DATA_ID,
    FormContent.FORM_SUBJECT_ID,
    FormContent.LAST_MODIFIED_DATE,
    FormContent.STATUS,
    FormContent.FOLDERS,
    FormContent.FORM_360_REVIEW_CONTENT_DETAIL,
    FormContent.FORM_HEADER,
    FormContent.PM_REVIEW_CONTENT_DETAIL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormContent> = new AllFields('*', FormContent);
  /**
   * All key fields of the FormContent entity.
   */
  export const _keyFields: Array<Selectable<FormContent>> = [FormContent.FORM_CONTENT_ID, FormContent.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormContent.
   */
  export const _keys: { [keys: string]: Selectable<FormContent> } = FormContent._keyFields.reduce((acc: { [keys: string]: Selectable<FormContent> }, field: Selectable<FormContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
