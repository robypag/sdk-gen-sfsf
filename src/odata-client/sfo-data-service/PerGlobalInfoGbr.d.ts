import { PerGlobalInfoGbrRequestBuilder } from './PerGlobalInfoGbrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PerGlobalInfoGBR" of service "SFOData".
 */
export declare class PerGlobalInfoGbr extends Entity implements PerGlobalInfoGbrType {
    /**
     * Technical entity name for PerGlobalInfoGbr.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerGlobalInfoGbr.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * country.
     */
    country: string;
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
     * Date Learned.
     * @nullable
     */
    genericDate1?: Moment;
    /**
     * Date of Determination of Challenge Status.
     * @nullable
     */
    genericDate2?: Moment;
    /**
     * Employed Since.
     * @nullable
     */
    genericDate3?: Moment;
    /**
     * Date Of Providing Proof Of Medical Absence.
     * @nullable
     */
    genericDate4?: Moment;
    /**
     * Visa Issue Date.
     * @nullable
     */
    genericDate5?: Moment;
    /**
     * Nationality Acquisition Date.
     * @nullable
     */
    genericDate6?: Moment;
    /**
     * Identity Card - Expiry Date.
     * @nullable
     */
    genericDate7?: Moment;
    /**
     * Resident Identity Card - Expiry Date.
     * @nullable
     */
    genericDate8?: Moment;
    /**
     * Military Status.
     * @nullable
     */
    genericNumber1?: BigNumber;
    /**
     * Degree of Challenge.
     * @nullable
     */
    genericNumber10?: BigNumber;
    /**
     * Physician ID Number.
     * @nullable
     */
    genericNumber11?: BigNumber;
    /**
     * Student.
     * @nullable
     */
    genericNumber12?: BigNumber;
    /**
     * Is Dependent Challenged.
     * @nullable
     */
    genericNumber13?: BigNumber;
    /**
     * Religion.
     * @nullable
     */
    genericNumber2?: BigNumber;
    /**
     * Standard Occupational Classification Code.
     * @nullable
     */
    genericNumber3?: BigNumber;
    /**
     * Armed Forces Medal Veteran.
     * @nullable
     */
    genericNumber4?: BigNumber;
    /**
     * Degree of Challenge.
     * @nullable
     */
    genericNumber5?: BigNumber;
    /**
     * Special Disabled Veteran.
     * @nullable
     */
    genericNumber6?: BigNumber;
    /**
     * Vietnam Era Veteran.
     * @nullable
     */
    genericNumber7?: BigNumber;
    /**
     * Other Disabled Veteran.
     * @nullable
     */
    genericNumber8?: BigNumber;
    /**
     * Visa Type.
     * @nullable
     */
    genericNumber9?: BigNumber;
    /**
     * Ethnic Group.
     * Maximum length: 60.
     * @nullable
     */
    genericString1?: string;
    /**
     * On Military Service.
     * Maximum length: 15.
     * @nullable
     */
    genericString10?: string;
    /**
     * Financially Independent.
     * Maximum length: 15.
     * @nullable
     */
    genericString11?: string;
    /**
     * Physician Name.
     * Maximum length: 30.
     * @nullable
     */
    genericString12?: string;
    /**
     * Disclosed Veteran Category.
     * Maximum length: 256.
     * @nullable
     */
    genericString13?: string;
    /**
     * Visible Minority Group.
     * Maximum length: 256.
     * @nullable
     */
    genericString14?: string;
    /**
     * Physician Name.
     * Maximum length: 30.
     * @nullable
     */
    genericString15?: string;
    /**
     * Smoker.
     * Maximum length: 15.
     * @nullable
     */
    genericString16?: string;
    /**
     * Name Of Employer.
     * Maximum length: 256.
     * @nullable
     */
    genericString17?: string;
    /**
     * Visa Number.
     * Maximum length: 256.
     * @nullable
     */
    genericString18?: string;
    /**
     * Passport Number.
     * Maximum length: 256.
     * @nullable
     */
    genericString19?: string;
    /**
     * Challenge Group.
     * Maximum length: 256.
     * @nullable
     */
    genericString2?: string;
    /**
     * Drivers Licence Number.
     * Maximum length: 256.
     * @nullable
     */
    genericString20?: string;
    /**
     * Type of Challenge.
     * Maximum length: 256.
     * @nullable
     */
    genericString3?: string;
    /**
     * Issuing Authority.
     * Maximum length: 256.
     * @nullable
     */
    genericString4?: string;
    /**
     * Reference Number.
     * Maximum length: 256.
     * @nullable
     */
    genericString5?: string;
    /**
     * Challenged.
     * Maximum length: 15.
     * @nullable
     */
    genericString6?: string;
    /**
     * Student.
     * Maximum length: 15.
     * @nullable
     */
    genericString7?: string;
    /**
     * Medicare.
     * Maximum length: 15.
     * @nullable
     */
    genericString8?: string;
    /**
     * Smoker.
     * Maximum length: 15.
     * @nullable
     */
    genericString9?: string;
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
     * operation.
     * @nullable
     */
    operation?: string;
    /**
     * Person ID External.
     * Maximum length: 100.
     */
    personIdExternal: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * One-to-one navigation property to the [[Territory]] entity.
     */
    countryNav: Territory;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericNumber1Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericNumber2Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericNumber3Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericString1Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericString2Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    genericString3Nav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * Returns an entity builder to construct instances `PerGlobalInfoGbr`.
     * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
     */
    static builder(): EntityBuilderType<PerGlobalInfoGbr, PerGlobalInfoGbrTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PerGlobalInfoGbr` entity type.
     * @returns A `PerGlobalInfoGbr` request builder.
     */
    static requestBuilder(): PerGlobalInfoGbrRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoGbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
     */
    static customField(fieldName: string): CustomField<PerGlobalInfoGbr>;
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
import { PerPerson, PerPersonType } from './PerPerson';
export interface PerGlobalInfoGbrType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    genericDate1?: Moment;
    genericDate2?: Moment;
    genericDate3?: Moment;
    genericDate4?: Moment;
    genericDate5?: Moment;
    genericDate6?: Moment;
    genericDate7?: Moment;
    genericDate8?: Moment;
    genericNumber1?: BigNumber;
    genericNumber10?: BigNumber;
    genericNumber11?: BigNumber;
    genericNumber12?: BigNumber;
    genericNumber13?: BigNumber;
    genericNumber2?: BigNumber;
    genericNumber3?: BigNumber;
    genericNumber4?: BigNumber;
    genericNumber5?: BigNumber;
    genericNumber6?: BigNumber;
    genericNumber7?: BigNumber;
    genericNumber8?: BigNumber;
    genericNumber9?: BigNumber;
    genericString1?: string;
    genericString10?: string;
    genericString11?: string;
    genericString12?: string;
    genericString13?: string;
    genericString14?: string;
    genericString15?: string;
    genericString16?: string;
    genericString17?: string;
    genericString18?: string;
    genericString19?: string;
    genericString2?: string;
    genericString20?: string;
    genericString3?: string;
    genericString4?: string;
    genericString5?: string;
    genericString6?: string;
    genericString7?: string;
    genericString8?: string;
    genericString9?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    personIdExternal: string;
    startDate: Moment;
    countryNav: TerritoryType;
    genericNumber1Nav: PicklistOptionType;
    genericNumber2Nav: PicklistOptionType;
    genericNumber3Nav: PicklistOptionType;
    genericString1Nav: PicklistOptionType;
    genericString2Nav: PicklistOptionType;
    genericString3Nav: PicklistOptionType;
    personNav: PerPersonType;
}
export interface PerGlobalInfoGbrTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    genericDate1: Moment;
    genericDate2: Moment;
    genericDate3: Moment;
    genericDate4: Moment;
    genericDate5: Moment;
    genericDate6: Moment;
    genericDate7: Moment;
    genericDate8: Moment;
    genericNumber1: BigNumber;
    genericNumber10: BigNumber;
    genericNumber11: BigNumber;
    genericNumber12: BigNumber;
    genericNumber13: BigNumber;
    genericNumber2: BigNumber;
    genericNumber3: BigNumber;
    genericNumber4: BigNumber;
    genericNumber5: BigNumber;
    genericNumber6: BigNumber;
    genericNumber7: BigNumber;
    genericNumber8: BigNumber;
    genericNumber9: BigNumber;
    genericString1: string;
    genericString10: string;
    genericString11: string;
    genericString12: string;
    genericString13: string;
    genericString14: string;
    genericString15: string;
    genericString16: string;
    genericString17: string;
    genericString18: string;
    genericString19: string;
    genericString2: string;
    genericString20: string;
    genericString3: string;
    genericString4: string;
    genericString5: string;
    genericString6: string;
    genericString7: string;
    genericString8: string;
    genericString9: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    personIdExternal: string;
    startDate: Moment;
    countryNav: TerritoryType;
    genericNumber1Nav: PicklistOptionType;
    genericNumber2Nav: PicklistOptionType;
    genericNumber3Nav: PicklistOptionType;
    genericString1Nav: PicklistOptionType;
    genericString2Nav: PicklistOptionType;
    genericString3Nav: PicklistOptionType;
    personNav: PerPersonType;
}
export declare namespace PerGlobalInfoGbr {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_1: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_2: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_3: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_4: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_5: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_6: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_7: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericDate8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_DATE_8: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericNumber9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_10: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_11: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_12: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_13: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_14: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_15: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_16: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_17: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_18: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_19: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_2: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_20: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_3: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_4: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_5: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_6: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_7: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_8: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[genericString9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_9: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoGbr>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<PerGlobalInfoGbr>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<PerGlobalInfoGbr, Territory>;
    /**
     * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<PerGlobalInfoGbr, PerPerson>;
    /**
     * All fields of the PerGlobalInfoGbr entity.
     */
    const _allFields: Array<StringField<PerGlobalInfoGbr> | DateField<PerGlobalInfoGbr> | BigNumberField<PerGlobalInfoGbr> | OneToOneLink<PerGlobalInfoGbr, Territory> | OneToOneLink<PerGlobalInfoGbr, PicklistOption> | OneToOneLink<PerGlobalInfoGbr, PerPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PerGlobalInfoGbr>;
    /**
     * All key fields of the PerGlobalInfoGbr entity.
     */
    const _keyFields: Array<Selectable<PerGlobalInfoGbr>>;
    /**
     * Mapping of all key field names to the respective static field property PerGlobalInfoGbr.
     */
    const _keys: {
        [keys: string]: Selectable<PerGlobalInfoGbr>;
    };
}
//# sourceMappingURL=PerGlobalInfoGbr.d.ts.map