import { PhysicalReqEntityRequestBuilder } from './PhysicalReqEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PhysicalReqEntity" of service "SFOData".
 */
export declare class PhysicalReqEntity extends Entity implements PhysicalReqEntityType {
    /**
     * Technical entity name for PhysicalReqEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PhysicalReqEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * GUID.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementDeDe?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementDefaultValue?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementEnDebug?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementEnGb?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementEnUs?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementEsEs?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementEsMx?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementFrCa?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementFrFr?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementItIt?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementLocalized?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementNlNl?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementPtBr?: string;
    /**
     * Requirement.
     * Maximum length: 256.
     * @nullable
     */
    requirementZhCn?: string;
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
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    requirementTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PhysicalReqEntity`.
     * @returns A builder that constructs instances of entity type `PhysicalReqEntity`.
     */
    static builder(): EntityBuilderType<PhysicalReqEntity, PhysicalReqEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PhysicalReqEntity` entity type.
     * @returns A `PhysicalReqEntity` request builder.
     */
    static requestBuilder(): PhysicalReqEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PhysicalReqEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PhysicalReqEntity`.
     */
    static customField(fieldName: string): CustomField<PhysicalReqEntity>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface PhysicalReqEntityType {
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
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    requirementDeDe?: string;
    requirementDefaultValue?: string;
    requirementEnDebug?: string;
    requirementEnGb?: string;
    requirementEnUs?: string;
    requirementEsEs?: string;
    requirementEsMx?: string;
    requirementFrCa?: string;
    requirementFrFr?: string;
    requirementItIt?: string;
    requirementLocalized?: string;
    requirementNlNl?: string;
    requirementPtBr?: string;
    requirementZhCn?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    requirementTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface PhysicalReqEntityTypeForceMandatory {
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
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    requirementDeDe: string;
    requirementDefaultValue: string;
    requirementEnDebug: string;
    requirementEnGb: string;
    requirementEnUs: string;
    requirementEsEs: string;
    requirementEsMx: string;
    requirementFrCa: string;
    requirementFrFr: string;
    requirementItIt: string;
    requirementLocalized: string;
    requirementNlNl: string;
    requirementPtBr: string;
    requirementZhCn: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    requirementTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PhysicalReqEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PhysicalReqEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_DE_DE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_DEFAULT_VALUE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_EN_DEBUG: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_EN_GB: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_EN_US: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_ES_ES: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_ES_MX: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_FR_CA: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_FR_FR: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_IT_IT: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_LOCALIZED: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_NL_NL: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_PT_BR: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[requirementZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_ZH_CN: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<PhysicalReqEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PhysicalReqEntity, User>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<PhysicalReqEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PhysicalReqEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PhysicalReqEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[requirementTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIREMENT_TRANSLATION_TEXT_NAV: Link<PhysicalReqEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PhysicalReqEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PhysicalReqEntity, WfRequest>;
    /**
     * All fields of the PhysicalReqEntity entity.
     */
    const _allFields: Array<StringField<PhysicalReqEntity> | DateField<PhysicalReqEntity> | OneToOneLink<PhysicalReqEntity, User> | Link<PhysicalReqEntity, MdfLocalizedValue> | OneToOneLink<PhysicalReqEntity, MdfEnumValue> | Link<PhysicalReqEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PhysicalReqEntity>;
    /**
     * All key fields of the PhysicalReqEntity entity.
     */
    const _keyFields: Array<Selectable<PhysicalReqEntity>>;
    /**
     * Mapping of all key field names to the respective static field property PhysicalReqEntity.
     */
    const _keys: {
        [keys: string]: Selectable<PhysicalReqEntity>;
    };
}
//# sourceMappingURL=PhysicalReqEntity.d.ts.map