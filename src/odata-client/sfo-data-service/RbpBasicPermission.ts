/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RbpBasicPermissionRequestBuilder } from './RbpBasicPermissionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RBPBasicPermission" of service "SFOData".
 */
export class RbpBasicPermission extends Entity implements RbpBasicPermissionType {
  /**
   * Technical entity name for RbpBasicPermission.
   */
  static _entityName = 'RBPBasicPermission';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RbpBasicPermission.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * permissionId.
   */
  permissionId!: BigNumber;
  /**
   * permissionLongValue.
   * @nullable
   */
  permissionLongValue?: BigNumber;
  /**
   * permissionStringValue.
   * Maximum length: 256.
   */
  permissionStringValue!: string;
  /**
   * permissionType.
   * Maximum length: 100.
   */
  permissionType!: string;

  /**
   * Returns an entity builder to construct instances `RbpBasicPermission`.
   * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
   */
  static builder(): EntityBuilderType<RbpBasicPermission, RbpBasicPermissionTypeForceMandatory> {
    return Entity.entityBuilder(RbpBasicPermission);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RbpBasicPermission` entity type.
   * @returns A `RbpBasicPermission` request builder.
   */
  static requestBuilder(): RbpBasicPermissionRequestBuilder {
    return new RbpBasicPermissionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpBasicPermission`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
   */
  static customField(fieldName: string): CustomField<RbpBasicPermission> {
    return Entity.customFieldSelector(fieldName, RbpBasicPermission);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface RbpBasicPermissionType {
  permissionId: BigNumber;
  permissionLongValue?: BigNumber;
  permissionStringValue: string;
  permissionType: string;
}

export interface RbpBasicPermissionTypeForceMandatory {
  permissionId: BigNumber;
  permissionLongValue: BigNumber;
  permissionStringValue: string;
  permissionType: string;
}

export namespace RbpBasicPermission {
  /**
   * Static representation of the [[permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSION_ID: BigNumberField<RbpBasicPermission> = new BigNumberField('permissionId', RbpBasicPermission, 'Edm.Int64');
  /**
   * Static representation of the [[permissionLongValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSION_LONG_VALUE: BigNumberField<RbpBasicPermission> = new BigNumberField('permissionLongValue', RbpBasicPermission, 'Edm.Int64');
  /**
   * Static representation of the [[permissionStringValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSION_STRING_VALUE: StringField<RbpBasicPermission> = new StringField('permissionStringValue', RbpBasicPermission, 'Edm.String');
  /**
   * Static representation of the [[permissionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSION_TYPE: StringField<RbpBasicPermission> = new StringField('permissionType', RbpBasicPermission, 'Edm.String');
  /**
   * All fields of the RbpBasicPermission entity.
   */
  export const _allFields: Array<BigNumberField<RbpBasicPermission> | StringField<RbpBasicPermission>> = [
    RbpBasicPermission.PERMISSION_ID,
    RbpBasicPermission.PERMISSION_LONG_VALUE,
    RbpBasicPermission.PERMISSION_STRING_VALUE,
    RbpBasicPermission.PERMISSION_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RbpBasicPermission> = new AllFields('*', RbpBasicPermission);
  /**
   * All key fields of the RbpBasicPermission entity.
   */
  export const _keyFields: Array<Selectable<RbpBasicPermission>> = [RbpBasicPermission.PERMISSION_ID];
  /**
   * Mapping of all key field names to the respective static field property RbpBasicPermission.
   */
  export const _keys: { [keys: string]: Selectable<RbpBasicPermission> } = RbpBasicPermission._keyFields.reduce((acc: { [keys: string]: Selectable<RbpBasicPermission> }, field: Selectable<RbpBasicPermission>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
