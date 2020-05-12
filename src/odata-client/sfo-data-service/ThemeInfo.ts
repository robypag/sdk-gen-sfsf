/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeInfoRequestBuilder } from './ThemeInfoRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AccessibilityPreferences, AccessibilityPreferencesField } from './AccessibilityPreferences';
import { ThemeFingerprintsBean, ThemeFingerprintsBeanField } from './ThemeFingerprintsBean';
import { ThemeUrlsBean, ThemeUrlsBeanField } from './ThemeUrlsBean';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ThemeInfo" of service "SFOData".
 */
export class ThemeInfo extends Entity implements ThemeInfoType {
  /**
   * Technical entity name for ThemeInfo.
   */
  static _entityName = 'ThemeInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ThemeInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * accessibilityPreferences.
   * @nullable
   */
  accessibilityPreferences?: AccessibilityPreferences;
  /**
   * fingerprints.
   * @nullable
   */
  fingerprints?: ThemeFingerprintsBean;
  /**
   * id.
   */
  id!: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: BigNumber;
  /**
   * locale.
   * @nullable
   */
  locale?: string;
  /**
   * modules.
   * @nullable
   */
  modules?: string;
  /**
   * ui5Theme.
   * @nullable
   */
  ui5Theme?: string;
  /**
   * urls.
   * @nullable
   */
  urls?: ThemeUrlsBean;

  /**
   * Returns an entity builder to construct instances `ThemeInfo`.
   * @returns A builder that constructs instances of entity type `ThemeInfo`.
   */
  static builder(): EntityBuilderType<ThemeInfo, ThemeInfoTypeForceMandatory> {
    return Entity.entityBuilder(ThemeInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ThemeInfo` entity type.
   * @returns A `ThemeInfo` request builder.
   */
  static requestBuilder(): ThemeInfoRequestBuilder {
    return new ThemeInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ThemeInfo`.
   */
  static customField(fieldName: string): CustomField<ThemeInfo> {
    return Entity.customFieldSelector(fieldName, ThemeInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ThemeInfoType {
  accessibilityPreferences?: AccessibilityPreferences;
  fingerprints?: ThemeFingerprintsBean;
  id: string;
  lastModifiedDate?: BigNumber;
  locale?: string;
  modules?: string;
  ui5Theme?: string;
  urls?: ThemeUrlsBean;
}

export interface ThemeInfoTypeForceMandatory {
  accessibilityPreferences: AccessibilityPreferences;
  fingerprints: ThemeFingerprintsBean;
  id: string;
  lastModifiedDate: BigNumber;
  locale: string;
  modules: string;
  ui5Theme: string;
  urls: ThemeUrlsBean;
}

export namespace ThemeInfo {
  /**
   * Static representation of the [[accessibilityPreferences]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCESSIBILITY_PREFERENCES: AccessibilityPreferencesField<ThemeInfo> = new AccessibilityPreferencesField('accessibilityPreferences', ThemeInfo);
  /**
   * Static representation of the [[fingerprints]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINGERPRINTS: ThemeFingerprintsBeanField<ThemeInfo> = new ThemeFingerprintsBeanField('fingerprints', ThemeInfo);
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ThemeInfo> = new StringField('id', ThemeInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: BigNumberField<ThemeInfo> = new BigNumberField('lastModifiedDate', ThemeInfo, 'Edm.Int64');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<ThemeInfo> = new StringField('locale', ThemeInfo, 'Edm.String');
  /**
   * Static representation of the [[modules]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULES: StringField<ThemeInfo> = new StringField('modules', ThemeInfo, 'Edm.String');
  /**
   * Static representation of the [[ui5Theme]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UI_5_THEME: StringField<ThemeInfo> = new StringField('ui5Theme', ThemeInfo, 'Edm.String');
  /**
   * Static representation of the [[urls]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URLS: ThemeUrlsBeanField<ThemeInfo> = new ThemeUrlsBeanField('urls', ThemeInfo);
  /**
   * All fields of the ThemeInfo entity.
   */
  export const _allFields: Array<AccessibilityPreferencesField<ThemeInfo> | ThemeFingerprintsBeanField<ThemeInfo> | StringField<ThemeInfo> | BigNumberField<ThemeInfo> | ThemeUrlsBeanField<ThemeInfo>> = [
    ThemeInfo.ACCESSIBILITY_PREFERENCES,
    ThemeInfo.FINGERPRINTS,
    ThemeInfo.ID,
    ThemeInfo.LAST_MODIFIED_DATE,
    ThemeInfo.LOCALE,
    ThemeInfo.MODULES,
    ThemeInfo.UI_5_THEME,
    ThemeInfo.URLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ThemeInfo> = new AllFields('*', ThemeInfo);
  /**
   * All key fields of the ThemeInfo entity.
   */
  export const _keyFields: Array<Selectable<ThemeInfo>> = [ThemeInfo.ID];
  /**
   * Mapping of all key field names to the respective static field property ThemeInfo.
   */
  export const _keys: { [keys: string]: Selectable<ThemeInfo> } = ThemeInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ThemeInfo> }, field: Selectable<ThemeInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
