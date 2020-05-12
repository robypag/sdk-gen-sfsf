import { EducationDegreeEntityRequestBuilder } from './EducationDegreeEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EducationDegreeEntity" of service "SFOData".
 */
export declare class EducationDegreeEntity extends Entity implements EducationDegreeEntityType {
    /**
     * Technical entity name for EducationDegreeEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationDegreeEntity.
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
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeDeDe?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeDefaultValue?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeEnDebug?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeEnGb?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeEnUs?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeEsEs?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeEsMx?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeFrCa?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeFrFr?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeItIt?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeLocalized?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeNlNl?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreePtBr?: string;
    /**
     * Degree.
     * Maximum length: 256.
     * @nullable
     */
    degreeZhCn?: string;
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
    degreeTranslationTextNav: MdfLocalizedValue[];
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
     * Returns an entity builder to construct instances `EducationDegreeEntity`.
     * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
     */
    static builder(): EntityBuilderType<EducationDegreeEntity, EducationDegreeEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EducationDegreeEntity` entity type.
     * @returns A `EducationDegreeEntity` request builder.
     */
    static requestBuilder(): EducationDegreeEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationDegreeEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
     */
    static customField(fieldName: string): CustomField<EducationDegreeEntity>;
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
export interface EducationDegreeEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    degreeDeDe?: string;
    degreeDefaultValue?: string;
    degreeEnDebug?: string;
    degreeEnGb?: string;
    degreeEnUs?: string;
    degreeEsEs?: string;
    degreeEsMx?: string;
    degreeFrCa?: string;
    degreeFrFr?: string;
    degreeItIt?: string;
    degreeLocalized?: string;
    degreeNlNl?: string;
    degreePtBr?: string;
    degreeZhCn?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    degreeTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface EducationDegreeEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    degreeDeDe: string;
    degreeDefaultValue: string;
    degreeEnDebug: string;
    degreeEnGb: string;
    degreeEnUs: string;
    degreeEsEs: string;
    degreeEsMx: string;
    degreeFrCa: string;
    degreeFrFr: string;
    degreeItIt: string;
    degreeLocalized: string;
    degreeNlNl: string;
    degreePtBr: string;
    degreeZhCn: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    degreeTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EducationDegreeEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_DE_DE: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_DEFAULT_VALUE: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_EN_DEBUG: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_EN_GB: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_EN_US: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_ES_ES: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_ES_MX: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_FR_CA: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_FR_FR: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_IT_IT: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_LOCALIZED: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_NL_NL: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_PT_BR: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[degreeZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_ZH_CN: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EducationDegreeEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<EducationDegreeEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EducationDegreeEntity, User>;
    /**
     * Static representation of the one-to-many navigation property [[degreeTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_TRANSLATION_TEXT_NAV: Link<EducationDegreeEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationDegreeEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationDegreeEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<EducationDegreeEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EducationDegreeEntity, WfRequest>;
    /**
     * All fields of the EducationDegreeEntity entity.
     */
    const _allFields: Array<StringField<EducationDegreeEntity> | DateField<EducationDegreeEntity> | OneToOneLink<EducationDegreeEntity, User> | Link<EducationDegreeEntity, MdfLocalizedValue> | OneToOneLink<EducationDegreeEntity, MdfEnumValue> | Link<EducationDegreeEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EducationDegreeEntity>;
    /**
     * All key fields of the EducationDegreeEntity entity.
     */
    const _keyFields: Array<Selectable<EducationDegreeEntity>>;
    /**
     * Mapping of all key field names to the respective static field property EducationDegreeEntity.
     */
    const _keys: {
        [keys: string]: Selectable<EducationDegreeEntity>;
    };
}
//# sourceMappingURL=EducationDegreeEntity.d.ts.map