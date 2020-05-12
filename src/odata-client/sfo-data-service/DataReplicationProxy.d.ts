import { DataReplicationProxyRequestBuilder } from './DataReplicationProxyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DataReplicationProxy" of service "SFOData".
 */
export declare class DataReplicationProxy extends Entity implements DataReplicationProxyType {
    /**
     * Technical entity name for DataReplicationProxy.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DataReplicationProxy.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Allow Replication in Payroll Correction Phase.
     * @nullable
     */
    allowReplicationInCorrectionPhase?: boolean;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Data Replication Status.
     * Maximum length: 255.
     * @nullable
     */
    dataReplicationProxyStatus?: string;
    /**
     * Earliest Replication Time.
     * @nullable
     */
    earliestReplicationDateTime?: Moment;
    /**
     * Employee Time.
     * Maximum length: 128.
     * @nullable
     */
    employeeTime?: string;
    /**
     * Employee Time Valuation Result.
     * Maximum length: 128.
     * @nullable
     */
    employeeTimeValuationResult?: string;
    /**
     * Employee Time With Account Detail.
     * Maximum length: 128.
     * @nullable
     */
    employeeTimeWithAccountDetail?: string;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Source Generic Object has multiple changes.
     * @nullable
     */
    isSubsequentChange?: boolean;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Company.
     * Maximum length: 128.
     * @nullable
     */
    legalEntity?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Planned Working Time End Date.
     * @nullable
     */
    plannedWorkingTimeEndDate?: Moment;
    /**
     * Planned Working Time Start Date.
     * @nullable
     */
    plannedWorkingTimeStartDate?: Moment;
    /**
     * Replication Content Type.
     * Maximum length: 255.
     * @nullable
     */
    replicationContentType?: string;
    /**
     * Replication Scenario Object.
     * Maximum length: 255.
     * @nullable
     */
    replicationScenarioObject?: string;
    /**
     * Replication Target System.
     * Maximum length: 128.
     * @nullable
     */
    replicationTargetSystem?: string;
    /**
     * Source Generic Object External Code.
     * Maximum length: 255.
     * @nullable
     */
    sourceGenericObjectExternalCode?: string;
    /**
     * Source Generic Object Internal Id.
     * Maximum length: 255.
     * @nullable
     */
    sourceGenericObjectInternalId?: string;
    /**
     * Time Account.
     * Maximum length: 128.
     * @nullable
     */
    timeAccount?: string;
    /**
     * Time Account Payout.
     * Maximum length: 128.
     * @nullable
     */
    timeAccountPayout?: string;
    /**
     * Time Account Snapshot.
     * Maximum length: 128.
     * @nullable
     */
    timeAccountSnapshot?: string;
    /**
     * Use Cost Center External Object Id.
     * @nullable
     */
    useCostCenterExternalObjectId?: boolean;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    dataReplicationProxyStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[EmployeeTime]] entity.
     */
    employeeTimeNav: EmployeeTime;
    /**
     * One-to-one navigation property to the [[EmployeeTimeValuationResult]] entity.
     */
    employeeTimeValuationResultNav: EmployeeTimeValuationResult;
    /**
     * One-to-one navigation property to the [[EmployeeTime]] entity.
     */
    employeeTimeWithAccountDetailNav: EmployeeTime;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    legalEntityNav: FoCompany[];
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
    replicationScenarioObjectNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[ReplicationTargetSystem]] entity.
     */
    replicationTargetSystemNav: ReplicationTargetSystem;
    /**
     * One-to-one navigation property to the [[TimeAccount]] entity.
     */
    timeAccountNav: TimeAccount;
    /**
     * One-to-one navigation property to the [[TimeAccountSnapshot]] entity.
     */
    timeAccountSnapshotNav: TimeAccountSnapshot;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `DataReplicationProxy`.
     * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
     */
    static builder(): EntityBuilderType<DataReplicationProxy, DataReplicationProxyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DataReplicationProxy` entity type.
     * @returns A `DataReplicationProxy` request builder.
     */
    static requestBuilder(): DataReplicationProxyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DataReplicationProxy`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
     */
    static customField(fieldName: string): CustomField<DataReplicationProxy>;
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
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { EmployeeTimeValuationResult, EmployeeTimeValuationResultType } from './EmployeeTimeValuationResult';
import { FoCompany, FoCompanyType } from './FoCompany';
import { ReplicationTargetSystem, ReplicationTargetSystemType } from './ReplicationTargetSystem';
import { TimeAccount, TimeAccountType } from './TimeAccount';
import { TimeAccountSnapshot, TimeAccountSnapshotType } from './TimeAccountSnapshot';
import { WfRequest, WfRequestType } from './WfRequest';
export interface DataReplicationProxyType {
    allowReplicationInCorrectionPhase?: boolean;
    createdBy?: string;
    createdDateTime?: Moment;
    dataReplicationProxyStatus?: string;
    earliestReplicationDateTime?: Moment;
    employeeTime?: string;
    employeeTimeValuationResult?: string;
    employeeTimeWithAccountDetail?: string;
    externalCode: string;
    isSubsequentChange?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    legalEntity?: string;
    mdfSystemRecordStatus?: string;
    plannedWorkingTimeEndDate?: Moment;
    plannedWorkingTimeStartDate?: Moment;
    replicationContentType?: string;
    replicationScenarioObject?: string;
    replicationTargetSystem?: string;
    sourceGenericObjectExternalCode?: string;
    sourceGenericObjectInternalId?: string;
    timeAccount?: string;
    timeAccountPayout?: string;
    timeAccountSnapshot?: string;
    useCostCenterExternalObjectId?: boolean;
    userId?: string;
    createdByNav: UserType;
    dataReplicationProxyStatusNav: MdfEnumValueType;
    employeeTimeNav: EmployeeTimeType;
    employeeTimeValuationResultNav: EmployeeTimeValuationResultType;
    employeeTimeWithAccountDetailNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    legalEntityNav: FoCompanyType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationScenarioObjectNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    timeAccountNav: TimeAccountType;
    timeAccountSnapshotNav: TimeAccountSnapshotType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface DataReplicationProxyTypeForceMandatory {
    allowReplicationInCorrectionPhase: boolean;
    createdBy: string;
    createdDateTime: Moment;
    dataReplicationProxyStatus: string;
    earliestReplicationDateTime: Moment;
    employeeTime: string;
    employeeTimeValuationResult: string;
    employeeTimeWithAccountDetail: string;
    externalCode: string;
    isSubsequentChange: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    legalEntity: string;
    mdfSystemRecordStatus: string;
    plannedWorkingTimeEndDate: Moment;
    plannedWorkingTimeStartDate: Moment;
    replicationContentType: string;
    replicationScenarioObject: string;
    replicationTargetSystem: string;
    sourceGenericObjectExternalCode: string;
    sourceGenericObjectInternalId: string;
    timeAccount: string;
    timeAccountPayout: string;
    timeAccountSnapshot: string;
    useCostCenterExternalObjectId: boolean;
    userId: string;
    createdByNav: UserType;
    dataReplicationProxyStatusNav: MdfEnumValueType;
    employeeTimeNav: EmployeeTimeType;
    employeeTimeValuationResultNav: EmployeeTimeValuationResultType;
    employeeTimeWithAccountDetailNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    legalEntityNav: FoCompanyType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    replicationContentTypeNav: MdfEnumValueType;
    replicationScenarioObjectNav: MdfEnumValueType;
    replicationTargetSystemNav: ReplicationTargetSystemType;
    timeAccountNav: TimeAccountType;
    timeAccountSnapshotNav: TimeAccountSnapshotType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace DataReplicationProxy {
    /**
     * Static representation of the [[allowReplicationInCorrectionPhase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_REPLICATION_IN_CORRECTION_PHASE: BooleanField<DataReplicationProxy>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<DataReplicationProxy>;
    /**
     * Static representation of the [[dataReplicationProxyStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_REPLICATION_PROXY_STATUS: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[earliestReplicationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EARLIEST_REPLICATION_DATE_TIME: DateField<DataReplicationProxy>;
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[employeeTimeValuationResult]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_VALUATION_RESULT: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[employeeTimeWithAccountDetail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[isSubsequentChange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SUBSEQUENT_CHANGE: BooleanField<DataReplicationProxy>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<DataReplicationProxy>;
    /**
     * Static representation of the [[legalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[plannedWorkingTimeEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_WORKING_TIME_END_DATE: DateField<DataReplicationProxy>;
    /**
     * Static representation of the [[plannedWorkingTimeStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_WORKING_TIME_START_DATE: DateField<DataReplicationProxy>;
    /**
     * Static representation of the [[replicationContentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[replicationScenarioObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_SCENARIO_OBJECT: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[replicationTargetSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[sourceGenericObjectExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_GENERIC_OBJECT_EXTERNAL_CODE: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[sourceGenericObjectInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_GENERIC_OBJECT_INTERNAL_ID: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[timeAccountPayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_PAYOUT: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[timeAccountSnapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_SNAPSHOT: StringField<DataReplicationProxy>;
    /**
     * Static representation of the [[useCostCenterExternalObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_COST_CENTER_EXTERNAL_OBJECT_ID: BooleanField<DataReplicationProxy>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<DataReplicationProxy>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<DataReplicationProxy, User>;
    /**
     * Static representation of the one-to-one navigation property [[dataReplicationProxyStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_REPLICATION_PROXY_STATUS_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_NAV: OneToOneLink<DataReplicationProxy, EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeValuationResultNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_VALUATION_RESULT_NAV: OneToOneLink<DataReplicationProxy, EmployeeTimeValuationResult>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeWithAccountDetailNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL_NAV: OneToOneLink<DataReplicationProxy, EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<DataReplicationProxy, User>;
    /**
     * Static representation of the one-to-many navigation property [[legalEntityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_NAV: Link<DataReplicationProxy, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationScenarioObjectNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_SCENARIO_OBJECT_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<DataReplicationProxy, ReplicationTargetSystem>;
    /**
     * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_NAV: OneToOneLink<DataReplicationProxy, TimeAccount>;
    /**
     * Static representation of the one-to-one navigation property [[timeAccountSnapshotNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_SNAPSHOT_NAV: OneToOneLink<DataReplicationProxy, TimeAccountSnapshot>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<DataReplicationProxy, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<DataReplicationProxy, WfRequest>;
    /**
     * All fields of the DataReplicationProxy entity.
     */
    const _allFields: Array<BooleanField<DataReplicationProxy> | StringField<DataReplicationProxy> | DateField<DataReplicationProxy> | OneToOneLink<DataReplicationProxy, User> | OneToOneLink<DataReplicationProxy, MdfEnumValue> | OneToOneLink<DataReplicationProxy, EmployeeTime> | OneToOneLink<DataReplicationProxy, EmployeeTimeValuationResult> | Link<DataReplicationProxy, FoCompany> | OneToOneLink<DataReplicationProxy, ReplicationTargetSystem> | OneToOneLink<DataReplicationProxy, TimeAccount> | OneToOneLink<DataReplicationProxy, TimeAccountSnapshot> | Link<DataReplicationProxy, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DataReplicationProxy>;
    /**
     * All key fields of the DataReplicationProxy entity.
     */
    const _keyFields: Array<Selectable<DataReplicationProxy>>;
    /**
     * Mapping of all key field names to the respective static field property DataReplicationProxy.
     */
    const _keys: {
        [keys: string]: Selectable<DataReplicationProxy>;
    };
}
//# sourceMappingURL=DataReplicationProxy.d.ts.map