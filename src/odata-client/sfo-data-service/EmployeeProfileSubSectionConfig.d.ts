import { EmployeeProfileSubSectionConfigRequestBuilder } from './EmployeeProfileSubSectionConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileSubSectionConfig" of service "SFOData".
 */
export declare class EmployeeProfileSubSectionConfig extends Entity implements EmployeeProfileSubSectionConfigType {
    /**
     * Technical entity name for EmployeeProfileSubSectionConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileSubSectionConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * isEnabled.
     * @nullable
     */
    isEnabled?: boolean;
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
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleDeDe?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleDefaultValue?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleEnDebug?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleEnGb?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleEnUs?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleEsEs?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleEsMx?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleFrCa?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleFrFr?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleItIt?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleLocalized?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleNlNl?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titlePtBr?: string;
    /**
     * title.
     * Maximum length: 1000.
     * @nullable
     */
    titleZhCn?: string;
    /**
     * type.
     * Maximum length: 255.
     * @nullable
     */
    type?: string;
    /**
     * One-to-many navigation property to the [[EmployeeProfileBlockContent]] entity.
     */
    blocks: EmployeeProfileBlockContent[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    titleTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    typeNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeProfileSubSectionConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
     */
    static builder(): EntityBuilderType<EmployeeProfileSubSectionConfig, EmployeeProfileSubSectionConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileSubSectionConfig` entity type.
     * @returns A `EmployeeProfileSubSectionConfig` request builder.
     */
    static requestBuilder(): EmployeeProfileSubSectionConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSubSectionConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileSubSectionConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeeProfileBlockContent, EmployeeProfileBlockContentType } from './EmployeeProfileBlockContent';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
export interface EmployeeProfileSubSectionConfigType {
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    isEnabled?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    titleDeDe?: string;
    titleDefaultValue?: string;
    titleEnDebug?: string;
    titleEnGb?: string;
    titleEnUs?: string;
    titleEsEs?: string;
    titleEsMx?: string;
    titleFrCa?: string;
    titleFrFr?: string;
    titleItIt?: string;
    titleLocalized?: string;
    titleNlNl?: string;
    titlePtBr?: string;
    titleZhCn?: string;
    type?: string;
    blocks: EmployeeProfileBlockContentType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
    typeNav: MdfEnumValueType;
}
export interface EmployeeProfileSubSectionConfigTypeForceMandatory {
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    isEnabled: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    titleDeDe: string;
    titleDefaultValue: string;
    titleEnDebug: string;
    titleEnGb: string;
    titleEnUs: string;
    titleEsEs: string;
    titleEsMx: string;
    titleFrCa: string;
    titleFrFr: string;
    titleItIt: string;
    titleLocalized: string;
    titleNlNl: string;
    titlePtBr: string;
    titleZhCn: string;
    type: string;
    blocks: EmployeeProfileBlockContentType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
    typeNav: MdfEnumValueType;
}
export declare namespace EmployeeProfileSubSectionConfig {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[isEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ENABLED: BooleanField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DE_DE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DEFAULT_VALUE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_DEBUG: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_GB: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_US: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_ES: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_MX: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_CA: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_FR: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_IT_IT: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_LOCALIZED: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_NL_NL: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_PT_BR: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ZH_CN: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the one-to-many navigation property [[blocks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCKS: Link<EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSubSectionConfig, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue>;
    /**
     * All fields of the EmployeeProfileSubSectionConfig entity.
     */
    const _allFields: Array<StringField<EmployeeProfileSubSectionConfig> | DateField<EmployeeProfileSubSectionConfig> | BooleanField<EmployeeProfileSubSectionConfig> | BigNumberField<EmployeeProfileSubSectionConfig> | Link<EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent> | OneToOneLink<EmployeeProfileSubSectionConfig, User> | OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue> | Link<EmployeeProfileSubSectionConfig, MdfLocalizedValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileSubSectionConfig>;
    /**
     * All key fields of the EmployeeProfileSubSectionConfig entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileSubSectionConfig>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileSubSectionConfig.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileSubSectionConfig>;
    };
}
//# sourceMappingURL=EmployeeProfileSubSectionConfig.d.ts.map