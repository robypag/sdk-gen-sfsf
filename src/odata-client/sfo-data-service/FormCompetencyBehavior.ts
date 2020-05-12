/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormCompetencyBehaviorRequestBuilder } from './FormCompetencyBehaviorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormCompetencyBehavior" of service "SFOData".
 */
export class FormCompetencyBehavior extends Entity implements FormCompetencyBehaviorType {
  /**
   * Technical entity name for FormCompetencyBehavior.
   */
  static _entityName = 'FormCompetencyBehavior';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormCompetencyBehavior.
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
   * behaviorIndex.
   * @nullable
   */
  behaviorIndex?: BigNumber;
  /**
   * behaviorName.
   * @nullable
   */
  behaviorName?: string;
  /**
   * category.
   * @nullable
   */
  category?: string;
  /**
   * description.
   * @nullable
   */
  description?: string;
  /**
   * expectedRating.
   * @nullable
   */
  expectedRating?: string;
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
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * weight.
   * @nullable
   */
  weight?: string;
  /**
   * weightKey.
   * @nullable
   */
  weightKey?: string;
  /**
   * One-to-one navigation property to the [[FormBehaviorRatingComment]] entity.
   */
  officialRating!: FormBehaviorRatingComment;
  /**
   * One-to-many navigation property to the [[FormBehaviorRatingComment]] entity.
   */
  othersRatingComment!: FormBehaviorRatingComment[];
  /**
   * One-to-one navigation property to the [[FormBehaviorRatingComment]] entity.
   */
  selfRatingComment!: FormBehaviorRatingComment;

  /**
   * Returns an entity builder to construct instances `FormCompetencyBehavior`.
   * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
   */
  static builder(): EntityBuilderType<FormCompetencyBehavior, FormCompetencyBehaviorTypeForceMandatory> {
    return Entity.entityBuilder(FormCompetencyBehavior);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormCompetencyBehavior` entity type.
   * @returns A `FormCompetencyBehavior` request builder.
   */
  static requestBuilder(): FormCompetencyBehaviorRequestBuilder {
    return new FormCompetencyBehaviorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencyBehavior`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
   */
  static customField(fieldName: string): CustomField<FormCompetencyBehavior> {
    return Entity.customFieldSelector(fieldName, FormCompetencyBehavior);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormBehaviorRatingComment, FormBehaviorRatingCommentType } from './FormBehaviorRatingComment';

export interface FormCompetencyBehaviorType {
  behaviorId: BigNumber;
  behaviorIndex?: BigNumber;
  behaviorName?: string;
  category?: string;
  description?: string;
  expectedRating?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  weight?: string;
  weightKey?: string;
  officialRating: FormBehaviorRatingCommentType;
  othersRatingComment: FormBehaviorRatingCommentType[];
  selfRatingComment: FormBehaviorRatingCommentType;
}

export interface FormCompetencyBehaviorTypeForceMandatory {
  behaviorId: BigNumber;
  behaviorIndex: BigNumber;
  behaviorName: string;
  category: string;
  description: string;
  expectedRating: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  weight: string;
  weightKey: string;
  officialRating: FormBehaviorRatingCommentType;
  othersRatingComment: FormBehaviorRatingCommentType[];
  selfRatingComment: FormBehaviorRatingCommentType;
}

export namespace FormCompetencyBehavior {
  /**
   * Static representation of the [[behaviorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_ID: BigNumberField<FormCompetencyBehavior> = new BigNumberField('behaviorId', FormCompetencyBehavior, 'Edm.Int64');
  /**
   * Static representation of the [[behaviorIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_INDEX: BigNumberField<FormCompetencyBehavior> = new BigNumberField('behaviorIndex', FormCompetencyBehavior, 'Edm.Int64');
  /**
   * Static representation of the [[behaviorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME: StringField<FormCompetencyBehavior> = new StringField('behaviorName', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<FormCompetencyBehavior> = new StringField('category', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FormCompetencyBehavior> = new StringField('description', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the [[expectedRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_RATING: StringField<FormCompetencyBehavior> = new StringField('expectedRating', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormCompetencyBehavior> = new BigNumberField('formContentId', FormCompetencyBehavior, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormCompetencyBehavior> = new BigNumberField('formDataId', FormCompetencyBehavior, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormCompetencyBehavior> = new BigNumberField('itemId', FormCompetencyBehavior, 'Edm.Int64');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormCompetencyBehavior> = new NumberField('sectionIndex', FormCompetencyBehavior, 'Edm.Int32');
  /**
   * Static representation of the [[weight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT: StringField<FormCompetencyBehavior> = new StringField('weight', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the [[weightKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_KEY: StringField<FormCompetencyBehavior> = new StringField('weightKey', FormCompetencyBehavior, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_RATING: OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment> = new OneToOneLink('officialRating', FormCompetencyBehavior, FormBehaviorRatingComment);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormCompetencyBehavior, FormBehaviorRatingComment> = new Link('othersRatingComment', FormCompetencyBehavior, FormBehaviorRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment> = new OneToOneLink('selfRatingComment', FormCompetencyBehavior, FormBehaviorRatingComment);
  /**
   * All fields of the FormCompetencyBehavior entity.
   */
  export const _allFields: Array<BigNumberField<FormCompetencyBehavior> | StringField<FormCompetencyBehavior> | NumberField<FormCompetencyBehavior> | OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment> | Link<FormCompetencyBehavior, FormBehaviorRatingComment>> = [
    FormCompetencyBehavior.BEHAVIOR_ID,
    FormCompetencyBehavior.BEHAVIOR_INDEX,
    FormCompetencyBehavior.BEHAVIOR_NAME,
    FormCompetencyBehavior.CATEGORY,
    FormCompetencyBehavior.DESCRIPTION,
    FormCompetencyBehavior.EXPECTED_RATING,
    FormCompetencyBehavior.FORM_CONTENT_ID,
    FormCompetencyBehavior.FORM_DATA_ID,
    FormCompetencyBehavior.ITEM_ID,
    FormCompetencyBehavior.SECTION_INDEX,
    FormCompetencyBehavior.WEIGHT,
    FormCompetencyBehavior.WEIGHT_KEY,
    FormCompetencyBehavior.OFFICIAL_RATING,
    FormCompetencyBehavior.OTHERS_RATING_COMMENT,
    FormCompetencyBehavior.SELF_RATING_COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormCompetencyBehavior> = new AllFields('*', FormCompetencyBehavior);
  /**
   * All key fields of the FormCompetencyBehavior entity.
   */
  export const _keyFields: Array<Selectable<FormCompetencyBehavior>> = [FormCompetencyBehavior.BEHAVIOR_ID, FormCompetencyBehavior.FORM_CONTENT_ID, FormCompetencyBehavior.FORM_DATA_ID, FormCompetencyBehavior.ITEM_ID, FormCompetencyBehavior.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormCompetencyBehavior.
   */
  export const _keys: { [keys: string]: Selectable<FormCompetencyBehavior> } = FormCompetencyBehavior._keyFields.reduce((acc: { [keys: string]: Selectable<FormCompetencyBehavior> }, field: Selectable<FormCompetencyBehavior>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
