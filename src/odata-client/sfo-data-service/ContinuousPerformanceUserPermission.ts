/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContinuousPerformanceUserPermissionRequestBuilder } from './ContinuousPerformanceUserPermissionRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ContinuousPerformanceUserPermission" of service "SFOData".
 */
export class ContinuousPerformanceUserPermission extends Entity implements ContinuousPerformanceUserPermissionType {
  /**
   * Technical entity name for ContinuousPerformanceUserPermission.
   */
  static _entityName = 'ContinuousPerformanceUserPermission';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ContinuousPerformanceUserPermission.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * hasPermission.
   */
  hasPermission!: boolean;
  /**
   * permStringValue.
   */
  permStringValue!: string;
  /**
   * permType.
   */
  permType!: string;
  /**
   * targetUserId.
   */
  targetUserId!: string;

  /**
   * Returns an entity builder to construct instances `ContinuousPerformanceUserPermission`.
   * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
   */
  static builder(): EntityBuilderType<ContinuousPerformanceUserPermission, ContinuousPerformanceUserPermissionTypeForceMandatory> {
    return Entity.entityBuilder(ContinuousPerformanceUserPermission);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ContinuousPerformanceUserPermission` entity type.
   * @returns A `ContinuousPerformanceUserPermission` request builder.
   */
  static requestBuilder(): ContinuousPerformanceUserPermissionRequestBuilder {
    return new ContinuousPerformanceUserPermissionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousPerformanceUserPermission`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
   */
  static customField(fieldName: string): CustomField<ContinuousPerformanceUserPermission> {
    return Entity.customFieldSelector(fieldName, ContinuousPerformanceUserPermission);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ContinuousPerformanceUserPermissionType {
  hasPermission: boolean;
  permStringValue: string;
  permType: string;
  targetUserId: string;
}

export interface ContinuousPerformanceUserPermissionTypeForceMandatory {
  hasPermission: boolean;
  permStringValue: string;
  permType: string;
  targetUserId: string;
}

export namespace ContinuousPerformanceUserPermission {
  /**
   * Static representation of the [[hasPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_PERMISSION: BooleanField<ContinuousPerformanceUserPermission> = new BooleanField('hasPermission', ContinuousPerformanceUserPermission, 'Edm.Boolean');
  /**
   * Static representation of the [[permStringValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERM_STRING_VALUE: StringField<ContinuousPerformanceUserPermission> = new StringField('permStringValue', ContinuousPerformanceUserPermission, 'Edm.String');
  /**
   * Static representation of the [[permType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERM_TYPE: StringField<ContinuousPerformanceUserPermission> = new StringField('permType', ContinuousPerformanceUserPermission, 'Edm.String');
  /**
   * Static representation of the [[targetUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_USER_ID: StringField<ContinuousPerformanceUserPermission> = new StringField('targetUserId', ContinuousPerformanceUserPermission, 'Edm.String');
  /**
   * All fields of the ContinuousPerformanceUserPermission entity.
   */
  export const _allFields: Array<BooleanField<ContinuousPerformanceUserPermission> | StringField<ContinuousPerformanceUserPermission>> = [
    ContinuousPerformanceUserPermission.HAS_PERMISSION,
    ContinuousPerformanceUserPermission.PERM_STRING_VALUE,
    ContinuousPerformanceUserPermission.PERM_TYPE,
    ContinuousPerformanceUserPermission.TARGET_USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ContinuousPerformanceUserPermission> = new AllFields('*', ContinuousPerformanceUserPermission);
  /**
   * All key fields of the ContinuousPerformanceUserPermission entity.
   */
  export const _keyFields: Array<Selectable<ContinuousPerformanceUserPermission>> = [ContinuousPerformanceUserPermission.PERM_STRING_VALUE, ContinuousPerformanceUserPermission.PERM_TYPE, ContinuousPerformanceUserPermission.TARGET_USER_ID];
  /**
   * Mapping of all key field names to the respective static field property ContinuousPerformanceUserPermission.
   */
  export const _keys: { [keys: string]: Selectable<ContinuousPerformanceUserPermission> } = ContinuousPerformanceUserPermission._keyFields.reduce((acc: { [keys: string]: Selectable<ContinuousPerformanceUserPermission> }, field: Selectable<ContinuousPerformanceUserPermission>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
