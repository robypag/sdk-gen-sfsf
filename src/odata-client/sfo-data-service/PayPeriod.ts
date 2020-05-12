/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayPeriodRequestBuilder } from './PayPeriodRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayPeriod" of service "SFOData".
 */
export class PayPeriod extends Entity implements PayPeriodType {
  /**
   * Technical entity name for PayPeriod.
   */
  static _entityName = 'PayPeriod';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayPeriod.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Pay Calendar_Pay Group.
   * Maximum length: 128.
   */
  payCalendarPayGroup!: string;
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
   * externalCode.
   */
  externalCode!: BigNumber;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Offcycle.
   * @nullable
   */
  offcycle?: boolean;
  /**
   * Pay Check Issue Date.
   * @nullable
   */
  payCheckIssueDate?: Moment;
  /**
   * Pay Period Begin Date.
   * @nullable
   */
  payPeriodBeginDate?: Moment;
  /**
   * Pay Period End Date.
   * @nullable
   */
  payPeriodEndDate?: Moment;
  /**
   * processingRunId.
   * Maximum length: 255.
   * @nullable
   */
  processingRunId?: string;
  /**
   * Run Type.
   * Maximum length: 128.
   * @nullable
   */
  runType?: string;
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
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  runTypeNav!: PickListValueV2[];

  /**
   * Returns an entity builder to construct instances `PayPeriod`.
   * @returns A builder that constructs instances of entity type `PayPeriod`.
   */
  static builder(): EntityBuilderType<PayPeriod, PayPeriodTypeForceMandatory> {
    return Entity.entityBuilder(PayPeriod);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayPeriod` entity type.
   * @returns A `PayPeriod` request builder.
   */
  static requestBuilder(): PayPeriodRequestBuilder {
    return new PayPeriodRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayPeriod`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayPeriod`.
   */
  static customField(fieldName: string): CustomField<PayPeriod> {
    return Entity.customFieldSelector(fieldName, PayPeriod);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

export interface PayPeriodType {
  payCalendarPayGroup: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  offcycle?: boolean;
  payCheckIssueDate?: Moment;
  payPeriodBeginDate?: Moment;
  payPeriodEndDate?: Moment;
  processingRunId?: string;
  runType?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  runTypeNav: PickListValueV2Type[];
}

export interface PayPeriodTypeForceMandatory {
  payCalendarPayGroup: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  offcycle: boolean;
  payCheckIssueDate: Moment;
  payPeriodBeginDate: Moment;
  payPeriodEndDate: Moment;
  processingRunId: string;
  runType: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  runTypeNav: PickListValueV2Type[];
}

export namespace PayPeriod {
  /**
   * Static representation of the [[payCalendarPayGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_CALENDAR_PAY_GROUP: StringField<PayPeriod> = new StringField('PayCalendar_payGroup', PayPeriod, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayPeriod> = new StringField('createdBy', PayPeriod, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayPeriod> = new DateField('createdDateTime', PayPeriod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PayPeriod> = new BigNumberField('externalCode', PayPeriod, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayPeriod> = new StringField('lastModifiedBy', PayPeriod, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayPeriod> = new DateField('lastModifiedDateTime', PayPeriod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayPeriod> = new StringField('mdfSystemRecordStatus', PayPeriod, 'Edm.String');
  /**
   * Static representation of the [[offcycle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFCYCLE: BooleanField<PayPeriod> = new BooleanField('offcycle', PayPeriod, 'Edm.Boolean');
  /**
   * Static representation of the [[payCheckIssueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_CHECK_ISSUE_DATE: DateField<PayPeriod> = new DateField('payCheckIssueDate', PayPeriod, 'Edm.DateTime');
  /**
   * Static representation of the [[payPeriodBeginDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_PERIOD_BEGIN_DATE: DateField<PayPeriod> = new DateField('payPeriodBeginDate', PayPeriod, 'Edm.DateTime');
  /**
   * Static representation of the [[payPeriodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_PERIOD_END_DATE: DateField<PayPeriod> = new DateField('payPeriodEndDate', PayPeriod, 'Edm.DateTime');
  /**
   * Static representation of the [[processingRunId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSING_RUN_ID: StringField<PayPeriod> = new StringField('processingRunId', PayPeriod, 'Edm.String');
  /**
   * Static representation of the [[runType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RUN_TYPE: StringField<PayPeriod> = new StringField('runType', PayPeriod, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayPeriod, User> = new OneToOneLink('createdByNav', PayPeriod, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayPeriod, User> = new OneToOneLink('lastModifiedByNav', PayPeriod, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayPeriod, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayPeriod, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[runTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RUN_TYPE_NAV: Link<PayPeriod, PickListValueV2> = new Link('runTypeNav', PayPeriod, PickListValueV2);
  /**
   * All fields of the PayPeriod entity.
   */
  export const _allFields: Array<StringField<PayPeriod> | DateField<PayPeriod> | BigNumberField<PayPeriod> | BooleanField<PayPeriod> | OneToOneLink<PayPeriod, User> | OneToOneLink<PayPeriod, MdfEnumValue> | Link<PayPeriod, PickListValueV2>> = [
    PayPeriod.PAY_CALENDAR_PAY_GROUP,
    PayPeriod.CREATED_BY,
    PayPeriod.CREATED_DATE_TIME,
    PayPeriod.EXTERNAL_CODE,
    PayPeriod.LAST_MODIFIED_BY,
    PayPeriod.LAST_MODIFIED_DATE_TIME,
    PayPeriod.MDF_SYSTEM_RECORD_STATUS,
    PayPeriod.OFFCYCLE,
    PayPeriod.PAY_CHECK_ISSUE_DATE,
    PayPeriod.PAY_PERIOD_BEGIN_DATE,
    PayPeriod.PAY_PERIOD_END_DATE,
    PayPeriod.PROCESSING_RUN_ID,
    PayPeriod.RUN_TYPE,
    PayPeriod.CREATED_BY_NAV,
    PayPeriod.LAST_MODIFIED_BY_NAV,
    PayPeriod.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayPeriod.RUN_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayPeriod> = new AllFields('*', PayPeriod);
  /**
   * All key fields of the PayPeriod entity.
   */
  export const _keyFields: Array<Selectable<PayPeriod>> = [PayPeriod.PAY_CALENDAR_PAY_GROUP, PayPeriod.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PayPeriod.
   */
  export const _keys: { [keys: string]: Selectable<PayPeriod> } = PayPeriod._keyFields.reduce((acc: { [keys: string]: Selectable<PayPeriod> }, field: Selectable<PayPeriod>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
