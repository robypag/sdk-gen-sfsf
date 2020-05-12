/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LocalizedDataRequestBuilder } from './LocalizedDataRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LocalizedData" of service "SFOData".
 */
export class LocalizedData extends Entity implements LocalizedDataType {
  /**
   * Technical entity name for LocalizedData.
   */
  static _entityName = 'LocalizedData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LocalizedData.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * LocalizedData Code.
   * Maximum length: 38.
   */
  localizedDataCode!: string;
  /**
   * LocalizedData Locale.
   * Maximum length: 32.
   */
  localizedDataLocale!: string;
  /**
   * LocalizedData Translation.
   * Maximum length: 4000.
   * @nullable
   */
  localizedDataTranslation?: string;

  /**
   * Returns an entity builder to construct instances `LocalizedData`.
   * @returns A builder that constructs instances of entity type `LocalizedData`.
   */
  static builder(): EntityBuilderType<LocalizedData, LocalizedDataTypeForceMandatory> {
    return Entity.entityBuilder(LocalizedData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LocalizedData` entity type.
   * @returns A `LocalizedData` request builder.
   */
  static requestBuilder(): LocalizedDataRequestBuilder {
    return new LocalizedDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalizedData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LocalizedData`.
   */
  static customField(fieldName: string): CustomField<LocalizedData> {
    return Entity.customFieldSelector(fieldName, LocalizedData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface LocalizedDataType {
  localizedDataCode: string;
  localizedDataLocale: string;
  localizedDataTranslation?: string;
}

export interface LocalizedDataTypeForceMandatory {
  localizedDataCode: string;
  localizedDataLocale: string;
  localizedDataTranslation: string;
}

export namespace LocalizedData {
  /**
   * Static representation of the [[localizedDataCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALIZED_DATA_CODE: StringField<LocalizedData> = new StringField('localizedDataCode', LocalizedData, 'Edm.String');
  /**
   * Static representation of the [[localizedDataLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALIZED_DATA_LOCALE: StringField<LocalizedData> = new StringField('localizedDataLocale', LocalizedData, 'Edm.String');
  /**
   * Static representation of the [[localizedDataTranslation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALIZED_DATA_TRANSLATION: StringField<LocalizedData> = new StringField('localizedDataTranslation', LocalizedData, 'Edm.String');
  /**
   * All fields of the LocalizedData entity.
   */
  export const _allFields: Array<StringField<LocalizedData>> = [
    LocalizedData.LOCALIZED_DATA_CODE,
    LocalizedData.LOCALIZED_DATA_LOCALE,
    LocalizedData.LOCALIZED_DATA_TRANSLATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LocalizedData> = new AllFields('*', LocalizedData);
  /**
   * All key fields of the LocalizedData entity.
   */
  export const _keyFields: Array<Selectable<LocalizedData>> = [LocalizedData.LOCALIZED_DATA_CODE, LocalizedData.LOCALIZED_DATA_LOCALE];
  /**
   * Mapping of all key field names to the respective static field property LocalizedData.
   */
  export const _keys: { [keys: string]: Selectable<LocalizedData> } = LocalizedData._keyFields.reduce((acc: { [keys: string]: Selectable<LocalizedData> }, field: Selectable<LocalizedData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
