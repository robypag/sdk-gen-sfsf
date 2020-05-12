/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DynamicGroupRequestBuilder } from './DynamicGroupRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DynamicGroup" of service "SFOData".
 */
export class DynamicGroup extends Entity implements DynamicGroupType {
  /**
   * Technical entity name for DynamicGroup.
   */
  static _entityName = 'DynamicGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DynamicGroup.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * activeMembershipCount.
   * @nullable
   */
  activeMembershipCount?: number;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * groupID.
   */
  groupId!: BigNumber;
  /**
   * groupName.
   * Maximum length: 100.
   */
  groupName!: string;
  /**
   * groupType.
   * Maximum length: 32.
   */
  groupType!: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * staticGroup.
   */
  staticGroup!: boolean;
  /**
   * totalMemberCount.
   * @nullable
   */
  totalMemberCount?: number;
  /**
   * userType.
   * Maximum length: 32.
   * @nullable
   */
  userType?: string;
  /**
   * One-to-many navigation property to the [[DgPeoplePool]] entity.
   */
  dgExcludePools!: DgPeoplePool[];
  /**
   * One-to-many navigation property to the [[DgPeoplePool]] entity.
   */
  dgIncludePools!: DgPeoplePool[];

  /**
   * Returns an entity builder to construct instances `DynamicGroup`.
   * @returns A builder that constructs instances of entity type `DynamicGroup`.
   */
  static builder(): EntityBuilderType<DynamicGroup, DynamicGroupTypeForceMandatory> {
    return Entity.entityBuilder(DynamicGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DynamicGroup` entity type.
   * @returns A `DynamicGroup` request builder.
   */
  static requestBuilder(): DynamicGroupRequestBuilder {
    return new DynamicGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DynamicGroup`.
   */
  static customField(fieldName: string): CustomField<DynamicGroup> {
    return Entity.customFieldSelector(fieldName, DynamicGroup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DgPeoplePool, DgPeoplePoolType } from './DgPeoplePool';

export interface DynamicGroupType {
  activeMembershipCount?: number;
  createdBy?: string;
  groupId: BigNumber;
  groupName: string;
  groupType: string;
  lastModifiedDate?: Moment;
  staticGroup: boolean;
  totalMemberCount?: number;
  userType?: string;
  dgExcludePools: DgPeoplePoolType[];
  dgIncludePools: DgPeoplePoolType[];
}

export interface DynamicGroupTypeForceMandatory {
  activeMembershipCount: number;
  createdBy: string;
  groupId: BigNumber;
  groupName: string;
  groupType: string;
  lastModifiedDate: Moment;
  staticGroup: boolean;
  totalMemberCount: number;
  userType: string;
  dgExcludePools: DgPeoplePoolType[];
  dgIncludePools: DgPeoplePoolType[];
}

export namespace DynamicGroup {
  /**
   * Static representation of the [[activeMembershipCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE_MEMBERSHIP_COUNT: NumberField<DynamicGroup> = new NumberField('activeMembershipCount', DynamicGroup, 'Edm.Int32');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<DynamicGroup> = new StringField('createdBy', DynamicGroup, 'Edm.String');
  /**
   * Static representation of the [[groupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_ID: BigNumberField<DynamicGroup> = new BigNumberField('groupID', DynamicGroup, 'Edm.Int64');
  /**
   * Static representation of the [[groupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NAME: StringField<DynamicGroup> = new StringField('groupName', DynamicGroup, 'Edm.String');
  /**
   * Static representation of the [[groupType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_TYPE: StringField<DynamicGroup> = new StringField('groupType', DynamicGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<DynamicGroup> = new DateField('lastModifiedDate', DynamicGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[staticGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATIC_GROUP: BooleanField<DynamicGroup> = new BooleanField('staticGroup', DynamicGroup, 'Edm.Boolean');
  /**
   * Static representation of the [[totalMemberCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_MEMBER_COUNT: NumberField<DynamicGroup> = new NumberField('totalMemberCount', DynamicGroup, 'Edm.Int32');
  /**
   * Static representation of the [[userType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TYPE: StringField<DynamicGroup> = new StringField('userType', DynamicGroup, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[dgExcludePools]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DG_EXCLUDE_POOLS: Link<DynamicGroup, DgPeoplePool> = new Link('dgExcludePools', DynamicGroup, DgPeoplePool);
  /**
   * Static representation of the one-to-many navigation property [[dgIncludePools]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DG_INCLUDE_POOLS: Link<DynamicGroup, DgPeoplePool> = new Link('dgIncludePools', DynamicGroup, DgPeoplePool);
  /**
   * All fields of the DynamicGroup entity.
   */
  export const _allFields: Array<NumberField<DynamicGroup> | StringField<DynamicGroup> | BigNumberField<DynamicGroup> | DateField<DynamicGroup> | BooleanField<DynamicGroup> | Link<DynamicGroup, DgPeoplePool>> = [
    DynamicGroup.ACTIVE_MEMBERSHIP_COUNT,
    DynamicGroup.CREATED_BY,
    DynamicGroup.GROUP_ID,
    DynamicGroup.GROUP_NAME,
    DynamicGroup.GROUP_TYPE,
    DynamicGroup.LAST_MODIFIED_DATE,
    DynamicGroup.STATIC_GROUP,
    DynamicGroup.TOTAL_MEMBER_COUNT,
    DynamicGroup.USER_TYPE,
    DynamicGroup.DG_EXCLUDE_POOLS,
    DynamicGroup.DG_INCLUDE_POOLS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DynamicGroup> = new AllFields('*', DynamicGroup);
  /**
   * All key fields of the DynamicGroup entity.
   */
  export const _keyFields: Array<Selectable<DynamicGroup>> = [DynamicGroup.GROUP_ID];
  /**
   * Mapping of all key field names to the respective static field property DynamicGroup.
   */
  export const _keys: { [keys: string]: Selectable<DynamicGroup> } = DynamicGroup._keyFields.reduce((acc: { [keys: string]: Selectable<DynamicGroup> }, field: Selectable<DynamicGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
