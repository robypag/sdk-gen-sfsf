import { ContinuousPerformanceUserPermissionRequestBuilder } from './ContinuousPerformanceUserPermissionRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ContinuousPerformanceUserPermission" of service "SFOData".
 */
export declare class ContinuousPerformanceUserPermission extends Entity implements ContinuousPerformanceUserPermissionType {
    /**
     * Technical entity name for ContinuousPerformanceUserPermission.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousPerformanceUserPermission.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * hasPermission.
     */
    hasPermission: boolean;
    /**
     * permStringValue.
     */
    permStringValue: string;
    /**
     * permType.
     */
    permType: string;
    /**
     * targetUserId.
     */
    targetUserId: string;
    /**
     * Returns an entity builder to construct instances `ContinuousPerformanceUserPermission`.
     * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
     */
    static builder(): EntityBuilderType<ContinuousPerformanceUserPermission, ContinuousPerformanceUserPermissionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousPerformanceUserPermission` entity type.
     * @returns A `ContinuousPerformanceUserPermission` request builder.
     */
    static requestBuilder(): ContinuousPerformanceUserPermissionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousPerformanceUserPermission`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousPerformanceUserPermission`.
     */
    static customField(fieldName: string): CustomField<ContinuousPerformanceUserPermission>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace ContinuousPerformanceUserPermission {
    /**
     * Static representation of the [[hasPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_PERMISSION: BooleanField<ContinuousPerformanceUserPermission>;
    /**
     * Static representation of the [[permStringValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERM_STRING_VALUE: StringField<ContinuousPerformanceUserPermission>;
    /**
     * Static representation of the [[permType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERM_TYPE: StringField<ContinuousPerformanceUserPermission>;
    /**
     * Static representation of the [[targetUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_USER_ID: StringField<ContinuousPerformanceUserPermission>;
    /**
     * All fields of the ContinuousPerformanceUserPermission entity.
     */
    const _allFields: Array<BooleanField<ContinuousPerformanceUserPermission> | StringField<ContinuousPerformanceUserPermission>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ContinuousPerformanceUserPermission>;
    /**
     * All key fields of the ContinuousPerformanceUserPermission entity.
     */
    const _keyFields: Array<Selectable<ContinuousPerformanceUserPermission>>;
    /**
     * Mapping of all key field names to the respective static field property ContinuousPerformanceUserPermission.
     */
    const _keys: {
        [keys: string]: Selectable<ContinuousPerformanceUserPermission>;
    };
}
//# sourceMappingURL=ContinuousPerformanceUserPermission.d.ts.map