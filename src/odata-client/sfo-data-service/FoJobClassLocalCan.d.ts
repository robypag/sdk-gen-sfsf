import { FoJobClassLocalCanRequestBuilder } from './FoJobClassLocalCanRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobClassLocalCAN" of service "SFOData".
 */
export declare class FoJobClassLocalCan extends Entity implements FoJobClassLocalCanType {
    /**
     * Technical entity name for FoJobClassLocalCan.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalCan.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Classification Country/Region_Country/Region.
     * Maximum length: 128.
     */
    country: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * createdDate.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Job Classification _Job Code.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Occupational Classification.
     * Maximum length: 255.
     * @nullable
     */
    genericString1?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Job Classification _Effective as of.
     */
    startDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[Territory]] entity.
     */
    countryNav: Territory;
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalCan`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
     */
    static builder(): EntityBuilderType<FoJobClassLocalCan, FoJobClassLocalCanTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalCan` entity type.
     * @returns A `FoJobClassLocalCan` request builder.
     */
    static requestBuilder(): FoJobClassLocalCanRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalCan`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
     */
    static customField(fieldName: string): CustomField<FoJobClassLocalCan>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoJobClassLocalCanType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    externalCode: string;
    genericString1?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoJobClassLocalCanTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    externalCode: string;
    genericString1: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoJobClassLocalCan {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobClassLocalCan>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobClassLocalCan>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoJobClassLocalCan, Territory>;
    /**
     * All fields of the FoJobClassLocalCan entity.
     */
    const _allFields: Array<StringField<FoJobClassLocalCan> | DateField<FoJobClassLocalCan> | OneToOneLink<FoJobClassLocalCan, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobClassLocalCan>;
    /**
     * All key fields of the FoJobClassLocalCan entity.
     */
    const _keyFields: Array<Selectable<FoJobClassLocalCan>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalCan.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobClassLocalCan>;
    };
}
//# sourceMappingURL=FoJobClassLocalCan.d.ts.map