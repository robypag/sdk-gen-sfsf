/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormCompetencyRequestBuilder } from './FormCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormCompetency" of service "SFOData".
 */
export class FormCompetency extends Entity implements FormCompetencyType {
  /**
   * Technical entity name for FormCompetency.
   */
  static _entityName = 'FormCompetency';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormCompetency.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * assignments.
   * @nullable
   */
  assignments?: string;
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
   * itemIndex.
   * @nullable
   */
  itemIndex?: BigNumber;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * source.
   * @nullable
   */
  source?: string;
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
   * One-to-many navigation property to the [[FormCompetencyBehavior]] entity.
   */
  competencyBehaviors!: FormCompetencyBehavior[];
  /**
   * One-to-many navigation property to the [[FormCustomElement]] entity.
   */
  customElement!: FormCustomElement[];
  /**
   * One-to-one navigation property to the [[FormItemConfiguration]] entity.
   */
  itemConfiguration!: FormItemConfiguration;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  officialRating!: FormUserRatingComment;
  /**
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersRatingComment!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  selfRatingComment!: FormUserRatingComment;

  /**
   * Returns an entity builder to construct instances `FormCompetency`.
   * @returns A builder that constructs instances of entity type `FormCompetency`.
   */
  static builder(): EntityBuilderType<FormCompetency, FormCompetencyTypeForceMandatory> {
    return Entity.entityBuilder(FormCompetency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormCompetency` entity type.
   * @returns A `FormCompetency` request builder.
   */
  static requestBuilder(): FormCompetencyRequestBuilder {
    return new FormCompetencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormCompetency`.
   */
  static customField(fieldName: string): CustomField<FormCompetency> {
    return Entity.customFieldSelector(fieldName, FormCompetency);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCompetencyBehavior, FormCompetencyBehaviorType } from './FormCompetencyBehavior';
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
import { FormItemConfiguration, FormItemConfigurationType } from './FormItemConfiguration';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';

export interface FormCompetencyType {
  assignments?: string;
  category?: string;
  description?: string;
  expectedRating?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  itemIndex?: BigNumber;
  name?: string;
  sectionIndex: number;
  source?: string;
  weight?: string;
  weightKey?: string;
  competencyBehaviors: FormCompetencyBehaviorType[];
  customElement: FormCustomElementType[];
  itemConfiguration: FormItemConfigurationType;
  officialRating: FormUserRatingCommentType;
  othersRatingComment: FormUserRatingCommentType[];
  selfRatingComment: FormUserRatingCommentType;
}

export interface FormCompetencyTypeForceMandatory {
  assignments: string;
  category: string;
  description: string;
  expectedRating: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  itemIndex: BigNumber;
  name: string;
  sectionIndex: number;
  source: string;
  weight: string;
  weightKey: string;
  competencyBehaviors: FormCompetencyBehaviorType[];
  customElement: FormCustomElementType[];
  itemConfiguration: FormItemConfigurationType;
  officialRating: FormUserRatingCommentType;
  othersRatingComment: FormUserRatingCommentType[];
  selfRatingComment: FormUserRatingCommentType;
}

export namespace FormCompetency {
  /**
   * Static representation of the [[assignments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENTS: StringField<FormCompetency> = new StringField('assignments', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<FormCompetency> = new StringField('category', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FormCompetency> = new StringField('description', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[expectedRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_RATING: StringField<FormCompetency> = new StringField('expectedRating', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormCompetency> = new BigNumberField('formContentId', FormCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormCompetency> = new BigNumberField('formDataId', FormCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormCompetency> = new BigNumberField('itemId', FormCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[itemIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_INDEX: BigNumberField<FormCompetency> = new BigNumberField('itemIndex', FormCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FormCompetency> = new StringField('name', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormCompetency> = new NumberField('sectionIndex', FormCompetency, 'Edm.Int32');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<FormCompetency> = new StringField('source', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[weight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT: StringField<FormCompetency> = new StringField('weight', FormCompetency, 'Edm.String');
  /**
   * Static representation of the [[weightKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_KEY: StringField<FormCompetency> = new StringField('weightKey', FormCompetency, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[competencyBehaviors]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_BEHAVIORS: Link<FormCompetency, FormCompetencyBehavior> = new Link('competencyBehaviors', FormCompetency, FormCompetencyBehavior);
  /**
   * Static representation of the one-to-many navigation property [[customElement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELEMENT: Link<FormCompetency, FormCustomElement> = new Link('customElement', FormCompetency, FormCustomElement);
  /**
   * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CONFIGURATION: OneToOneLink<FormCompetency, FormItemConfiguration> = new OneToOneLink('itemConfiguration', FormCompetency, FormItemConfiguration);
  /**
   * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_RATING: OneToOneLink<FormCompetency, FormUserRatingComment> = new OneToOneLink('officialRating', FormCompetency, FormUserRatingComment);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormCompetency, FormUserRatingComment> = new Link('othersRatingComment', FormCompetency, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormCompetency, FormUserRatingComment> = new OneToOneLink('selfRatingComment', FormCompetency, FormUserRatingComment);
  /**
   * All fields of the FormCompetency entity.
   */
  export const _allFields: Array<StringField<FormCompetency> | BigNumberField<FormCompetency> | NumberField<FormCompetency> | Link<FormCompetency, FormCompetencyBehavior> | Link<FormCompetency, FormCustomElement> | OneToOneLink<FormCompetency, FormItemConfiguration> | OneToOneLink<FormCompetency, FormUserRatingComment> | Link<FormCompetency, FormUserRatingComment>> = [
    FormCompetency.ASSIGNMENTS,
    FormCompetency.CATEGORY,
    FormCompetency.DESCRIPTION,
    FormCompetency.EXPECTED_RATING,
    FormCompetency.FORM_CONTENT_ID,
    FormCompetency.FORM_DATA_ID,
    FormCompetency.ITEM_ID,
    FormCompetency.ITEM_INDEX,
    FormCompetency.NAME,
    FormCompetency.SECTION_INDEX,
    FormCompetency.SOURCE,
    FormCompetency.WEIGHT,
    FormCompetency.WEIGHT_KEY,
    FormCompetency.COMPETENCY_BEHAVIORS,
    FormCompetency.CUSTOM_ELEMENT,
    FormCompetency.ITEM_CONFIGURATION,
    FormCompetency.OFFICIAL_RATING,
    FormCompetency.OTHERS_RATING_COMMENT,
    FormCompetency.SELF_RATING_COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormCompetency> = new AllFields('*', FormCompetency);
  /**
   * All key fields of the FormCompetency entity.
   */
  export const _keyFields: Array<Selectable<FormCompetency>> = [FormCompetency.FORM_CONTENT_ID, FormCompetency.FORM_DATA_ID, FormCompetency.ITEM_ID, FormCompetency.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormCompetency.
   */
  export const _keys: { [keys: string]: Selectable<FormCompetency> } = FormCompetency._keyFields.reduce((acc: { [keys: string]: Selectable<FormCompetency> }, field: Selectable<FormCompetency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
