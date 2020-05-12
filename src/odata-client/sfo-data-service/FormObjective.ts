/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveRequestBuilder } from './FormObjectiveRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjective" of service "SFOData".
 */
export class FormObjective extends Entity implements FormObjectiveType {
  /**
   * Technical entity name for FormObjective.
   */
  static _entityName = 'FormObjective';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjective.
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
   * done.
   * @nullable
   */
  done?: string;
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
   * itemOrder.
   * @nullable
   */
  itemOrder?: number;
  /**
   * metric.
   * @nullable
   */
  metric?: string;
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
   * state.
   * @nullable
   */
  state?: string;
  /**
   * stateColor.
   * @nullable
   */
  stateColor?: string;
  /**
   * useMLTRating.
   * @nullable
   */
  useMltRating?: boolean;
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
   * One-to-many navigation property to the [[FormObjectiveComment]] entity.
   */
  comments!: FormObjectiveComment[];
  /**
   * One-to-many navigation property to the [[FormCustomElement]] entity.
   */
  customElement!: FormCustomElement[];
  /**
   * One-to-one navigation property to the [[FormItemConfiguration]] entity.
   */
  itemConfiguration!: FormItemConfiguration;
  /**
   * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
   */
  metricLookupTables!: FormObjectiveDetails[];
  /**
   * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
   */
  milestones!: FormObjectiveDetails[];
  /**
   * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
   */
  objectiveDetails!: FormObjectiveDetails[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  officialRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormObjectiveOtherDetails]] entity.
   */
  otherDetails!: FormObjectiveOtherDetails;
  /**
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersRatingComment!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  selfRatingComment!: FormUserRatingComment;
  /**
   * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
   */
  targets!: FormObjectiveDetails[];
  /**
   * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
   */
  tasks!: FormObjectiveDetails[];

  /**
   * Returns an entity builder to construct instances `FormObjective`.
   * @returns A builder that constructs instances of entity type `FormObjective`.
   */
  static builder(): EntityBuilderType<FormObjective, FormObjectiveTypeForceMandatory> {
    return Entity.entityBuilder(FormObjective);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjective` entity type.
   * @returns A `FormObjective` request builder.
   */
  static requestBuilder(): FormObjectiveRequestBuilder {
    return new FormObjectiveRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjective`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjective`.
   */
  static customField(fieldName: string): CustomField<FormObjective> {
    return Entity.customFieldSelector(fieldName, FormObjective);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormObjectiveComment, FormObjectiveCommentType } from './FormObjectiveComment';
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
import { FormItemConfiguration, FormItemConfigurationType } from './FormItemConfiguration';
import { FormObjectiveDetails, FormObjectiveDetailsType } from './FormObjectiveDetails';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormObjectiveOtherDetails, FormObjectiveOtherDetailsType } from './FormObjectiveOtherDetails';

export interface FormObjectiveType {
  assignments?: string;
  category?: string;
  done?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  itemOrder?: number;
  metric?: string;
  name?: string;
  sectionIndex: number;
  state?: string;
  stateColor?: string;
  useMltRating?: boolean;
  weight?: string;
  weightKey?: string;
  comments: FormObjectiveCommentType[];
  customElement: FormCustomElementType[];
  itemConfiguration: FormItemConfigurationType;
  metricLookupTables: FormObjectiveDetailsType[];
  milestones: FormObjectiveDetailsType[];
  objectiveDetails: FormObjectiveDetailsType[];
  officialRating: FormUserRatingCommentType;
  otherDetails: FormObjectiveOtherDetailsType;
  othersRatingComment: FormUserRatingCommentType[];
  selfRatingComment: FormUserRatingCommentType;
  targets: FormObjectiveDetailsType[];
  tasks: FormObjectiveDetailsType[];
}

export interface FormObjectiveTypeForceMandatory {
  assignments: string;
  category: string;
  done: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  itemOrder: number;
  metric: string;
  name: string;
  sectionIndex: number;
  state: string;
  stateColor: string;
  useMltRating: boolean;
  weight: string;
  weightKey: string;
  comments: FormObjectiveCommentType[];
  customElement: FormCustomElementType[];
  itemConfiguration: FormItemConfigurationType;
  metricLookupTables: FormObjectiveDetailsType[];
  milestones: FormObjectiveDetailsType[];
  objectiveDetails: FormObjectiveDetailsType[];
  officialRating: FormUserRatingCommentType;
  otherDetails: FormObjectiveOtherDetailsType;
  othersRatingComment: FormUserRatingCommentType[];
  selfRatingComment: FormUserRatingCommentType;
  targets: FormObjectiveDetailsType[];
  tasks: FormObjectiveDetailsType[];
}

export namespace FormObjective {
  /**
   * Static representation of the [[assignments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENTS: StringField<FormObjective> = new StringField('assignments', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<FormObjective> = new StringField('category', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[done]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DONE: StringField<FormObjective> = new StringField('done', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjective> = new BigNumberField('formContentId', FormObjective, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjective> = new BigNumberField('formDataId', FormObjective, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjective> = new BigNumberField('itemId', FormObjective, 'Edm.Int64');
  /**
   * Static representation of the [[itemOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ORDER: NumberField<FormObjective> = new NumberField('itemOrder', FormObjective, 'Edm.Int32');
  /**
   * Static representation of the [[metric]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const METRIC: StringField<FormObjective> = new StringField('metric', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FormObjective> = new StringField('name', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjective> = new NumberField('sectionIndex', FormObjective, 'Edm.Int32');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<FormObjective> = new StringField('state', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[stateColor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_COLOR: StringField<FormObjective> = new StringField('stateColor', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[useMltRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_MLT_RATING: BooleanField<FormObjective> = new BooleanField('useMLTRating', FormObjective, 'Edm.Boolean');
  /**
   * Static representation of the [[weight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT: StringField<FormObjective> = new StringField('weight', FormObjective, 'Edm.String');
  /**
   * Static representation of the [[weightKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_KEY: StringField<FormObjective> = new StringField('weightKey', FormObjective, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[comments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: Link<FormObjective, FormObjectiveComment> = new Link('comments', FormObjective, FormObjectiveComment);
  /**
   * Static representation of the one-to-many navigation property [[customElement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELEMENT: Link<FormObjective, FormCustomElement> = new Link('customElement', FormObjective, FormCustomElement);
  /**
   * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CONFIGURATION: OneToOneLink<FormObjective, FormItemConfiguration> = new OneToOneLink('itemConfiguration', FormObjective, FormItemConfiguration);
  /**
   * Static representation of the one-to-many navigation property [[metricLookupTables]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const METRIC_LOOKUP_TABLES: Link<FormObjective, FormObjectiveDetails> = new Link('metricLookupTables', FormObjective, FormObjectiveDetails);
  /**
   * Static representation of the one-to-many navigation property [[milestones]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MILESTONES: Link<FormObjective, FormObjectiveDetails> = new Link('milestones', FormObjective, FormObjectiveDetails);
  /**
   * Static representation of the one-to-many navigation property [[objectiveDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVE_DETAILS: Link<FormObjective, FormObjectiveDetails> = new Link('objectiveDetails', FormObjective, FormObjectiveDetails);
  /**
   * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFICIAL_RATING: OneToOneLink<FormObjective, FormUserRatingComment> = new OneToOneLink('officialRating', FormObjective, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[otherDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHER_DETAILS: OneToOneLink<FormObjective, FormObjectiveOtherDetails> = new OneToOneLink('otherDetails', FormObjective, FormObjectiveOtherDetails);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormObjective, FormUserRatingComment> = new Link('othersRatingComment', FormObjective, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormObjective, FormUserRatingComment> = new OneToOneLink('selfRatingComment', FormObjective, FormUserRatingComment);
  /**
   * Static representation of the one-to-many navigation property [[targets]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGETS: Link<FormObjective, FormObjectiveDetails> = new Link('targets', FormObjective, FormObjectiveDetails);
  /**
   * Static representation of the one-to-many navigation property [[tasks]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TASKS: Link<FormObjective, FormObjectiveDetails> = new Link('tasks', FormObjective, FormObjectiveDetails);
  /**
   * All fields of the FormObjective entity.
   */
  export const _allFields: Array<StringField<FormObjective> | BigNumberField<FormObjective> | NumberField<FormObjective> | BooleanField<FormObjective> | Link<FormObjective, FormObjectiveComment> | Link<FormObjective, FormCustomElement> | OneToOneLink<FormObjective, FormItemConfiguration> | Link<FormObjective, FormObjectiveDetails> | OneToOneLink<FormObjective, FormUserRatingComment> | OneToOneLink<FormObjective, FormObjectiveOtherDetails> | Link<FormObjective, FormUserRatingComment>> = [
    FormObjective.ASSIGNMENTS,
    FormObjective.CATEGORY,
    FormObjective.DONE,
    FormObjective.FORM_CONTENT_ID,
    FormObjective.FORM_DATA_ID,
    FormObjective.ITEM_ID,
    FormObjective.ITEM_ORDER,
    FormObjective.METRIC,
    FormObjective.NAME,
    FormObjective.SECTION_INDEX,
    FormObjective.STATE,
    FormObjective.STATE_COLOR,
    FormObjective.USE_MLT_RATING,
    FormObjective.WEIGHT,
    FormObjective.WEIGHT_KEY,
    FormObjective.COMMENTS,
    FormObjective.CUSTOM_ELEMENT,
    FormObjective.ITEM_CONFIGURATION,
    FormObjective.METRIC_LOOKUP_TABLES,
    FormObjective.MILESTONES,
    FormObjective.OBJECTIVE_DETAILS,
    FormObjective.OFFICIAL_RATING,
    FormObjective.OTHER_DETAILS,
    FormObjective.OTHERS_RATING_COMMENT,
    FormObjective.SELF_RATING_COMMENT,
    FormObjective.TARGETS,
    FormObjective.TASKS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjective> = new AllFields('*', FormObjective);
  /**
   * All key fields of the FormObjective entity.
   */
  export const _keyFields: Array<Selectable<FormObjective>> = [FormObjective.FORM_CONTENT_ID, FormObjective.FORM_DATA_ID, FormObjective.ITEM_ID, FormObjective.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormObjective.
   */
  export const _keys: { [keys: string]: Selectable<FormObjective> } = FormObjective._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjective> }, field: Selectable<FormObjective>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
