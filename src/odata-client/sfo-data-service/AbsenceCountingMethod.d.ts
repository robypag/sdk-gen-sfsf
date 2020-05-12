import { AbsenceCountingMethodRequestBuilder } from './AbsenceCountingMethodRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AbsenceCountingMethod" of service "SFOData".
 */
export declare class AbsenceCountingMethod extends Entity implements AbsenceCountingMethodType {
    /**
     * Technical entity name for AbsenceCountingMethod.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AbsenceCountingMethod.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Calculation based on.
     * Maximum length: 255.
     * @nullable
     */
    base?: string;
    /**
     * Consider Holidays.
     * @nullable
     */
    considerHolidays?: boolean;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Deduction Factor.
     * @nullable
     */
    deductionFactor?: BigNumber;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Friday.
     * @nullable
     */
    friday?: boolean;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Monday.
     * @nullable
     */
    monday?: boolean;
    /**
     * Saturday.
     * @nullable
     */
    saturday?: boolean;
    /**
     * Sunday.
     * @nullable
     */
    sunday?: boolean;
    /**
     * Thursday.
     * @nullable
     */
    thursday?: boolean;
    /**
     * Tuesday.
     * @nullable
     */
    tuesday?: boolean;
    /**
     * Wednesday.
     * @nullable
     */
    wednesday?: boolean;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    baseNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `AbsenceCountingMethod`.
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    static builder(): EntityBuilderType<AbsenceCountingMethod, AbsenceCountingMethodTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AbsenceCountingMethod` entity type.
     * @returns A `AbsenceCountingMethod` request builder.
     */
    static requestBuilder(): AbsenceCountingMethodRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AbsenceCountingMethod`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
     */
    static customField(fieldName: string): CustomField<AbsenceCountingMethod>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface AbsenceCountingMethodType {
    base?: string;
    considerHolidays?: boolean;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    deductionFactor?: BigNumber;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnDebug?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameEsMx?: string;
    externalNameFrCa?: string;
    externalNameFrFr?: string;
    externalNameItIt?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNameZhCn?: string;
    friday?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    monday?: boolean;
    saturday?: boolean;
    sunday?: boolean;
    thursday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    baseNav: MdfEnumValueType;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface AbsenceCountingMethodTypeForceMandatory {
    base: string;
    considerHolidays: boolean;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    deductionFactor: BigNumber;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnDebug: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameEsMx: string;
    externalNameFrCa: string;
    externalNameFrFr: string;
    externalNameItIt: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNameZhCn: string;
    friday: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    monday: boolean;
    saturday: boolean;
    sunday: boolean;
    thursday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    baseNav: MdfEnumValueType;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace AbsenceCountingMethod {
    /**
     * Static representation of the [[base]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[considerHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONSIDER_HOLIDAYS: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[deductionFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_FACTOR: BigNumberField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[friday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[monday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[saturday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[sunday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[thursday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[tuesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the [[wednesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY: BooleanField<AbsenceCountingMethod>;
    /**
     * Static representation of the one-to-one navigation property [[baseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_NAV: OneToOneLink<AbsenceCountingMethod, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<AbsenceCountingMethod, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<AbsenceCountingMethod, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<AbsenceCountingMethod, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<AbsenceCountingMethod, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AbsenceCountingMethod, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<AbsenceCountingMethod, WfRequest>;
    /**
     * All fields of the AbsenceCountingMethod entity.
     */
    const _allFields: Array<StringField<AbsenceCountingMethod> | BooleanField<AbsenceCountingMethod> | DateField<AbsenceCountingMethod> | BigNumberField<AbsenceCountingMethod> | OneToOneLink<AbsenceCountingMethod, MdfEnumValue> | Link<AbsenceCountingMethod, Country> | OneToOneLink<AbsenceCountingMethod, User> | Link<AbsenceCountingMethod, MdfLocalizedValue> | Link<AbsenceCountingMethod, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AbsenceCountingMethod>;
    /**
     * All key fields of the AbsenceCountingMethod entity.
     */
    const _keyFields: Array<Selectable<AbsenceCountingMethod>>;
    /**
     * Mapping of all key field names to the respective static field property AbsenceCountingMethod.
     */
    const _keys: {
        [keys: string]: Selectable<AbsenceCountingMethod>;
    };
}
//# sourceMappingURL=AbsenceCountingMethod.d.ts.map