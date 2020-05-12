/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RbpRoleRequestBuilder } from './RbpRoleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RBPRole" of service "SFOData".
 */
export class RbpRole extends Entity implements RbpRoleType {
  /**
   * Technical entity name for RbpRole.
   */
  static _entityName = 'RBPRole';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RbpRole.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   */
  lastModifiedBy!: string;
  /**
   * lastModifiedDate.
   */
  lastModifiedDate!: Moment;
  /**
   * roleDesc.
   * Maximum length: 4000.
   * @nullable
   */
  roleDesc?: string;
  /**
   * roleId.
   */
  roleId!: BigNumber;
  /**
   * roleName.
   * Maximum length: 256.
   */
  roleName!: string;
  /**
   * userType.
   * Maximum length: 32.
   * @nullable
   */
  userType?: string;
  /**
   * One-to-many navigation property to the [[RbpBasicPermission]] entity.
   */
  permissions!: RbpBasicPermission[];
  /**
   * One-to-many navigation property to the [[RbpRule]] entity.
   */
  rules!: RbpRule[];

  /**
   * Returns an entity builder to construct instances `RbpRole`.
   * @returns A builder that constructs instances of entity type `RbpRole`.
   */
  static builder(): EntityBuilderType<RbpRole, RbpRoleTypeForceMandatory> {
    return Entity.entityBuilder(RbpRole);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RbpRole` entity type.
   * @returns A `RbpRole` request builder.
   */
  static requestBuilder(): RbpRoleRequestBuilder {
    return new RbpRoleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpRole`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RbpRole`.
   */
  static customField(fieldName: string): CustomField<RbpRole> {
    return Entity.customFieldSelector(fieldName, RbpRole);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { RbpBasicPermission, RbpBasicPermissionType } from './RbpBasicPermission';
import { RbpRule, RbpRuleType } from './RbpRule';

export interface RbpRoleType {
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  roleDesc?: string;
  roleId: BigNumber;
  roleName: string;
  userType?: string;
  permissions: RbpBasicPermissionType[];
  rules: RbpRuleType[];
}

export interface RbpRoleTypeForceMandatory {
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  roleDesc: string;
  roleId: BigNumber;
  roleName: string;
  userType: string;
  permissions: RbpBasicPermissionType[];
  rules: RbpRuleType[];
}

export namespace RbpRole {
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RbpRole> = new StringField('lastModifiedBy', RbpRole, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<RbpRole> = new DateField('lastModifiedDate', RbpRole, 'Edm.DateTime');
  /**
   * Static representation of the [[roleDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_DESC: StringField<RbpRole> = new StringField('roleDesc', RbpRole, 'Edm.String');
  /**
   * Static representation of the [[roleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ID: BigNumberField<RbpRole> = new BigNumberField('roleId', RbpRole, 'Edm.Int64');
  /**
   * Static representation of the [[roleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_NAME: StringField<RbpRole> = new StringField('roleName', RbpRole, 'Edm.String');
  /**
   * Static representation of the [[userType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TYPE: StringField<RbpRole> = new StringField('userType', RbpRole, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[permissions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSIONS: Link<RbpRole, RbpBasicPermission> = new Link('permissions', RbpRole, RbpBasicPermission);
  /**
   * Static representation of the one-to-many navigation property [[rules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RULES: Link<RbpRole, RbpRule> = new Link('rules', RbpRole, RbpRule);
  /**
   * All fields of the RbpRole entity.
   */
  export const _allFields: Array<StringField<RbpRole> | DateField<RbpRole> | BigNumberField<RbpRole> | Link<RbpRole, RbpBasicPermission> | Link<RbpRole, RbpRule>> = [
    RbpRole.LAST_MODIFIED_BY,
    RbpRole.LAST_MODIFIED_DATE,
    RbpRole.ROLE_DESC,
    RbpRole.ROLE_ID,
    RbpRole.ROLE_NAME,
    RbpRole.USER_TYPE,
    RbpRole.PERMISSIONS,
    RbpRole.RULES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RbpRole> = new AllFields('*', RbpRole);
  /**
   * All key fields of the RbpRole entity.
   */
  export const _keyFields: Array<Selectable<RbpRole>> = [RbpRole.ROLE_ID];
  /**
   * Mapping of all key field names to the respective static field property RbpRole.
   */
  export const _keys: { [keys: string]: Selectable<RbpRole> } = RbpRole._keyFields.reduce((acc: { [keys: string]: Selectable<RbpRole> }, field: Selectable<RbpRole>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
