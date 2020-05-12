import { EducationMajorEntityRequestBuilder } from './EducationMajorEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EducationMajorEntity" of service "SFOData".
 */
export declare class EducationMajorEntity extends Entity implements EducationMajorEntityType {
    /**
     * Technical entity name for EducationMajorEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationMajorEntity.
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
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorDeDe?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorDefaultValue?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorEnDebug?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorEnGb?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorEnUs?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorEsEs?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorEsMx?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorFrCa?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorFrFr?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorItIt?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorLocalized?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorNlNl?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorPtBr?: string;
    /**
     * Major.
     * Maximum length: 256.
     * @nullable
     */
    majorZhCn?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    majorTranslationTextNav: MdfLocalizedValue[];
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
     * Returns an entity builder to construct instances `EducationMajorEntity`.
     * @returns A builder that constructs instances of entity type `EducationMajorEntity`.
     */
    static builder(): EntityBuilderType<EducationMajorEntity, EducationMajorEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EducationMajorEntity` entity type.
     * @returns A `EducationMajorEntity` request builder.
     */
    static requestBuilder(): EducationMajorEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationMajorEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationMajorEntity`.
     */
    static customField(fieldName: string): CustomField<EducationMajorEntity>;
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
export interface EducationMajorEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    majorDeDe?: string;
    majorDefaultValue?: string;
    majorEnDebug?: string;
    majorEnGb?: string;
    majorEnUs?: string;
    majorEsEs?: string;
    majorEsMx?: string;
    majorFrCa?: string;
    majorFrFr?: string;
    majorItIt?: string;
    majorLocalized?: string;
    majorNlNl?: string;
    majorPtBr?: string;
    majorZhCn?: string;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    majorTranslationTextNav: MdfLocalizedValueType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface EducationMajorEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    majorDeDe: string;
    majorDefaultValue: string;
    majorEnDebug: string;
    majorEnGb: string;
    majorEnUs: string;
    majorEsEs: string;
    majorEsMx: string;
    majorFrCa: string;
    majorFrFr: string;
    majorItIt: string;
    majorLocalized: string;
    majorNlNl: string;
    majorPtBr: string;
    majorZhCn: string;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    majorTranslationTextNav: MdfLocalizedValueType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EducationMajorEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EducationMajorEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_DE_DE: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_DEFAULT_VALUE: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_EN_DEBUG: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_EN_GB: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_EN_US: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_ES_ES: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_ES_MX: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_FR_CA: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_FR_FR: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_IT_IT: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_LOCALIZED: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_NL_NL: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_PT_BR: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[majorZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_ZH_CN: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<EducationMajorEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<EducationMajorEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EducationMajorEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationMajorEntity, User>;
    /**
     * Static representation of the one-to-many navigation property [[majorTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_TRANSLATION_TEXT_NAV: Link<EducationMajorEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationMajorEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<EducationMajorEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EducationMajorEntity, WfRequest>;
    /**
     * All fields of the EducationMajorEntity entity.
     */
    const _allFields: Array<StringField<EducationMajorEntity> | DateField<EducationMajorEntity> | OneToOneLink<EducationMajorEntity, User> | Link<EducationMajorEntity, MdfLocalizedValue> | OneToOneLink<EducationMajorEntity, MdfEnumValue> | Link<EducationMajorEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EducationMajorEntity>;
    /**
     * All key fields of the EducationMajorEntity entity.
     */
    const _keyFields: Array<Selectable<EducationMajorEntity>>;
    /**
     * Mapping of all key field names to the respective static field property EducationMajorEntity.
     */
    const _keys: {
        [keys: string]: Selectable<EducationMajorEntity>;
    };
}
//# sourceMappingURL=EducationMajorEntity.d.ts.map