import { PayrollConfigurationCategoryRequestBuilder } from './PayrollConfigurationCategoryRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PayrollConfigurationCategory" of service "SFOData".
 */
export declare class PayrollConfigurationCategory extends Entity implements PayrollConfigurationCategoryType {
    /**
     * Technical entity name for PayrollConfigurationCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayrollConfigurationCategory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Payroll System Configuration_External Configuration Code.
     * Maximum length: 128.
     */
    payrollSystemConfigurationExternalCode: string;
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
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameDeDe?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameDefaultValue?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameEnDebug?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameEnGb?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameEnUs?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameEsEs?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameEsMx?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameFrCa?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameFrFr?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameItIt?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameLocalized?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameNlNl?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNamePtBr?: string;
    /**
     * Portlet Label.
     * Maximum length: 255.
     * @nullable
     */
    externalCategoryNameZhCn?: string;
    /**
     * External Portlet Code.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalCategoryNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[PayrollConfigurationCategoryLink]] entity.
     */
    links: PayrollConfigurationCategoryLink[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `PayrollConfigurationCategory`.
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
     */
    static builder(): EntityBuilderType<PayrollConfigurationCategory, PayrollConfigurationCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategory` entity type.
     * @returns A `PayrollConfigurationCategory` request builder.
     */
    static requestBuilder(): PayrollConfigurationCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
     */
    static customField(fieldName: string): CustomField<PayrollConfigurationCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { PayrollConfigurationCategoryLink, PayrollConfigurationCategoryLinkType } from './PayrollConfigurationCategoryLink';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface PayrollConfigurationCategoryType {
    payrollSystemConfigurationExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCategoryNameDeDe?: string;
    externalCategoryNameDefaultValue?: string;
    externalCategoryNameEnDebug?: string;
    externalCategoryNameEnGb?: string;
    externalCategoryNameEnUs?: string;
    externalCategoryNameEsEs?: string;
    externalCategoryNameEsMx?: string;
    externalCategoryNameFrCa?: string;
    externalCategoryNameFrFr?: string;
    externalCategoryNameItIt?: string;
    externalCategoryNameLocalized?: string;
    externalCategoryNameNlNl?: string;
    externalCategoryNamePtBr?: string;
    externalCategoryNameZhCn?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    externalCategoryNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    links: PayrollConfigurationCategoryLinkType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface PayrollConfigurationCategoryTypeForceMandatory {
    payrollSystemConfigurationExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCategoryNameDeDe: string;
    externalCategoryNameDefaultValue: string;
    externalCategoryNameEnDebug: string;
    externalCategoryNameEnGb: string;
    externalCategoryNameEnUs: string;
    externalCategoryNameEsEs: string;
    externalCategoryNameEsMx: string;
    externalCategoryNameFrCa: string;
    externalCategoryNameFrFr: string;
    externalCategoryNameItIt: string;
    externalCategoryNameLocalized: string;
    externalCategoryNameNlNl: string;
    externalCategoryNamePtBr: string;
    externalCategoryNameZhCn: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    externalCategoryNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    links: PayrollConfigurationCategoryLinkType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace PayrollConfigurationCategory {
    /**
     * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_DE_DE: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_EN_DEBUG: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_EN_GB: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_EN_US: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_ES_ES: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_ES_MX: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_FR_CA: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_FR_FR: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_IT_IT: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_LOCALIZED: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_NL_NL: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_PT_BR: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCategoryNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_ZH_CN: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PayrollConfigurationCategory>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PayrollConfigurationCategory>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PayrollConfigurationCategory, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalCategoryNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CATEGORY_NAME_TRANSLATION_TEXT_NAV: Link<PayrollConfigurationCategory, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PayrollConfigurationCategory, User>;
    /**
     * Static representation of the one-to-many navigation property [[links]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKS: Link<PayrollConfigurationCategory, PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayrollConfigurationCategory, MdfEnumValue>;
    /**
     * All fields of the PayrollConfigurationCategory entity.
     */
    const _allFields: Array<StringField<PayrollConfigurationCategory> | DateField<PayrollConfigurationCategory> | OneToOneLink<PayrollConfigurationCategory, User> | Link<PayrollConfigurationCategory, MdfLocalizedValue> | Link<PayrollConfigurationCategory, PayrollConfigurationCategoryLink> | OneToOneLink<PayrollConfigurationCategory, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PayrollConfigurationCategory>;
    /**
     * All key fields of the PayrollConfigurationCategory entity.
     */
    const _keyFields: Array<Selectable<PayrollConfigurationCategory>>;
    /**
     * Mapping of all key field names to the respective static field property PayrollConfigurationCategory.
     */
    const _keys: {
        [keys: string]: Selectable<PayrollConfigurationCategory>;
    };
}
//# sourceMappingURL=PayrollConfigurationCategory.d.ts.map