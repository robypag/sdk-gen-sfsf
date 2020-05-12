import { EmployeeProfileBlockLinkRequestBuilder } from './EmployeeProfileBlockLinkRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileBlockLink" of service "SFOData".
 */
export declare class EmployeeProfileBlockLink extends Entity implements EmployeeProfileBlockLinkType {
    /**
     * Technical entity name for EmployeeProfileBlockLink.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileBlockLink.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * EmployeeProfileBlockContent_code.
     * Maximum length: 128.
     */
    employeeProfileBlockContentCode: string;
    /**
     * EmployeeProfilePageConfig_code.
     * Maximum length: 128.
     */
    employeeProfilePageConfigCode: string;
    /**
     * EmployeeProfileSectionConfig_code.
     * Maximum length: 128.
     */
    employeeProfileSectionConfigCode: string;
    /**
     * EmployeeProfileSubSectionConfig_code.
     * Maximum length: 128.
     */
    employeeProfileSubSectionConfigCode: string;
    /**
     * code.
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
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * description.
     * Maximum length: 1000.
     * @nullable
     */
    descriptionZhCn?: string;
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
     * order.
     * @nullable
     */
    order?: BigNumber;
    /**
     * url.
     * Maximum length: 3000.
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
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeProfileBlockLink`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
     */
    static builder(): EntityBuilderType<EmployeeProfileBlockLink, EmployeeProfileBlockLinkTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileBlockLink` entity type.
     * @returns A `EmployeeProfileBlockLink` request builder.
     */
    static requestBuilder(): EmployeeProfileBlockLinkRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileBlockLink`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileBlockLink>;
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
export interface EmployeeProfileBlockLinkType {
    employeeProfileBlockContentCode: string;
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
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
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    url?: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeProfileBlockLinkTypeForceMandatory {
    employeeProfileBlockContentCode: string;
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
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
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    url: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeProfileBlockLink {
    /**
     * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<EmployeeProfileBlockLink>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileBlockLink, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<EmployeeProfileBlockLink, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileBlockLink, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileBlockLink, MdfEnumValue>;
    /**
     * All fields of the EmployeeProfileBlockLink entity.
     */
    const _allFields: Array<StringField<EmployeeProfileBlockLink> | DateField<EmployeeProfileBlockLink> | BigNumberField<EmployeeProfileBlockLink> | OneToOneLink<EmployeeProfileBlockLink, User> | Link<EmployeeProfileBlockLink, MdfLocalizedValue> | OneToOneLink<EmployeeProfileBlockLink, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileBlockLink>;
    /**
     * All key fields of the EmployeeProfileBlockLink entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileBlockLink>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileBlockLink.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileBlockLink>;
    };
}
//# sourceMappingURL=EmployeeProfileBlockLink.d.ts.map