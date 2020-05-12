/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormItemConfigurationRequestBuilder } from './FormItemConfigurationRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormItemConfiguration" of service "SFOData".
 */
export class FormItemConfiguration extends Entity implements FormItemConfigurationType {
  /**
   * Technical entity name for FormItemConfiguration.
   */
  static _entityName = 'FormItemConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormItemConfiguration.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * behaviorRemovable.
   * @nullable
   */
  behaviorRemovable?: boolean;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * itemCommentRequired.
   * @nullable
   */
  itemCommentRequired?: boolean;
  /**
   * itemEditable.
   * @nullable
   */
  itemEditable?: boolean;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * itemRatingRequired.
   * @nullable
   */
  itemRatingRequired?: boolean;
  /**
   * itemRemovable.
   * @nullable
   */
  itemRemovable?: boolean;
  /**
   * itemRemovableKey.
   * @nullable
   */
  itemRemovableKey?: string;
  /**
   * itemWeightPermission.
   * @nullable
   */
  itemWeightPermission?: string;
  /**
   * itemWeightRequired.
   * @nullable
   */
  itemWeightRequired?: boolean;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * suppressItemComments.
   * @nullable
   */
  suppressItemComments?: boolean;
  /**
   * suppressItemCommentsLabel.
   * @nullable
   */
  suppressItemCommentsLabel?: boolean;

  /**
   * Returns an entity builder to construct instances `FormItemConfiguration`.
   * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
   */
  static builder(): EntityBuilderType<FormItemConfiguration, FormItemConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(FormItemConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormItemConfiguration` entity type.
   * @returns A `FormItemConfiguration` request builder.
   */
  static requestBuilder(): FormItemConfigurationRequestBuilder {
    return new FormItemConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormItemConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
   */
  static customField(fieldName: string): CustomField<FormItemConfiguration> {
    return Entity.customFieldSelector(fieldName, FormItemConfiguration);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormItemConfigurationType {
  behaviorRemovable?: boolean;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemCommentRequired?: boolean;
  itemEditable?: boolean;
  itemId: BigNumber;
  itemRatingRequired?: boolean;
  itemRemovable?: boolean;
  itemRemovableKey?: string;
  itemWeightPermission?: string;
  itemWeightRequired?: boolean;
  sectionIndex: number;
  suppressItemComments?: boolean;
  suppressItemCommentsLabel?: boolean;
}

export interface FormItemConfigurationTypeForceMandatory {
  behaviorRemovable: boolean;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemCommentRequired: boolean;
  itemEditable: boolean;
  itemId: BigNumber;
  itemRatingRequired: boolean;
  itemRemovable: boolean;
  itemRemovableKey: string;
  itemWeightPermission: string;
  itemWeightRequired: boolean;
  sectionIndex: number;
  suppressItemComments: boolean;
  suppressItemCommentsLabel: boolean;
}

export namespace FormItemConfiguration {
  /**
   * Static representation of the [[behaviorRemovable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_REMOVABLE: BooleanField<FormItemConfiguration> = new BooleanField('behaviorRemovable', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormItemConfiguration> = new BigNumberField('formContentId', FormItemConfiguration, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormItemConfiguration> = new BigNumberField('formDataId', FormItemConfiguration, 'Edm.Int64');
  /**
   * Static representation of the [[itemCommentRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_COMMENT_REQUIRED: BooleanField<FormItemConfiguration> = new BooleanField('itemCommentRequired', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[itemEditable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_EDITABLE: BooleanField<FormItemConfiguration> = new BooleanField('itemEditable', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormItemConfiguration> = new BigNumberField('itemId', FormItemConfiguration, 'Edm.Int64');
  /**
   * Static representation of the [[itemRatingRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_RATING_REQUIRED: BooleanField<FormItemConfiguration> = new BooleanField('itemRatingRequired', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[itemRemovable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_REMOVABLE: BooleanField<FormItemConfiguration> = new BooleanField('itemRemovable', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[itemRemovableKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_REMOVABLE_KEY: StringField<FormItemConfiguration> = new StringField('itemRemovableKey', FormItemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[itemWeightPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_WEIGHT_PERMISSION: StringField<FormItemConfiguration> = new StringField('itemWeightPermission', FormItemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[itemWeightRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_WEIGHT_REQUIRED: BooleanField<FormItemConfiguration> = new BooleanField('itemWeightRequired', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormItemConfiguration> = new NumberField('sectionIndex', FormItemConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[suppressItemComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPRESS_ITEM_COMMENTS: BooleanField<FormItemConfiguration> = new BooleanField('suppressItemComments', FormItemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[suppressItemCommentsLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPRESS_ITEM_COMMENTS_LABEL: BooleanField<FormItemConfiguration> = new BooleanField('suppressItemCommentsLabel', FormItemConfiguration, 'Edm.Boolean');
  /**
   * All fields of the FormItemConfiguration entity.
   */
  export const _allFields: Array<BooleanField<FormItemConfiguration> | BigNumberField<FormItemConfiguration> | StringField<FormItemConfiguration> | NumberField<FormItemConfiguration>> = [
    FormItemConfiguration.BEHAVIOR_REMOVABLE,
    FormItemConfiguration.FORM_CONTENT_ID,
    FormItemConfiguration.FORM_DATA_ID,
    FormItemConfiguration.ITEM_COMMENT_REQUIRED,
    FormItemConfiguration.ITEM_EDITABLE,
    FormItemConfiguration.ITEM_ID,
    FormItemConfiguration.ITEM_RATING_REQUIRED,
    FormItemConfiguration.ITEM_REMOVABLE,
    FormItemConfiguration.ITEM_REMOVABLE_KEY,
    FormItemConfiguration.ITEM_WEIGHT_PERMISSION,
    FormItemConfiguration.ITEM_WEIGHT_REQUIRED,
    FormItemConfiguration.SECTION_INDEX,
    FormItemConfiguration.SUPPRESS_ITEM_COMMENTS,
    FormItemConfiguration.SUPPRESS_ITEM_COMMENTS_LABEL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormItemConfiguration> = new AllFields('*', FormItemConfiguration);
  /**
   * All key fields of the FormItemConfiguration entity.
   */
  export const _keyFields: Array<Selectable<FormItemConfiguration>> = [FormItemConfiguration.FORM_CONTENT_ID, FormItemConfiguration.FORM_DATA_ID, FormItemConfiguration.ITEM_ID, FormItemConfiguration.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormItemConfiguration.
   */
  export const _keys: { [keys: string]: Selectable<FormItemConfiguration> } = FormItemConfiguration._keyFields.reduce((acc: { [keys: string]: Selectable<FormItemConfiguration> }, field: Selectable<FormItemConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
