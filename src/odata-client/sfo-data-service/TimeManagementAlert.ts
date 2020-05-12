/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementAlertRequestBuilder } from './TimeManagementAlertRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeManagementAlert" of service "SFOData".
 */
export class TimeManagementAlert extends Entity implements TimeManagementAlertType {
  /**
   * Technical entity name for TimeManagementAlert.
   */
  static _entityName = 'TimeManagementAlert';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeManagementAlert.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Category.
   * Maximum length: 255.
   * @nullable
   */
  category?: string;
  /**
   * Message.
   * Maximum length: 255.
   * @nullable
   */
  concatenatedMessage?: string;
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
   * Date.
   * @nullable
   */
  date?: Moment;
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
   * Severity.
   * Maximum length: 255.
   * @nullable
   */
  severity?: string;
  /**
   * Severity.
   * Maximum length: 255.
   * @nullable
   */
  severityName?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  targetId?: string;
  /**
   * Target Type.
   * Maximum length: 255.
   * @nullable
   */
  targetType?: string;
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
  severityNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  targetIdNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  targetTypeNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[TimeManagementAlertMessage]] entity.
   */
  timeManagementAlertMessage!: TimeManagementAlertMessage[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TimeManagementAlert`.
   * @returns A builder that constructs instances of entity type `TimeManagementAlert`.
   */
  static builder(): EntityBuilderType<TimeManagementAlert, TimeManagementAlertTypeForceMandatory> {
    return Entity.entityBuilder(TimeManagementAlert);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeManagementAlert` entity type.
   * @returns A `TimeManagementAlert` request builder.
   */
  static requestBuilder(): TimeManagementAlertRequestBuilder {
    return new TimeManagementAlertRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeManagementAlert`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeManagementAlert`.
   */
  static customField(fieldName: string): CustomField<TimeManagementAlert> {
    return Entity.customFieldSelector(fieldName, TimeManagementAlert);
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
import { TimeManagementAlertMessage, TimeManagementAlertMessageType } from './TimeManagementAlertMessage';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeManagementAlertType {
  category?: string;
  concatenatedMessage?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  date?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  severity?: string;
  severityName?: string;
  status?: string;
  targetId?: string;
  targetType?: string;
  categoryNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  severityNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  targetIdNav: UserType;
  targetTypeNav: MdfEnumValueType;
  timeManagementAlertMessage: TimeManagementAlertMessageType[];
  wfRequestNav: WfRequestType[];
}

export interface TimeManagementAlertTypeForceMandatory {
  category: string;
  concatenatedMessage: string;
  createdBy: string;
  createdDateTime: Moment;
  date: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  severity: string;
  severityName: string;
  status: string;
  targetId: string;
  targetType: string;
  categoryNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  severityNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  targetIdNav: UserType;
  targetTypeNav: MdfEnumValueType;
  timeManagementAlertMessage: TimeManagementAlertMessageType[];
  wfRequestNav: WfRequestType[];
}

export namespace TimeManagementAlert {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<TimeManagementAlert> = new StringField('category', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[concatenatedMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONCATENATED_MESSAGE: StringField<TimeManagementAlert> = new StringField('concatenatedMessage', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeManagementAlert> = new StringField('createdBy', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeManagementAlert> = new DateField('createdDateTime', TimeManagementAlert, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<TimeManagementAlert> = new DateField('date', TimeManagementAlert, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeManagementAlert> = new StringField('externalCode', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeManagementAlert> = new StringField('lastModifiedBy', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeManagementAlert> = new DateField('lastModifiedDateTime', TimeManagementAlert, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeManagementAlert> = new StringField('mdfSystemRecordStatus', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[severity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEVERITY: StringField<TimeManagementAlert> = new StringField('severity', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[severityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEVERITY_NAME: StringField<TimeManagementAlert> = new StringField('severityName', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<TimeManagementAlert> = new StringField('status', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[targetId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_ID: StringField<TimeManagementAlert> = new StringField('targetId', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the [[targetType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_TYPE: StringField<TimeManagementAlert> = new StringField('targetType', TimeManagementAlert, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<TimeManagementAlert, MdfEnumValue> = new OneToOneLink('categoryNav', TimeManagementAlert, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeManagementAlert, User> = new OneToOneLink('createdByNav', TimeManagementAlert, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeManagementAlert, User> = new OneToOneLink('lastModifiedByNav', TimeManagementAlert, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeManagementAlert, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeManagementAlert, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[severityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEVERITY_NAV: OneToOneLink<TimeManagementAlert, MdfEnumValue> = new OneToOneLink('severityNav', TimeManagementAlert, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<TimeManagementAlert, MdfEnumValue> = new OneToOneLink('statusNav', TimeManagementAlert, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[targetIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_ID_NAV: OneToOneLink<TimeManagementAlert, User> = new OneToOneLink('targetIdNav', TimeManagementAlert, User);
  /**
   * Static representation of the one-to-one navigation property [[targetTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_TYPE_NAV: OneToOneLink<TimeManagementAlert, MdfEnumValue> = new OneToOneLink('targetTypeNav', TimeManagementAlert, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[timeManagementAlertMessage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_MANAGEMENT_ALERT_MESSAGE: Link<TimeManagementAlert, TimeManagementAlertMessage> = new Link('timeManagementAlertMessage', TimeManagementAlert, TimeManagementAlertMessage);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeManagementAlert, WfRequest> = new Link('wfRequestNav', TimeManagementAlert, WfRequest);
  /**
   * All fields of the TimeManagementAlert entity.
   */
  export const _allFields: Array<StringField<TimeManagementAlert> | DateField<TimeManagementAlert> | OneToOneLink<TimeManagementAlert, MdfEnumValue> | OneToOneLink<TimeManagementAlert, User> | Link<TimeManagementAlert, TimeManagementAlertMessage> | Link<TimeManagementAlert, WfRequest>> = [
    TimeManagementAlert.CATEGORY,
    TimeManagementAlert.CONCATENATED_MESSAGE,
    TimeManagementAlert.CREATED_BY,
    TimeManagementAlert.CREATED_DATE_TIME,
    TimeManagementAlert.DATE,
    TimeManagementAlert.EXTERNAL_CODE,
    TimeManagementAlert.LAST_MODIFIED_BY,
    TimeManagementAlert.LAST_MODIFIED_DATE_TIME,
    TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS,
    TimeManagementAlert.SEVERITY,
    TimeManagementAlert.SEVERITY_NAME,
    TimeManagementAlert.STATUS,
    TimeManagementAlert.TARGET_ID,
    TimeManagementAlert.TARGET_TYPE,
    TimeManagementAlert.CATEGORY_NAV,
    TimeManagementAlert.CREATED_BY_NAV,
    TimeManagementAlert.LAST_MODIFIED_BY_NAV,
    TimeManagementAlert.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeManagementAlert.SEVERITY_NAV,
    TimeManagementAlert.STATUS_NAV,
    TimeManagementAlert.TARGET_ID_NAV,
    TimeManagementAlert.TARGET_TYPE_NAV,
    TimeManagementAlert.TIME_MANAGEMENT_ALERT_MESSAGE,
    TimeManagementAlert.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeManagementAlert> = new AllFields('*', TimeManagementAlert);
  /**
   * All key fields of the TimeManagementAlert entity.
   */
  export const _keyFields: Array<Selectable<TimeManagementAlert>> = [TimeManagementAlert.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeManagementAlert.
   */
  export const _keys: { [keys: string]: Selectable<TimeManagementAlert> } = TimeManagementAlert._keyFields.reduce((acc: { [keys: string]: Selectable<TimeManagementAlert> }, field: Selectable<TimeManagementAlert>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
