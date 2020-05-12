import { JobDescSectionRequestBuilder } from './JobDescSectionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobDescSection" of service "SFOData".
 */
export declare class JobDescSection extends Entity implements JobDescSectionType {
    /**
     * Technical entity name for JobDescSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobDescSection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Template_GUID.
     * Maximum length: 128.
     */
    jobDescTemplateExternalCode: string;
    /**
     * bold.
     * @nullable
     */
    bold?: boolean;
    /**
     * boldHeader.
     * @nullable
     */
    boldHeader?: boolean;
    /**
     * bulletType.
     * Maximum length: 255.
     * @nullable
     */
    bulletType?: string;
    /**
     * contentType.
     * Maximum length: 255.
     * @nullable
     */
    contentType?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Added.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * GUID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * externalPosting.
     * @nullable
     */
    externalPosting?: boolean;
    /**
     * fontSizeHeader.
     * @nullable
     */
    fontSizeHeader?: BigNumber;
    /**
     * internalPosting.
     * @nullable
     */
    internalPosting?: boolean;
    /**
     * italic.
     * @nullable
     */
    italic?: boolean;
    /**
     * italicHeader.
     * @nullable
     */
    italicHeader?: boolean;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified.
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
     * multiContents.
     * @nullable
     */
    multiContents?: boolean;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameItIt?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    namePtBr?: string;
    /**
     * name.
     * Maximum length: 100.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * onlyAdmin.
     * @nullable
     */
    onlyAdmin?: boolean;
    /**
     * order.
     * @nullable
     */
    order?: BigNumber;
    /**
     * removable.
     * @nullable
     */
    removable?: boolean;
    /**
     * required.
     * @nullable
     */
    required?: boolean;
    /**
     * showInJobReq.
     * @nullable
     */
    showInJobReq?: boolean;
    /**
     * smallIcon.
     * Maximum length: 255.
     * @nullable
     */
    smallIcon?: string;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * subModule.
     * Maximum length: 255.
     * @nullable
     */
    subModule?: string;
    /**
     * underline.
     * @nullable
     */
    underline?: boolean;
    /**
     * underlineHeader.
     * @nullable
     */
    underlineHeader?: boolean;
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
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `JobDescSection`.
     * @returns A builder that constructs instances of entity type `JobDescSection`.
     */
    static builder(): EntityBuilderType<JobDescSection, JobDescSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobDescSection` entity type.
     * @returns A `JobDescSection` request builder.
     */
    static requestBuilder(): JobDescSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobDescSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobDescSection`.
     */
    static customField(fieldName: string): CustomField<JobDescSection>;
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
export interface JobDescSectionType {
    jobDescTemplateExternalCode: string;
    bold?: boolean;
    boldHeader?: boolean;
    bulletType?: string;
    contentType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    externalPosting?: boolean;
    fontSizeHeader?: BigNumber;
    internalPosting?: boolean;
    italic?: boolean;
    italicHeader?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    multiContents?: boolean;
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
    onlyAdmin?: boolean;
    order?: BigNumber;
    removable?: boolean;
    required?: boolean;
    showInJobReq?: boolean;
    smallIcon?: string;
    status?: string;
    subModule?: string;
    underline?: boolean;
    underlineHeader?: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
}
export interface JobDescSectionTypeForceMandatory {
    jobDescTemplateExternalCode: string;
    bold: boolean;
    boldHeader: boolean;
    bulletType: string;
    contentType: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    externalPosting: boolean;
    fontSizeHeader: BigNumber;
    internalPosting: boolean;
    italic: boolean;
    italicHeader: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    multiContents: boolean;
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
    onlyAdmin: boolean;
    order: BigNumber;
    removable: boolean;
    required: boolean;
    showInJobReq: boolean;
    smallIcon: string;
    status: string;
    subModule: string;
    underline: boolean;
    underlineHeader: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
}
export declare namespace JobDescSection {
    /**
     * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_DESC_TEMPLATE_EXTERNAL_CODE: StringField<JobDescSection>;
    /**
     * Static representation of the [[bold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOLD: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[boldHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOLD_HEADER: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[bulletType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BULLET_TYPE: StringField<JobDescSection>;
    /**
     * Static representation of the [[contentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT_TYPE: StringField<JobDescSection>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobDescSection>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobDescSection>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<JobDescSection>;
    /**
     * Static representation of the [[externalPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_POSTING: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[fontSizeHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FONT_SIZE_HEADER: BigNumberField<JobDescSection>;
    /**
     * Static representation of the [[internalPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_POSTING: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[italic]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITALIC: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[italicHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITALIC_HEADER: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobDescSection>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobDescSection>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobDescSection>;
    /**
     * Static representation of the [[multiContents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MULTI_CONTENTS: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<JobDescSection>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<JobDescSection>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<JobDescSection>;
    /**
     * Static representation of the [[onlyAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONLY_ADMIN: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<JobDescSection>;
    /**
     * Static representation of the [[removable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMOVABLE: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIRED: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[showInJobReq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_IN_JOB_REQ: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[smallIcon]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SMALL_ICON: StringField<JobDescSection>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobDescSection>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<JobDescSection>;
    /**
     * Static representation of the [[underline]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDERLINE: BooleanField<JobDescSection>;
    /**
     * Static representation of the [[underlineHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDERLINE_HEADER: BooleanField<JobDescSection>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobDescSection, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobDescSection, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobDescSection, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<JobDescSection, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<JobDescSection, MdfEnumValue>;
    /**
     * All fields of the JobDescSection entity.
     */
    const _allFields: Array<StringField<JobDescSection> | BooleanField<JobDescSection> | DateField<JobDescSection> | BigNumberField<JobDescSection> | OneToOneLink<JobDescSection, User> | OneToOneLink<JobDescSection, MdfEnumValue> | Link<JobDescSection, MdfLocalizedValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobDescSection>;
    /**
     * All key fields of the JobDescSection entity.
     */
    const _keyFields: Array<Selectable<JobDescSection>>;
    /**
     * Mapping of all key field names to the respective static field property JobDescSection.
     */
    const _keys: {
        [keys: string]: Selectable<JobDescSection>;
    };
}
//# sourceMappingURL=JobDescSection.d.ts.map