import { RbpRoleRequestBuilder } from './RbpRoleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RBPRole" of service "SFOData".
 */
export declare class RbpRole extends Entity implements RbpRoleType {
    /**
     * Technical entity name for RbpRole.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RbpRole.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     */
    lastModifiedBy: string;
    /**
     * lastModifiedDate.
     */
    lastModifiedDate: Moment;
    /**
     * roleDesc.
     * Maximum length: 4000.
     * @nullable
     */
    roleDesc?: string;
    /**
     * roleId.
     */
    roleId: BigNumber;
    /**
     * roleName.
     * Maximum length: 256.
     */
    roleName: string;
    /**
     * userType.
     * Maximum length: 32.
     * @nullable
     */
    userType?: string;
    /**
     * One-to-many navigation property to the [[RbpBasicPermission]] entity.
     */
    permissions: RbpBasicPermission[];
    /**
     * One-to-many navigation property to the [[RbpRule]] entity.
     */
    rules: RbpRule[];
    /**
     * Returns an entity builder to construct instances `RbpRole`.
     * @returns A builder that constructs instances of entity type `RbpRole`.
     */
    static builder(): EntityBuilderType<RbpRole, RbpRoleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RbpRole` entity type.
     * @returns A `RbpRole` request builder.
     */
    static requestBuilder(): RbpRoleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RbpRole`.
     */
    static customField(fieldName: string): CustomField<RbpRole>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace RbpRole {
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RbpRole>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<RbpRole>;
    /**
     * Static representation of the [[roleDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_DESC: StringField<RbpRole>;
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ID: BigNumberField<RbpRole>;
    /**
     * Static representation of the [[roleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_NAME: StringField<RbpRole>;
    /**
     * Static representation of the [[userType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TYPE: StringField<RbpRole>;
    /**
     * Static representation of the one-to-many navigation property [[permissions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSIONS: Link<RbpRole, RbpBasicPermission>;
    /**
     * Static representation of the one-to-many navigation property [[rules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RULES: Link<RbpRole, RbpRule>;
    /**
     * All fields of the RbpRole entity.
     */
    const _allFields: Array<StringField<RbpRole> | DateField<RbpRole> | BigNumberField<RbpRole> | Link<RbpRole, RbpBasicPermission> | Link<RbpRole, RbpRule>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RbpRole>;
    /**
     * All key fields of the RbpRole entity.
     */
    const _keyFields: Array<Selectable<RbpRole>>;
    /**
     * Mapping of all key field names to the respective static field property RbpRole.
     */
    const _keys: {
        [keys: string]: Selectable<RbpRole>;
    };
}
//# sourceMappingURL=RbpRole.d.ts.map