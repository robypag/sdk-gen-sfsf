import { PicklistRequestBuilder } from './PicklistRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Picklist" of service "SFOData".
 */
export declare class Picklist extends Entity implements PicklistType {
    /**
     * Technical entity name for Picklist.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Picklist.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * picklistId.
     * Maximum length: 64.
     */
    picklistId: string;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    picklistOptions: PicklistOption[];
    /**
     * Returns an entity builder to construct instances `Picklist`.
     * @returns A builder that constructs instances of entity type `Picklist`.
     */
    static builder(): EntityBuilderType<Picklist, PicklistTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Picklist` entity type.
     * @returns A `Picklist` request builder.
     */
    static requestBuilder(): PicklistRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Picklist`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Picklist`.
     */
    static customField(fieldName: string): CustomField<Picklist>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface PicklistType {
    picklistId: string;
    picklistOptions: PicklistOptionType[];
}
export interface PicklistTypeForceMandatory {
    picklistId: string;
    picklistOptions: PicklistOptionType[];
}
export declare namespace Picklist {
    /**
     * Static representation of the [[picklistId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_ID: StringField<Picklist>;
    /**
     * Static representation of the one-to-many navigation property [[picklistOptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_OPTIONS: Link<Picklist, PicklistOption>;
    /**
     * All fields of the Picklist entity.
     */
    const _allFields: Array<StringField<Picklist> | Link<Picklist, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Picklist>;
    /**
     * All key fields of the Picklist entity.
     */
    const _keyFields: Array<Selectable<Picklist>>;
    /**
     * Mapping of all key field names to the respective static field property Picklist.
     */
    const _keys: {
        [keys: string]: Selectable<Picklist>;
    };
}
//# sourceMappingURL=Picklist.d.ts.map