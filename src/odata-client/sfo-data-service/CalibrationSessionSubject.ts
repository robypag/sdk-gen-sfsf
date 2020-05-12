/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CalibrationSessionSubjectRequestBuilder } from './CalibrationSessionSubjectRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CalibrationSessionSubject" of service "SFOData".
 */
export class CalibrationSessionSubject extends Entity implements CalibrationSessionSubjectType {
  /**
   * Technical entity name for CalibrationSessionSubject.
   */
  static _entityName = 'CalibrationSessionSubject';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CalibrationSessionSubject.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * authorizedBy.
   * @nullable
   */
  authorizedBy?: string;
  /**
   * calSessionId.
   */
  calSessionId!: BigNumber;
  /**
   * calibratedFlag.
   * @nullable
   */
  calibratedFlag?: boolean;
  /**
   * comments.
   * @nullable
   */
  comments?: string;
  /**
   * createdBy.
   */
  createdBy!: string;
  /**
   * createdDateTime.
   */
  createdDateTime!: Moment;
  /**
   * externalComments.
   * @nullable
   */
  externalComments?: string;
  /**
   * lastModifiedBy.
   */
  lastModifiedBy!: string;
  /**
   * lastModifiedDateTime.
   */
  lastModifiedDateTime!: Moment;
  /**
   * pmFolderMapId.
   * @nullable
   */
  pmFolderMapId?: BigNumber;
  /**
   * pmFormDataId.
   * @nullable
   */
  pmFormDataId?: BigNumber;
  /**
   * pmFormOwnerId.
   * @nullable
   */
  pmFormOwnerId?: string;
  /**
   * reason.
   */
  reason!: string;
  /**
   * reasonId.
   * @nullable
   */
  reasonId?: BigNumber;
  /**
   * sessionSubjectId.
   */
  sessionSubjectId!: BigNumber;
  /**
   * status.
   */
  status!: number;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[CalibrationSession]] entity.
   */
  calSession!: CalibrationSession;
  /**
   * One-to-many navigation property to the [[TalentRatings]] entity.
   */
  pmRatingList!: TalentRatings[];
  /**
   * One-to-many navigation property to the [[CalibrationSubjectRank]] entity.
   */
  rankList!: CalibrationSubjectRank[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  subjectUser!: User;

  /**
   * Returns an entity builder to construct instances `CalibrationSessionSubject`.
   * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
   */
  static builder(): EntityBuilderType<CalibrationSessionSubject, CalibrationSessionSubjectTypeForceMandatory> {
    return Entity.entityBuilder(CalibrationSessionSubject);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CalibrationSessionSubject` entity type.
   * @returns A `CalibrationSessionSubject` request builder.
   */
  static requestBuilder(): CalibrationSessionSubjectRequestBuilder {
    return new CalibrationSessionSubjectRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSessionSubject`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
   */
  static customField(fieldName: string): CustomField<CalibrationSessionSubject> {
    return Entity.customFieldSelector(fieldName, CalibrationSessionSubject);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CalibrationSession, CalibrationSessionType } from './CalibrationSession';
import { TalentRatings, TalentRatingsType } from './TalentRatings';
import { CalibrationSubjectRank, CalibrationSubjectRankType } from './CalibrationSubjectRank';
import { User, UserType } from './User';

export interface CalibrationSessionSubjectType {
  authorizedBy?: string;
  calSessionId: BigNumber;
  calibratedFlag?: boolean;
  comments?: string;
  createdBy: string;
  createdDateTime: Moment;
  externalComments?: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  pmFolderMapId?: BigNumber;
  pmFormDataId?: BigNumber;
  pmFormOwnerId?: string;
  reason: string;
  reasonId?: BigNumber;
  sessionSubjectId: BigNumber;
  status: number;
  userId: string;
  calSession: CalibrationSessionType;
  pmRatingList: TalentRatingsType[];
  rankList: CalibrationSubjectRankType[];
  subjectUser: UserType;
}

export interface CalibrationSessionSubjectTypeForceMandatory {
  authorizedBy: string;
  calSessionId: BigNumber;
  calibratedFlag: boolean;
  comments: string;
  createdBy: string;
  createdDateTime: Moment;
  externalComments: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  pmFolderMapId: BigNumber;
  pmFormDataId: BigNumber;
  pmFormOwnerId: string;
  reason: string;
  reasonId: BigNumber;
  sessionSubjectId: BigNumber;
  status: number;
  userId: string;
  calSession: CalibrationSessionType;
  pmRatingList: TalentRatingsType[];
  rankList: CalibrationSubjectRankType[];
  subjectUser: UserType;
}

export namespace CalibrationSessionSubject {
  /**
   * Static representation of the [[authorizedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZED_BY: StringField<CalibrationSessionSubject> = new StringField('authorizedBy', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[calSessionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAL_SESSION_ID: BigNumberField<CalibrationSessionSubject> = new BigNumberField('calSessionId', CalibrationSessionSubject, 'Edm.Int64');
  /**
   * Static representation of the [[calibratedFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALIBRATED_FLAG: BooleanField<CalibrationSessionSubject> = new BooleanField('calibratedFlag', CalibrationSessionSubject, 'Edm.Boolean');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<CalibrationSessionSubject> = new StringField('comments', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CalibrationSessionSubject> = new StringField('createdBy', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CalibrationSessionSubject> = new DateField('createdDateTime', CalibrationSessionSubject, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_COMMENTS: StringField<CalibrationSessionSubject> = new StringField('externalComments', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CalibrationSessionSubject> = new StringField('lastModifiedBy', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CalibrationSessionSubject> = new DateField('lastModifiedDateTime', CalibrationSessionSubject, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[pmFolderMapId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_FOLDER_MAP_ID: BigNumberField<CalibrationSessionSubject> = new BigNumberField('pmFolderMapId', CalibrationSessionSubject, 'Edm.Int64');
  /**
   * Static representation of the [[pmFormDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_FORM_DATA_ID: BigNumberField<CalibrationSessionSubject> = new BigNumberField('pmFormDataId', CalibrationSessionSubject, 'Edm.Int64');
  /**
   * Static representation of the [[pmFormOwnerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_FORM_OWNER_ID: StringField<CalibrationSessionSubject> = new StringField('pmFormOwnerId', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[reason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON: StringField<CalibrationSessionSubject> = new StringField('reason', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the [[reasonId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_ID: BigNumberField<CalibrationSessionSubject> = new BigNumberField('reasonId', CalibrationSessionSubject, 'Edm.Int64');
  /**
   * Static representation of the [[sessionSubjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_SUBJECT_ID: BigNumberField<CalibrationSessionSubject> = new BigNumberField('sessionSubjectId', CalibrationSessionSubject, 'Edm.Int64');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<CalibrationSessionSubject> = new NumberField('status', CalibrationSessionSubject, 'Edm.Int32');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<CalibrationSessionSubject> = new StringField('userId', CalibrationSessionSubject, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[calSession]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAL_SESSION: OneToOneLink<CalibrationSessionSubject, CalibrationSession> = new OneToOneLink('calSession', CalibrationSessionSubject, CalibrationSession);
  /**
   * Static representation of the one-to-many navigation property [[pmRatingList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_RATING_LIST: Link<CalibrationSessionSubject, TalentRatings> = new Link('pmRatingList', CalibrationSessionSubject, TalentRatings);
  /**
   * Static representation of the one-to-many navigation property [[rankList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RANK_LIST: Link<CalibrationSessionSubject, CalibrationSubjectRank> = new Link('rankList', CalibrationSessionSubject, CalibrationSubjectRank);
  /**
   * Static representation of the one-to-one navigation property [[subjectUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER: OneToOneLink<CalibrationSessionSubject, User> = new OneToOneLink('subjectUser', CalibrationSessionSubject, User);
  /**
   * All fields of the CalibrationSessionSubject entity.
   */
  export const _allFields: Array<StringField<CalibrationSessionSubject> | BigNumberField<CalibrationSessionSubject> | BooleanField<CalibrationSessionSubject> | DateField<CalibrationSessionSubject> | NumberField<CalibrationSessionSubject> | OneToOneLink<CalibrationSessionSubject, CalibrationSession> | Link<CalibrationSessionSubject, TalentRatings> | Link<CalibrationSessionSubject, CalibrationSubjectRank> | OneToOneLink<CalibrationSessionSubject, User>> = [
    CalibrationSessionSubject.AUTHORIZED_BY,
    CalibrationSessionSubject.CAL_SESSION_ID,
    CalibrationSessionSubject.CALIBRATED_FLAG,
    CalibrationSessionSubject.COMMENTS,
    CalibrationSessionSubject.CREATED_BY,
    CalibrationSessionSubject.CREATED_DATE_TIME,
    CalibrationSessionSubject.EXTERNAL_COMMENTS,
    CalibrationSessionSubject.LAST_MODIFIED_BY,
    CalibrationSessionSubject.LAST_MODIFIED_DATE_TIME,
    CalibrationSessionSubject.PM_FOLDER_MAP_ID,
    CalibrationSessionSubject.PM_FORM_DATA_ID,
    CalibrationSessionSubject.PM_FORM_OWNER_ID,
    CalibrationSessionSubject.REASON,
    CalibrationSessionSubject.REASON_ID,
    CalibrationSessionSubject.SESSION_SUBJECT_ID,
    CalibrationSessionSubject.STATUS,
    CalibrationSessionSubject.USER_ID,
    CalibrationSessionSubject.CAL_SESSION,
    CalibrationSessionSubject.PM_RATING_LIST,
    CalibrationSessionSubject.RANK_LIST,
    CalibrationSessionSubject.SUBJECT_USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CalibrationSessionSubject> = new AllFields('*', CalibrationSessionSubject);
  /**
   * All key fields of the CalibrationSessionSubject entity.
   */
  export const _keyFields: Array<Selectable<CalibrationSessionSubject>> = [CalibrationSessionSubject.SESSION_SUBJECT_ID];
  /**
   * Mapping of all key field names to the respective static field property CalibrationSessionSubject.
   */
  export const _keys: { [keys: string]: Selectable<CalibrationSessionSubject> } = CalibrationSessionSubject._keyFields.reduce((acc: { [keys: string]: Selectable<CalibrationSessionSubject> }, field: Selectable<CalibrationSessionSubject>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
