/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormUserRatingCommentRequestBuilder } from './FormUserRatingCommentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormUserRatingComment" of service "SFOData".
 */
export class FormUserRatingComment extends Entity implements FormUserRatingCommentType {
  /**
   * Technical entity name for FormUserRatingComment.
   */
  static _entityName = 'FormUserRatingComment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormUserRatingComment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * comment.
   * @nullable
   */
  comment?: string;
  /**
   * commentKey.
   * @nullable
   */
  commentKey?: string;
  /**
   * commentLabel.
   * @nullable
   */
  commentLabel?: string;
  /**
   * commentPermission.
   * @nullable
   */
  commentPermission?: string;
  /**
   * firstName.
   * @nullable
   */
  firstName?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * fullName.
   * @nullable
   */
  fullName?: string;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * lastName.
   * @nullable
   */
  lastName?: string;
  /**
   * rating.
   * @nullable
   */
  rating?: string;
  /**
   * ratingKey.
   * @nullable
   */
  ratingKey?: string;
  /**
   * ratingLabel.
   * @nullable
   */
  ratingLabel?: string;
  /**
   * ratingPermission.
   * @nullable
   */
  ratingPermission?: string;
  /**
   * ratingType.
   */
  ratingType!: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * textRating.
   * @nullable
   */
  textRating?: string;
  /**
   * userId.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `FormUserRatingComment`.
   * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
   */
  static builder(): EntityBuilderType<FormUserRatingComment, FormUserRatingCommentTypeForceMandatory> {
    return Entity.entityBuilder(FormUserRatingComment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormUserRatingComment` entity type.
   * @returns A `FormUserRatingComment` request builder.
   */
  static requestBuilder(): FormUserRatingCommentRequestBuilder {
    return new FormUserRatingCommentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserRatingComment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
   */
  static customField(fieldName: string): CustomField<FormUserRatingComment> {
    return Entity.customFieldSelector(fieldName, FormUserRatingComment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormUserRatingCommentType {
  comment?: string;
  commentKey?: string;
  commentLabel?: string;
  commentPermission?: string;
  firstName?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  fullName?: string;
  itemId: BigNumber;
  lastName?: string;
  rating?: string;
  ratingKey?: string;
  ratingLabel?: string;
  ratingPermission?: string;
  ratingType: string;
  sectionIndex: number;
  textRating?: string;
  userId: string;
}

export interface FormUserRatingCommentTypeForceMandatory {
  comment: string;
  commentKey: string;
  commentLabel: string;
  commentPermission: string;
  firstName: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  fullName: string;
  itemId: BigNumber;
  lastName: string;
  rating: string;
  ratingKey: string;
  ratingLabel: string;
  ratingPermission: string;
  ratingType: string;
  sectionIndex: number;
  textRating: string;
  userId: string;
}

export namespace FormUserRatingComment {
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<FormUserRatingComment> = new StringField('comment', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_KEY: StringField<FormUserRatingComment> = new StringField('commentKey', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_LABEL: StringField<FormUserRatingComment> = new StringField('commentLabel', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_PERMISSION: StringField<FormUserRatingComment> = new StringField('commentPermission', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<FormUserRatingComment> = new StringField('firstName', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormUserRatingComment> = new BigNumberField('formContentId', FormUserRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormUserRatingComment> = new BigNumberField('formDataId', FormUserRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[fullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_NAME: StringField<FormUserRatingComment> = new StringField('fullName', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormUserRatingComment> = new BigNumberField('itemId', FormUserRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<FormUserRatingComment> = new StringField('lastName', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: StringField<FormUserRatingComment> = new StringField('rating', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_KEY: StringField<FormUserRatingComment> = new StringField('ratingKey', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_LABEL: StringField<FormUserRatingComment> = new StringField('ratingLabel', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_PERMISSION: StringField<FormUserRatingComment> = new StringField('ratingPermission', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_TYPE: StringField<FormUserRatingComment> = new StringField('ratingType', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormUserRatingComment> = new NumberField('sectionIndex', FormUserRatingComment, 'Edm.Int32');
  /**
   * Static representation of the [[textRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_RATING: StringField<FormUserRatingComment> = new StringField('textRating', FormUserRatingComment, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormUserRatingComment> = new StringField('userId', FormUserRatingComment, 'Edm.String');
  /**
   * All fields of the FormUserRatingComment entity.
   */
  export const _allFields: Array<StringField<FormUserRatingComment> | BigNumberField<FormUserRatingComment> | NumberField<FormUserRatingComment>> = [
    FormUserRatingComment.COMMENT,
    FormUserRatingComment.COMMENT_KEY,
    FormUserRatingComment.COMMENT_LABEL,
    FormUserRatingComment.COMMENT_PERMISSION,
    FormUserRatingComment.FIRST_NAME,
    FormUserRatingComment.FORM_CONTENT_ID,
    FormUserRatingComment.FORM_DATA_ID,
    FormUserRatingComment.FULL_NAME,
    FormUserRatingComment.ITEM_ID,
    FormUserRatingComment.LAST_NAME,
    FormUserRatingComment.RATING,
    FormUserRatingComment.RATING_KEY,
    FormUserRatingComment.RATING_LABEL,
    FormUserRatingComment.RATING_PERMISSION,
    FormUserRatingComment.RATING_TYPE,
    FormUserRatingComment.SECTION_INDEX,
    FormUserRatingComment.TEXT_RATING,
    FormUserRatingComment.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormUserRatingComment> = new AllFields('*', FormUserRatingComment);
  /**
   * All key fields of the FormUserRatingComment entity.
   */
  export const _keyFields: Array<Selectable<FormUserRatingComment>> = [FormUserRatingComment.FORM_CONTENT_ID, FormUserRatingComment.FORM_DATA_ID, FormUserRatingComment.ITEM_ID, FormUserRatingComment.RATING_TYPE, FormUserRatingComment.SECTION_INDEX, FormUserRatingComment.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property FormUserRatingComment.
   */
  export const _keys: { [keys: string]: Selectable<FormUserRatingComment> } = FormUserRatingComment._keyFields.reduce((acc: { [keys: string]: Selectable<FormUserRatingComment> }, field: Selectable<FormUserRatingComment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
