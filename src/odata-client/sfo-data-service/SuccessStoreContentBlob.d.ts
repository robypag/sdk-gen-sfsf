import { SuccessStoreContentBlobRequestBuilder } from './SuccessStoreContentBlobRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SuccessStoreContentBlob" of service "SFOData".
 */
export declare class SuccessStoreContentBlob extends Entity implements SuccessStoreContentBlobType {
    /**
     * Technical entity name for SuccessStoreContentBlob.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SuccessStoreContentBlob.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * contentId.
     */
    contentId: string;
    /**
     * Returns an entity builder to construct instances `SuccessStoreContentBlob`.
     * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
     */
    static builder(): EntityBuilderType<SuccessStoreContentBlob, SuccessStoreContentBlobTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SuccessStoreContentBlob` entity type.
     * @returns A `SuccessStoreContentBlob` request builder.
     */
    static requestBuilder(): SuccessStoreContentBlobRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContentBlob`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
     */
    static customField(fieldName: string): CustomField<SuccessStoreContentBlob>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SuccessStoreContentBlobType {
    contentId: string;
}
export interface SuccessStoreContentBlobTypeForceMandatory {
    contentId: string;
}
export declare namespace SuccessStoreContentBlob {
    /**
     * Static representation of the [[contentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT_ID: StringField<SuccessStoreContentBlob>;
    /**
     * All fields of the SuccessStoreContentBlob entity.
     */
    const _allFields: Array<StringField<SuccessStoreContentBlob>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SuccessStoreContentBlob>;
    /**
     * All key fields of the SuccessStoreContentBlob entity.
     */
    const _keyFields: Array<Selectable<SuccessStoreContentBlob>>;
    /**
     * Mapping of all key field names to the respective static field property SuccessStoreContentBlob.
     */
    const _keys: {
        [keys: string]: Selectable<SuccessStoreContentBlob>;
    };
}
//# sourceMappingURL=SuccessStoreContentBlob.d.ts.map