/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeSheetRequestBuilder } from './EmployeeTimeSheetRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeSheet" of service "SFOData".
 */
export class EmployeeTimeSheet extends Entity implements EmployeeTimeSheetType {
  /**
   * Technical entity name for EmployeeTimeSheet.
   */
  static _entityName = 'EmployeeTimeSheet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeSheet.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Absences Exist.
   * Maximum length: 128.
   * @nullable
   */
  absencesExist?: string;
  /**
   * Approval Status.
   * Maximum length: 255.
   * @nullable
   */
  approvalStatus?: string;
  /**
   * Comment.
   * Maximum length: 4000.
   * @nullable
   */
  comment?: string;
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
   * Editable.
   * @nullable
   */
  editable?: boolean;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Times Exist.
   * Maximum length: 128.
   * @nullable
   */
  externalTimesExist?: string;
  /**
   * Full Work Schedule Covered.
   * Maximum length: 128.
   * @nullable
   */
  fullWorkscheduleCovered?: string;
  /**
   * Generated Entries Exist.
   * Maximum length: 128.
   * @nullable
   */
  generatedEntriesExist?: string;
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
   * Manual Entries Exist.
   * Maximum length: 128.
   * @nullable
   */
  manualEntriesExist?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Time Sheet Period.
   * Maximum length: 255.
   * @nullable
   */
  period?: string;
  /**
   * Planned Working Time (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  plannedHoursAndMinutes?: string;
  /**
   * Planned Working Time (min).
   * @nullable
   */
  plannedWorkingTime?: BigNumber;
  /**
   * Recorded Working Time (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  recordedHoursAndMinutes?: string;
  /**
   * Recorded Working Time (min).
   * @nullable
   */
  recordedWorkingTime?: BigNumber;
  /**
   * Replaced By.
   * Maximum length: 128.
   * @nullable
   */
  replacedBy?: string;
  /**
   * Replaces.
   * Maximum length: 128.
   * @nullable
   */
  replaces?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Time Recording Method.
   * Maximum length: 128.
   * @nullable
   */
  timeRecordingMethod?: string;
  /**
   * timeSheetHash.
   * Maximum length: 255.
   * @nullable
   */
  timeSheetHash?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * Workflow Action.
   * Maximum length: 255.
   * @nullable
   */
  workflowAction?: string;
  /**
   * Workflow Request.
   * @nullable
   */
  workflowRequestId?: BigNumber;
  /**
   * Working Time Account (min).
   * @nullable
   */
  workingTimeAccount?: BigNumber;
  /**
   * Working Time Account (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  workingTimeAccountHoursAndMinutes?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  absencesExistNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  approvalStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[EmployeeTimeSheetEntry]] entity.
   */
  employeeTimeSheetEntry!: EmployeeTimeSheetEntry[];
  /**
   * One-to-many navigation property to the [[EmployeeTimeValuationResult]] entity.
   */
  employeeTimeValuationResult!: EmployeeTimeValuationResult[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  externalTimesExistNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  fullWorkscheduleCoveredNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  generatedEntriesExistNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  manualEntriesExistNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[EmployeeTimeSheet]] entity.
   */
  replacedByNav!: EmployeeTimeSheet;
  /**
   * One-to-one navigation property to the [[EmployeeTimeSheet]] entity.
   */
  replacesNav!: EmployeeTimeSheet;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  timeRecordingMethodNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  workflowActionNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeSheet`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeSheet`.
   */
  static builder(): EntityBuilderType<EmployeeTimeSheet, EmployeeTimeSheetTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeSheet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeSheet` entity type.
   * @returns A `EmployeeTimeSheet` request builder.
   */
  static requestBuilder(): EmployeeTimeSheetRequestBuilder {
    return new EmployeeTimeSheetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeSheet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeSheet`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeSheet> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeSheet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { EmployeeTimeSheetEntry, EmployeeTimeSheetEntryType } from './EmployeeTimeSheetEntry';
import { EmployeeTimeValuationResult, EmployeeTimeValuationResultType } from './EmployeeTimeValuationResult';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeeTimeSheetType {
  absencesExist?: string;
  approvalStatus?: string;
  comment?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  editable?: boolean;
  endDate?: Moment;
  externalCode: string;
  externalTimesExist?: string;
  fullWorkscheduleCovered?: string;
  generatedEntriesExist?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  manualEntriesExist?: string;
  mdfSystemRecordStatus?: string;
  period?: string;
  plannedHoursAndMinutes?: string;
  plannedWorkingTime?: BigNumber;
  recordedHoursAndMinutes?: string;
  recordedWorkingTime?: BigNumber;
  replacedBy?: string;
  replaces?: string;
  startDate?: Moment;
  timeRecordingMethod?: string;
  timeSheetHash?: string;
  userId?: string;
  workflowAction?: string;
  workflowRequestId?: BigNumber;
  workingTimeAccount?: BigNumber;
  workingTimeAccountHoursAndMinutes?: string;
  absencesExistNav: MdfEnumValueType;
  approvalStatusNav: MdfEnumValueType;
  createdByNav: UserType;
  employeeTimeSheetEntry: EmployeeTimeSheetEntryType[];
  employeeTimeValuationResult: EmployeeTimeValuationResultType[];
  externalTimesExistNav: MdfEnumValueType;
  fullWorkscheduleCoveredNav: MdfEnumValueType;
  generatedEntriesExistNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  manualEntriesExistNav: MdfEnumValueType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  replacedByNav: EmployeeTimeSheetType;
  replacesNav: EmployeeTimeSheetType;
  timeRecordingMethodNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
  workflowActionNav: MdfEnumValueType;
}

export interface EmployeeTimeSheetTypeForceMandatory {
  absencesExist: string;
  approvalStatus: string;
  comment: string;
  createdBy: string;
  createdDateTime: Moment;
  editable: boolean;
  endDate: Moment;
  externalCode: string;
  externalTimesExist: string;
  fullWorkscheduleCovered: string;
  generatedEntriesExist: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  manualEntriesExist: string;
  mdfSystemRecordStatus: string;
  period: string;
  plannedHoursAndMinutes: string;
  plannedWorkingTime: BigNumber;
  recordedHoursAndMinutes: string;
  recordedWorkingTime: BigNumber;
  replacedBy: string;
  replaces: string;
  startDate: Moment;
  timeRecordingMethod: string;
  timeSheetHash: string;
  userId: string;
  workflowAction: string;
  workflowRequestId: BigNumber;
  workingTimeAccount: BigNumber;
  workingTimeAccountHoursAndMinutes: string;
  absencesExistNav: MdfEnumValueType;
  approvalStatusNav: MdfEnumValueType;
  createdByNav: UserType;
  employeeTimeSheetEntry: EmployeeTimeSheetEntryType[];
  employeeTimeValuationResult: EmployeeTimeValuationResultType[];
  externalTimesExistNav: MdfEnumValueType;
  fullWorkscheduleCoveredNav: MdfEnumValueType;
  generatedEntriesExistNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  manualEntriesExistNav: MdfEnumValueType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  replacedByNav: EmployeeTimeSheetType;
  replacesNav: EmployeeTimeSheetType;
  timeRecordingMethodNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
  workflowActionNav: MdfEnumValueType;
}

export namespace EmployeeTimeSheet {
  /**
   * Static representation of the [[absencesExist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCES_EXIST: StringField<EmployeeTimeSheet> = new StringField('absencesExist', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[approvalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS: StringField<EmployeeTimeSheet> = new StringField('approvalStatus', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<EmployeeTimeSheet> = new StringField('comment', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeSheet> = new StringField('createdBy', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeSheet> = new DateField('createdDateTime', EmployeeTimeSheet, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[editable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE: BooleanField<EmployeeTimeSheet> = new BooleanField('editable', EmployeeTimeSheet, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmployeeTimeSheet> = new DateField('endDate', EmployeeTimeSheet, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeSheet> = new StringField('externalCode', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[externalTimesExist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TIMES_EXIST: StringField<EmployeeTimeSheet> = new StringField('externalTimesExist', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[fullWorkscheduleCovered]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_WORKSCHEDULE_COVERED: StringField<EmployeeTimeSheet> = new StringField('fullWorkscheduleCovered', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[generatedEntriesExist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERATED_ENTRIES_EXIST: StringField<EmployeeTimeSheet> = new StringField('generatedEntriesExist', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeSheet> = new StringField('lastModifiedBy', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeSheet> = new DateField('lastModifiedDateTime', EmployeeTimeSheet, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manualEntriesExist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_ENTRIES_EXIST: StringField<EmployeeTimeSheet> = new StringField('manualEntriesExist', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeSheet> = new StringField('mdfSystemRecordStatus', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[period]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD: StringField<EmployeeTimeSheet> = new StringField('period', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[plannedHoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_HOURS_AND_MINUTES: StringField<EmployeeTimeSheet> = new StringField('plannedHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[plannedWorkingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_WORKING_TIME: BigNumberField<EmployeeTimeSheet> = new BigNumberField('plannedWorkingTime', EmployeeTimeSheet, 'Edm.Int64');
  /**
   * Static representation of the [[recordedHoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORDED_HOURS_AND_MINUTES: StringField<EmployeeTimeSheet> = new StringField('recordedHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[recordedWorkingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORDED_WORKING_TIME: BigNumberField<EmployeeTimeSheet> = new BigNumberField('recordedWorkingTime', EmployeeTimeSheet, 'Edm.Int64');
  /**
   * Static representation of the [[replacedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACED_BY: StringField<EmployeeTimeSheet> = new StringField('replacedBy', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[replaces]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACES: StringField<EmployeeTimeSheet> = new StringField('replaces', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmployeeTimeSheet> = new DateField('startDate', EmployeeTimeSheet, 'Edm.DateTime');
  /**
   * Static representation of the [[timeRecordingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_METHOD: StringField<EmployeeTimeSheet> = new StringField('timeRecordingMethod', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[timeSheetHash]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_SHEET_HASH: StringField<EmployeeTimeSheet> = new StringField('timeSheetHash', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmployeeTimeSheet> = new StringField('userId', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[workflowAction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_ACTION: StringField<EmployeeTimeSheet> = new StringField('workflowAction', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[workflowRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_REQUEST_ID: BigNumberField<EmployeeTimeSheet> = new BigNumberField('workflowRequestId', EmployeeTimeSheet, 'Edm.Int64');
  /**
   * Static representation of the [[workingTimeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_TIME_ACCOUNT: BigNumberField<EmployeeTimeSheet> = new BigNumberField('workingTimeAccount', EmployeeTimeSheet, 'Edm.Int64');
  /**
   * Static representation of the [[workingTimeAccountHoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_TIME_ACCOUNT_HOURS_AND_MINUTES: StringField<EmployeeTimeSheet> = new StringField('workingTimeAccountHoursAndMinutes', EmployeeTimeSheet, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[absencesExistNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCES_EXIST_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('absencesExistNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('approvalStatusNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeTimeSheet, User> = new OneToOneLink('createdByNav', EmployeeTimeSheet, User);
  /**
   * Static representation of the one-to-many navigation property [[employeeTimeSheetEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_SHEET_ENTRY: Link<EmployeeTimeSheet, EmployeeTimeSheetEntry> = new Link('employeeTimeSheetEntry', EmployeeTimeSheet, EmployeeTimeSheetEntry);
  /**
   * Static representation of the one-to-many navigation property [[employeeTimeValuationResult]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_VALUATION_RESULT: Link<EmployeeTimeSheet, EmployeeTimeValuationResult> = new Link('employeeTimeValuationResult', EmployeeTimeSheet, EmployeeTimeValuationResult);
  /**
   * Static representation of the one-to-one navigation property [[externalTimesExistNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TIMES_EXIST_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('externalTimesExistNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[fullWorkscheduleCoveredNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_WORKSCHEDULE_COVERED_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('fullWorkscheduleCoveredNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[generatedEntriesExistNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERATED_ENTRIES_EXIST_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('generatedEntriesExistNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeSheet, User> = new OneToOneLink('lastModifiedByNav', EmployeeTimeSheet, User);
  /**
   * Static representation of the one-to-one navigation property [[manualEntriesExistNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUAL_ENTRIES_EXIST_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('manualEntriesExistNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replacedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACED_BY_NAV: OneToOneLink<EmployeeTimeSheet, EmployeeTimeSheet> = new OneToOneLink('replacedByNav', EmployeeTimeSheet, EmployeeTimeSheet);
  /**
   * Static representation of the one-to-one navigation property [[replacesNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLACES_NAV: OneToOneLink<EmployeeTimeSheet, EmployeeTimeSheet> = new OneToOneLink('replacesNav', EmployeeTimeSheet, EmployeeTimeSheet);
  /**
   * Static representation of the one-to-one navigation property [[timeRecordingMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_METHOD_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('timeRecordingMethodNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<EmployeeTimeSheet, User> = new OneToOneLink('userIdNav', EmployeeTimeSheet, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeeTimeSheet, WfRequest> = new Link('wfRequestNav', EmployeeTimeSheet, WfRequest);
  /**
   * Static representation of the one-to-one navigation property [[workflowActionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_ACTION_NAV: OneToOneLink<EmployeeTimeSheet, MdfEnumValue> = new OneToOneLink('workflowActionNav', EmployeeTimeSheet, MdfEnumValue);
  /**
   * All fields of the EmployeeTimeSheet entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeSheet> | DateField<EmployeeTimeSheet> | BooleanField<EmployeeTimeSheet> | BigNumberField<EmployeeTimeSheet> | OneToOneLink<EmployeeTimeSheet, MdfEnumValue> | OneToOneLink<EmployeeTimeSheet, User> | Link<EmployeeTimeSheet, EmployeeTimeSheetEntry> | Link<EmployeeTimeSheet, EmployeeTimeValuationResult> | OneToOneLink<EmployeeTimeSheet, EmployeeTimeSheet> | Link<EmployeeTimeSheet, WfRequest>> = [
    EmployeeTimeSheet.ABSENCES_EXIST,
    EmployeeTimeSheet.APPROVAL_STATUS,
    EmployeeTimeSheet.COMMENT,
    EmployeeTimeSheet.CREATED_BY,
    EmployeeTimeSheet.CREATED_DATE_TIME,
    EmployeeTimeSheet.EDITABLE,
    EmployeeTimeSheet.END_DATE,
    EmployeeTimeSheet.EXTERNAL_CODE,
    EmployeeTimeSheet.EXTERNAL_TIMES_EXIST,
    EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED,
    EmployeeTimeSheet.GENERATED_ENTRIES_EXIST,
    EmployeeTimeSheet.LAST_MODIFIED_BY,
    EmployeeTimeSheet.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeSheet.MANUAL_ENTRIES_EXIST,
    EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeSheet.PERIOD,
    EmployeeTimeSheet.PLANNED_HOURS_AND_MINUTES,
    EmployeeTimeSheet.PLANNED_WORKING_TIME,
    EmployeeTimeSheet.RECORDED_HOURS_AND_MINUTES,
    EmployeeTimeSheet.RECORDED_WORKING_TIME,
    EmployeeTimeSheet.REPLACED_BY,
    EmployeeTimeSheet.REPLACES,
    EmployeeTimeSheet.START_DATE,
    EmployeeTimeSheet.TIME_RECORDING_METHOD,
    EmployeeTimeSheet.TIME_SHEET_HASH,
    EmployeeTimeSheet.USER_ID,
    EmployeeTimeSheet.WORKFLOW_ACTION,
    EmployeeTimeSheet.WORKFLOW_REQUEST_ID,
    EmployeeTimeSheet.WORKING_TIME_ACCOUNT,
    EmployeeTimeSheet.WORKING_TIME_ACCOUNT_HOURS_AND_MINUTES,
    EmployeeTimeSheet.ABSENCES_EXIST_NAV,
    EmployeeTimeSheet.APPROVAL_STATUS_NAV,
    EmployeeTimeSheet.CREATED_BY_NAV,
    EmployeeTimeSheet.EMPLOYEE_TIME_SHEET_ENTRY,
    EmployeeTimeSheet.EMPLOYEE_TIME_VALUATION_RESULT,
    EmployeeTimeSheet.EXTERNAL_TIMES_EXIST_NAV,
    EmployeeTimeSheet.FULL_WORKSCHEDULE_COVERED_NAV,
    EmployeeTimeSheet.GENERATED_ENTRIES_EXIST_NAV,
    EmployeeTimeSheet.LAST_MODIFIED_BY_NAV,
    EmployeeTimeSheet.MANUAL_ENTRIES_EXIST_NAV,
    EmployeeTimeSheet.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeTimeSheet.REPLACED_BY_NAV,
    EmployeeTimeSheet.REPLACES_NAV,
    EmployeeTimeSheet.TIME_RECORDING_METHOD_NAV,
    EmployeeTimeSheet.USER_ID_NAV,
    EmployeeTimeSheet.WF_REQUEST_NAV,
    EmployeeTimeSheet.WORKFLOW_ACTION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeSheet> = new AllFields('*', EmployeeTimeSheet);
  /**
   * All key fields of the EmployeeTimeSheet entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeSheet>> = [EmployeeTimeSheet.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeSheet.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeSheet> } = EmployeeTimeSheet._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeSheet> }, field: Selectable<EmployeeTimeSheet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
