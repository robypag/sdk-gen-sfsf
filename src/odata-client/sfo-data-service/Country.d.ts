import { CountryRequestBuilder } from './CountryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Country" of service "SFOData".
 */
export declare class Country extends Entity implements CountryType {
    /**
     * Technical entity name for Country.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Country.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Country/Region Code (3 char).
     * Maximum length: 128.
     */
    code: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
    /**
     * Effective until.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective as of.
     */
    effectiveStartDate: Moment;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Data Retention Enabled.
     * @nullable
     */
    isDrmEnabled?: boolean;
    /**
     * isSetByMigrate.
     * @nullable
     */
    isSetByMigrate?: boolean;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
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
     * Country/Region Code (numeric-3).
     * @nullable
     */
    numericCountryCode?: BigNumber;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * territoryId.
     * @nullable
     */
    territoryId?: BigNumber;
    /**
     * Country/Region Code (2 char).
     * Maximum length: 255.
     * @nullable
     */
    twoCharCountryCode?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency;
    /**
     * One-to-many navigation property to the [[FoEventReason]] entity.
     */
    custFowEventReason: FoEventReason[];
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Country`.
     * @returns A builder that constructs instances of entity type `Country`.
     */
    static builder(): EntityBuilderType<Country, CountryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Country` entity type.
     * @returns A `Country` request builder.
     */
    static requestBuilder(): CountryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Country`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Country`.
     */
    static customField(fieldName: string): CustomField<Country>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface CountryType {
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
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
    isDrmEnabled?: boolean;
    isSetByMigrate?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    numericCountryCode?: BigNumber;
    status?: string;
    territoryId?: BigNumber;
    twoCharCountryCode?: string;
    createdByNav: UserType;
    currencyNav: CurrencyType;
    custFowEventReason: FoEventReasonType[];
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface CountryTypeForceMandatory {
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
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
    isDrmEnabled: boolean;
    isSetByMigrate: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    numericCountryCode: BigNumber;
    status: string;
    territoryId: BigNumber;
    twoCharCountryCode: string;
    createdByNav: UserType;
    currencyNav: CurrencyType;
    custFowEventReason: FoEventReasonType[];
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Country {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Country>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Country>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Country>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<Country>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<Country>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<Country>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<Country>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<Country>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<Country>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<Country>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<Country>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<Country>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<Country>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<Country>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<Country>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<Country>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<Country>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<Country>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<Country>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<Country>;
    /**
     * Static representation of the [[isDrmEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DRM_ENABLED: BooleanField<Country>;
    /**
     * Static representation of the [[isSetByMigrate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SET_BY_MIGRATE: BooleanField<Country>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Country>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Country>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Country>;
    /**
     * Static representation of the [[numericCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERIC_COUNTRY_CODE: BigNumberField<Country>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<Country>;
    /**
     * Static representation of the [[territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_ID: BigNumberField<Country>;
    /**
     * Static representation of the [[twoCharCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TWO_CHAR_COUNTRY_CODE: StringField<Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Country, User>;
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: OneToOneLink<Country, Currency>;
    /**
     * Static representation of the one-to-many navigation property [[custFowEventReason]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_FOW_EVENT_REASON: Link<Country, FoEventReason>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<Country, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Country, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Country, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<Country, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Country, WfRequest>;
    /**
     * All fields of the Country entity.
     */
    const _allFields: Array<StringField<Country> | DateField<Country> | BooleanField<Country> | BigNumberField<Country> | OneToOneLink<Country, User> | OneToOneLink<Country, Currency> | Link<Country, FoEventReason> | Link<Country, MdfLocalizedValue> | OneToOneLink<Country, MdfEnumValue> | Link<Country, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Country>;
    /**
     * All key fields of the Country entity.
     */
    const _keyFields: Array<Selectable<Country>>;
    /**
     * Mapping of all key field names to the respective static field property Country.
     */
    const _keys: {
        [keys: string]: Selectable<Country>;
    };
}
//# sourceMappingURL=Country.d.ts.map