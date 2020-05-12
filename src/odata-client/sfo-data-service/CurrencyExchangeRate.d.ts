import { CurrencyExchangeRateRequestBuilder } from './CurrencyExchangeRateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CurrencyExchangeRate" of service "SFOData".
 */
export declare class CurrencyExchangeRate extends Entity implements CurrencyExchangeRateType {
    /**
     * Technical entity name for CurrencyExchangeRate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CurrencyExchangeRate.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Type of Currency Exchange Rate.
     * Maximum length: 128.
     * @nullable
     */
    currencyExchangeRateType?: string;
    /**
     * effectiveEndDate.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective as of.
     */
    effectiveStartDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * Exchange Rate.
     * @nullable
     */
    exchangeRate?: BigNumber;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Last Modified By.
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Source Currency.
     * Maximum length: 128.
     * @nullable
     */
    sourceCurrency?: string;
    /**
     * Target Currency.
     * Maximum length: 128.
     * @nullable
     */
    targetCurrency?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    currencyExchangeRateTypeNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
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
     * One-to-one navigation property to the [[Currency]] entity.
     */
    sourceCurrencyNav: Currency;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    targetCurrencyNav: Currency;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `CurrencyExchangeRate`.
     * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
     */
    static builder(): EntityBuilderType<CurrencyExchangeRate, CurrencyExchangeRateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CurrencyExchangeRate` entity type.
     * @returns A `CurrencyExchangeRate` request builder.
     */
    static requestBuilder(): CurrencyExchangeRateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyExchangeRate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
     */
    static customField(fieldName: string): CustomField<CurrencyExchangeRate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { Currency, CurrencyType } from './Currency';
import { WfRequest, WfRequestType } from './WfRequest';
export interface CurrencyExchangeRateType {
    createdBy?: string;
    createdDateTime?: Moment;
    currencyExchangeRateType?: string;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    effectiveStatus?: string;
    exchangeRate?: BigNumber;
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
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    sourceCurrency?: string;
    targetCurrency?: string;
    createdByNav: UserType;
    currencyExchangeRateTypeNav: PickListValueV2Type;
    effectiveStatusNav: MdfEnumValueType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    sourceCurrencyNav: CurrencyType;
    targetCurrencyNav: CurrencyType;
    wfRequestNav: WfRequestType[];
}
export interface CurrencyExchangeRateTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    currencyExchangeRateType: string;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    effectiveStatus: string;
    exchangeRate: BigNumber;
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
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    sourceCurrency: string;
    targetCurrency: string;
    createdByNav: UserType;
    currencyExchangeRateTypeNav: PickListValueV2Type;
    effectiveStatusNav: MdfEnumValueType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    sourceCurrencyNav: CurrencyType;
    targetCurrencyNav: CurrencyType;
    wfRequestNav: WfRequestType[];
}
export declare namespace CurrencyExchangeRate {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[currencyExchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_EXCHANGE_RATE_TYPE: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE: BigNumberField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[sourceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_CURRENCY: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the [[targetCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_CURRENCY: StringField<CurrencyExchangeRate>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<CurrencyExchangeRate, User>;
    /**
     * Static representation of the one-to-one navigation property [[currencyExchangeRateTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_EXCHANGE_RATE_TYPE_NAV: OneToOneLink<CurrencyExchangeRate, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<CurrencyExchangeRate, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<CurrencyExchangeRate, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<CurrencyExchangeRate, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CurrencyExchangeRate, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[sourceCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_CURRENCY_NAV: OneToOneLink<CurrencyExchangeRate, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[targetCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_CURRENCY_NAV: OneToOneLink<CurrencyExchangeRate, Currency>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<CurrencyExchangeRate, WfRequest>;
    /**
     * All fields of the CurrencyExchangeRate entity.
     */
    const _allFields: Array<StringField<CurrencyExchangeRate> | DateField<CurrencyExchangeRate> | BigNumberField<CurrencyExchangeRate> | OneToOneLink<CurrencyExchangeRate, User> | OneToOneLink<CurrencyExchangeRate, PickListValueV2> | OneToOneLink<CurrencyExchangeRate, MdfEnumValue> | Link<CurrencyExchangeRate, MdfLocalizedValue> | OneToOneLink<CurrencyExchangeRate, Currency> | Link<CurrencyExchangeRate, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CurrencyExchangeRate>;
    /**
     * All key fields of the CurrencyExchangeRate entity.
     */
    const _keyFields: Array<Selectable<CurrencyExchangeRate>>;
    /**
     * Mapping of all key field names to the respective static field property CurrencyExchangeRate.
     */
    const _keys: {
        [keys: string]: Selectable<CurrencyExchangeRate>;
    };
}
//# sourceMappingURL=CurrencyExchangeRate.d.ts.map