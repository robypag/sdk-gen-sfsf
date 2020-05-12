import { EmployeeProfileSectionConfigRequestBuilder } from './EmployeeProfileSectionConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileSectionConfig" of service "SFOData".
 */
export declare class EmployeeProfileSectionConfig extends Entity implements EmployeeProfileSectionConfigType {
    /**
     * Technical entity name for EmployeeProfileSectionConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileSectionConfig.
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
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentDeDe?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentDefaultValue?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentEnDebug?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentEnGb?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentEnUs?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentEsEs?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentEsMx?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentFrCa?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentFrFr?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentItIt?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentLocalized?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentNlNl?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentPtBr?: string;
    /**
     * titleForContingent.
     * Maximum length: 1000.
     * @nullable
     */
    titleForContingentZhCn?: string;
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
     * One-to-many navigation property to the [[EmployeeProfileSubSectionConfig]] entity.
     */
    subSections: EmployeeProfileSubSectionConfig[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    titleForContingentTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    titleTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    typeNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeProfileSectionConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
     */
    static builder(): EntityBuilderType<EmployeeProfileSectionConfig, EmployeeProfileSectionConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileSectionConfig` entity type.
     * @returns A `EmployeeProfileSectionConfig` request builder.
     */
    static requestBuilder(): EmployeeProfileSectionConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSectionConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileSectionConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeProfileSubSectionConfig, EmployeeProfileSubSectionConfigType } from './EmployeeProfileSubSectionConfig';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
export interface EmployeeProfileSectionConfigType {
    employeeProfilePageConfigCode: string;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    isEnabled?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    titleForContingentDeDe?: string;
    titleForContingentDefaultValue?: string;
    titleForContingentEnDebug?: string;
    titleForContingentEnGb?: string;
    titleForContingentEnUs?: string;
    titleForContingentEsEs?: string;
    titleForContingentEsMx?: string;
    titleForContingentFrCa?: string;
    titleForContingentFrFr?: string;
    titleForContingentItIt?: string;
    titleForContingentLocalized?: string;
    titleForContingentNlNl?: string;
    titleForContingentPtBr?: string;
    titleForContingentZhCn?: string;
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
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    subSections: EmployeeProfileSubSectionConfigType[];
    titleForContingentTranslationTextNav: MdfLocalizedValueType[];
    titleTranslationTextNav: MdfLocalizedValueType[];
    typeNav: MdfEnumValueType;
}
export interface EmployeeProfileSectionConfigTypeForceMandatory {
    employeeProfilePageConfigCode: string;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    isEnabled: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    titleForContingentDeDe: string;
    titleForContingentDefaultValue: string;
    titleForContingentEnDebug: string;
    titleForContingentEnGb: string;
    titleForContingentEnUs: string;
    titleForContingentEsEs: string;
    titleForContingentEsMx: string;
    titleForContingentFrCa: string;
    titleForContingentFrFr: string;
    titleForContingentItIt: string;
    titleForContingentLocalized: string;
    titleForContingentNlNl: string;
    titleForContingentPtBr: string;
    titleForContingentZhCn: string;
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
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    subSections: EmployeeProfileSubSectionConfigType[];
    titleForContingentTranslationTextNav: MdfLocalizedValueType[];
    titleTranslationTextNav: MdfLocalizedValueType[];
    typeNav: MdfEnumValueType;
}
export declare namespace EmployeeProfileSectionConfig {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[isEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ENABLED: BooleanField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_DE_DE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_DEFAULT_VALUE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_EN_DEBUG: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_EN_GB: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_EN_US: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_ES_ES: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_ES_MX: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_FR_CA: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_FR_FR: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_IT_IT: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_LOCALIZED: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_NL_NL: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_PT_BR: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleForContingentZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_ZH_CN: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DE_DE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DEFAULT_VALUE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_DEBUG: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_GB: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_US: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_ES: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_MX: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_CA: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_FR: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_IT_IT: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_LOCALIZED: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_NL_NL: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_PT_BR: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ZH_CN: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<EmployeeProfileSectionConfig>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileSectionConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileSectionConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[subSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_SECTIONS: Link<EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig>;
    /**
     * Static representation of the one-to-many navigation property [[titleForContingentTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FOR_CONTINGENT_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSectionConfig, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSectionConfig, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAV: OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue>;
    /**
     * All fields of the EmployeeProfileSectionConfig entity.
     */
    const _allFields: Array<StringField<EmployeeProfileSectionConfig> | DateField<EmployeeProfileSectionConfig> | BooleanField<EmployeeProfileSectionConfig> | BigNumberField<EmployeeProfileSectionConfig> | OneToOneLink<EmployeeProfileSectionConfig, User> | OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue> | Link<EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig> | Link<EmployeeProfileSectionConfig, MdfLocalizedValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileSectionConfig>;
    /**
     * All key fields of the EmployeeProfileSectionConfig entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileSectionConfig>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileSectionConfig.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileSectionConfig>;
    };
}
//# sourceMappingURL=EmployeeProfileSectionConfig.d.ts.map