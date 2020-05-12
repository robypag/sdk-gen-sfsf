/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormSectionConfigurationRequestBuilder } from './FormSectionConfigurationRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormSectionConfiguration" of service "SFOData".
 */
export class FormSectionConfiguration extends Entity implements FormSectionConfigurationType {
  /**
   * Technical entity name for FormSectionConfiguration.
   */
  static _entityName = 'FormSectionConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormSectionConfiguration.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * addExistingObjEnabled.
   * @nullable
   */
  addExistingObjEnabled?: boolean;
  /**
   * addItem.
   * @nullable
   */
  addItem?: boolean;
  /**
   * autoPopulateWeight.
   * @nullable
   */
  autoPopulateWeight?: boolean;
  /**
   * behaviorModeOption.
   * @nullable
   */
  behaviorModeOption?: number;
  /**
   * enforcePlainTextCharacterLimit.
   * @nullable
   */
  enforcePlainTextCharacterLimit?: boolean;
  /**
   * enforceRTECharacterLimit.
   * @nullable
   */
  enforceRteCharacterLimit?: boolean;
  /**
   * excludePrivateGoal.
   * @nullable
   */
  excludePrivateGoal?: boolean;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * hasItemComment.
   * @nullable
   */
  hasItemComment?: boolean;
  /**
   * hasSectionComment.
   * @nullable
   */
  hasSectionComment?: boolean;
  /**
   * itemNonremovablePermission.
   * @nullable
   */
  itemNonremovablePermission?: string;
  /**
   * objCategories.
   * @nullable
   */
  objCategories?: string;
  /**
   * objCategoriesCount.
   * @nullable
   */
  objCategoriesCount?: number;
  /**
   * rateByBehavior.
   * @nullable
   */
  rateByBehavior?: boolean;
  /**
   * ratingOption.
   * @nullable
   */
  ratingOption?: number;
  /**
   * ratingScaleLabelLinkEnabled.
   * @nullable
   */
  ratingScaleLabelLinkEnabled?: boolean;
  /**
   * sectionCommentRequired.
   * @nullable
   */
  sectionCommentRequired?: boolean;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * sectionWeightPermission.
   * @nullable
   */
  sectionWeightPermission?: string;
  /**
   * smartWizardEnabled.
   * @nullable
   */
  smartWizardEnabled?: boolean;
  /**
   * teamRaterEnabled.
   * @nullable
   */
  teamRaterEnabled?: boolean;
  /**
   * waca.
   * @nullable
   */
  waca?: boolean;
  /**
   * weightTotal.
   * @nullable
   */
  weightTotal?: string;
  /**
   * One-to-one navigation property to the [[FormRatingScale]] entity.
   */
  formBehaviorRatingScale!: FormRatingScale;
  /**
   * One-to-one navigation property to the [[FormRatingScale]] entity.
   */
  formRatingScale!: FormRatingScale;

  /**
   * Returns an entity builder to construct instances `FormSectionConfiguration`.
   * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
   */
  static builder(): EntityBuilderType<FormSectionConfiguration, FormSectionConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(FormSectionConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormSectionConfiguration` entity type.
   * @returns A `FormSectionConfiguration` request builder.
   */
  static requestBuilder(): FormSectionConfigurationRequestBuilder {
    return new FormSectionConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSectionConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
   */
  static customField(fieldName: string): CustomField<FormSectionConfiguration> {
    return Entity.customFieldSelector(fieldName, FormSectionConfiguration);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormRatingScale, FormRatingScaleType } from './FormRatingScale';

export interface FormSectionConfigurationType {
  addExistingObjEnabled?: boolean;
  addItem?: boolean;
  autoPopulateWeight?: boolean;
  behaviorModeOption?: number;
  enforcePlainTextCharacterLimit?: boolean;
  enforceRteCharacterLimit?: boolean;
  excludePrivateGoal?: boolean;
  formContentId: BigNumber;
  formDataId: BigNumber;
  hasItemComment?: boolean;
  hasSectionComment?: boolean;
  itemNonremovablePermission?: string;
  objCategories?: string;
  objCategoriesCount?: number;
  rateByBehavior?: boolean;
  ratingOption?: number;
  ratingScaleLabelLinkEnabled?: boolean;
  sectionCommentRequired?: boolean;
  sectionIndex: number;
  sectionWeightPermission?: string;
  smartWizardEnabled?: boolean;
  teamRaterEnabled?: boolean;
  waca?: boolean;
  weightTotal?: string;
  formBehaviorRatingScale: FormRatingScaleType;
  formRatingScale: FormRatingScaleType;
}

export interface FormSectionConfigurationTypeForceMandatory {
  addExistingObjEnabled: boolean;
  addItem: boolean;
  autoPopulateWeight: boolean;
  behaviorModeOption: number;
  enforcePlainTextCharacterLimit: boolean;
  enforceRteCharacterLimit: boolean;
  excludePrivateGoal: boolean;
  formContentId: BigNumber;
  formDataId: BigNumber;
  hasItemComment: boolean;
  hasSectionComment: boolean;
  itemNonremovablePermission: string;
  objCategories: string;
  objCategoriesCount: number;
  rateByBehavior: boolean;
  ratingOption: number;
  ratingScaleLabelLinkEnabled: boolean;
  sectionCommentRequired: boolean;
  sectionIndex: number;
  sectionWeightPermission: string;
  smartWizardEnabled: boolean;
  teamRaterEnabled: boolean;
  waca: boolean;
  weightTotal: string;
  formBehaviorRatingScale: FormRatingScaleType;
  formRatingScale: FormRatingScaleType;
}

export namespace FormSectionConfiguration {
  /**
   * Static representation of the [[addExistingObjEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADD_EXISTING_OBJ_ENABLED: BooleanField<FormSectionConfiguration> = new BooleanField('addExistingObjEnabled', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[addItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADD_ITEM: BooleanField<FormSectionConfiguration> = new BooleanField('addItem', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[autoPopulateWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTO_POPULATE_WEIGHT: BooleanField<FormSectionConfiguration> = new BooleanField('autoPopulateWeight', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[behaviorModeOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_MODE_OPTION: NumberField<FormSectionConfiguration> = new NumberField('behaviorModeOption', FormSectionConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[enforcePlainTextCharacterLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENFORCE_PLAIN_TEXT_CHARACTER_LIMIT: BooleanField<FormSectionConfiguration> = new BooleanField('enforcePlainTextCharacterLimit', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[enforceRteCharacterLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENFORCE_RTE_CHARACTER_LIMIT: BooleanField<FormSectionConfiguration> = new BooleanField('enforceRTECharacterLimit', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[excludePrivateGoal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_PRIVATE_GOAL: BooleanField<FormSectionConfiguration> = new BooleanField('excludePrivateGoal', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormSectionConfiguration> = new BigNumberField('formContentId', FormSectionConfiguration, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormSectionConfiguration> = new BigNumberField('formDataId', FormSectionConfiguration, 'Edm.Int64');
  /**
   * Static representation of the [[hasItemComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ITEM_COMMENT: BooleanField<FormSectionConfiguration> = new BooleanField('hasItemComment', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[hasSectionComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_SECTION_COMMENT: BooleanField<FormSectionConfiguration> = new BooleanField('hasSectionComment', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[itemNonremovablePermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NONREMOVABLE_PERMISSION: StringField<FormSectionConfiguration> = new StringField('itemNonremovablePermission', FormSectionConfiguration, 'Edm.String');
  /**
   * Static representation of the [[objCategories]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_CATEGORIES: StringField<FormSectionConfiguration> = new StringField('objCategories', FormSectionConfiguration, 'Edm.String');
  /**
   * Static representation of the [[objCategoriesCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_CATEGORIES_COUNT: NumberField<FormSectionConfiguration> = new NumberField('objCategoriesCount', FormSectionConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[rateByBehavior]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE_BY_BEHAVIOR: BooleanField<FormSectionConfiguration> = new BooleanField('rateByBehavior', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[ratingOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_OPTION: NumberField<FormSectionConfiguration> = new NumberField('ratingOption', FormSectionConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[ratingScaleLabelLinkEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_SCALE_LABEL_LINK_ENABLED: BooleanField<FormSectionConfiguration> = new BooleanField('ratingScaleLabelLinkEnabled', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[sectionCommentRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_COMMENT_REQUIRED: BooleanField<FormSectionConfiguration> = new BooleanField('sectionCommentRequired', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormSectionConfiguration> = new NumberField('sectionIndex', FormSectionConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[sectionWeightPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_WEIGHT_PERMISSION: StringField<FormSectionConfiguration> = new StringField('sectionWeightPermission', FormSectionConfiguration, 'Edm.String');
  /**
   * Static representation of the [[smartWizardEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SMART_WIZARD_ENABLED: BooleanField<FormSectionConfiguration> = new BooleanField('smartWizardEnabled', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[teamRaterEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_RATER_ENABLED: BooleanField<FormSectionConfiguration> = new BooleanField('teamRaterEnabled', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[waca]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WACA: BooleanField<FormSectionConfiguration> = new BooleanField('waca', FormSectionConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[weightTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_TOTAL: StringField<FormSectionConfiguration> = new StringField('weightTotal', FormSectionConfiguration, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[formBehaviorRatingScale]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_BEHAVIOR_RATING_SCALE: OneToOneLink<FormSectionConfiguration, FormRatingScale> = new OneToOneLink('formBehaviorRatingScale', FormSectionConfiguration, FormRatingScale);
  /**
   * Static representation of the one-to-one navigation property [[formRatingScale]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_RATING_SCALE: OneToOneLink<FormSectionConfiguration, FormRatingScale> = new OneToOneLink('formRatingScale', FormSectionConfiguration, FormRatingScale);
  /**
   * All fields of the FormSectionConfiguration entity.
   */
  export const _allFields: Array<BooleanField<FormSectionConfiguration> | NumberField<FormSectionConfiguration> | BigNumberField<FormSectionConfiguration> | StringField<FormSectionConfiguration> | OneToOneLink<FormSectionConfiguration, FormRatingScale>> = [
    FormSectionConfiguration.ADD_EXISTING_OBJ_ENABLED,
    FormSectionConfiguration.ADD_ITEM,
    FormSectionConfiguration.AUTO_POPULATE_WEIGHT,
    FormSectionConfiguration.BEHAVIOR_MODE_OPTION,
    FormSectionConfiguration.ENFORCE_PLAIN_TEXT_CHARACTER_LIMIT,
    FormSectionConfiguration.ENFORCE_RTE_CHARACTER_LIMIT,
    FormSectionConfiguration.EXCLUDE_PRIVATE_GOAL,
    FormSectionConfiguration.FORM_CONTENT_ID,
    FormSectionConfiguration.FORM_DATA_ID,
    FormSectionConfiguration.HAS_ITEM_COMMENT,
    FormSectionConfiguration.HAS_SECTION_COMMENT,
    FormSectionConfiguration.ITEM_NONREMOVABLE_PERMISSION,
    FormSectionConfiguration.OBJ_CATEGORIES,
    FormSectionConfiguration.OBJ_CATEGORIES_COUNT,
    FormSectionConfiguration.RATE_BY_BEHAVIOR,
    FormSectionConfiguration.RATING_OPTION,
    FormSectionConfiguration.RATING_SCALE_LABEL_LINK_ENABLED,
    FormSectionConfiguration.SECTION_COMMENT_REQUIRED,
    FormSectionConfiguration.SECTION_INDEX,
    FormSectionConfiguration.SECTION_WEIGHT_PERMISSION,
    FormSectionConfiguration.SMART_WIZARD_ENABLED,
    FormSectionConfiguration.TEAM_RATER_ENABLED,
    FormSectionConfiguration.WACA,
    FormSectionConfiguration.WEIGHT_TOTAL,
    FormSectionConfiguration.FORM_BEHAVIOR_RATING_SCALE,
    FormSectionConfiguration.FORM_RATING_SCALE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormSectionConfiguration> = new AllFields('*', FormSectionConfiguration);
  /**
   * All key fields of the FormSectionConfiguration entity.
   */
  export const _keyFields: Array<Selectable<FormSectionConfiguration>> = [FormSectionConfiguration.FORM_CONTENT_ID, FormSectionConfiguration.FORM_DATA_ID, FormSectionConfiguration.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormSectionConfiguration.
   */
  export const _keys: { [keys: string]: Selectable<FormSectionConfiguration> } = FormSectionConfiguration._keyFields.reduce((acc: { [keys: string]: Selectable<FormSectionConfiguration> }, field: Selectable<FormSectionConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
