import { TerritoryRequestBuilder } from './TerritoryRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Territory" of service "SFOData".
 */
export declare class Territory extends Entity implements TerritoryType {
    /**
     * Technical entity name for Territory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Territory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * territory Code.
     * Maximum length: 32.
     */
    territoryCode: string;
    /**
     * territory Name.
     * Maximum length: 512.
     * @nullable
     */
    territoryName?: string;
    /**
     * Returns an entity builder to construct instances `Territory`.
     * @returns A builder that constructs instances of entity type `Territory`.
     */
    static builder(): EntityBuilderType<Territory, TerritoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Territory` entity type.
     * @returns A `Territory` request builder.
     */
    static requestBuilder(): TerritoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Territory`.
     */
    static customField(fieldName: string): CustomField<Territory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TerritoryType {
    territoryCode: string;
    territoryName?: string;
}
export interface TerritoryTypeForceMandatory {
    territoryCode: string;
    territoryName: string;
}
export declare namespace Territory {
    /**
     * Static representation of the [[territoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_CODE: StringField<Territory>;
    /**
     * Static representation of the [[territoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_NAME: StringField<Territory>;
    /**
     * All fields of the Territory entity.
     */
    const _allFields: Array<StringField<Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Territory>;
    /**
     * All key fields of the Territory entity.
     */
    const _keyFields: Array<Selectable<Territory>>;
    /**
     * Mapping of all key field names to the respective static field property Territory.
     */
    const _keys: {
        [keys: string]: Selectable<Territory>;
    };
}
//# sourceMappingURL=Territory.d.ts.map