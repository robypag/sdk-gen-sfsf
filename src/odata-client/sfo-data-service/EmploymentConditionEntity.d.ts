import { EmploymentConditionEntityRequestBuilder } from './EmploymentConditionEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmploymentConditionEntity" of service "SFOData".
 */
export declare class EmploymentConditionEntity extends Entity implements EmploymentConditionEntityType {
    /**
     * Technical entity name for EmploymentConditionEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmploymentConditionEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionDeDe?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionDefaultValue?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionEnDebug?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionEnGb?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionEnUs?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionEsEs?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionEsMx?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionFrCa?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionFrFr?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionItIt?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionLocalized?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionNlNl?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionPtBr?: string;
    /**
     * Condition.
     * Maximum length: 256.
     * @nullable
     */
    conditionZhCn?: string;
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
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    conditionTranslationTextNav: MdfLocalizedValue[];
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmploymentConditionEntity`.
     * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
     */
    static builder(): EntityBuilderType<EmploymentConditionEntity, EmploymentConditionEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmploymentConditionEntity` entity type.
     * @returns A `EmploymentConditionEntity` request builder.
     */
    static requestBuilder(): EmploymentConditionEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmploymentConditionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
     */
    static customField(fieldName: string): CustomField<EmploymentConditionEntity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmploymentConditionEntityType {
    conditionDeDe?: string;
    conditionDefaultValue?: string;
    conditionEnDebug?: string;
    conditionEnGb?: string;
    conditionEnUs?: string;
    conditionEsEs?: string;
    conditionEsMx?: string;
    conditionFrCa?: string;
    conditionFrFr?: string;
    conditionItIt?: string;
    conditionLocalized?: string;
    conditionNlNl?: string;
    conditionPtBr?: string;
    conditionZhCn?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    conditionTranslationTextNav: MdfLocalizedValueType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface EmploymentConditionEntityTypeForceMandatory {
    conditionDeDe: string;
    conditionDefaultValue: string;
    conditionEnDebug: string;
    conditionEnGb: string;
    conditionEnUs: string;
    conditionEsEs: string;
    conditionEsMx: string;
    conditionFrCa: string;
    conditionFrFr: string;
    conditionItIt: string;
    conditionLocalized: string;
    conditionNlNl: string;
    conditionPtBr: string;
    conditionZhCn: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    conditionTranslationTextNav: MdfLocalizedValueType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmploymentConditionEntity {
    /**
     * Static representation of the [[conditionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_DE_DE: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_DEFAULT_VALUE: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_EN_DEBUG: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_EN_GB: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_EN_US: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_ES_ES: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_ES_MX: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_FR_CA: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_FR_FR: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_IT_IT: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_LOCALIZED: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_NL_NL: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_PT_BR: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[conditionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_ZH_CN: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<EmploymentConditionEntity>;
    /**
     * Static representation of the one-to-many navigation property [[conditionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TRANSLATION_TEXT_NAV: Link<EmploymentConditionEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmploymentConditionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmploymentConditionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmploymentConditionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<EmploymentConditionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmploymentConditionEntity, WfRequest>;
    /**
     * All fields of the EmploymentConditionEntity entity.
     */
    const _allFields: Array<StringField<EmploymentConditionEntity> | DateField<EmploymentConditionEntity> | Link<EmploymentConditionEntity, MdfLocalizedValue> | OneToOneLink<EmploymentConditionEntity, User> | OneToOneLink<EmploymentConditionEntity, MdfEnumValue> | Link<EmploymentConditionEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmploymentConditionEntity>;
    /**
     * All key fields of the EmploymentConditionEntity entity.
     */
    const _keyFields: Array<Selectable<EmploymentConditionEntity>>;
    /**
     * Mapping of all key field names to the respective static field property EmploymentConditionEntity.
     */
    const _keys: {
        [keys: string]: Selectable<EmploymentConditionEntity>;
    };
}
//# sourceMappingURL=EmploymentConditionEntity.d.ts.map