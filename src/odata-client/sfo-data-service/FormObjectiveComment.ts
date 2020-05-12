/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveCommentRequestBuilder } from './FormObjectiveCommentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveComment" of service "SFOData".
 */
export class FormObjectiveComment extends Entity implements FormObjectiveCommentType {
  /**
   * Technical entity name for FormObjectiveComment.
   */
  static _entityName = 'FormObjectiveComment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveComment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * commentDate.
   * @nullable
   */
  commentDate?: string;
  /**
   * commentText.
   * @nullable
   */
  commentText?: string;
  /**
   * fieldDataType.
   * @nullable
   */
  fieldDataType?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * order.
   * @nullable
   */
  order?: number;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * type.
   */
  type!: number;
  /**
   * userFullName.
   * @nullable
   */
  userFullName?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;

  /**
   * Returns an entity builder to construct instances `FormObjectiveComment`.
   * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
   */
  static builder(): EntityBuilderType<FormObjectiveComment, FormObjectiveCommentTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveComment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveComment` entity type.
   * @returns A `FormObjectiveComment` request builder.
   */
  static requestBuilder(): FormObjectiveCommentRequestBuilder {
    return new FormObjectiveCommentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveComment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveComment> {
    return Entity.customFieldSelector(fieldName, FormObjectiveComment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormObjectiveCommentType {
  commentDate?: string;
  commentText?: string;
  fieldDataType?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  label?: string;
  order?: number;
  sectionIndex: number;
  type: number;
  userFullName?: string;
  userId?: string;
}

export interface FormObjectiveCommentTypeForceMandatory {
  commentDate: string;
  commentText: string;
  fieldDataType: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  label: string;
  order: number;
  sectionIndex: number;
  type: number;
  userFullName: string;
  userId: string;
}

export namespace FormObjectiveComment {
  /**
   * Static representation of the [[commentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_DATE: StringField<FormObjectiveComment> = new StringField('commentDate', FormObjectiveComment, 'Edm.String');
  /**
   * Static representation of the [[commentText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_TEXT: StringField<FormObjectiveComment> = new StringField('commentText', FormObjectiveComment, 'Edm.String');
  /**
   * Static representation of the [[fieldDataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_DATA_TYPE: StringField<FormObjectiveComment> = new StringField('fieldDataType', FormObjectiveComment, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveComment> = new BigNumberField('formContentId', FormObjectiveComment, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveComment> = new BigNumberField('formDataId', FormObjectiveComment, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveComment> = new BigNumberField('itemId', FormObjectiveComment, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<FormObjectiveComment> = new StringField('label', FormObjectiveComment, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: NumberField<FormObjectiveComment> = new NumberField('order', FormObjectiveComment, 'Edm.Int32');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveComment> = new NumberField('sectionIndex', FormObjectiveComment, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<FormObjectiveComment> = new NumberField('type', FormObjectiveComment, 'Edm.Int32');
  /**
   * Static representation of the [[userFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_FULL_NAME: StringField<FormObjectiveComment> = new StringField('userFullName', FormObjectiveComment, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormObjectiveComment> = new StringField('userId', FormObjectiveComment, 'Edm.String');
  /**
   * All fields of the FormObjectiveComment entity.
   */
  export const _allFields: Array<StringField<FormObjectiveComment> | BigNumberField<FormObjectiveComment> | NumberField<FormObjectiveComment>> = [
    FormObjectiveComment.COMMENT_DATE,
    FormObjectiveComment.COMMENT_TEXT,
    FormObjectiveComment.FIELD_DATA_TYPE,
    FormObjectiveComment.FORM_CONTENT_ID,
    FormObjectiveComment.FORM_DATA_ID,
    FormObjectiveComment.ITEM_ID,
    FormObjectiveComment.LABEL,
    FormObjectiveComment.ORDER,
    FormObjectiveComment.SECTION_INDEX,
    FormObjectiveComment.TYPE,
    FormObjectiveComment.USER_FULL_NAME,
    FormObjectiveComment.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveComment> = new AllFields('*', FormObjectiveComment);
  /**
   * All key fields of the FormObjectiveComment entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveComment>> = [FormObjectiveComment.FORM_CONTENT_ID, FormObjectiveComment.FORM_DATA_ID, FormObjectiveComment.ITEM_ID, FormObjectiveComment.SECTION_INDEX, FormObjectiveComment.TYPE];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveComment.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveComment> } = FormObjectiveComment._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveComment> }, field: Selectable<FormObjectiveComment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
