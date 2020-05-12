import { FoCorporateAddressDefltRequestBuilder } from './FoCorporateAddressDefltRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOCorporateAddressDEFLT" of service "SFOData".
 */
export declare class FoCorporateAddressDeflt extends Entity implements FoCorporateAddressDefltType {
    /**
     * Technical entity name for FoCorporateAddressDeflt.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoCorporateAddressDeflt.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address Line 1.
     * Maximum length: 256.
     * @nullable
     */
    address1?: string;
    /**
     * Apartment.
     * Maximum length: 256.
     * @nullable
     */
    address10?: string;
    /**
     * Bed Number.
     * Maximum length: 256.
     * @nullable
     */
    address11?: string;
    /**
     * Address Line 2.
     * Maximum length: 256.
     * @nullable
     */
    address2?: string;
    /**
     * Department.
     * Maximum length: 256.
     * @nullable
     */
    address3?: string;
    /**
     * Governorate.
     * Maximum length: 256.
     * @nullable
     */
    address4?: string;
    /**
     * Department.
     * Maximum length: 256.
     * @nullable
     */
    address5?: string;
    /**
     * Locality Type.
     * Maximum length: 256.
     * @nullable
     */
    address6?: string;
    /**
     * District.
     * Maximum length: 256.
     * @nullable
     */
    address7?: string;
    /**
     * Building Number.
     * Maximum length: 256.
     * @nullable
     */
    address8?: string;
    /**
     * Building.
     * Maximum length: 256.
     * @nullable
     */
    address9?: string;
    /**
     * Address ID.
     */
    addressId: BigNumber;
    /**
     * District.
     * Maximum length: 256.
     * @nullable
     */
    city?: string;
    /**
     * Country.
     * Maximum length: 256.
     * @nullable
     */
    country?: string;
    /**
     * District.
     * Maximum length: 256.
     * @nullable
     */
    county?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Province.
     * Maximum length: 256.
     * @nullable
     */
    province?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * State.
     * Maximum length: 256.
     * @nullable
     */
    state?: string;
    /**
     * ZIP.
     * Maximum length: 256.
     * @nullable
     */
    zipCode?: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    address3Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    address4Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    address5Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    address6Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    address7Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    cityNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    countryNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    countyNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    provinceNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    stateNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `FoCorporateAddressDeflt`.
     * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
     */
    static builder(): EntityBuilderType<FoCorporateAddressDeflt, FoCorporateAddressDefltTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoCorporateAddressDeflt` entity type.
     * @returns A `FoCorporateAddressDeflt` request builder.
     */
    static requestBuilder(): FoCorporateAddressDefltRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCorporateAddressDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
     */
    static customField(fieldName: string): CustomField<FoCorporateAddressDeflt>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface FoCorporateAddressDefltType {
    address1?: string;
    address10?: string;
    address11?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    address5?: string;
    address6?: string;
    address7?: string;
    address8?: string;
    address9?: string;
    addressId: BigNumber;
    city?: string;
    country?: string;
    county?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    province?: string;
    startDate?: Moment;
    state?: string;
    zipCode?: string;
    address3Nav: PicklistOptionType;
    address4Nav: PicklistOptionType;
    address5Nav: PicklistOptionType;
    address6Nav: PicklistOptionType;
    address7Nav: PicklistOptionType;
    cityNav: PicklistOptionType;
    countryNav: PicklistOptionType;
    countyNav: PicklistOptionType;
    provinceNav: PicklistOptionType;
    stateNav: PicklistOptionType;
}
export interface FoCorporateAddressDefltTypeForceMandatory {
    address1: string;
    address10: string;
    address11: string;
    address2: string;
    address3: string;
    address4: string;
    address5: string;
    address6: string;
    address7: string;
    address8: string;
    address9: string;
    addressId: BigNumber;
    city: string;
    country: string;
    county: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    province: string;
    startDate: Moment;
    state: string;
    zipCode: string;
    address3Nav: PicklistOptionType;
    address4Nav: PicklistOptionType;
    address5Nav: PicklistOptionType;
    address6Nav: PicklistOptionType;
    address7Nav: PicklistOptionType;
    cityNav: PicklistOptionType;
    countryNav: PicklistOptionType;
    countyNav: PicklistOptionType;
    provinceNav: PicklistOptionType;
    stateNav: PicklistOptionType;
}
export declare namespace FoCorporateAddressDeflt {
    /**
     * Static representation of the [[address1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_1: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_10: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_11: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_3: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_4: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_5: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_6: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_7: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_8: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[address9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_9: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: BigNumberField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[province]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVINCE: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<FoCorporateAddressDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[address3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_3_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[address4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_4_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[address5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_5_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[address6Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_6_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[address7Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_7_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[cityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[countyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[provinceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROVINCE_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[stateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption>;
    /**
     * All fields of the FoCorporateAddressDeflt entity.
     */
    const _allFields: Array<StringField<FoCorporateAddressDeflt> | BigNumberField<FoCorporateAddressDeflt> | DateField<FoCorporateAddressDeflt> | OneToOneLink<FoCorporateAddressDeflt, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoCorporateAddressDeflt>;
    /**
     * All key fields of the FoCorporateAddressDeflt entity.
     */
    const _keyFields: Array<Selectable<FoCorporateAddressDeflt>>;
    /**
     * Mapping of all key field names to the respective static field property FoCorporateAddressDeflt.
     */
    const _keys: {
        [keys: string]: Selectable<FoCorporateAddressDeflt>;
    };
}
//# sourceMappingURL=FoCorporateAddressDeflt.d.ts.map