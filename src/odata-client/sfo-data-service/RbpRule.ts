/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RbpRuleRequestBuilder } from './RbpRuleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RBPRule" of service "SFOData".
 */
export class RbpRule extends Entity implements RbpRuleType {
  /**
   * Technical entity name for RbpRule.
   */
  static _entityName = 'RBPRule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RbpRule.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * accessGroupLevel.
   * @nullable
   */
  accessGroupLevel?: number;
  /**
   * accessUserType.
   * Maximum length: 32.
   * @nullable
   */
  accessUserType?: string;
  /**
   * excludeSelf.
   */
  excludeSelf!: boolean;
  /**
   * includeSelf.
   * @nullable
   */
  includeSelf?: boolean;
  /**
   * myFilter.
   * Maximum length: 100.
   * @nullable
   */
  myFilter?: string;
  /**
   * relationRole.
   * Maximum length: 20.
   * @nullable
   */
  relationRole?: string;
  /**
   * ruleId.
   */
  ruleId!: BigNumber;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * targetGroupLevel.
   * @nullable
   */
  targetGroupLevel?: number;
  /**
   * targetUserType.
   * Maximum length: 32.
   * @nullable
   */
  targetUserType?: string;
  /**
   * One-to-many navigation property to the [[DynamicGroup]] entity.
   */
  accessGroups!: DynamicGroup[];
  /**
   * One-to-one navigation property to the [[RbpRole]] entity.
   */
  roles!: RbpRole;
  /**
   * One-to-many navigation property to the [[DynamicGroup]] entity.
   */
  targetGroups!: DynamicGroup[];

  /**
   * Returns an entity builder to construct instances `RbpRule`.
   * @returns A builder that constructs instances of entity type `RbpRule`.
   */
  static builder(): EntityBuilderType<RbpRule, RbpRuleTypeForceMandatory> {
    return Entity.entityBuilder(RbpRule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RbpRule` entity type.
   * @returns A `RbpRule` request builder.
   */
  static requestBuilder(): RbpRuleRequestBuilder {
    return new RbpRuleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpRule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RbpRule`.
   */
  static customField(fieldName: string): CustomField<RbpRule> {
    return Entity.customFieldSelector(fieldName, RbpRule);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { RbpRole, RbpRoleType } from './RbpRole';

export interface RbpRuleType {
  accessGroupLevel?: number;
  accessUserType?: string;
  excludeSelf: boolean;
  includeSelf?: boolean;
  myFilter?: string;
  relationRole?: string;
  ruleId: BigNumber;
  status?: number;
  targetGroupLevel?: number;
  targetUserType?: string;
  accessGroups: DynamicGroupType[];
  roles: RbpRoleType;
  targetGroups: DynamicGroupType[];
}

export interface RbpRuleTypeForceMandatory {
  accessGroupLevel: number;
  accessUserType: string;
  excludeSelf: boolean;
  includeSelf: boolean;
  myFilter: string;
  relationRole: string;
  ruleId: BigNumber;
  status: number;
  targetGroupLevel: number;
  targetUserType: string;
  accessGroups: DynamicGroupType[];
  roles: RbpRoleType;
  targetGroups: DynamicGroupType[];
}

export namespace RbpRule {
  /**
   * Static representation of the [[accessGroupLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCESS_GROUP_LEVEL: NumberField<RbpRule> = new NumberField('accessGroupLevel', RbpRule, 'Edm.Int32');
  /**
   * Static representation of the [[accessUserType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCESS_USER_TYPE: StringField<RbpRule> = new StringField('accessUserType', RbpRule, 'Edm.String');
  /**
   * Static representation of the [[excludeSelf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCLUDE_SELF: BooleanField<RbpRule> = new BooleanField('excludeSelf', RbpRule, 'Edm.Boolean');
  /**
   * Static representation of the [[includeSelf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_SELF: BooleanField<RbpRule> = new BooleanField('includeSelf', RbpRule, 'Edm.Boolean');
  /**
   * Static representation of the [[myFilter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MY_FILTER: StringField<RbpRule> = new StringField('myFilter', RbpRule, 'Edm.String');
  /**
   * Static representation of the [[relationRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATION_ROLE: StringField<RbpRule> = new StringField('relationRole', RbpRule, 'Edm.String');
  /**
   * Static representation of the [[ruleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RULE_ID: BigNumberField<RbpRule> = new BigNumberField('ruleId', RbpRule, 'Edm.Int64');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<RbpRule> = new NumberField('status', RbpRule, 'Edm.Int32');
  /**
   * Static representation of the [[targetGroupLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUP_LEVEL: NumberField<RbpRule> = new NumberField('targetGroupLevel', RbpRule, 'Edm.Int32');
  /**
   * Static representation of the [[targetUserType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_USER_TYPE: StringField<RbpRule> = new StringField('targetUserType', RbpRule, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[accessGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCESS_GROUPS: Link<RbpRule, DynamicGroup> = new Link('accessGroups', RbpRule, DynamicGroup);
  /**
   * Static representation of the one-to-one navigation property [[roles]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLES: OneToOneLink<RbpRule, RbpRole> = new OneToOneLink('roles', RbpRule, RbpRole);
  /**
   * Static representation of the one-to-many navigation property [[targetGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_GROUPS: Link<RbpRule, DynamicGroup> = new Link('targetGroups', RbpRule, DynamicGroup);
  /**
   * All fields of the RbpRule entity.
   */
  export const _allFields: Array<NumberField<RbpRule> | StringField<RbpRule> | BooleanField<RbpRule> | BigNumberField<RbpRule> | Link<RbpRule, DynamicGroup> | OneToOneLink<RbpRule, RbpRole>> = [
    RbpRule.ACCESS_GROUP_LEVEL,
    RbpRule.ACCESS_USER_TYPE,
    RbpRule.EXCLUDE_SELF,
    RbpRule.INCLUDE_SELF,
    RbpRule.MY_FILTER,
    RbpRule.RELATION_ROLE,
    RbpRule.RULE_ID,
    RbpRule.STATUS,
    RbpRule.TARGET_GROUP_LEVEL,
    RbpRule.TARGET_USER_TYPE,
    RbpRule.ACCESS_GROUPS,
    RbpRule.ROLES,
    RbpRule.TARGET_GROUPS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RbpRule> = new AllFields('*', RbpRule);
  /**
   * All key fields of the RbpRule entity.
   */
  export const _keyFields: Array<Selectable<RbpRule>> = [RbpRule.RULE_ID];
  /**
   * Mapping of all key field names to the respective static field property RbpRule.
   */
  export const _keys: { [keys: string]: Selectable<RbpRule> } = RbpRule._keyFields.reduce((acc: { [keys: string]: Selectable<RbpRule> }, field: Selectable<RbpRule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
