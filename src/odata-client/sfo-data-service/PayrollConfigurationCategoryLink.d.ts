import { PayrollConfigurationCategoryLinkRequestBuilder } from './PayrollConfigurationCategoryLinkRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PayrollConfigurationCategoryLink" of service "SFOData".
 */
export declare class PayrollConfigurationCategoryLink extends Entity implements PayrollConfigurationCategoryLinkType {
    /**
     * Technical entity name for PayrollConfigurationCategoryLink.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayrollConfigurationCategoryLink.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Portlets_External Portlet Code.
     * Maximum length: 128.
     */
    payrollConfigurationCategoryExternalCode: string;
    /**
     * Payroll System Configuration_External Configuration Code.
     * Maximum length: 128.
     */
    payrollSystemConfigurationExternalCode: string;
    /**
     * Admin Service.
     * @nullable
     */
    adminService?: boolean;
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
     * External Link Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameDeDe?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameDefaultValue?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameEnDebug?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameEnGb?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameEnUs?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameEsEs?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameEsMx?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameFrCa?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameFrFr?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameItIt?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameLocalized?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameNlNl?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNamePtBr?: string;
    /**
     * Link Label.
     * Maximum length: 255.
     * @nullable
     */
    externalLinkNameZhCn?: string;
    /**
     * Infotype Number.
     * @nullable
     */
    infotypeNumber?: BigNumber;
    /**
     * Required for Payroll.
     * @nullable
     */
    isRequiredForPayroll?: boolean;
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
     * Self Service.
     * @nullable
     */
    selfService?: boolean;
    /**
     * Service.
     * Maximum length: 128.
     * @nullable
     */
    service?: string;
    /**
     * Type of URL.
     * Maximum length: 128.
     * @nullable
     */
    typeOfUrl?: string;
    /**
     * URL.
     * Maximum length: 255.
     * @nullable
     */
    url?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalLinkNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    serviceNav: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    typeOfUrlNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `PayrollConfigurationCategoryLink`.
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
     */
    static builder(): EntityBuilderType<PayrollConfigurationCategoryLink, PayrollConfigurationCategoryLinkTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategoryLink` entity type.
     * @returns A `PayrollConfigurationCategoryLink` request builder.
     */
    static requestBuilder(): PayrollConfigurationCategoryLinkRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategoryLink`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
     */
    static customField(fieldName: string): CustomField<PayrollConfigurationCategoryLink>;
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface PayrollConfigurationCategoryLinkType {
    payrollConfigurationCategoryExternalCode: string;
    payrollSystemConfigurationExternalCode: string;
    adminService?: boolean;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    externalLinkNameDeDe?: string;
    externalLinkNameDefaultValue?: string;
    externalLinkNameEnDebug?: string;
    externalLinkNameEnGb?: string;
    externalLinkNameEnUs?: string;
    externalLinkNameEsEs?: string;
    externalLinkNameEsMx?: string;
    externalLinkNameFrCa?: string;
    externalLinkNameFrFr?: string;
    externalLinkNameItIt?: string;
    externalLinkNameLocalized?: string;
    externalLinkNameNlNl?: string;
    externalLinkNamePtBr?: string;
    externalLinkNameZhCn?: string;
    infotypeNumber?: BigNumber;
    isRequiredForPayroll?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    selfService?: boolean;
    service?: string;
    typeOfUrl?: string;
    url?: string;
    createdByNav: UserType;
    externalLinkNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    serviceNav: PickListValueV2Type[];
    typeOfUrlNav: PickListValueV2Type[];
}
export interface PayrollConfigurationCategoryLinkTypeForceMandatory {
    payrollConfigurationCategoryExternalCode: string;
    payrollSystemConfigurationExternalCode: string;
    adminService: boolean;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    externalLinkNameDeDe: string;
    externalLinkNameDefaultValue: string;
    externalLinkNameEnDebug: string;
    externalLinkNameEnGb: string;
    externalLinkNameEnUs: string;
    externalLinkNameEsEs: string;
    externalLinkNameEsMx: string;
    externalLinkNameFrCa: string;
    externalLinkNameFrFr: string;
    externalLinkNameItIt: string;
    externalLinkNameLocalized: string;
    externalLinkNameNlNl: string;
    externalLinkNamePtBr: string;
    externalLinkNameZhCn: string;
    infotypeNumber: BigNumber;
    isRequiredForPayroll: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    selfService: boolean;
    service: string;
    typeOfUrl: string;
    url: string;
    createdByNav: UserType;
    externalLinkNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    serviceNav: PickListValueV2Type[];
    typeOfUrlNav: PickListValueV2Type[];
}
export declare namespace PayrollConfigurationCategoryLink {
    /**
     * Static representation of the [[payrollConfigurationCategoryExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[adminService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMIN_SERVICE: BooleanField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_DE_DE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_DEFAULT_VALUE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_EN_DEBUG: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_EN_GB: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_EN_US: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_ES_ES: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_ES_MX: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_FR_CA: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_FR_FR: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_IT_IT: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_LOCALIZED: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_NL_NL: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_PT_BR: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[externalLinkNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_ZH_CN: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[infotypeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INFOTYPE_NUMBER: BigNumberField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[isRequiredForPayroll]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_REQUIRED_FOR_PAYROLL: BooleanField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[selfService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_SERVICE: BooleanField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[service]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[typeOfUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_OF_URL: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<PayrollConfigurationCategoryLink>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PayrollConfigurationCategoryLink, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalLinkNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_LINK_NAME_TRANSLATION_TEXT_NAV: Link<PayrollConfigurationCategoryLink, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PayrollConfigurationCategoryLink, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayrollConfigurationCategoryLink, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[serviceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_NAV: Link<PayrollConfigurationCategoryLink, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[typeOfUrlNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_OF_URL_NAV: Link<PayrollConfigurationCategoryLink, PickListValueV2>;
    /**
     * All fields of the PayrollConfigurationCategoryLink entity.
     */
    const _allFields: Array<StringField<PayrollConfigurationCategoryLink> | BooleanField<PayrollConfigurationCategoryLink> | DateField<PayrollConfigurationCategoryLink> | BigNumberField<PayrollConfigurationCategoryLink> | OneToOneLink<PayrollConfigurationCategoryLink, User> | Link<PayrollConfigurationCategoryLink, MdfLocalizedValue> | OneToOneLink<PayrollConfigurationCategoryLink, MdfEnumValue> | Link<PayrollConfigurationCategoryLink, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PayrollConfigurationCategoryLink>;
    /**
     * All key fields of the PayrollConfigurationCategoryLink entity.
     */
    const _keyFields: Array<Selectable<PayrollConfigurationCategoryLink>>;
    /**
     * Mapping of all key field names to the respective static field property PayrollConfigurationCategoryLink.
     */
    const _keys: {
        [keys: string]: Selectable<PayrollConfigurationCategoryLink>;
    };
}
//# sourceMappingURL=PayrollConfigurationCategoryLink.d.ts.map