import { InterviewQuestionEntityRequestBuilder } from './InterviewQuestionEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InterviewQuestionEntity" of service "SFOData".
 */
export declare class InterviewQuestionEntity extends Entity implements InterviewQuestionEntityType {
    /**
     * Technical entity name for InterviewQuestionEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewQuestionEntity.
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionDeDe?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionDefaultValue?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionEnDebug?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionEnGb?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionEnUs?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionEsEs?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionEsMx?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionFrCa?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionFrFr?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionItIt?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionLocalized?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionNlNl?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionPtBr?: string;
    /**
     * Question.
     * Maximum length: 256.
     * @nullable
     */
    questionZhCn?: string;
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
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeDeDe?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeDefaultValue?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeEnDebug?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeEnGb?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeEnUs?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeEsEs?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeEsMx?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeFrCa?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeFrFr?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeItIt?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeLocalized?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeNlNl?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typePtBr?: string;
    /**
     * Type.
     * Maximum length: 128.
     * @nullable
     */
    typeZhCn?: string;
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
    questionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    typeTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `InterviewQuestionEntity`.
     * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
     */
    static builder(): EntityBuilderType<InterviewQuestionEntity, InterviewQuestionEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InterviewQuestionEntity` entity type.
     * @returns A `InterviewQuestionEntity` request builder.
     */
    static requestBuilder(): InterviewQuestionEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
     */
    static customField(fieldName: string): CustomField<InterviewQuestionEntity>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface InterviewQuestionEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    questionDeDe?: string;
    questionDefaultValue?: string;
    questionEnDebug?: string;
    questionEnGb?: string;
    questionEnUs?: string;
    questionEsEs?: string;
    questionEsMx?: string;
    questionFrCa?: string;
    questionFrFr?: string;
    questionItIt?: string;
    questionLocalized?: string;
    questionNlNl?: string;
    questionPtBr?: string;
    questionZhCn?: string;
    status?: string;
    subModule?: string;
    typeDeDe?: string;
    typeDefaultValue?: string;
    typeEnDebug?: string;
    typeEnGb?: string;
    typeEnUs?: string;
    typeEsEs?: string;
    typeEsMx?: string;
    typeFrCa?: string;
    typeFrFr?: string;
    typeItIt?: string;
    typeLocalized?: string;
    typeNlNl?: string;
    typePtBr?: string;
    typeZhCn?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    questionTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    typeTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface InterviewQuestionEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    questionDeDe: string;
    questionDefaultValue: string;
    questionEnDebug: string;
    questionEnGb: string;
    questionEnUs: string;
    questionEsEs: string;
    questionEsMx: string;
    questionFrCa: string;
    questionFrFr: string;
    questionItIt: string;
    questionLocalized: string;
    questionNlNl: string;
    questionPtBr: string;
    questionZhCn: string;
    status: string;
    subModule: string;
    typeDeDe: string;
    typeDefaultValue: string;
    typeEnDebug: string;
    typeEnGb: string;
    typeEnUs: string;
    typeEsEs: string;
    typeEsMx: string;
    typeFrCa: string;
    typeFrFr: string;
    typeItIt: string;
    typeLocalized: string;
    typeNlNl: string;
    typePtBr: string;
    typeZhCn: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    questionTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    typeTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace InterviewQuestionEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_DE_DE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_DEFAULT_VALUE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_EN_DEBUG: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_EN_GB: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_EN_US: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_ES_ES: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_ES_MX: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_FR_CA: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_FR_FR: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_IT_IT: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_LOCALIZED: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_NL_NL: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_PT_BR: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[questionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_ZH_CN: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_DE_DE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_DEFAULT_VALUE: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_EN_DEBUG: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_EN_GB: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_EN_US: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_ES_ES: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_ES_MX: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_FR_CA: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_FR_FR: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_IT_IT: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_LOCALIZED: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NL_NL: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_PT_BR: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the [[typeZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_ZH_CN: StringField<InterviewQuestionEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<InterviewQuestionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<InterviewQuestionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InterviewQuestionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[questionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_TRANSLATION_TEXT_NAV: Link<InterviewQuestionEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<InterviewQuestionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[typeTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_TRANSLATION_TEXT_NAV: Link<InterviewQuestionEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<InterviewQuestionEntity, WfRequest>;
    /**
     * All fields of the InterviewQuestionEntity entity.
     */
    const _allFields: Array<StringField<InterviewQuestionEntity> | DateField<InterviewQuestionEntity> | OneToOneLink<InterviewQuestionEntity, User> | OneToOneLink<InterviewQuestionEntity, MdfEnumValue> | Link<InterviewQuestionEntity, MdfLocalizedValue> | Link<InterviewQuestionEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InterviewQuestionEntity>;
    /**
     * All key fields of the InterviewQuestionEntity entity.
     */
    const _keyFields: Array<Selectable<InterviewQuestionEntity>>;
    /**
     * Mapping of all key field names to the respective static field property InterviewQuestionEntity.
     */
    const _keys: {
        [keys: string]: Selectable<InterviewQuestionEntity>;
    };
}
//# sourceMappingURL=InterviewQuestionEntity.d.ts.map