import { DgPeoplePoolRequestBuilder } from './DgPeoplePoolRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGPeoplePool" of service "SFOData".
 */
export declare class DgPeoplePool extends Entity implements DgPeoplePoolType {
    /**
     * Technical entity name for DgPeoplePool.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgPeoplePool.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * peoplePoolId.
     * Maximum length: 200.
     */
    peoplePoolId: string;
    /**
     * One-to-many navigation property to the [[DgFilter]] entity.
     */
    filters: DgFilter[];
    /**
     * Returns an entity builder to construct instances `DgPeoplePool`.
     * @returns A builder that constructs instances of entity type `DgPeoplePool`.
     */
    static builder(): EntityBuilderType<DgPeoplePool, DgPeoplePoolTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgPeoplePool` entity type.
     * @returns A `DgPeoplePool` request builder.
     */
    static requestBuilder(): DgPeoplePoolRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgPeoplePool`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgPeoplePool`.
     */
    static customField(fieldName: string): CustomField<DgPeoplePool>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DgFilter, DgFilterType } from './DgFilter';
export interface DgPeoplePoolType {
    peoplePoolId: string;
    filters: DgFilterType[];
}
export interface DgPeoplePoolTypeForceMandatory {
    peoplePoolId: string;
    filters: DgFilterType[];
}
export declare namespace DgPeoplePool {
    /**
     * Static representation of the [[peoplePoolId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PEOPLE_POOL_ID: StringField<DgPeoplePool>;
    /**
     * Static representation of the one-to-many navigation property [[filters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTERS: Link<DgPeoplePool, DgFilter>;
    /**
     * All fields of the DgPeoplePool entity.
     */
    const _allFields: Array<StringField<DgPeoplePool> | Link<DgPeoplePool, DgFilter>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgPeoplePool>;
    /**
     * All key fields of the DgPeoplePool entity.
     */
    const _keyFields: Array<Selectable<DgPeoplePool>>;
    /**
     * Mapping of all key field names to the respective static field property DgPeoplePool.
     */
    const _keys: {
        [keys: string]: Selectable<DgPeoplePool>;
    };
}
//# sourceMappingURL=DgPeoplePool.d.ts.map