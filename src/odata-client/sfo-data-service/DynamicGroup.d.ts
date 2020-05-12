import { DynamicGroupRequestBuilder } from './DynamicGroupRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DynamicGroup" of service "SFOData".
 */
export declare class DynamicGroup extends Entity implements DynamicGroupType {
    /**
     * Technical entity name for DynamicGroup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DynamicGroup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    groupId: BigNumber;
    /**
     * groupName.
     * Maximum length: 100.
     */
    groupName: string;
    /**
     * groupType.
     * Maximum length: 32.
     */
    groupType: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDate?: Moment;
    /**
     * staticGroup.
     */
    staticGroup: boolean;
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
    dgExcludePools: DgPeoplePool[];
    /**
     * One-to-many navigation property to the [[DgPeoplePool]] entity.
     */
    dgIncludePools: DgPeoplePool[];
    /**
     * Returns an entity builder to construct instances `DynamicGroup`.
     * @returns A builder that constructs instances of entity type `DynamicGroup`.
     */
    static builder(): EntityBuilderType<DynamicGroup, DynamicGroupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DynamicGroup` entity type.
     * @returns A `DynamicGroup` request builder.
     */
    static requestBuilder(): DynamicGroupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DynamicGroup`.
     */
    static customField(fieldName: string): CustomField<DynamicGroup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace DynamicGroup {
    /**
     * Static representation of the [[activeMembershipCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE_MEMBERSHIP_COUNT: NumberField<DynamicGroup>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<DynamicGroup>;
    /**
     * Static representation of the [[groupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_ID: BigNumberField<DynamicGroup>;
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_NAME: StringField<DynamicGroup>;
    /**
     * Static representation of the [[groupType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_TYPE: StringField<DynamicGroup>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<DynamicGroup>;
    /**
     * Static representation of the [[staticGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATIC_GROUP: BooleanField<DynamicGroup>;
    /**
     * Static representation of the [[totalMemberCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_MEMBER_COUNT: NumberField<DynamicGroup>;
    /**
     * Static representation of the [[userType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TYPE: StringField<DynamicGroup>;
    /**
     * Static representation of the one-to-many navigation property [[dgExcludePools]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DG_EXCLUDE_POOLS: Link<DynamicGroup, DgPeoplePool>;
    /**
     * Static representation of the one-to-many navigation property [[dgIncludePools]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DG_INCLUDE_POOLS: Link<DynamicGroup, DgPeoplePool>;
    /**
     * All fields of the DynamicGroup entity.
     */
    const _allFields: Array<NumberField<DynamicGroup> | StringField<DynamicGroup> | BigNumberField<DynamicGroup> | DateField<DynamicGroup> | BooleanField<DynamicGroup> | Link<DynamicGroup, DgPeoplePool>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DynamicGroup>;
    /**
     * All key fields of the DynamicGroup entity.
     */
    const _keyFields: Array<Selectable<DynamicGroup>>;
    /**
     * Mapping of all key field names to the respective static field property DynamicGroup.
     */
    const _keys: {
        [keys: string]: Selectable<DynamicGroup>;
    };
}
//# sourceMappingURL=DynamicGroup.d.ts.map