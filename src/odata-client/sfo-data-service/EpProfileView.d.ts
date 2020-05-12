import { EpProfileViewRequestBuilder } from './EpProfileViewRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EPProfileView" of service "SFOData".
 */
export declare class EpProfileView extends Entity implements EpProfileViewType {
    /**
     * Technical entity name for EpProfileView.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpProfileView.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * dashboard Id.
     */
    dashboardId: string;
    /**
     * dashboard Title.
     * @nullable
     */
    dashboardTitle?: string;
    /**
     * dashboard Type.
     * @nullable
     */
    dashboardType?: string;
    /**
     * live Profile Photo Permission.
     * @nullable
     */
    liveProfilePhotoPermission?: string;
    /**
     * user Id.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `EpProfileView`.
     * @returns A builder that constructs instances of entity type `EpProfileView`.
     */
    static builder(): EntityBuilderType<EpProfileView, EpProfileViewTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpProfileView` entity type.
     * @returns A `EpProfileView` request builder.
     */
    static requestBuilder(): EpProfileViewRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfileView`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpProfileView`.
     */
    static customField(fieldName: string): CustomField<EpProfileView>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EpProfileViewType {
    dashboardId: string;
    dashboardTitle?: string;
    dashboardType?: string;
    liveProfilePhotoPermission?: string;
    userId: string;
}
export interface EpProfileViewTypeForceMandatory {
    dashboardId: string;
    dashboardTitle: string;
    dashboardType: string;
    liveProfilePhotoPermission: string;
    userId: string;
}
export declare namespace EpProfileView {
    /**
     * Static representation of the [[dashboardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DASHBOARD_ID: StringField<EpProfileView>;
    /**
     * Static representation of the [[dashboardTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DASHBOARD_TITLE: StringField<EpProfileView>;
    /**
     * Static representation of the [[dashboardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DASHBOARD_TYPE: StringField<EpProfileView>;
    /**
     * Static representation of the [[liveProfilePhotoPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LIVE_PROFILE_PHOTO_PERMISSION: StringField<EpProfileView>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EpProfileView>;
    /**
     * All fields of the EpProfileView entity.
     */
    const _allFields: Array<StringField<EpProfileView>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpProfileView>;
    /**
     * All key fields of the EpProfileView entity.
     */
    const _keyFields: Array<Selectable<EpProfileView>>;
    /**
     * Mapping of all key field names to the respective static field property EpProfileView.
     */
    const _keys: {
        [keys: string]: Selectable<EpProfileView>;
    };
}
//# sourceMappingURL=EpProfileView.d.ts.map