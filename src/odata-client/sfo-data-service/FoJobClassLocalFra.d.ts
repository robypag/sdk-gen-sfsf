import { FoJobClassLocalFraRequestBuilder } from './FoJobClassLocalFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobClassLocalFRA" of service "SFOData".
 */
export declare class FoJobClassLocalFra extends Entity implements FoJobClassLocalFraType {
    /**
     * Technical entity name for FoJobClassLocalFra.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalFra.
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
     * PCScode.
     * Maximum length: 255.
     * @nullable
     */
    custPcScode?: string;
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
     * Employment Category.
     * @nullable
     */
    genericNumber2?: BigNumber;
    /**
     * Insee Code.
     * Maximum length: 32.
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
     * Returns an entity builder to construct instances `FoJobClassLocalFra`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
     */
    static builder(): EntityBuilderType<FoJobClassLocalFra, FoJobClassLocalFraTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalFra` entity type.
     * @returns A `FoJobClassLocalFra` request builder.
     */
    static requestBuilder(): FoJobClassLocalFraRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
     */
    static customField(fieldName: string): CustomField<FoJobClassLocalFra>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoJobClassLocalFraType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    custPcScode?: string;
    endDate?: Moment;
    externalCode: string;
    genericNumber2?: BigNumber;
    genericString1?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoJobClassLocalFraTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    custPcScode: string;
    endDate: Moment;
    externalCode: string;
    genericNumber2: BigNumber;
    genericString1: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoJobClassLocalFra {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[custPcScode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_PC_SCODE: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_2: BigNumberField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobClassLocalFra>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobClassLocalFra>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoJobClassLocalFra, Territory>;
    /**
     * All fields of the FoJobClassLocalFra entity.
     */
    const _allFields: Array<StringField<FoJobClassLocalFra> | DateField<FoJobClassLocalFra> | BigNumberField<FoJobClassLocalFra> | OneToOneLink<FoJobClassLocalFra, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobClassLocalFra>;
    /**
     * All key fields of the FoJobClassLocalFra entity.
     */
    const _keyFields: Array<Selectable<FoJobClassLocalFra>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalFra.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobClassLocalFra>;
    };
}
//# sourceMappingURL=FoJobClassLocalFra.d.ts.map