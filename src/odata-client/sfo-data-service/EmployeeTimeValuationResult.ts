/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeValuationResultRequestBuilder } from './EmployeeTimeValuationResultRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeValuationResult" of service "SFOData".
 */
export class EmployeeTimeValuationResult extends Entity implements EmployeeTimeValuationResultType {
  /**
   * Technical entity name for EmployeeTimeValuationResult.
   */
  static _entityName = 'EmployeeTimeValuationResult';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeValuationResult.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Employee Time Sheet_External Code.
   * Maximum length: 128.
   */
  employeeTimeSheetExternalCode!: string;
  /**
   * Allowance Type.
   * Maximum length: 128.
   * @nullable
   */
  allowanceType?: string;
  /**
   * Approval Status.
   * Maximum length: 255.
   * @nullable
   */
  approvalStatus?: string;
  /**
   * Booking Date.
   * @nullable
   */
  bookingDate?: Moment;
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  costCenter?: string;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Hours.
   * @nullable
   */
  hours?: BigNumber;
  /**
   * Hours and Minutes.
   * Maximum length: 255.
   * @nullable
   */
  hoursAndMinutes?: string;
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
   * Pay Type Name.
   * Maximum length: 255.
   * @nullable
   */
  payTypeExternalName?: string;
  /**
   * Pay Type Code.
   * Maximum length: 255.
   * @nullable
   */
  payTypeName?: string;
  /**
   * Posting Target.
   * Maximum length: 255.
   * @nullable
   */
  postingTarget?: string;
  /**
   * Time Pay Type.
   * Maximum length: 128.
   * @nullable
   */
  timeTypeGroup?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  approvalStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  postingTargetNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeValuationResult`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
   */
  static builder(): EntityBuilderType<EmployeeTimeValuationResult, EmployeeTimeValuationResultTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeValuationResult);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeValuationResult` entity type.
   * @returns A `EmployeeTimeValuationResult` request builder.
   */
  static requestBuilder(): EmployeeTimeValuationResultRequestBuilder {
    return new EmployeeTimeValuationResultRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeValuationResult`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeValuationResult> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeValuationResult);
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
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';

export interface EmployeeTimeValuationResultType {
  employeeTimeSheetExternalCode: string;
  allowanceType?: string;
  approvalStatus?: string;
  bookingDate?: Moment;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  hours?: BigNumber;
  hoursAndMinutes?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payTypeExternalName?: string;
  payTypeName?: string;
  postingTarget?: string;
  timeTypeGroup?: string;
  approvalStatusNav: MdfEnumValueType;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  postingTargetNav: MdfEnumValueType;
}

export interface EmployeeTimeValuationResultTypeForceMandatory {
  employeeTimeSheetExternalCode: string;
  allowanceType: string;
  approvalStatus: string;
  bookingDate: Moment;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  hours: BigNumber;
  hoursAndMinutes: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payTypeExternalName: string;
  payTypeName: string;
  postingTarget: string;
  timeTypeGroup: string;
  approvalStatusNav: MdfEnumValueType;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  postingTargetNav: MdfEnumValueType;
}

export namespace EmployeeTimeValuationResult {
  /**
   * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_SHEET_EXTERNAL_CODE: StringField<EmployeeTimeValuationResult> = new StringField('EmployeeTimeSheet_externalCode', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[allowanceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWANCE_TYPE: StringField<EmployeeTimeValuationResult> = new StringField('allowanceType', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[approvalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS: StringField<EmployeeTimeValuationResult> = new StringField('approvalStatus', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[bookingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_DATE: DateField<EmployeeTimeValuationResult> = new DateField('bookingDate', EmployeeTimeValuationResult, 'Edm.DateTime');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<EmployeeTimeValuationResult> = new StringField('costCenter', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeValuationResult> = new StringField('createdBy', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeValuationResult> = new DateField('createdDateTime', EmployeeTimeValuationResult, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeValuationResult> = new StringField('externalCode', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[hours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS: BigNumberField<EmployeeTimeValuationResult> = new BigNumberField('hours', EmployeeTimeValuationResult, 'Edm.Decimal');
  /**
   * Static representation of the [[hoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS_AND_MINUTES: StringField<EmployeeTimeValuationResult> = new StringField('hoursAndMinutes', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeValuationResult> = new StringField('lastModifiedBy', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeValuationResult> = new DateField('lastModifiedDateTime', EmployeeTimeValuationResult, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeValuationResult> = new StringField('mdfSystemRecordStatus', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[payTypeExternalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TYPE_EXTERNAL_NAME: StringField<EmployeeTimeValuationResult> = new StringField('payTypeExternalName', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[payTypeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TYPE_NAME: StringField<EmployeeTimeValuationResult> = new StringField('payTypeName', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[postingTarget]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_TARGET: StringField<EmployeeTimeValuationResult> = new StringField('postingTarget', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the [[timeTypeGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_GROUP: StringField<EmployeeTimeValuationResult> = new StringField('timeTypeGroup', EmployeeTimeValuationResult, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue> = new OneToOneLink('approvalStatusNav', EmployeeTimeValuationResult, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: Link<EmployeeTimeValuationResult, FoCostCenter> = new Link('costCenterNav', EmployeeTimeValuationResult, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeTimeValuationResult, User> = new OneToOneLink('createdByNav', EmployeeTimeValuationResult, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeValuationResult, User> = new OneToOneLink('lastModifiedByNav', EmployeeTimeValuationResult, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeValuationResult, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[postingTargetNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_TARGET_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue> = new OneToOneLink('postingTargetNav', EmployeeTimeValuationResult, MdfEnumValue);
  /**
   * All fields of the EmployeeTimeValuationResult entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeValuationResult> | DateField<EmployeeTimeValuationResult> | BigNumberField<EmployeeTimeValuationResult> | OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue> | Link<EmployeeTimeValuationResult, FoCostCenter> | OneToOneLink<EmployeeTimeValuationResult, User>> = [
    EmployeeTimeValuationResult.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE,
    EmployeeTimeValuationResult.ALLOWANCE_TYPE,
    EmployeeTimeValuationResult.APPROVAL_STATUS,
    EmployeeTimeValuationResult.BOOKING_DATE,
    EmployeeTimeValuationResult.COST_CENTER,
    EmployeeTimeValuationResult.CREATED_BY,
    EmployeeTimeValuationResult.CREATED_DATE_TIME,
    EmployeeTimeValuationResult.EXTERNAL_CODE,
    EmployeeTimeValuationResult.HOURS,
    EmployeeTimeValuationResult.HOURS_AND_MINUTES,
    EmployeeTimeValuationResult.LAST_MODIFIED_BY,
    EmployeeTimeValuationResult.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeValuationResult.PAY_TYPE_EXTERNAL_NAME,
    EmployeeTimeValuationResult.PAY_TYPE_NAME,
    EmployeeTimeValuationResult.POSTING_TARGET,
    EmployeeTimeValuationResult.TIME_TYPE_GROUP,
    EmployeeTimeValuationResult.APPROVAL_STATUS_NAV,
    EmployeeTimeValuationResult.COST_CENTER_NAV,
    EmployeeTimeValuationResult.CREATED_BY_NAV,
    EmployeeTimeValuationResult.LAST_MODIFIED_BY_NAV,
    EmployeeTimeValuationResult.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeTimeValuationResult.POSTING_TARGET_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeValuationResult> = new AllFields('*', EmployeeTimeValuationResult);
  /**
   * All key fields of the EmployeeTimeValuationResult entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeValuationResult>> = [EmployeeTimeValuationResult.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE, EmployeeTimeValuationResult.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeValuationResult.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeValuationResult> } = EmployeeTimeValuationResult._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeValuationResult> }, field: Selectable<EmployeeTimeValuationResult>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
