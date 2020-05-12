import { RelevantIndustryEntityRequestBuilder } from './RelevantIndustryEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RelevantIndustryEntity" of service "SFOData".
 */
export declare class RelevantIndustryEntity extends Entity implements RelevantIndustryEntityType {
    /**
     * Technical entity name for RelevantIndustryEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RelevantIndustryEntity.
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
     * GUID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryDeDe?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryDefaultValue?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryEnDebug?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryEnGb?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryEnUs?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryEsEs?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryEsMx?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryFrCa?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryFrFr?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryItIt?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryLocalized?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryNlNl?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryPtBr?: string;
    /**
     * Industry.
     * Maximum length: 256.
     * @nullable
     */
    industryZhCn?: string;
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
    industryTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `RelevantIndustryEntity`.
     * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
     */
    static builder(): EntityBuilderType<RelevantIndustryEntity, RelevantIndustryEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RelevantIndustryEntity` entity type.
     * @returns A `RelevantIndustryEntity` request builder.
     */
    static requestBuilder(): RelevantIndustryEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RelevantIndustryEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
     */
    static customField(fieldName: string): CustomField<RelevantIndustryEntity>;
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
export interface RelevantIndustryEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    industryDeDe?: string;
    industryDefaultValue?: string;
    industryEnDebug?: string;
    industryEnGb?: string;
    industryEnUs?: string;
    industryEsEs?: string;
    industryEsMx?: string;
    industryFrCa?: string;
    industryFrFr?: string;
    industryItIt?: string;
    industryLocalized?: string;
    industryNlNl?: string;
    industryPtBr?: string;
    industryZhCn?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    industryTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface RelevantIndustryEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    industryDeDe: string;
    industryDefaultValue: string;
    industryEnDebug: string;
    industryEnGb: string;
    industryEnUs: string;
    industryEsEs: string;
    industryEsMx: string;
    industryFrCa: string;
    industryFrFr: string;
    industryItIt: string;
    industryLocalized: string;
    industryNlNl: string;
    industryPtBr: string;
    industryZhCn: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    industryTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace RelevantIndustryEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_DE_DE: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_DEFAULT_VALUE: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_EN_DEBUG: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_EN_GB: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_EN_US: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_ES_ES: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_ES_MX: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_FR_CA: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_FR_FR: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_IT_IT: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_LOCALIZED: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_NL_NL: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_PT_BR: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[industryZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_ZH_CN: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<RelevantIndustryEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RelevantIndustryEntity, User>;
    /**
     * Static representation of the one-to-many navigation property [[industryTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_TRANSLATION_TEXT_NAV: Link<RelevantIndustryEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RelevantIndustryEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RelevantIndustryEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<RelevantIndustryEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<RelevantIndustryEntity, WfRequest>;
    /**
     * All fields of the RelevantIndustryEntity entity.
     */
    const _allFields: Array<StringField<RelevantIndustryEntity> | DateField<RelevantIndustryEntity> | OneToOneLink<RelevantIndustryEntity, User> | Link<RelevantIndustryEntity, MdfLocalizedValue> | OneToOneLink<RelevantIndustryEntity, MdfEnumValue> | Link<RelevantIndustryEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RelevantIndustryEntity>;
    /**
     * All key fields of the RelevantIndustryEntity entity.
     */
    const _keyFields: Array<Selectable<RelevantIndustryEntity>>;
    /**
     * Mapping of all key field names to the respective static field property RelevantIndustryEntity.
     */
    const _keys: {
        [keys: string]: Selectable<RelevantIndustryEntity>;
    };
}
//# sourceMappingURL=RelevantIndustryEntity.d.ts.map