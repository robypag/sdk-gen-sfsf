import { CurrencyConversionRequestBuilder } from './CurrencyConversionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CurrencyConversion" of service "SFOData".
 */
export declare class CurrencyConversion extends Entity implements CurrencyConversionType {
    /**
     * Technical entity name for CurrencyConversion.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CurrencyConversion.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * baseCurrency.
     * Maximum length: 128.
     * @nullable
     */
    baseCurrency?: string;
    /**
     * code.
     * Maximum length: 128.
     */
    code: string;
    /**
     * conversionRate.
     * @nullable
     */
    conversionRate?: BigNumber;
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
     * effectiveEndDate.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * effectiveStartDate.
     */
    effectiveStartDate: Moment;
    /**
     * effectiveStatus.
     * Maximum length: 255.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * exchangeRateType.
     * Maximum length: 128.
     * @nullable
     */
    exchangeRateType?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * externalName.
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
     * toCurrency.
     * Maximum length: 128.
     * @nullable
     */
    toCurrency?: string;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    baseCurrencyNav: Currency;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    exchangeRateTypeNav: PickListValueV2;
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
    toCurrencyNav: Currency;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `CurrencyConversion`.
     * @returns A builder that constructs instances of entity type `CurrencyConversion`.
     */
    static builder(): EntityBuilderType<CurrencyConversion, CurrencyConversionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CurrencyConversion` entity type.
     * @returns A `CurrencyConversion` request builder.
     */
    static requestBuilder(): CurrencyConversionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyConversion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CurrencyConversion`.
     */
    static customField(fieldName: string): CustomField<CurrencyConversion>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Currency, CurrencyType } from './Currency';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface CurrencyConversionType {
    baseCurrency?: string;
    code: string;
    conversionRate?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    effectiveStatus?: string;
    exchangeRateType?: string;
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
    toCurrency?: string;
    baseCurrencyNav: CurrencyType;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    exchangeRateTypeNav: PickListValueV2Type;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toCurrencyNav: CurrencyType;
    wfRequestNav: WfRequestType[];
}
export interface CurrencyConversionTypeForceMandatory {
    baseCurrency: string;
    code: string;
    conversionRate: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    effectiveStatus: string;
    exchangeRateType: string;
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
    toCurrency: string;
    baseCurrencyNav: CurrencyType;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    exchangeRateTypeNav: PickListValueV2Type;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    toCurrencyNav: CurrencyType;
    wfRequestNav: WfRequestType[];
}
export declare namespace CurrencyConversion {
    /**
     * Static representation of the [[baseCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_CURRENCY: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[conversionRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONVERSION_RATE: BigNumberField<CurrencyConversion>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CurrencyConversion>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<CurrencyConversion>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<CurrencyConversion>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[exchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_TYPE: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CurrencyConversion>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CurrencyConversion>;
    /**
     * Static representation of the [[toCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CURRENCY: StringField<CurrencyConversion>;
    /**
     * Static representation of the one-to-one navigation property [[baseCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_CURRENCY_NAV: OneToOneLink<CurrencyConversion, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<CurrencyConversion, User>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<CurrencyConversion, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[exchangeRateTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_TYPE_NAV: OneToOneLink<CurrencyConversion, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<CurrencyConversion, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<CurrencyConversion, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CurrencyConversion, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[toCurrencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CURRENCY_NAV: OneToOneLink<CurrencyConversion, Currency>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<CurrencyConversion, WfRequest>;
    /**
     * All fields of the CurrencyConversion entity.
     */
    const _allFields: Array<StringField<CurrencyConversion> | BigNumberField<CurrencyConversion> | DateField<CurrencyConversion> | OneToOneLink<CurrencyConversion, Currency> | OneToOneLink<CurrencyConversion, User> | OneToOneLink<CurrencyConversion, MdfEnumValue> | OneToOneLink<CurrencyConversion, PickListValueV2> | Link<CurrencyConversion, MdfLocalizedValue> | Link<CurrencyConversion, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CurrencyConversion>;
    /**
     * All key fields of the CurrencyConversion entity.
     */
    const _keyFields: Array<Selectable<CurrencyConversion>>;
    /**
     * Mapping of all key field names to the respective static field property CurrencyConversion.
     */
    const _keys: {
        [keys: string]: Selectable<CurrencyConversion>;
    };
}
//# sourceMappingURL=CurrencyConversion.d.ts.map