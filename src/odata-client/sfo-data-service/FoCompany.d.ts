import { FoCompanyRequestBuilder } from './FoCompanyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOCompany" of service "SFOData".
 */
export declare class FoCompany extends Entity implements FoCompanyType {
    /**
     * Technical entity name for FoCompany.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoCompany.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * countryOfRegistration.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
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
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
    /**
     * toNameFormatGO.
     * @nullable
     */
    custToNameFormatGoProp?: string;
    /**
     * Default Location.
     * Maximum length: 32.
     * @nullable
     */
    defaultLocation?: string;
    /**
     * Default Pay Group.
     * Maximum length: 128.
     * @nullable
     */
    defaultPayGroup?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Code.
     * Maximum length: 32.
     */
    externalCode: string;
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
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    name?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * Official Language.
     * Maximum length: 255.
     * @nullable
     */
    officialLanguage?: string;
    /**
     * Standard Weekly Hours.
     * @nullable
     */
    standardHours?: number;
    /**
     * Effective as of.
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
     * One-to-one navigation property to the [[Country]] entity.
     */
    countryOfRegistrationNav: Country;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency;
    /**
     * One-to-one navigation property to the [[NameFormatGo]] entity.
     */
    custToNameFormatGo: NameFormatGo;
    /**
     * One-to-one navigation property to the [[FoLocation]] entity.
     */
    defaultLocationNav: FoLocation;
    /**
     * One-to-one navigation property to the [[FoPayGroup]] entity.
     */
    defaultPayGroupNav: FoPayGroup;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalArg]] entity.
     */
    localNavArg: FoLegalEntityLocalArg;
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalDeflt]] entity.
     */
    localNavDeflt: FoLegalEntityLocalDeflt;
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalDeu]] entity.
     */
    localNavDeu: FoLegalEntityLocalDeu;
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalEsp]] entity.
     */
    localNavEsp: FoLegalEntityLocalEsp;
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalFra]] entity.
     */
    localNavFra: FoLegalEntityLocalFra;
    /**
     * One-to-one navigation property to the [[FoLegalEntityLocalUsa]] entity.
     */
    localNavUsa: FoLegalEntityLocalUsa;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[LegalEntityArg]] entity.
     */
    toLegalEntityArg: LegalEntityArg;
    /**
     * One-to-one navigation property to the [[LegalEntityDeu]] entity.
     */
    toLegalEntityDeu: LegalEntityDeu;
    /**
     * One-to-one navigation property to the [[LegalEntityEsp]] entity.
     */
    toLegalEntityEsp: LegalEntityEsp;
    /**
     * One-to-one navigation property to the [[LegalEntityFra]] entity.
     */
    toLegalEntityFra: LegalEntityFra;
    /**
     * One-to-one navigation property to the [[LegalEntityRus]] entity.
     */
    toLegalEntityRus: LegalEntityRus;
    /**
     * One-to-one navigation property to the [[LegalEntityUsa]] entity.
     */
    toLegalEntityUsa: LegalEntityUsa;
    /**
     * Returns an entity builder to construct instances `FoCompany`.
     * @returns A builder that constructs instances of entity type `FoCompany`.
     */
    static builder(): EntityBuilderType<FoCompany, FoCompanyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoCompany` entity type.
     * @returns A `FoCompany` request builder.
     */
    static requestBuilder(): FoCompanyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCompany`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoCompany`.
     */
    static customField(fieldName: string): CustomField<FoCompany>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
import { Country, CountryType } from './Country';
import { Currency, CurrencyType } from './Currency';
import { NameFormatGo, NameFormatGoType } from './NameFormatGo';
import { FoLocation, FoLocationType } from './FoLocation';
import { FoPayGroup, FoPayGroupType } from './FoPayGroup';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoLegalEntityLocalArg, FoLegalEntityLocalArgType } from './FoLegalEntityLocalArg';
import { FoLegalEntityLocalDeflt, FoLegalEntityLocalDefltType } from './FoLegalEntityLocalDeflt';
import { FoLegalEntityLocalDeu, FoLegalEntityLocalDeuType } from './FoLegalEntityLocalDeu';
import { FoLegalEntityLocalEsp, FoLegalEntityLocalEspType } from './FoLegalEntityLocalEsp';
import { FoLegalEntityLocalFra, FoLegalEntityLocalFraType } from './FoLegalEntityLocalFra';
import { FoLegalEntityLocalUsa, FoLegalEntityLocalUsaType } from './FoLegalEntityLocalUsa';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { LegalEntityArg, LegalEntityArgType } from './LegalEntityArg';
import { LegalEntityDeu, LegalEntityDeuType } from './LegalEntityDeu';
import { LegalEntityEsp, LegalEntityEspType } from './LegalEntityEsp';
import { LegalEntityFra, LegalEntityFraType } from './LegalEntityFra';
import { LegalEntityRus, LegalEntityRusType } from './LegalEntityRus';
import { LegalEntityUsa, LegalEntityUsaType } from './LegalEntityUsa';
export interface FoCompanyType {
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currency?: string;
    custToNameFormatGoProp?: string;
    defaultLocation?: string;
    defaultPayGroup?: string;
    description?: string;
    descriptionDeDe?: string;
    descriptionDefaultValue?: string;
    descriptionEnDebug?: string;
    descriptionEnGb?: string;
    descriptionEnUs?: string;
    descriptionEsEs?: string;
    descriptionEsMx?: string;
    descriptionFrCa?: string;
    descriptionFrFr?: string;
    descriptionItIt?: string;
    descriptionLocalized?: string;
    descriptionNlNl?: string;
    descriptionPtBr?: string;
    descriptionZhCn?: string;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    nameDeDe?: string;
    nameDefaultValue?: string;
    nameEnDebug?: string;
    nameEnGb?: string;
    nameEnUs?: string;
    nameEsEs?: string;
    nameEsMx?: string;
    nameFrCa?: string;
    nameFrFr?: string;
    nameItIt?: string;
    nameLocalized?: string;
    nameNlNl?: string;
    namePtBr?: string;
    nameZhCn?: string;
    officialLanguage?: string;
    standardHours?: number;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
    countryOfRegistrationNav: CountryType;
    currencyNav: CurrencyType;
    custToNameFormatGo: NameFormatGoType;
    defaultLocationNav: FoLocationType;
    defaultPayGroupNav: FoPayGroupType;
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    localNavArg: FoLegalEntityLocalArgType;
    localNavDeflt: FoLegalEntityLocalDefltType;
    localNavDeu: FoLegalEntityLocalDeuType;
    localNavEsp: FoLegalEntityLocalEspType;
    localNavFra: FoLegalEntityLocalFraType;
    localNavUsa: FoLegalEntityLocalUsaType;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    toLegalEntityArg: LegalEntityArgType;
    toLegalEntityDeu: LegalEntityDeuType;
    toLegalEntityEsp: LegalEntityEspType;
    toLegalEntityFra: LegalEntityFraType;
    toLegalEntityRus: LegalEntityRusType;
    toLegalEntityUsa: LegalEntityUsaType;
}
export interface FoCompanyTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currency: string;
    custToNameFormatGoProp: string;
    defaultLocation: string;
    defaultPayGroup: string;
    description: string;
    descriptionDeDe: string;
    descriptionDefaultValue: string;
    descriptionEnDebug: string;
    descriptionEnGb: string;
    descriptionEnUs: string;
    descriptionEsEs: string;
    descriptionEsMx: string;
    descriptionFrCa: string;
    descriptionFrFr: string;
    descriptionItIt: string;
    descriptionLocalized: string;
    descriptionNlNl: string;
    descriptionPtBr: string;
    descriptionZhCn: string;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    nameDeDe: string;
    nameDefaultValue: string;
    nameEnDebug: string;
    nameEnGb: string;
    nameEnUs: string;
    nameEsEs: string;
    nameEsMx: string;
    nameFrCa: string;
    nameFrFr: string;
    nameItIt: string;
    nameLocalized: string;
    nameNlNl: string;
    namePtBr: string;
    nameZhCn: string;
    officialLanguage: string;
    standardHours: number;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
    countryOfRegistrationNav: CountryType;
    currencyNav: CurrencyType;
    custToNameFormatGo: NameFormatGoType;
    defaultLocationNav: FoLocationType;
    defaultPayGroupNav: FoPayGroupType;
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    localNavArg: FoLegalEntityLocalArgType;
    localNavDeflt: FoLegalEntityLocalDefltType;
    localNavDeu: FoLegalEntityLocalDeuType;
    localNavEsp: FoLegalEntityLocalEspType;
    localNavFra: FoLegalEntityLocalFraType;
    localNavUsa: FoLegalEntityLocalUsaType;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    toLegalEntityArg: LegalEntityArgType;
    toLegalEntityDeu: LegalEntityDeuType;
    toLegalEntityEsp: LegalEntityEspType;
    toLegalEntityFra: LegalEntityFraType;
    toLegalEntityRus: LegalEntityRusType;
    toLegalEntityUsa: LegalEntityUsaType;
}
export declare namespace FoCompany {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoCompany>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoCompany>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoCompany>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoCompany>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<FoCompany>;
    /**
     * Static representation of the [[custToNameFormatGoProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_NAME_FORMAT_GO_PROP: StringField<FoCompany>;
    /**
     * Static representation of the [[defaultLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCATION: StringField<FoCompany>;
    /**
     * Static representation of the [[defaultPayGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PAY_GROUP: StringField<FoCompany>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<FoCompany>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<FoCompany>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoCompany>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoCompany>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoCompany>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoCompany>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoCompany>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoCompany>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FoCompany>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FoCompany>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FoCompany>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FoCompany>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FoCompany>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FoCompany>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FoCompany>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FoCompany>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FoCompany>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FoCompany>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FoCompany>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FoCompany>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FoCompany>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FoCompany>;
    /**
     * Static representation of the [[officialLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_LANGUAGE: StringField<FoCompany>;
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_HOURS: NumberField<FoCompany>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoCompany>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoCompany, Territory>;
    /**
     * Static representation of the one-to-one navigation property [[countryOfRegistrationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_OF_REGISTRATION_NAV: OneToOneLink<FoCompany, Country>;
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: OneToOneLink<FoCompany, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[custToNameFormatGo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_NAME_FORMAT_GO: OneToOneLink<FoCompany, NameFormatGo>;
    /**
     * Static representation of the one-to-one navigation property [[defaultLocationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCATION_NAV: OneToOneLink<FoCompany, FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[defaultPayGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PAY_GROUP_NAV: OneToOneLink<FoCompany, FoPayGroup>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoCompany, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoCompany, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[localNavArg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_ARG: OneToOneLink<FoCompany, FoLegalEntityLocalArg>;
    /**
     * Static representation of the one-to-one navigation property [[localNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_DEFLT: OneToOneLink<FoCompany, FoLegalEntityLocalDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[localNavDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_DEU: OneToOneLink<FoCompany, FoLegalEntityLocalDeu>;
    /**
     * Static representation of the one-to-one navigation property [[localNavEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_ESP: OneToOneLink<FoCompany, FoLegalEntityLocalEsp>;
    /**
     * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_FRA: OneToOneLink<FoCompany, FoLegalEntityLocalFra>;
    /**
     * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_USA: OneToOneLink<FoCompany, FoLegalEntityLocalUsa>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoCompany, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FoCompany, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FoCompany, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityArg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_ARG: OneToOneLink<FoCompany, LegalEntityArg>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_DEU: OneToOneLink<FoCompany, LegalEntityDeu>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_ESP: OneToOneLink<FoCompany, LegalEntityEsp>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_FRA: OneToOneLink<FoCompany, LegalEntityFra>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityRus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_RUS: OneToOneLink<FoCompany, LegalEntityRus>;
    /**
     * Static representation of the one-to-one navigation property [[toLegalEntityUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_LEGAL_ENTITY_USA: OneToOneLink<FoCompany, LegalEntityUsa>;
    /**
     * All fields of the FoCompany entity.
     */
    const _allFields: Array<StringField<FoCompany> | DateField<FoCompany> | NumberField<FoCompany> | OneToOneLink<FoCompany, Territory> | OneToOneLink<FoCompany, Country> | OneToOneLink<FoCompany, Currency> | OneToOneLink<FoCompany, NameFormatGo> | OneToOneLink<FoCompany, FoLocation> | OneToOneLink<FoCompany, FoPayGroup> | OneToOneLink<FoCompany, FoTranslation> | Link<FoCompany, MdfLocalizedValue> | OneToOneLink<FoCompany, FoLegalEntityLocalArg> | OneToOneLink<FoCompany, FoLegalEntityLocalDeflt> | OneToOneLink<FoCompany, FoLegalEntityLocalDeu> | OneToOneLink<FoCompany, FoLegalEntityLocalEsp> | OneToOneLink<FoCompany, FoLegalEntityLocalFra> | OneToOneLink<FoCompany, FoLegalEntityLocalUsa> | OneToOneLink<FoCompany, MdfEnumValue> | OneToOneLink<FoCompany, LegalEntityArg> | OneToOneLink<FoCompany, LegalEntityDeu> | OneToOneLink<FoCompany, LegalEntityEsp> | OneToOneLink<FoCompany, LegalEntityFra> | OneToOneLink<FoCompany, LegalEntityRus> | OneToOneLink<FoCompany, LegalEntityUsa>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoCompany>;
    /**
     * All key fields of the FoCompany entity.
     */
    const _keyFields: Array<Selectable<FoCompany>>;
    /**
     * Mapping of all key field names to the respective static field property FoCompany.
     */
    const _keys: {
        [keys: string]: Selectable<FoCompany>;
    };
}
//# sourceMappingURL=FoCompany.d.ts.map