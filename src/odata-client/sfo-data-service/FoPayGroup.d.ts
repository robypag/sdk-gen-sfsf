import { FoPayGroupRequestBuilder } from './FoPayGroupRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOPayGroup" of service "SFOData".
 */
export declare class FoPayGroup extends Entity implements FoPayGroupType {
    /**
     * Technical entity name for FoPayGroup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayGroup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Legal Entity.
     * @nullable
     */
    custToLegalEntityProp?: string;
    /**
     * Data Delimiter.
     * Maximum length: 32.
     * @nullable
     */
    dataDelimiter?: string;
    /**
     * Decimal Point.
     * Maximum length: 32.
     * @nullable
     */
    decimalPoint?: string;
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
     * earliestChangeDate.
     * @nullable
     */
    earliestChangeDate?: Moment;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * externalCode.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Lag.
     * @nullable
     */
    lag?: BigNumber;
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
     * paymentFrequency.
     * Maximum length: 128.
     * @nullable
     */
    payFrequency?: string;
    /**
     * paymentFrequency.
     * Maximum length: 128.
     * @nullable
     */
    paymentFrequency?: string;
    /**
     * Payroll Vendor ID.
     * Maximum length: 32.
     * @nullable
     */
    payrollVendorId?: string;
    /**
     * Primary Contact Email.
     * Maximum length: 255.
     * @nullable
     */
    primaryContactEmail?: string;
    /**
     * Primary Contact ID.
     * Maximum length: 255.
     * @nullable
     */
    primaryContactId?: string;
    /**
     * Primary Contact Name.
     * Maximum length: 255.
     * @nullable
     */
    primaryContactName?: string;
    /**
     * Secondary Contact Email.
     * Maximum length: 255.
     * @nullable
     */
    secondaryContactEmail?: string;
    /**
     * Secondary Contact ID.
     * Maximum length: 255.
     * @nullable
     */
    secondaryContactId?: string;
    /**
     * Secondary Contact Name.
     * Maximum length: 255.
     * @nullable
     */
    secondaryContactName?: string;
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
     * Weeks In PayPeriod.
     * @nullable
     */
    weeksInPayPeriod?: BigNumber;
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    custToLegalEntity: FoCompany[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    payFrequencyNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    paymentFrequencyNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `FoPayGroup`.
     * @returns A builder that constructs instances of entity type `FoPayGroup`.
     */
    static builder(): EntityBuilderType<FoPayGroup, FoPayGroupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoPayGroup` entity type.
     * @returns A `FoPayGroup` request builder.
     */
    static requestBuilder(): FoPayGroupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayGroup`.
     */
    static customField(fieldName: string): CustomField<FoPayGroup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface FoPayGroupType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    custToLegalEntityProp?: string;
    dataDelimiter?: string;
    decimalPoint?: string;
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
    earliestChangeDate?: Moment;
    endDate?: Moment;
    externalCode: string;
    lag?: BigNumber;
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
    payFrequency?: string;
    paymentFrequency?: string;
    payrollVendorId?: string;
    primaryContactEmail?: string;
    primaryContactId?: string;
    primaryContactName?: string;
    secondaryContactEmail?: string;
    secondaryContactId?: string;
    secondaryContactName?: string;
    startDate: Moment;
    status?: string;
    weeksInPayPeriod?: BigNumber;
    custToLegalEntity: FoCompanyType[];
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    payFrequencyNav: PicklistOptionType;
    paymentFrequencyNav: PickListValueV2Type;
    statusNav: MdfEnumValueType;
}
export interface FoPayGroupTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    custToLegalEntityProp: string;
    dataDelimiter: string;
    decimalPoint: string;
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
    earliestChangeDate: Moment;
    endDate: Moment;
    externalCode: string;
    lag: BigNumber;
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
    payFrequency: string;
    paymentFrequency: string;
    payrollVendorId: string;
    primaryContactEmail: string;
    primaryContactId: string;
    primaryContactName: string;
    secondaryContactEmail: string;
    secondaryContactId: string;
    secondaryContactName: string;
    startDate: Moment;
    status: string;
    weeksInPayPeriod: BigNumber;
    custToLegalEntity: FoCompanyType[];
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    payFrequencyNav: PicklistOptionType;
    paymentFrequencyNav: PickListValueV2Type;
    statusNav: MdfEnumValueType;
}
export declare namespace FoPayGroup {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoPayGroup>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoPayGroup>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoPayGroup>;
    /**
     * Static representation of the [[custToLegalEntityProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_LEGAL_ENTITY_PROP: StringField<FoPayGroup>;
    /**
     * Static representation of the [[dataDelimiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_DELIMITER: StringField<FoPayGroup>;
    /**
     * Static representation of the [[decimalPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECIMAL_POINT: StringField<FoPayGroup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<FoPayGroup>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<FoPayGroup>;
    /**
     * Static representation of the [[earliestChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EARLIEST_CHANGE_DATE: DateField<FoPayGroup>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoPayGroup>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoPayGroup>;
    /**
     * Static representation of the [[lag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAG: BigNumberField<FoPayGroup>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoPayGroup>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoPayGroup>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoPayGroup>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FoPayGroup>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FoPayGroup>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FoPayGroup>;
    /**
     * Static representation of the [[payFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_FREQUENCY: StringField<FoPayGroup>;
    /**
     * Static representation of the [[paymentFrequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_FREQUENCY: StringField<FoPayGroup>;
    /**
     * Static representation of the [[payrollVendorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_VENDOR_ID: StringField<FoPayGroup>;
    /**
     * Static representation of the [[primaryContactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_CONTACT_EMAIL: StringField<FoPayGroup>;
    /**
     * Static representation of the [[primaryContactId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_CONTACT_ID: StringField<FoPayGroup>;
    /**
     * Static representation of the [[primaryContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_CONTACT_NAME: StringField<FoPayGroup>;
    /**
     * Static representation of the [[secondaryContactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_CONTACT_EMAIL: StringField<FoPayGroup>;
    /**
     * Static representation of the [[secondaryContactId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_CONTACT_ID: StringField<FoPayGroup>;
    /**
     * Static representation of the [[secondaryContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_CONTACT_NAME: StringField<FoPayGroup>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoPayGroup>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoPayGroup>;
    /**
     * Static representation of the [[weeksInPayPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEEKS_IN_PAY_PERIOD: BigNumberField<FoPayGroup>;
    /**
     * Static representation of the one-to-many navigation property [[custToLegalEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_LEGAL_ENTITY: Link<FoPayGroup, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayGroup, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoPayGroup, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoPayGroup, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FoPayGroup, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[payFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_FREQUENCY_NAV: OneToOneLink<FoPayGroup, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[paymentFrequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_FREQUENCY_NAV: OneToOneLink<FoPayGroup, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FoPayGroup, MdfEnumValue>;
    /**
     * All fields of the FoPayGroup entity.
     */
    const _allFields: Array<StringField<FoPayGroup> | DateField<FoPayGroup> | BigNumberField<FoPayGroup> | Link<FoPayGroup, FoCompany> | OneToOneLink<FoPayGroup, FoTranslation> | Link<FoPayGroup, MdfLocalizedValue> | OneToOneLink<FoPayGroup, PicklistOption> | OneToOneLink<FoPayGroup, PickListValueV2> | OneToOneLink<FoPayGroup, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoPayGroup>;
    /**
     * All key fields of the FoPayGroup entity.
     */
    const _keyFields: Array<Selectable<FoPayGroup>>;
    /**
     * Mapping of all key field names to the respective static field property FoPayGroup.
     */
    const _keys: {
        [keys: string]: Selectable<FoPayGroup>;
    };
}
//# sourceMappingURL=FoPayGroup.d.ts.map