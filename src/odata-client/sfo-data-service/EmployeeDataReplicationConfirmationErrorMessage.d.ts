import { EmployeeDataReplicationConfirmationErrorMessageRequestBuilder } from './EmployeeDataReplicationConfirmationErrorMessageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeDataReplicationConfirmationErrorMessage" of service "SFOData".
 */
export declare class EmployeeDataReplicationConfirmationErrorMessage extends Entity implements EmployeeDataReplicationConfirmationErrorMessageType {
    /**
     * Technical entity name for EmployeeDataReplicationConfirmationErrorMessage.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationConfirmationErrorMessage.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Data Replication Confirmation_externalCode.
     * Maximum length: 128.
     */
    employeeDataReplicationConfirmationExternalCode: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Detailed Source Message URL.
     * Maximum length: 255.
     * @nullable
     */
    detailedSourceMessageUrl?: string;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
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
     * Replication Message Node Type.
     * Maximum length: 255.
     * @nullable
     */
    replicationMessageNodeType?: string;
    /**
     * Infotype Field Description.
     * Maximum length: 255.
     * @nullable
     */
    sourceAttributeDescription?: string;
    /**
     * Infotype Field.
     * Maximum length: 255.
     * @nullable
     */
    sourceAttributeId?: string;
    /**
     * Message Severity.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageSeverity?: string;
    /**
     * Message Text.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageText?: string;
    /**
     * Message Type Id.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageTypeId?: string;
    /**
     * Message Variable 1.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageVariable1?: string;
    /**
     * Message Variable 2.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageVariable2?: string;
    /**
     * Message Variable 3.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageVariable3?: string;
    /**
     * Message Variable 4.
     * Maximum length: 255.
     * @nullable
     */
    sourceMessageVariable4?: string;
    /**
     * Infotype Description.
     * Maximum length: 255.
     * @nullable
     */
    sourceObjectTypeDescription?: string;
    /**
     * Infotype ID.
     * Maximum length: 255.
     * @nullable
     */
    sourceObjectTypeId?: string;
    /**
     * Person Identifier.
     * Maximum length: 255.
     * @nullable
     */
    sourcePersonIdentifier?: string;
    /**
     * End Date.
     * @nullable
     */
    sourceValidityPeriodEndDate?: Moment;
    /**
     * Start Date.
     * @nullable
     */
    sourceValidityPeriodStartDate?: Moment;
    /**
     * Technical Information.
     * Maximum length: 255.
     * @nullable
     */
    technicalInformation?: string;
    /**
     * User.
     * Maximum length: 255.
     * @nullable
     */
    userSysId?: string;
    /**
     * Work Agreement Id.
     * Maximum length: 255.
     * @nullable
     */
    workagreementId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationConfirmationErrorMessage`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    static builder(): EntityBuilderType<EmployeeDataReplicationConfirmationErrorMessage, EmployeeDataReplicationConfirmationErrorMessageTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationConfirmationErrorMessage` entity type.
     * @returns A `EmployeeDataReplicationConfirmationErrorMessage` request builder.
     */
    static requestBuilder(): EmployeeDataReplicationConfirmationErrorMessageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationConfirmationErrorMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    static customField(fieldName: string): CustomField<EmployeeDataReplicationConfirmationErrorMessage>;
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
export interface EmployeeDataReplicationConfirmationErrorMessageType {
    employeeDataReplicationConfirmationExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    detailedSourceMessageUrl?: string;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnDebug?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameEsMx?: string;
    externalNameFrCa?: string;
    externalNameFrFr?: string;
    externalNameItIt?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNameZhCn?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    replicationMessageNodeType?: string;
    sourceAttributeDescription?: string;
    sourceAttributeId?: string;
    sourceMessageSeverity?: string;
    sourceMessageText?: string;
    sourceMessageTypeId?: string;
    sourceMessageVariable1?: string;
    sourceMessageVariable2?: string;
    sourceMessageVariable3?: string;
    sourceMessageVariable4?: string;
    sourceObjectTypeDescription?: string;
    sourceObjectTypeId?: string;
    sourcePersonIdentifier?: string;
    sourceValidityPeriodEndDate?: Moment;
    sourceValidityPeriodStartDate?: Moment;
    technicalInformation?: string;
    userSysId?: string;
    workagreementId?: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeDataReplicationConfirmationErrorMessageTypeForceMandatory {
    employeeDataReplicationConfirmationExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    detailedSourceMessageUrl: string;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnDebug: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameEsMx: string;
    externalNameFrCa: string;
    externalNameFrFr: string;
    externalNameItIt: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNameZhCn: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    replicationMessageNodeType: string;
    sourceAttributeDescription: string;
    sourceAttributeId: string;
    sourceMessageSeverity: string;
    sourceMessageText: string;
    sourceMessageTypeId: string;
    sourceMessageVariable1: string;
    sourceMessageVariable2: string;
    sourceMessageVariable3: string;
    sourceMessageVariable4: string;
    sourceObjectTypeDescription: string;
    sourceObjectTypeId: string;
    sourcePersonIdentifier: string;
    sourceValidityPeriodEndDate: Moment;
    sourceValidityPeriodStartDate: Moment;
    technicalInformation: string;
    userSysId: string;
    workagreementId: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeDataReplicationConfirmationErrorMessage {
    /**
     * Static representation of the [[employeeDataReplicationConfirmationExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_DATA_REPLICATION_CONFIRMATION_EXTERNAL_CODE: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[detailedSourceMessageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILED_SOURCE_MESSAGE_URL: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[replicationMessageNodeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_MESSAGE_NODE_TYPE: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceAttributeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_ATTRIBUTE_DESCRIPTION: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceAttributeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_ATTRIBUTE_ID: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageSeverity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_SEVERITY: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_TEXT: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_TYPE_ID: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageVariable1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_VARIABLE_1: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageVariable2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_VARIABLE_2: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageVariable3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_VARIABLE_3: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceMessageVariable4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_MESSAGE_VARIABLE_4: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceObjectTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_OBJECT_TYPE_DESCRIPTION: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceObjectTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_OBJECT_TYPE_ID: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourcePersonIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_PERSON_IDENTIFIER: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceValidityPeriodEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_VALIDITY_PERIOD_END_DATE: DateField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[sourceValidityPeriodStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_VALIDITY_PERIOD_START_DATE: DateField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[technicalInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TECHNICAL_INFORMATION: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the [[workagreementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKAGREEMENT_ID: StringField<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmationErrorMessage, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<EmployeeDataReplicationConfirmationErrorMessage, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmationErrorMessage, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeDataReplicationConfirmationErrorMessage, MdfEnumValue>;
    /**
     * All fields of the EmployeeDataReplicationConfirmationErrorMessage entity.
     */
    const _allFields: Array<StringField<EmployeeDataReplicationConfirmationErrorMessage> | DateField<EmployeeDataReplicationConfirmationErrorMessage> | OneToOneLink<EmployeeDataReplicationConfirmationErrorMessage, User> | Link<EmployeeDataReplicationConfirmationErrorMessage, MdfLocalizedValue> | OneToOneLink<EmployeeDataReplicationConfirmationErrorMessage, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * All key fields of the EmployeeDataReplicationConfirmationErrorMessage entity.
     */
    const _keyFields: Array<Selectable<EmployeeDataReplicationConfirmationErrorMessage>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationConfirmationErrorMessage.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeDataReplicationConfirmationErrorMessage>;
    };
}
//# sourceMappingURL=EmployeeDataReplicationConfirmationErrorMessage.d.ts.map