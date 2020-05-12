/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataReplicationProxyRequestBuilder } from './DataReplicationProxyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DataReplicationProxy" of service "SFOData".
 */
export class DataReplicationProxy extends Entity implements DataReplicationProxyType {
  /**
   * Technical entity name for DataReplicationProxy.
   */
  static _entityName = 'DataReplicationProxy';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DataReplicationProxy.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  externalCode!: string;
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
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  dataReplicationProxyStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeNav!: EmployeeTime;
  /**
   * One-to-one navigation property to the [[EmployeeTimeValuationResult]] entity.
   */
  employeeTimeValuationResultNav!: EmployeeTimeValuationResult;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeWithAccountDetailNav!: EmployeeTime;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  legalEntityNav!: FoCompany[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  replicationContentTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  replicationScenarioObjectNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[ReplicationTargetSystem]] entity.
   */
  replicationTargetSystemNav!: ReplicationTargetSystem;
  /**
   * One-to-one navigation property to the [[TimeAccount]] entity.
   */
  timeAccountNav!: TimeAccount;
  /**
   * One-to-one navigation property to the [[TimeAccountSnapshot]] entity.
   */
  timeAccountSnapshotNav!: TimeAccountSnapshot;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `DataReplicationProxy`.
   * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
   */
  static builder(): EntityBuilderType<DataReplicationProxy, DataReplicationProxyTypeForceMandatory> {
    return Entity.entityBuilder(DataReplicationProxy);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DataReplicationProxy` entity type.
   * @returns A `DataReplicationProxy` request builder.
   */
  static requestBuilder(): DataReplicationProxyRequestBuilder {
    return new DataReplicationProxyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DataReplicationProxy`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DataReplicationProxy`.
   */
  static customField(fieldName: string): CustomField<DataReplicationProxy> {
    return Entity.customFieldSelector(fieldName, DataReplicationProxy);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace DataReplicationProxy {
  /**
   * Static representation of the [[allowReplicationInCorrectionPhase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_REPLICATION_IN_CORRECTION_PHASE: BooleanField<DataReplicationProxy> = new BooleanField('allowReplicationInCorrectionPhase', DataReplicationProxy, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<DataReplicationProxy> = new StringField('createdBy', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<DataReplicationProxy> = new DateField('createdDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dataReplicationProxyStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_REPLICATION_PROXY_STATUS: StringField<DataReplicationProxy> = new StringField('dataReplicationProxyStatus', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[earliestReplicationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EARLIEST_REPLICATION_DATE_TIME: DateField<DataReplicationProxy> = new DateField('earliestReplicationDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<DataReplicationProxy> = new StringField('employeeTime', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[employeeTimeValuationResult]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_VALUATION_RESULT: StringField<DataReplicationProxy> = new StringField('employeeTimeValuationResult', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[employeeTimeWithAccountDetail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL: StringField<DataReplicationProxy> = new StringField('employeeTimeWithAccountDetail', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<DataReplicationProxy> = new StringField('externalCode', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[isSubsequentChange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SUBSEQUENT_CHANGE: BooleanField<DataReplicationProxy> = new BooleanField('isSubsequentChange', DataReplicationProxy, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<DataReplicationProxy> = new StringField('lastModifiedBy', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<DataReplicationProxy> = new DateField('lastModifiedDateTime', DataReplicationProxy, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legalEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY: StringField<DataReplicationProxy> = new StringField('legalEntity', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<DataReplicationProxy> = new StringField('mdfSystemRecordStatus', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[plannedWorkingTimeEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_WORKING_TIME_END_DATE: DateField<DataReplicationProxy> = new DateField('plannedWorkingTimeEndDate', DataReplicationProxy, 'Edm.DateTime');
  /**
   * Static representation of the [[plannedWorkingTimeStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_WORKING_TIME_START_DATE: DateField<DataReplicationProxy> = new DateField('plannedWorkingTimeStartDate', DataReplicationProxy, 'Edm.DateTime');
  /**
   * Static representation of the [[replicationContentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE: StringField<DataReplicationProxy> = new StringField('replicationContentType', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[replicationScenarioObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_SCENARIO_OBJECT: StringField<DataReplicationProxy> = new StringField('replicationScenarioObject', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[replicationTargetSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM: StringField<DataReplicationProxy> = new StringField('replicationTargetSystem', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[sourceGenericObjectExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_GENERIC_OBJECT_EXTERNAL_CODE: StringField<DataReplicationProxy> = new StringField('sourceGenericObjectExternalCode', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[sourceGenericObjectInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_GENERIC_OBJECT_INTERNAL_ID: StringField<DataReplicationProxy> = new StringField('sourceGenericObjectInternalId', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[timeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT: StringField<DataReplicationProxy> = new StringField('timeAccount', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[timeAccountPayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_PAYOUT: StringField<DataReplicationProxy> = new StringField('timeAccountPayout', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[timeAccountSnapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_SNAPSHOT: StringField<DataReplicationProxy> = new StringField('timeAccountSnapshot', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the [[useCostCenterExternalObjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_COST_CENTER_EXTERNAL_OBJECT_ID: BooleanField<DataReplicationProxy> = new BooleanField('useCostCenterExternalObjectId', DataReplicationProxy, 'Edm.Boolean');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<DataReplicationProxy> = new StringField('userId', DataReplicationProxy, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<DataReplicationProxy, User> = new OneToOneLink('createdByNav', DataReplicationProxy, User);
  /**
   * Static representation of the one-to-one navigation property [[dataReplicationProxyStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_REPLICATION_PROXY_STATUS_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue> = new OneToOneLink('dataReplicationProxyStatusNav', DataReplicationProxy, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<DataReplicationProxy, EmployeeTime> = new OneToOneLink('employeeTimeNav', DataReplicationProxy, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeValuationResultNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_VALUATION_RESULT_NAV: OneToOneLink<DataReplicationProxy, EmployeeTimeValuationResult> = new OneToOneLink('employeeTimeValuationResultNav', DataReplicationProxy, EmployeeTimeValuationResult);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeWithAccountDetailNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL_NAV: OneToOneLink<DataReplicationProxy, EmployeeTime> = new OneToOneLink('employeeTimeWithAccountDetailNav', DataReplicationProxy, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<DataReplicationProxy, User> = new OneToOneLink('lastModifiedByNav', DataReplicationProxy, User);
  /**
   * Static representation of the one-to-many navigation property [[legalEntityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_NAV: Link<DataReplicationProxy, FoCompany> = new Link('legalEntityNav', DataReplicationProxy, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', DataReplicationProxy, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue> = new OneToOneLink('replicationContentTypeNav', DataReplicationProxy, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationScenarioObjectNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_SCENARIO_OBJECT_NAV: OneToOneLink<DataReplicationProxy, MdfEnumValue> = new OneToOneLink('replicationScenarioObjectNav', DataReplicationProxy, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<DataReplicationProxy, ReplicationTargetSystem> = new OneToOneLink('replicationTargetSystemNav', DataReplicationProxy, ReplicationTargetSystem);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_NAV: OneToOneLink<DataReplicationProxy, TimeAccount> = new OneToOneLink('timeAccountNav', DataReplicationProxy, TimeAccount);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountSnapshotNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_SNAPSHOT_NAV: OneToOneLink<DataReplicationProxy, TimeAccountSnapshot> = new OneToOneLink('timeAccountSnapshotNav', DataReplicationProxy, TimeAccountSnapshot);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<DataReplicationProxy, User> = new OneToOneLink('userIdNav', DataReplicationProxy, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<DataReplicationProxy, WfRequest> = new Link('wfRequestNav', DataReplicationProxy, WfRequest);
  /**
   * All fields of the DataReplicationProxy entity.
   */
  export const _allFields: Array<BooleanField<DataReplicationProxy> | StringField<DataReplicationProxy> | DateField<DataReplicationProxy> | OneToOneLink<DataReplicationProxy, User> | OneToOneLink<DataReplicationProxy, MdfEnumValue> | OneToOneLink<DataReplicationProxy, EmployeeTime> | OneToOneLink<DataReplicationProxy, EmployeeTimeValuationResult> | Link<DataReplicationProxy, FoCompany> | OneToOneLink<DataReplicationProxy, ReplicationTargetSystem> | OneToOneLink<DataReplicationProxy, TimeAccount> | OneToOneLink<DataReplicationProxy, TimeAccountSnapshot> | Link<DataReplicationProxy, WfRequest>> = [
    DataReplicationProxy.ALLOW_REPLICATION_IN_CORRECTION_PHASE,
    DataReplicationProxy.CREATED_BY,
    DataReplicationProxy.CREATED_DATE_TIME,
    DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS,
    DataReplicationProxy.EARLIEST_REPLICATION_DATE_TIME,
    DataReplicationProxy.EMPLOYEE_TIME,
    DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT,
    DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL,
    DataReplicationProxy.EXTERNAL_CODE,
    DataReplicationProxy.IS_SUBSEQUENT_CHANGE,
    DataReplicationProxy.LAST_MODIFIED_BY,
    DataReplicationProxy.LAST_MODIFIED_DATE_TIME,
    DataReplicationProxy.LEGAL_ENTITY,
    DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS,
    DataReplicationProxy.PLANNED_WORKING_TIME_END_DATE,
    DataReplicationProxy.PLANNED_WORKING_TIME_START_DATE,
    DataReplicationProxy.REPLICATION_CONTENT_TYPE,
    DataReplicationProxy.REPLICATION_SCENARIO_OBJECT,
    DataReplicationProxy.REPLICATION_TARGET_SYSTEM,
    DataReplicationProxy.SOURCE_GENERIC_OBJECT_EXTERNAL_CODE,
    DataReplicationProxy.SOURCE_GENERIC_OBJECT_INTERNAL_ID,
    DataReplicationProxy.TIME_ACCOUNT,
    DataReplicationProxy.TIME_ACCOUNT_PAYOUT,
    DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT,
    DataReplicationProxy.USE_COST_CENTER_EXTERNAL_OBJECT_ID,
    DataReplicationProxy.USER_ID,
    DataReplicationProxy.CREATED_BY_NAV,
    DataReplicationProxy.DATA_REPLICATION_PROXY_STATUS_NAV,
    DataReplicationProxy.EMPLOYEE_TIME_NAV,
    DataReplicationProxy.EMPLOYEE_TIME_VALUATION_RESULT_NAV,
    DataReplicationProxy.EMPLOYEE_TIME_WITH_ACCOUNT_DETAIL_NAV,
    DataReplicationProxy.LAST_MODIFIED_BY_NAV,
    DataReplicationProxy.LEGAL_ENTITY_NAV,
    DataReplicationProxy.MDF_SYSTEM_RECORD_STATUS_NAV,
    DataReplicationProxy.REPLICATION_CONTENT_TYPE_NAV,
    DataReplicationProxy.REPLICATION_SCENARIO_OBJECT_NAV,
    DataReplicationProxy.REPLICATION_TARGET_SYSTEM_NAV,
    DataReplicationProxy.TIME_ACCOUNT_NAV,
    DataReplicationProxy.TIME_ACCOUNT_SNAPSHOT_NAV,
    DataReplicationProxy.USER_ID_NAV,
    DataReplicationProxy.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DataReplicationProxy> = new AllFields('*', DataReplicationProxy);
  /**
   * All key fields of the DataReplicationProxy entity.
   */
  export const _keyFields: Array<Selectable<DataReplicationProxy>> = [DataReplicationProxy.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property DataReplicationProxy.
   */
  export const _keys: { [keys: string]: Selectable<DataReplicationProxy> } = DataReplicationProxy._keyFields.reduce((acc: { [keys: string]: Selectable<DataReplicationProxy> }, field: Selectable<DataReplicationProxy>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
