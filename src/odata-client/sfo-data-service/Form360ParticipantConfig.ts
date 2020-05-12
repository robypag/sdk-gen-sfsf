/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ParticipantConfigRequestBuilder } from './Form360ParticipantConfigRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360ParticipantConfig" of service "SFOData".
 */
export class Form360ParticipantConfig extends Entity implements Form360ParticipantConfigType {
  /**
   * Technical entity name for Form360ParticipantConfig.
   */
  static _entityName = 'Form360ParticipantConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360ParticipantConfig.
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
   * One-to-many navigation property to the [[Form360ParticipantCategory]] entity.
   */
  participantCategories!: Form360ParticipantCategory[];
  /**
   * One-to-many navigation property to the [[Form360ParticipantColumn]] entity.
   */
  participantColumns!: Form360ParticipantColumn[];

  /**
   * Returns an entity builder to construct instances `Form360ParticipantConfig`.
   * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
   */
  static builder(): EntityBuilderType<Form360ParticipantConfig, Form360ParticipantConfigTypeForceMandatory> {
    return Entity.entityBuilder(Form360ParticipantConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360ParticipantConfig` entity type.
   * @returns A `Form360ParticipantConfig` request builder.
   */
  static requestBuilder(): Form360ParticipantConfigRequestBuilder {
    return new Form360ParticipantConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
   */
  static customField(fieldName: string): CustomField<Form360ParticipantConfig> {
    return Entity.customFieldSelector(fieldName, Form360ParticipantConfig);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Form360ParticipantCategory, Form360ParticipantCategoryType } from './Form360ParticipantCategory';
import { Form360ParticipantColumn, Form360ParticipantColumnType } from './Form360ParticipantColumn';

export interface Form360ParticipantConfigType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  participantCategories: Form360ParticipantCategoryType[];
  participantColumns: Form360ParticipantColumnType[];
}

export interface Form360ParticipantConfigTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  participantCategories: Form360ParticipantCategoryType[];
  participantColumns: Form360ParticipantColumnType[];
}

export namespace Form360ParticipantConfig {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360ParticipantConfig> = new BigNumberField('formContentId', Form360ParticipantConfig, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360ParticipantConfig> = new BigNumberField('formDataId', Form360ParticipantConfig, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[participantCategories]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_CATEGORIES: Link<Form360ParticipantConfig, Form360ParticipantCategory> = new Link('participantCategories', Form360ParticipantConfig, Form360ParticipantCategory);
  /**
   * Static representation of the one-to-many navigation property [[participantColumns]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_COLUMNS: Link<Form360ParticipantConfig, Form360ParticipantColumn> = new Link('participantColumns', Form360ParticipantConfig, Form360ParticipantColumn);
  /**
   * All fields of the Form360ParticipantConfig entity.
   */
  export const _allFields: Array<BigNumberField<Form360ParticipantConfig> | Link<Form360ParticipantConfig, Form360ParticipantCategory> | Link<Form360ParticipantConfig, Form360ParticipantColumn>> = [
    Form360ParticipantConfig.FORM_CONTENT_ID,
    Form360ParticipantConfig.FORM_DATA_ID,
    Form360ParticipantConfig.PARTICIPANT_CATEGORIES,
    Form360ParticipantConfig.PARTICIPANT_COLUMNS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360ParticipantConfig> = new AllFields('*', Form360ParticipantConfig);
  /**
   * All key fields of the Form360ParticipantConfig entity.
   */
  export const _keyFields: Array<Selectable<Form360ParticipantConfig>> = [Form360ParticipantConfig.FORM_CONTENT_ID, Form360ParticipantConfig.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360ParticipantConfig.
   */
  export const _keys: { [keys: string]: Selectable<Form360ParticipantConfig> } = Form360ParticipantConfig._keyFields.reduce((acc: { [keys: string]: Selectable<Form360ParticipantConfig> }, field: Selectable<Form360ParticipantConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
