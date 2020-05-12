/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalTimeDataRequestBuilder } from './ExternalTimeDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalTimeData" of service "SFOData".
 */
export class ExternalTimeData extends Entity implements ExternalTimeDataType {
  /**
   * Technical entity name for ExternalTimeData.
   */
  static _entityName = 'ExternalTimeData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalTimeData.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  category?: string;
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
   * Delete this External Time Data.
   * @nullable
   */
  deleteExternalTime?: boolean;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Number of Hours.
   * @nullable
   */
  hours?: BigNumber;
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
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * Status.
   * Maximum length: 128.
   * @nullable
   */
  status?: string;
  /**
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  categoryNav!: MdfEnumValue;
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
  statusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `ExternalTimeData`.
   * @returns A builder that constructs instances of entity type `ExternalTimeData`.
   */
  static builder(): EntityBuilderType<ExternalTimeData, ExternalTimeDataTypeForceMandatory> {
    return Entity.entityBuilder(ExternalTimeData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalTimeData` entity type.
   * @returns A `ExternalTimeData` request builder.
   */
  static requestBuilder(): ExternalTimeDataRequestBuilder {
    return new ExternalTimeDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalTimeData`.
   */
  static customField(fieldName: string): CustomField<ExternalTimeData> {
    return Entity.customFieldSelector(fieldName, ExternalTimeData);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface ExternalTimeDataType {
  category?: string;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  deleteExternalTime?: boolean;
  endDate?: Moment;
  endTime?: Time;
  externalCode: string;
  hours?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  startDate?: Moment;
  startTime?: Time;
  status?: string;
  timeType?: string;
  userId?: string;
  categoryNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface ExternalTimeDataTypeForceMandatory {
  category: string;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  deleteExternalTime: boolean;
  endDate: Moment;
  endTime: Time;
  externalCode: string;
  hours: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  startDate: Moment;
  startTime: Time;
  status: string;
  timeType: string;
  userId: string;
  categoryNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace ExternalTimeData {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<ExternalTimeData> = new StringField('category', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<ExternalTimeData> = new StringField('costCenter', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ExternalTimeData> = new StringField('createdBy', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ExternalTimeData> = new DateField('createdDateTime', ExternalTimeData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deleteExternalTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETE_EXTERNAL_TIME: BooleanField<ExternalTimeData> = new BooleanField('deleteExternalTime', ExternalTimeData, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<ExternalTimeData> = new DateField('endDate', ExternalTimeData, 'Edm.DateTime');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<ExternalTimeData> = new TimeField('endTime', ExternalTimeData, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ExternalTimeData> = new StringField('externalCode', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[hours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS: BigNumberField<ExternalTimeData> = new BigNumberField('hours', ExternalTimeData, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ExternalTimeData> = new StringField('lastModifiedBy', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalTimeData> = new DateField('lastModifiedDateTime', ExternalTimeData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ExternalTimeData> = new StringField('mdfSystemRecordStatus', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<ExternalTimeData> = new DateField('startDate', ExternalTimeData, 'Edm.DateTime');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<ExternalTimeData> = new TimeField('startTime', ExternalTimeData, 'Edm.Time');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<ExternalTimeData> = new StringField('status', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[timeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE: StringField<ExternalTimeData> = new StringField('timeType', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<ExternalTimeData> = new StringField('userId', ExternalTimeData, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue> = new OneToOneLink('categoryNav', ExternalTimeData, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ExternalTimeData, User> = new OneToOneLink('createdByNav', ExternalTimeData, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ExternalTimeData, User> = new OneToOneLink('lastModifiedByNav', ExternalTimeData, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ExternalTimeData, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue> = new OneToOneLink('statusNav', ExternalTimeData, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<ExternalTimeData, User> = new OneToOneLink('userIdNav', ExternalTimeData, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<ExternalTimeData, WfRequest> = new Link('wfRequestNav', ExternalTimeData, WfRequest);
  /**
   * All fields of the ExternalTimeData entity.
   */
  export const _allFields: Array<StringField<ExternalTimeData> | DateField<ExternalTimeData> | BooleanField<ExternalTimeData> | TimeField<ExternalTimeData> | BigNumberField<ExternalTimeData> | OneToOneLink<ExternalTimeData, MdfEnumValue> | OneToOneLink<ExternalTimeData, User> | Link<ExternalTimeData, WfRequest>> = [
    ExternalTimeData.CATEGORY,
    ExternalTimeData.COST_CENTER,
    ExternalTimeData.CREATED_BY,
    ExternalTimeData.CREATED_DATE_TIME,
    ExternalTimeData.DELETE_EXTERNAL_TIME,
    ExternalTimeData.END_DATE,
    ExternalTimeData.END_TIME,
    ExternalTimeData.EXTERNAL_CODE,
    ExternalTimeData.HOURS,
    ExternalTimeData.LAST_MODIFIED_BY,
    ExternalTimeData.LAST_MODIFIED_DATE_TIME,
    ExternalTimeData.MDF_SYSTEM_RECORD_STATUS,
    ExternalTimeData.START_DATE,
    ExternalTimeData.START_TIME,
    ExternalTimeData.STATUS,
    ExternalTimeData.TIME_TYPE,
    ExternalTimeData.USER_ID,
    ExternalTimeData.CATEGORY_NAV,
    ExternalTimeData.CREATED_BY_NAV,
    ExternalTimeData.LAST_MODIFIED_BY_NAV,
    ExternalTimeData.MDF_SYSTEM_RECORD_STATUS_NAV,
    ExternalTimeData.STATUS_NAV,
    ExternalTimeData.USER_ID_NAV,
    ExternalTimeData.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalTimeData> = new AllFields('*', ExternalTimeData);
  /**
   * All key fields of the ExternalTimeData entity.
   */
  export const _keyFields: Array<Selectable<ExternalTimeData>> = [ExternalTimeData.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property ExternalTimeData.
   */
  export const _keys: { [keys: string]: Selectable<ExternalTimeData> } = ExternalTimeData._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalTimeData> }, field: Selectable<ExternalTimeData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
