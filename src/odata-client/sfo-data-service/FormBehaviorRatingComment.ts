/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormBehaviorRatingCommentRequestBuilder } from './FormBehaviorRatingCommentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormBehaviorRatingComment" of service "SFOData".
 */
export class FormBehaviorRatingComment extends Entity implements FormBehaviorRatingCommentType {
  /**
   * Technical entity name for FormBehaviorRatingComment.
   */
  static _entityName = 'FormBehaviorRatingComment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormBehaviorRatingComment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * behaviorId.
   */
  behaviorId!: BigNumber;
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
   * Returns an entity builder to construct instances `FormBehaviorRatingComment`.
   * @returns A builder that constructs instances of entity type `FormBehaviorRatingComment`.
   */
  static builder(): EntityBuilderType<FormBehaviorRatingComment, FormBehaviorRatingCommentTypeForceMandatory> {
    return Entity.entityBuilder(FormBehaviorRatingComment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormBehaviorRatingComment` entity type.
   * @returns A `FormBehaviorRatingComment` request builder.
   */
  static requestBuilder(): FormBehaviorRatingCommentRequestBuilder {
    return new FormBehaviorRatingCommentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormBehaviorRatingComment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormBehaviorRatingComment`.
   */
  static customField(fieldName: string): CustomField<FormBehaviorRatingComment> {
    return Entity.customFieldSelector(fieldName, FormBehaviorRatingComment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormBehaviorRatingCommentType {
  behaviorId: BigNumber;
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

export interface FormBehaviorRatingCommentTypeForceMandatory {
  behaviorId: BigNumber;
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

export namespace FormBehaviorRatingComment {
  /**
   * Static representation of the [[behaviorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_ID: BigNumberField<FormBehaviorRatingComment> = new BigNumberField('behaviorId', FormBehaviorRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<FormBehaviorRatingComment> = new StringField('comment', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_KEY: StringField<FormBehaviorRatingComment> = new StringField('commentKey', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_LABEL: StringField<FormBehaviorRatingComment> = new StringField('commentLabel', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[commentPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_PERMISSION: StringField<FormBehaviorRatingComment> = new StringField('commentPermission', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<FormBehaviorRatingComment> = new StringField('firstName', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormBehaviorRatingComment> = new BigNumberField('formContentId', FormBehaviorRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormBehaviorRatingComment> = new BigNumberField('formDataId', FormBehaviorRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[fullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_NAME: StringField<FormBehaviorRatingComment> = new StringField('fullName', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormBehaviorRatingComment> = new BigNumberField('itemId', FormBehaviorRatingComment, 'Edm.Int64');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<FormBehaviorRatingComment> = new StringField('lastName', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: StringField<FormBehaviorRatingComment> = new StringField('rating', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_KEY: StringField<FormBehaviorRatingComment> = new StringField('ratingKey', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_LABEL: StringField<FormBehaviorRatingComment> = new StringField('ratingLabel', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_PERMISSION: StringField<FormBehaviorRatingComment> = new StringField('ratingPermission', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[ratingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_TYPE: StringField<FormBehaviorRatingComment> = new StringField('ratingType', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormBehaviorRatingComment> = new NumberField('sectionIndex', FormBehaviorRatingComment, 'Edm.Int32');
  /**
   * Static representation of the [[textRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_RATING: StringField<FormBehaviorRatingComment> = new StringField('textRating', FormBehaviorRatingComment, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormBehaviorRatingComment> = new StringField('userId', FormBehaviorRatingComment, 'Edm.String');
  /**
   * All fields of the FormBehaviorRatingComment entity.
   */
  export const _allFields: Array<BigNumberField<FormBehaviorRatingComment> | StringField<FormBehaviorRatingComment> | NumberField<FormBehaviorRatingComment>> = [
    FormBehaviorRatingComment.BEHAVIOR_ID,
    FormBehaviorRatingComment.COMMENT,
    FormBehaviorRatingComment.COMMENT_KEY,
    FormBehaviorRatingComment.COMMENT_LABEL,
    FormBehaviorRatingComment.COMMENT_PERMISSION,
    FormBehaviorRatingComment.FIRST_NAME,
    FormBehaviorRatingComment.FORM_CONTENT_ID,
    FormBehaviorRatingComment.FORM_DATA_ID,
    FormBehaviorRatingComment.FULL_NAME,
    FormBehaviorRatingComment.ITEM_ID,
    FormBehaviorRatingComment.LAST_NAME,
    FormBehaviorRatingComment.RATING,
    FormBehaviorRatingComment.RATING_KEY,
    FormBehaviorRatingComment.RATING_LABEL,
    FormBehaviorRatingComment.RATING_PERMISSION,
    FormBehaviorRatingComment.RATING_TYPE,
    FormBehaviorRatingComment.SECTION_INDEX,
    FormBehaviorRatingComment.TEXT_RATING,
    FormBehaviorRatingComment.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormBehaviorRatingComment> = new AllFields('*', FormBehaviorRatingComment);
  /**
   * All key fields of the FormBehaviorRatingComment entity.
   */
  export const _keyFields: Array<Selectable<FormBehaviorRatingComment>> = [FormBehaviorRatingComment.BEHAVIOR_ID, FormBehaviorRatingComment.FORM_CONTENT_ID, FormBehaviorRatingComment.FORM_DATA_ID, FormBehaviorRatingComment.ITEM_ID, FormBehaviorRatingComment.RATING_TYPE, FormBehaviorRatingComment.SECTION_INDEX, FormBehaviorRatingComment.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property FormBehaviorRatingComment.
   */
  export const _keys: { [keys: string]: Selectable<FormBehaviorRatingComment> } = FormBehaviorRatingComment._keyFields.reduce((acc: { [keys: string]: Selectable<FormBehaviorRatingComment> }, field: Selectable<FormBehaviorRatingComment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
