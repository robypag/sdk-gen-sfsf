/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeCollectorRequestBuilder } from './TimeCollectorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeCollector" of service "SFOData".
 */
export class TimeCollector extends Entity implements TimeCollectorType {
  /**
   * Technical entity name for TimeCollector.
   */
  static _entityName = 'TimeCollector';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeCollector.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Last Posting Date.
   * @nullable
   */
  bookingDate?: Moment;
  /**
   * Last Posting Value.
   * @nullable
   */
  changeValue?: BigNumber;
  /**
   * Collector Value.
   * @nullable
   */
  collectorValue?: BigNumber;
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
   * Valid To.
   * @nullable
   */
  endDate?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Valid From.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Collector Name.
   * Maximum length: 128.
   * @nullable
   */
  timeCollectorType?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TimeCollector`.
   * @returns A builder that constructs instances of entity type `TimeCollector`.
   */
  static builder(): EntityBuilderType<TimeCollector, TimeCollectorTypeForceMandatory> {
    return Entity.entityBuilder(TimeCollector);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeCollector` entity type.
   * @returns A `TimeCollector` request builder.
   */
  static requestBuilder(): TimeCollectorRequestBuilder {
    return new TimeCollectorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeCollector`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeCollector`.
   */
  static customField(fieldName: string): CustomField<TimeCollector> {
    return Entity.customFieldSelector(fieldName, TimeCollector);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeCollectorType {
  bookingDate?: Moment;
  changeValue?: BigNumber;
  collectorValue?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  startDate?: Moment;
  timeCollectorType?: string;
  userId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface TimeCollectorTypeForceMandatory {
  bookingDate: Moment;
  changeValue: BigNumber;
  collectorValue: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  startDate: Moment;
  timeCollectorType: string;
  userId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace TimeCollector {
  /**
   * Static representation of the [[bookingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_DATE: DateField<TimeCollector> = new DateField('bookingDate', TimeCollector, 'Edm.DateTime');
  /**
   * Static representation of the [[changeValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_VALUE: BigNumberField<TimeCollector> = new BigNumberField('changeValue', TimeCollector, 'Edm.Decimal');
  /**
   * Static representation of the [[collectorValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTOR_VALUE: BigNumberField<TimeCollector> = new BigNumberField('collectorValue', TimeCollector, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeCollector> = new StringField('createdBy', TimeCollector, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeCollector> = new DateField('createdDateTime', TimeCollector, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TimeCollector> = new DateField('endDate', TimeCollector, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeCollector> = new StringField('externalCode', TimeCollector, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeCollector> = new StringField('lastModifiedBy', TimeCollector, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeCollector> = new DateField('lastModifiedDateTime', TimeCollector, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeCollector> = new StringField('mdfSystemRecordStatus', TimeCollector, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TimeCollector> = new DateField('startDate', TimeCollector, 'Edm.DateTime');
  /**
   * Static representation of the [[timeCollectorType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_COLLECTOR_TYPE: StringField<TimeCollector> = new StringField('timeCollectorType', TimeCollector, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TimeCollector> = new StringField('userId', TimeCollector, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeCollector, User> = new OneToOneLink('createdByNav', TimeCollector, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeCollector, User> = new OneToOneLink('lastModifiedByNav', TimeCollector, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeCollector, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeCollector, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<TimeCollector, User> = new OneToOneLink('userIdNav', TimeCollector, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeCollector, WfRequest> = new Link('wfRequestNav', TimeCollector, WfRequest);
  /**
   * All fields of the TimeCollector entity.
   */
  export const _allFields: Array<DateField<TimeCollector> | BigNumberField<TimeCollector> | StringField<TimeCollector> | OneToOneLink<TimeCollector, User> | OneToOneLink<TimeCollector, MdfEnumValue> | Link<TimeCollector, WfRequest>> = [
    TimeCollector.BOOKING_DATE,
    TimeCollector.CHANGE_VALUE,
    TimeCollector.COLLECTOR_VALUE,
    TimeCollector.CREATED_BY,
    TimeCollector.CREATED_DATE_TIME,
    TimeCollector.END_DATE,
    TimeCollector.EXTERNAL_CODE,
    TimeCollector.LAST_MODIFIED_BY,
    TimeCollector.LAST_MODIFIED_DATE_TIME,
    TimeCollector.MDF_SYSTEM_RECORD_STATUS,
    TimeCollector.START_DATE,
    TimeCollector.TIME_COLLECTOR_TYPE,
    TimeCollector.USER_ID,
    TimeCollector.CREATED_BY_NAV,
    TimeCollector.LAST_MODIFIED_BY_NAV,
    TimeCollector.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeCollector.USER_ID_NAV,
    TimeCollector.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeCollector> = new AllFields('*', TimeCollector);
  /**
   * All key fields of the TimeCollector entity.
   */
  export const _keyFields: Array<Selectable<TimeCollector>> = [TimeCollector.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeCollector.
   */
  export const _keys: { [keys: string]: Selectable<TimeCollector> } = TimeCollector._keyFields.reduce((acc: { [keys: string]: Selectable<TimeCollector> }, field: Selectable<TimeCollector>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
