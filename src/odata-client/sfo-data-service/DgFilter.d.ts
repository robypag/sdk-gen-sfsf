import { DgFilterRequestBuilder } from './DgFilterRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGFilter" of service "SFOData".
 */
export declare class DgFilter extends Entity implements DgFilterType {
    /**
     * Technical entity name for DgFilter.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFilter.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * filterId.
     * Maximum length: 200.
     */
    filterId: string;
    /**
     * One-to-many navigation property to the [[DgExpression]] entity.
     */
    expressions: DgExpression[];
    /**
     * One-to-one navigation property to the [[DgField]] entity.
     */
    field: DgField;
    /**
     * Returns an entity builder to construct instances `DgFilter`.
     * @returns A builder that constructs instances of entity type `DgFilter`.
     */
    static builder(): EntityBuilderType<DgFilter, DgFilterTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgFilter` entity type.
     * @returns A `DgFilter` request builder.
     */
    static requestBuilder(): DgFilterRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFilter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFilter`.
     */
    static customField(fieldName: string): CustomField<DgFilter>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DgExpression, DgExpressionType } from './DgExpression';
import { DgField, DgFieldType } from './DgField';
export interface DgFilterType {
    filterId: string;
    expressions: DgExpressionType[];
    field: DgFieldType;
}
export interface DgFilterTypeForceMandatory {
    filterId: string;
    expressions: DgExpressionType[];
    field: DgFieldType;
}
export declare namespace DgFilter {
    /**
     * Static representation of the [[filterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_ID: StringField<DgFilter>;
    /**
     * Static representation of the one-to-many navigation property [[expressions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPRESSIONS: Link<DgFilter, DgExpression>;
    /**
     * Static representation of the one-to-one navigation property [[field]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD: OneToOneLink<DgFilter, DgField>;
    /**
     * All fields of the DgFilter entity.
     */
    const _allFields: Array<StringField<DgFilter> | Link<DgFilter, DgExpression> | OneToOneLink<DgFilter, DgField>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgFilter>;
    /**
     * All key fields of the DgFilter entity.
     */
    const _keyFields: Array<Selectable<DgFilter>>;
    /**
     * Mapping of all key field names to the respective static field property DgFilter.
     */
    const _keys: {
        [keys: string]: Selectable<DgFilter>;
    };
}
//# sourceMappingURL=DgFilter.d.ts.map