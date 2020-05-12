/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayCalendarRequestBuilder } from './PayCalendarRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayCalendar" of service "SFOData".
 */
export class PayCalendar extends Entity implements PayCalendarType {
  /**
   * Technical entity name for PayCalendar.
   */
  static _entityName = 'PayCalendar';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayCalendar.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Pay Group.
   * Maximum length: 128.
   */
  payGroup!: string;
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
   * One-to-many navigation property to the [[FoPayGroup]] entity.
   */
  payGroupNav!: FoPayGroup[];
  /**
   * One-to-many navigation property to the [[PayPeriod]] entity.
   */
  toPayPeriod!: PayPeriod[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PayCalendar`.
   * @returns A builder that constructs instances of entity type `PayCalendar`.
   */
  static builder(): EntityBuilderType<PayCalendar, PayCalendarTypeForceMandatory> {
    return Entity.entityBuilder(PayCalendar);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayCalendar` entity type.
   * @returns A `PayCalendar` request builder.
   */
  static requestBuilder(): PayCalendarRequestBuilder {
    return new PayCalendarRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayCalendar`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayCalendar`.
   */
  static customField(fieldName: string): CustomField<PayCalendar> {
    return Entity.customFieldSelector(fieldName, PayCalendar);
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
import { FoPayGroup, FoPayGroupType } from './FoPayGroup';
import { PayPeriod, PayPeriodType } from './PayPeriod';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PayCalendarType {
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payGroup: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payGroupNav: FoPayGroupType[];
  toPayPeriod: PayPeriodType[];
  wfRequestNav: WfRequestType[];
}

export interface PayCalendarTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payGroup: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payGroupNav: FoPayGroupType[];
  toPayPeriod: PayPeriodType[];
  wfRequestNav: WfRequestType[];
}

export namespace PayCalendar {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayCalendar> = new StringField('createdBy', PayCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayCalendar> = new DateField('createdDateTime', PayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayCalendar> = new StringField('lastModifiedBy', PayCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayCalendar> = new DateField('lastModifiedDateTime', PayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayCalendar> = new StringField('mdfSystemRecordStatus', PayCalendar, 'Edm.String');
  /**
   * Static representation of the [[payGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GROUP: StringField<PayCalendar> = new StringField('payGroup', PayCalendar, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayCalendar, User> = new OneToOneLink('createdByNav', PayCalendar, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayCalendar, User> = new OneToOneLink('lastModifiedByNav', PayCalendar, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayCalendar, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayCalendar, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[payGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GROUP_NAV: Link<PayCalendar, FoPayGroup> = new Link('payGroupNav', PayCalendar, FoPayGroup);
  /**
   * Static representation of the one-to-many navigation property [[toPayPeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAY_PERIOD: Link<PayCalendar, PayPeriod> = new Link('toPayPeriod', PayCalendar, PayPeriod);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayCalendar, WfRequest> = new Link('wfRequestNav', PayCalendar, WfRequest);
  /**
   * All fields of the PayCalendar entity.
   */
  export const _allFields: Array<StringField<PayCalendar> | DateField<PayCalendar> | OneToOneLink<PayCalendar, User> | OneToOneLink<PayCalendar, MdfEnumValue> | Link<PayCalendar, FoPayGroup> | Link<PayCalendar, PayPeriod> | Link<PayCalendar, WfRequest>> = [
    PayCalendar.CREATED_BY,
    PayCalendar.CREATED_DATE_TIME,
    PayCalendar.LAST_MODIFIED_BY,
    PayCalendar.LAST_MODIFIED_DATE_TIME,
    PayCalendar.MDF_SYSTEM_RECORD_STATUS,
    PayCalendar.PAY_GROUP,
    PayCalendar.CREATED_BY_NAV,
    PayCalendar.LAST_MODIFIED_BY_NAV,
    PayCalendar.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayCalendar.PAY_GROUP_NAV,
    PayCalendar.TO_PAY_PERIOD,
    PayCalendar.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayCalendar> = new AllFields('*', PayCalendar);
  /**
   * All key fields of the PayCalendar entity.
   */
  export const _keyFields: Array<Selectable<PayCalendar>> = [PayCalendar.PAY_GROUP];
  /**
   * Mapping of all key field names to the respective static field property PayCalendar.
   */
  export const _keys: { [keys: string]: Selectable<PayCalendar> } = PayCalendar._keyFields.reduce((acc: { [keys: string]: Selectable<PayCalendar> }, field: Selectable<PayCalendar>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
