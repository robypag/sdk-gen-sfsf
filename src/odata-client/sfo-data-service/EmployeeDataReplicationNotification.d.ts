import { EmployeeDataReplicationNotificationRequestBuilder } from './EmployeeDataReplicationNotificationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeDataReplicationNotification" of service "SFOData".
 */
export declare class EmployeeDataReplicationNotification extends Entity implements EmployeeDataReplicationNotificationType {
    /**
     * Technical entity name for EmployeeDataReplicationNotification.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeDataReplicationNotification.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Replication Content Type.
     * Maximum length: 255.
     * @nullable
     */
    replicationContentType?: string;
    /**
     * Replication Event.
     * Maximum length: 255.
     * @nullable
     */
    replicationEvent?: string;
    /**
     * Replication Event Time.
     * Maximum length: 255.
     * @nullable
     */
    replicationEventTime?: string;
    /**
     * Replication Target System.
     * Maximum length: 128.
     * @nullable
     */
    replicationTargetSystem?: string;
    /**
     * Sender ID.
     * Maximum length: 255.
     * @nullable
     */
    senderId?: string;
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    replicationEventNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[ReplicationTargetSystem]] entity.
     */
    replicationTargetSystemNav: ReplicationTargetSystem;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    usersSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmployeeDataReplicationNotification`.
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationNotification`.
     */
    static builder(): EntityBuilderType<EmployeeDataReplicationNotification, EmployeeDataReplicationNotificationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationNotification` entity type.
     * @returns A `EmployeeDataReplicationNotification` request builder.
     */
    static requestBuilder(): EmployeeDataReplicationNotificationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationNotification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeDataReplicationNotification`.
     */
    static customField(fieldName: string): CustomField<EmployeeDataReplicationNotification>;
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { ReplicationTargetSystem, ReplicationTargetSystemType } from './ReplicationTargetSystem';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmployeeDataReplicationNotificationType {
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
    replicationContentType?: string;
    replicationEvent?: string;
    replicationEventTime?: string;
    replicationTargetSystem?: string;
    senderId?: string;
    usersSysId?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationEventNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface EmployeeDataReplicationNotificationTypeForceMandatory {
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
    replicationContentType: string;
    replicationEvent: string;
    replicationEventTime: string;
    replicationTargetSystem: string;
    senderId: string;
    usersSysId: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationEventNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmployeeDataReplicationNotification {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID: BigNumberField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[replicationEvent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_EVENT: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[replicationEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_EVENT_TIME: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[senderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SENDER_ID: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<EmployeeDataReplicationNotification>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<EmployeeDataReplicationNotification, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeDataReplicationNotification, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<EmployeeDataReplicationNotification, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeDataReplicationNotification, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeDataReplicationNotification, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<EmployeeDataReplicationNotification, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_EVENT_NAV: OneToOneLink<EmployeeDataReplicationNotification, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<EmployeeDataReplicationNotification, ReplicationTargetSystem>;
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_NAV: OneToOneLink<EmployeeDataReplicationNotification, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmployeeDataReplicationNotification, WfRequest>;
    /**
     * All fields of the EmployeeDataReplicationNotification entity.
     */
    const _allFields: Array<StringField<EmployeeDataReplicationNotification> | DateField<EmployeeDataReplicationNotification> | BigNumberField<EmployeeDataReplicationNotification> | Link<EmployeeDataReplicationNotification, Country> | OneToOneLink<EmployeeDataReplicationNotification, User> | Link<EmployeeDataReplicationNotification, MdfLocalizedValue> | OneToOneLink<EmployeeDataReplicationNotification, MdfEnumValue> | OneToOneLink<EmployeeDataReplicationNotification, ReplicationTargetSystem> | Link<EmployeeDataReplicationNotification, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeDataReplicationNotification>;
    /**
     * All key fields of the EmployeeDataReplicationNotification entity.
     */
    const _keyFields: Array<Selectable<EmployeeDataReplicationNotification>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeDataReplicationNotification.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeDataReplicationNotification>;
    };
}
//# sourceMappingURL=EmployeeDataReplicationNotification.d.ts.map