import { EmployeeProfileBlockContentRequestBuilder } from './EmployeeProfileBlockContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileBlockContent" of service "SFOData".
 */
export declare class EmployeeProfileBlockContent extends Entity implements EmployeeProfileBlockContentType {
    /**
     * Technical entity name for EmployeeProfileBlockContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileBlockContent.
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
     * EmployeeProfileSubSectionConfig_code.
     * Maximum length: 128.
     */
    employeeProfileSubSectionConfigCode: string;
    /**
     * blockLayout.
     * Maximum length: 128.
     * @nullable
     */
    blockLayout?: string;
    /**
     * blockLink.
     * Maximum length: 255.
     * @nullable
     */
    blockLink?: string;
    /**
     * blockSize.
     * Maximum length: 255.
     * @nullable
     */
    blockSize?: string;
    /**
     * blockType.
     * Maximum length: 255.
     * @nullable
     */
    blockType?: string;
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
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * entries.
     * @nullable
     */
    entries?: BigNumber;
    /**
     * extensionLink.
     * Maximum length: 255.
     * @nullable
     */
    extensionLink?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelDeDe?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelDefaultValue?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelEnDebug?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelEnGb?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelEnUs?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelEsEs?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelEsMx?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelFrCa?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelFrFr?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelItIt?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelLocalized?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelNlNl?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelPtBr?: string;
    /**
     * extensionLinkLabel.
     * Maximum length: 1000.
     * @nullable
     */
    extensionLinkLabelZhCn?: string;
    /**
     * fieldReferenceID.
     * Maximum length: 1000.
     * @nullable
     */
    fieldReferenceId?: string;
    /**
     * labelSource.
     * Maximum length: 255.
     * @nullable
     */
    labelSource?: string;
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
     * layout.
     * Maximum length: 255.
     * @nullable
     */
    layout?: string;
    /**
     * linkedInApiToken.
     * Maximum length: 255.
     * @nullable
     */
    linkedInApiToken?: string;
    /**
     * linkedInCompanyToken.
     * Maximum length: 255.
     * @nullable
     */
    linkedInCompanyToken?: string;
    /**
     * mdfBlockConfig.
     * Maximum length: 128.
     * @nullable
     */
    mdfBlockConfig?: string;
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
     * ratingOption.
     * Maximum length: 255.
     * @nullable
     */
    ratingOption?: string;
    /**
     * referenceID.
     * Maximum length: 255.
     * @nullable
     */
    referenceId?: string;
    /**
     * ruleExternalCode.
     * Maximum length: 255.
     * @nullable
     */
    ruleExternalCode?: string;
    /**
     * sortBy.
     * Maximum length: 255.
     * @nullable
     */
    sortBy?: string;
    /**
     * threshold.
     * Maximum length: 255.
     * @nullable
     */
    threshold?: string;
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    blockLayoutNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[EmployeeProfileBlockLink]] entity.
     */
    blockLinks: EmployeeProfileBlockLink[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    blockSizeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    blockTypeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    extensionLinkLabelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[EmployeeProfileFieldConfig]] entity.
     */
    fields: EmployeeProfileFieldConfig[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    layoutNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfBlockConfig]] entity.
     */
    mdfBlockConfigNav: MdfBlockConfig;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    titleTranslationTextNav: MdfLocalizedValue[];
    /**
     * Returns an entity builder to construct instances `EmployeeProfileBlockContent`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockContent`.
     */
    static builder(): EntityBuilderType<EmployeeProfileBlockContent, EmployeeProfileBlockContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileBlockContent` entity type.
     * @returns A `EmployeeProfileBlockContent` request builder.
     */
    static requestBuilder(): EmployeeProfileBlockContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileBlockContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileBlockContent`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileBlockContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeProfileBlockLink, EmployeeProfileBlockLinkType } from './EmployeeProfileBlockLink';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { EmployeeProfileFieldConfig, EmployeeProfileFieldConfigType } from './EmployeeProfileFieldConfig';
import { MdfBlockConfig, MdfBlockConfigType } from './MdfBlockConfig';
export interface EmployeeProfileBlockContentType {
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    blockLayout?: string;
    blockLink?: string;
    blockSize?: string;
    blockType?: string;
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
    entries?: BigNumber;
    extensionLink?: string;
    extensionLinkLabelDeDe?: string;
    extensionLinkLabelDefaultValue?: string;
    extensionLinkLabelEnDebug?: string;
    extensionLinkLabelEnGb?: string;
    extensionLinkLabelEnUs?: string;
    extensionLinkLabelEsEs?: string;
    extensionLinkLabelEsMx?: string;
    extensionLinkLabelFrCa?: string;
    extensionLinkLabelFrFr?: string;
    extensionLinkLabelItIt?: string;
    extensionLinkLabelLocalized?: string;
    extensionLinkLabelNlNl?: string;
    extensionLinkLabelPtBr?: string;
    extensionLinkLabelZhCn?: string;
    fieldReferenceId?: string;
    labelSource?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    layout?: string;
    linkedInApiToken?: string;
    linkedInCompanyToken?: string;
    mdfBlockConfig?: string;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    ratingOption?: string;
    referenceId?: string;
    ruleExternalCode?: string;
    sortBy?: string;
    threshold?: string;
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
    blockLayoutNav: MdfEnumValueType;
    blockLinks: EmployeeProfileBlockLinkType[];
    blockSizeNav: MdfEnumValueType;
    blockTypeNav: MdfEnumValueType;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    extensionLinkLabelTranslationTextNav: MdfLocalizedValueType[];
    fields: EmployeeProfileFieldConfigType[];
    lastModifiedByNav: UserType;
    layoutNav: MdfEnumValueType;
    mdfBlockConfigNav: MdfBlockConfigType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
}
export interface EmployeeProfileBlockContentTypeForceMandatory {
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    blockLayout: string;
    blockLink: string;
    blockSize: string;
    blockType: string;
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
    entries: BigNumber;
    extensionLink: string;
    extensionLinkLabelDeDe: string;
    extensionLinkLabelDefaultValue: string;
    extensionLinkLabelEnDebug: string;
    extensionLinkLabelEnGb: string;
    extensionLinkLabelEnUs: string;
    extensionLinkLabelEsEs: string;
    extensionLinkLabelEsMx: string;
    extensionLinkLabelFrCa: string;
    extensionLinkLabelFrFr: string;
    extensionLinkLabelItIt: string;
    extensionLinkLabelLocalized: string;
    extensionLinkLabelNlNl: string;
    extensionLinkLabelPtBr: string;
    extensionLinkLabelZhCn: string;
    fieldReferenceId: string;
    labelSource: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    layout: string;
    linkedInApiToken: string;
    linkedInCompanyToken: string;
    mdfBlockConfig: string;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    ratingOption: string;
    referenceId: string;
    ruleExternalCode: string;
    sortBy: string;
    threshold: string;
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
    blockLayoutNav: MdfEnumValueType;
    blockLinks: EmployeeProfileBlockLinkType[];
    blockSizeNav: MdfEnumValueType;
    blockTypeNav: MdfEnumValueType;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    extensionLinkLabelTranslationTextNav: MdfLocalizedValueType[];
    fields: EmployeeProfileFieldConfigType[];
    lastModifiedByNav: UserType;
    layoutNav: MdfEnumValueType;
    mdfBlockConfigNav: MdfBlockConfigType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    titleTranslationTextNav: MdfLocalizedValueType[];
}
export declare namespace EmployeeProfileBlockContent {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[blockLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_LAYOUT: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[blockLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_LINK: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[blockSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_SIZE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[blockType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_TYPE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[entries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTRIES: BigNumberField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_DE_DE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_DEFAULT_VALUE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_EN_DEBUG: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_EN_GB: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_EN_US: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_ES_ES: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_ES_MX: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_FR_CA: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_FR_FR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_IT_IT: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_LOCALIZED: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_NL_NL: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_PT_BR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[extensionLinkLabelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_ZH_CN: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[fieldReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_REFERENCE_ID: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[labelSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL_SOURCE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[layout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAYOUT: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[linkedInApiToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_IN_API_TOKEN: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[linkedInCompanyToken]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_IN_COMPANY_TOKEN: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[mdfBlockConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_BLOCK_CONFIG: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[ratingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_OPTION: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[referenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_ID: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[ruleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RULE_EXTERNAL_CODE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[sortBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT_BY: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[threshold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THRESHOLD: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DE_DE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_DEFAULT_VALUE: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_DEBUG: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_GB: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_EN_US: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_ES: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ES_MX: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_CA: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_FR_FR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_IT_IT: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_LOCALIZED: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_NL_NL: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titlePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_PT_BR: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the [[titleZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_ZH_CN: StringField<EmployeeProfileBlockContent>;
    /**
     * Static representation of the one-to-one navigation property [[blockLayoutNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_LAYOUT_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[blockLinks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_LINKS: Link<EmployeeProfileBlockContent, EmployeeProfileBlockLink>;
    /**
     * Static representation of the one-to-one navigation property [[blockSizeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_SIZE_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[blockTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK_TYPE_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileBlockContent, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<EmployeeProfileBlockContent, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[extensionLinkLabelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_LINK_LABEL_TRANSLATION_TEXT_NAV: Link<EmployeeProfileBlockContent, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[fields]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELDS: Link<EmployeeProfileBlockContent, EmployeeProfileFieldConfig>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileBlockContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[layoutNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAYOUT_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[mdfBlockConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_BLOCK_CONFIG_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfBlockConfig>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE_TRANSLATION_TEXT_NAV: Link<EmployeeProfileBlockContent, MdfLocalizedValue>;
    /**
     * All fields of the EmployeeProfileBlockContent entity.
     */
    const _allFields: Array<StringField<EmployeeProfileBlockContent> | DateField<EmployeeProfileBlockContent> | BigNumberField<EmployeeProfileBlockContent> | OneToOneLink<EmployeeProfileBlockContent, MdfEnumValue> | Link<EmployeeProfileBlockContent, EmployeeProfileBlockLink> | OneToOneLink<EmployeeProfileBlockContent, User> | Link<EmployeeProfileBlockContent, MdfLocalizedValue> | Link<EmployeeProfileBlockContent, EmployeeProfileFieldConfig> | OneToOneLink<EmployeeProfileBlockContent, MdfBlockConfig>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileBlockContent>;
    /**
     * All key fields of the EmployeeProfileBlockContent entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileBlockContent>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileBlockContent.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileBlockContent>;
    };
}
//# sourceMappingURL=EmployeeProfileBlockContent.d.ts.map