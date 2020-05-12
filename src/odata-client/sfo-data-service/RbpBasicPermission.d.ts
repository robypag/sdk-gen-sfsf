import { RbpBasicPermissionRequestBuilder } from './RbpBasicPermissionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RBPBasicPermission" of service "SFOData".
 */
export declare class RbpBasicPermission extends Entity implements RbpBasicPermissionType {
    /**
     * Technical entity name for RbpBasicPermission.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RbpBasicPermission.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * permissionId.
     */
    permissionId: BigNumber;
    /**
     * permissionLongValue.
     * @nullable
     */
    permissionLongValue?: BigNumber;
    /**
     * permissionStringValue.
     * Maximum length: 256.
     */
    permissionStringValue: string;
    /**
     * permissionType.
     * Maximum length: 100.
     */
    permissionType: string;
    /**
     * Returns an entity builder to construct instances `RbpBasicPermission`.
     * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
     */
    static builder(): EntityBuilderType<RbpBasicPermission, RbpBasicPermissionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RbpBasicPermission` entity type.
     * @returns A `RbpBasicPermission` request builder.
     */
    static requestBuilder(): RbpBasicPermissionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RbpBasicPermission`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RbpBasicPermission`.
     */
    static customField(fieldName: string): CustomField<RbpBasicPermission>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace RbpBasicPermission {
    /**
     * Static representation of the [[permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSION_ID: BigNumberField<RbpBasicPermission>;
    /**
     * Static representation of the [[permissionLongValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSION_LONG_VALUE: BigNumberField<RbpBasicPermission>;
    /**
     * Static representation of the [[permissionStringValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSION_STRING_VALUE: StringField<RbpBasicPermission>;
    /**
     * Static representation of the [[permissionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSION_TYPE: StringField<RbpBasicPermission>;
    /**
     * All fields of the RbpBasicPermission entity.
     */
    const _allFields: Array<BigNumberField<RbpBasicPermission> | StringField<RbpBasicPermission>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RbpBasicPermission>;
    /**
     * All key fields of the RbpBasicPermission entity.
     */
    const _keyFields: Array<Selectable<RbpBasicPermission>>;
    /**
     * Mapping of all key field names to the respective static field property RbpBasicPermission.
     */
    const _keys: {
        [keys: string]: Selectable<RbpBasicPermission>;
    };
}
//# sourceMappingURL=RbpBasicPermission.d.ts.map