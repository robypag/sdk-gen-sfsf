import { EmployeeDataReplicationConfirmationRequestBuilder } from './EmployeeDataReplicationConfirmationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeDataReplicationConfirmation" of service "SFOData".
 */
export declare class EmployeeDataReplicationConfirmation extends Entity implements EmployeeDataReplicationConfirmationType {
    /**
     * Technical entity name for EmployeeDataReplicationConfirmation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationConfirmation.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Additional Time Information.
     * @nullable
     */
    additionalTimeInformation?: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
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
     * Person ID.
     * @nullable
     */
    personId?: BigNumber;
    /**
     * List Of External Codes Of Proxy Objects.
     * @nullable
     */
    proxyExternalCodeList?: string;
    /**
     * Replication Content Type.
     * Maximum length: 255.
     * @nullable
     */
    replicationContentType?: string;
    /**
     * Replication Processing Time in Target System.
     * Maximum length: 255.
     * @nullable
     */
    replicationProcessingTime?: string;
    /**
     * Replication Start Time.
     * Maximum length: 255.
     * @nullable
     */
    replicationStartTime?: string;
    /**
     * Replication Target System.
     * Maximum length: 128.
     * @nullable
     */
    replicationTargetSystem?: string;
    /**
     * Replication Update Status.
     * Maximum length: 255.
     * @nullable
     */
    replicationUpdateStatus?: string;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    usersSysId?: string;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[EmployeeDataReplicationConfirmationErrorMessage]] entity.
     */
    employeeDataReplicationConfirmationErrorMessages: EmployeeDataReplicationConfirmationErrorMessage[];
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    replicationContentTypeNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[ReplicationTargetSystem]] entity.
     */
    replicationTargetSystemNav: ReplicationTargetSystem;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    replicationUpdateStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    usersSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationConfirmation`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
     */
    static builder(): EntityBuilderType<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationConfirmation` entity type.
     * @returns A `EmployeeDataReplicationConfirmation` request builder.
     */
    static requestBuilder(): EmployeeDataReplicationConfirmationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationConfirmation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
     */
    static customField(fieldName: string): CustomField<EmployeeDataReplicationConfirmation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { EmployeeDataReplicationConfirmationErrorMessage, EmployeeDataReplicationConfirmationErrorMessageType } from './EmployeeDataReplicationConfirmationErrorMessage';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { ReplicationTargetSystem, ReplicationTargetSystemType } from './ReplicationTargetSystem';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmployeeDataReplicationConfirmationType {
    additionalTimeInformation?: string;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
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
    personId?: BigNumber;
    proxyExternalCodeList?: string;
    replicationContentType?: string;
    replicationProcessingTime?: string;
    replicationStartTime?: string;
    replicationTargetSystem?: string;
    replicationUpdateStatus?: string;
    usersSysId?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    employeeDataReplicationConfirmationErrorMessages: EmployeeDataReplicationConfirmationErrorMessageType[];
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    replicationUpdateStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface EmployeeDataReplicationConfirmationTypeForceMandatory {
    additionalTimeInformation: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
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
    personId: BigNumber;
    proxyExternalCodeList: string;
    replicationContentType: string;
    replicationProcessingTime: string;
    replicationStartTime: string;
    replicationTargetSystem: string;
    replicationUpdateStatus: string;
    usersSysId: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    employeeDataReplicationConfirmationErrorMessages: EmployeeDataReplicationConfirmationErrorMessageType[];
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    replicationUpdateStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmployeeDataReplicationConfirmation {
    /**
     * Static representation of the [[additionalTimeInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_TIME_INFORMATION: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID: BigNumberField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[proxyExternalCodeList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROXY_EXTERNAL_CODE_LIST: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[replicationProcessingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_PROCESSING_TIME: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[replicationStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_START_TIME: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[replicationUpdateStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_UPDATE_STATUS: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<EmployeeDataReplicationConfirmation, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User>;
    /**
     * Static representation of the one-to-many navigation property [[employeeDataReplicationConfirmationErrorMessages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_DATA_REPLICATION_CONFIRMATION_ERROR_MESSAGES: Link<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<EmployeeDataReplicationConfirmation, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, ReplicationTargetSystem>;
    /**
     * Static representation of the one-to-one navigation property [[replicationUpdateStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_UPDATE_STATUS_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmployeeDataReplicationConfirmation, WfRequest>;
    /**
     * All fields of the EmployeeDataReplicationConfirmation entity.
     */
    const _allFields: Array<StringField<EmployeeDataReplicationConfirmation> | DateField<EmployeeDataReplicationConfirmation> | BigNumberField<EmployeeDataReplicationConfirmation> | Link<EmployeeDataReplicationConfirmation, Country> | OneToOneLink<EmployeeDataReplicationConfirmation, User> | Link<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage> | Link<EmployeeDataReplicationConfirmation, MdfLocalizedValue> | OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue> | OneToOneLink<EmployeeDataReplicationConfirmation, ReplicationTargetSystem> | Link<EmployeeDataReplicationConfirmation, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeDataReplicationConfirmation>;
    /**
     * All key fields of the EmployeeDataReplicationConfirmation entity.
     */
    const _keyFields: Array<Selectable<EmployeeDataReplicationConfirmation>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationConfirmation.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeDataReplicationConfirmation>;
    };
}
//# sourceMappingURL=EmployeeDataReplicationConfirmation.d.ts.map