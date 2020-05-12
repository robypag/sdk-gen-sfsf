/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CalibrationSessionRequestBuilder } from './CalibrationSessionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CalibrationSession" of service "SFOData".
 */
export class CalibrationSession extends Entity implements CalibrationSessionType {
  /**
   * Technical entity name for CalibrationSession.
   */
  static _entityName = 'CalibrationSession';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CalibrationSession.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * activationDate.
   * @nullable
   */
  activationDate?: Moment;
  /**
   * lastModifiedBy.
   */
  lastModifiedBy!: string;
  /**
   * lastModifiedDateTime.
   */
  lastModifiedDateTime!: Moment;
  /**
   * sessionDate.
   * @nullable
   */
  sessionDate?: Moment;
  /**
   * sessionId.
   */
  sessionId!: BigNumber;
  /**
   * sessionLocation.
   * @nullable
   */
  sessionLocation?: string;
  /**
   * sessionName.
   */
  sessionName!: string;
  /**
   * status.
   */
  status!: number;
  /**
   * One-to-one navigation property to the [[CalibrationTemplate]] entity.
   */
  calTemplate!: CalibrationTemplate;
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  facilitatorList!: User[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  ownerList!: User[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  participantList!: User[];
  /**
   * One-to-many navigation property to the [[CalibrationSessionSubject]] entity.
   */
  subjectList!: CalibrationSessionSubject[];

  /**
   * Returns an entity builder to construct instances `CalibrationSession`.
   * @returns A builder that constructs instances of entity type `CalibrationSession`.
   */
  static builder(): EntityBuilderType<CalibrationSession, CalibrationSessionTypeForceMandatory> {
    return Entity.entityBuilder(CalibrationSession);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CalibrationSession` entity type.
   * @returns A `CalibrationSession` request builder.
   */
  static requestBuilder(): CalibrationSessionRequestBuilder {
    return new CalibrationSessionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSession`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CalibrationSession`.
   */
  static customField(fieldName: string): CustomField<CalibrationSession> {
    return Entity.customFieldSelector(fieldName, CalibrationSession);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CalibrationTemplate, CalibrationTemplateType } from './CalibrationTemplate';
import { User, UserType } from './User';
import { CalibrationSessionSubject, CalibrationSessionSubjectType } from './CalibrationSessionSubject';

export interface CalibrationSessionType {
  activationDate?: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  sessionDate?: Moment;
  sessionId: BigNumber;
  sessionLocation?: string;
  sessionName: string;
  status: number;
  calTemplate: CalibrationTemplateType;
  facilitatorList: UserType[];
  ownerList: UserType[];
  participantList: UserType[];
  subjectList: CalibrationSessionSubjectType[];
}

export interface CalibrationSessionTypeForceMandatory {
  activationDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  sessionDate: Moment;
  sessionId: BigNumber;
  sessionLocation: string;
  sessionName: string;
  status: number;
  calTemplate: CalibrationTemplateType;
  facilitatorList: UserType[];
  ownerList: UserType[];
  participantList: UserType[];
  subjectList: CalibrationSessionSubjectType[];
}

export namespace CalibrationSession {
  /**
   * Static representation of the [[activationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVATION_DATE: DateField<CalibrationSession> = new DateField('activationDate', CalibrationSession, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CalibrationSession> = new StringField('lastModifiedBy', CalibrationSession, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CalibrationSession> = new DateField('lastModifiedDateTime', CalibrationSession, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[sessionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_DATE: DateField<CalibrationSession> = new DateField('sessionDate', CalibrationSession, 'Edm.DateTime');
  /**
   * Static representation of the [[sessionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_ID: BigNumberField<CalibrationSession> = new BigNumberField('sessionId', CalibrationSession, 'Edm.Int64');
  /**
   * Static representation of the [[sessionLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_LOCATION: StringField<CalibrationSession> = new StringField('sessionLocation', CalibrationSession, 'Edm.String');
  /**
   * Static representation of the [[sessionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_NAME: StringField<CalibrationSession> = new StringField('sessionName', CalibrationSession, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<CalibrationSession> = new NumberField('status', CalibrationSession, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[calTemplate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAL_TEMPLATE: OneToOneLink<CalibrationSession, CalibrationTemplate> = new OneToOneLink('calTemplate', CalibrationSession, CalibrationTemplate);
  /**
   * Static representation of the one-to-many navigation property [[facilitatorList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACILITATOR_LIST: Link<CalibrationSession, User> = new Link('facilitatorList', CalibrationSession, User);
  /**
   * Static representation of the one-to-many navigation property [[ownerList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_LIST: Link<CalibrationSession, User> = new Link('ownerList', CalibrationSession, User);
  /**
   * Static representation of the one-to-many navigation property [[participantList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_LIST: Link<CalibrationSession, User> = new Link('participantList', CalibrationSession, User);
  /**
   * Static representation of the one-to-many navigation property [[subjectList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_LIST: Link<CalibrationSession, CalibrationSessionSubject> = new Link('subjectList', CalibrationSession, CalibrationSessionSubject);
  /**
   * All fields of the CalibrationSession entity.
   */
  export const _allFields: Array<DateField<CalibrationSession> | StringField<CalibrationSession> | BigNumberField<CalibrationSession> | NumberField<CalibrationSession> | OneToOneLink<CalibrationSession, CalibrationTemplate> | Link<CalibrationSession, User> | Link<CalibrationSession, CalibrationSessionSubject>> = [
    CalibrationSession.ACTIVATION_DATE,
    CalibrationSession.LAST_MODIFIED_BY,
    CalibrationSession.LAST_MODIFIED_DATE_TIME,
    CalibrationSession.SESSION_DATE,
    CalibrationSession.SESSION_ID,
    CalibrationSession.SESSION_LOCATION,
    CalibrationSession.SESSION_NAME,
    CalibrationSession.STATUS,
    CalibrationSession.CAL_TEMPLATE,
    CalibrationSession.FACILITATOR_LIST,
    CalibrationSession.OWNER_LIST,
    CalibrationSession.PARTICIPANT_LIST,
    CalibrationSession.SUBJECT_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CalibrationSession> = new AllFields('*', CalibrationSession);
  /**
   * All key fields of the CalibrationSession entity.
   */
  export const _keyFields: Array<Selectable<CalibrationSession>> = [CalibrationSession.SESSION_ID];
  /**
   * Mapping of all key field names to the respective static field property CalibrationSession.
   */
  export const _keys: { [keys: string]: Selectable<CalibrationSession> } = CalibrationSession._keyFields.reduce((acc: { [keys: string]: Selectable<CalibrationSession> }, field: Selectable<CalibrationSession>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
