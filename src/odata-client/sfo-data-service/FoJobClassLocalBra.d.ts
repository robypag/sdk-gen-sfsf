import { FoJobClassLocalBraRequestBuilder } from './FoJobClassLocalBraRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobClassLocalBRA" of service "SFOData".
 */
export declare class FoJobClassLocalBra extends Entity implements FoJobClassLocalBraType {
    /**
     * Technical entity name for FoJobClassLocalBra.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalBra.
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
     * Occupational Code.
     * Maximum length: 128.
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
     * Occupational Code.
     * Maximum length: 128.
     * @nullable
     */
    occupationalCode?: string;
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
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericString1Nav: PicklistOption;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    occupationalCodeNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalBra`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalBra`.
     */
    static builder(): EntityBuilderType<FoJobClassLocalBra, FoJobClassLocalBraTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalBra` entity type.
     * @returns A `FoJobClassLocalBra` request builder.
     */
    static requestBuilder(): FoJobClassLocalBraRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalBra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalBra`.
     */
    static customField(fieldName: string): CustomField<FoJobClassLocalBra>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface FoJobClassLocalBraType {
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
    occupationalCode?: string;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
    genericString1Nav: PicklistOptionType;
    occupationalCodeNav: PickListValueV2Type[];
}
export interface FoJobClassLocalBraTypeForceMandatory {
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
    occupationalCode: string;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
    genericString1Nav: PicklistOptionType;
    occupationalCodeNav: PickListValueV2Type[];
}
export declare namespace FoJobClassLocalBra {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[occupationalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCUPATIONAL_CODE: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobClassLocalBra>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobClassLocalBra>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoJobClassLocalBra, Territory>;
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1_NAV: OneToOneLink<FoJobClassLocalBra, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[occupationalCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCCUPATIONAL_CODE_NAV: Link<FoJobClassLocalBra, PickListValueV2>;
    /**
     * All fields of the FoJobClassLocalBra entity.
     */
    const _allFields: Array<StringField<FoJobClassLocalBra> | DateField<FoJobClassLocalBra> | OneToOneLink<FoJobClassLocalBra, Territory> | OneToOneLink<FoJobClassLocalBra, PicklistOption> | Link<FoJobClassLocalBra, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobClassLocalBra>;
    /**
     * All key fields of the FoJobClassLocalBra entity.
     */
    const _keyFields: Array<Selectable<FoJobClassLocalBra>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalBra.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobClassLocalBra>;
    };
}
//# sourceMappingURL=FoJobClassLocalBra.d.ts.map