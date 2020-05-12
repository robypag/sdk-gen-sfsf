/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AchievementRequestBuilder } from './AchievementRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Achievement" of service "SFOData".
 */
export class Achievement extends Entity implements AchievementType {
  /**
   * Technical entity name for Achievement.
   */
  static _entityName = 'Achievement';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Achievement.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Achievement Date.
   * @nullable
   */
  achievementDate?: Moment;
  /**
   * Achievement ID.
   */
  achievementId!: BigNumber;
  /**
   * Achievement Name.
   * Maximum length: 4000.
   * @nullable
   */
  achievementName?: string;
  /**
   * Achievement Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Achievement Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Achievement Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Achievement Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 128.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Activity.
   * @nullable
   */
  parentExternalId?: BigNumber;
  /**
   * Achievement Parent Type.
   * Maximum length: 128.
   * @nullable
   */
  parentTypeEnum?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * reviewed.
   * @nullable
   */
  reviewed?: boolean;
  /**
   * snapshot.
   * @nullable
   */
  snapshot?: boolean;
  /**
   * Achievement Owner.
   * Maximum length: 100.
   * @nullable
   */
  subjectUserId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[AchievementDevGoalDetail]] entity.
   */
  devGoalDetailList!: AchievementDevGoalDetail[];
  /**
   * One-to-many navigation property to the [[AchievementGoalDetail]] entity.
   */
  goalDetailList!: AchievementGoalDetail[];
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
  parentTypeEnumNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  subjectUserIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `Achievement`.
   * @returns A builder that constructs instances of entity type `Achievement`.
   */
  static builder(): EntityBuilderType<Achievement, AchievementTypeForceMandatory> {
    return Entity.entityBuilder(Achievement);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Achievement` entity type.
   * @returns A `Achievement` request builder.
   */
  static requestBuilder(): AchievementRequestBuilder {
    return new AchievementRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Achievement`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Achievement`.
   */
  static customField(fieldName: string): CustomField<Achievement> {
    return Entity.customFieldSelector(fieldName, Achievement);
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
import { AchievementDevGoalDetail, AchievementDevGoalDetailType } from './AchievementDevGoalDetail';
import { AchievementGoalDetail, AchievementGoalDetailType } from './AchievementGoalDetail';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AchievementType {
  achievementDate?: Moment;
  achievementId: BigNumber;
  achievementName?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  parentExternalId?: BigNumber;
  parentTypeEnum?: string;
  recordId?: string;
  reviewed?: boolean;
  snapshot?: boolean;
  subjectUserId?: string;
  createdByNav: UserType;
  devGoalDetailList: AchievementDevGoalDetailType[];
  goalDetailList: AchievementGoalDetailType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentTypeEnumNav: MdfEnumValueType;
  subjectUserIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface AchievementTypeForceMandatory {
  achievementDate: Moment;
  achievementId: BigNumber;
  achievementName: string;
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  parentExternalId: BigNumber;
  parentTypeEnum: string;
  recordId: string;
  reviewed: boolean;
  snapshot: boolean;
  subjectUserId: string;
  createdByNav: UserType;
  devGoalDetailList: AchievementDevGoalDetailType[];
  goalDetailList: AchievementGoalDetailType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentTypeEnumNav: MdfEnumValueType;
  subjectUserIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace Achievement {
  /**
   * Static representation of the [[achievementDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_DATE: DateField<Achievement> = new DateField('achievementDate', Achievement, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ID: BigNumberField<Achievement> = new BigNumberField('achievementId', Achievement, 'Edm.Int64');
  /**
   * Static representation of the [[achievementName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_NAME: StringField<Achievement> = new StringField('achievementName', Achievement, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Achievement> = new StringField('createdBy', Achievement, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Achievement> = new DateField('createdDateTime', Achievement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Achievement> = new StringField('lastModifiedBy', Achievement, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Achievement> = new DateField('lastModifiedDateTime', Achievement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Achievement> = new StringField('mdfSystemRecordStatus', Achievement, 'Edm.String');
  /**
   * Static representation of the [[parentExternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_EXTERNAL_ID: BigNumberField<Achievement> = new BigNumberField('parentExternalId', Achievement, 'Edm.Int64');
  /**
   * Static representation of the [[parentTypeEnum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_TYPE_ENUM: StringField<Achievement> = new StringField('parentTypeEnum', Achievement, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<Achievement> = new StringField('recordId', Achievement, 'Edm.String');
  /**
   * Static representation of the [[reviewed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEWED: BooleanField<Achievement> = new BooleanField('reviewed', Achievement, 'Edm.Boolean');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<Achievement> = new BooleanField('snapshot', Achievement, 'Edm.Boolean');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<Achievement> = new StringField('subjectUserId', Achievement, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Achievement, User> = new OneToOneLink('createdByNav', Achievement, User);
  /**
   * Static representation of the one-to-many navigation property [[devGoalDetailList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEV_GOAL_DETAIL_LIST: Link<Achievement, AchievementDevGoalDetail> = new Link('devGoalDetailList', Achievement, AchievementDevGoalDetail);
  /**
   * Static representation of the one-to-many navigation property [[goalDetailList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_DETAIL_LIST: Link<Achievement, AchievementGoalDetail> = new Link('goalDetailList', Achievement, AchievementGoalDetail);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Achievement, User> = new OneToOneLink('lastModifiedByNav', Achievement, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Achievement, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Achievement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[parentTypeEnumNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_TYPE_ENUM_NAV: OneToOneLink<Achievement, MdfEnumValue> = new OneToOneLink('parentTypeEnumNav', Achievement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[subjectUserIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID_NAV: OneToOneLink<Achievement, User> = new OneToOneLink('subjectUserIdNav', Achievement, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Achievement, WfRequest> = new Link('wfRequestNav', Achievement, WfRequest);
  /**
   * All fields of the Achievement entity.
   */
  export const _allFields: Array<DateField<Achievement> | BigNumberField<Achievement> | StringField<Achievement> | BooleanField<Achievement> | OneToOneLink<Achievement, User> | Link<Achievement, AchievementDevGoalDetail> | Link<Achievement, AchievementGoalDetail> | OneToOneLink<Achievement, MdfEnumValue> | Link<Achievement, WfRequest>> = [
    Achievement.ACHIEVEMENT_DATE,
    Achievement.ACHIEVEMENT_ID,
    Achievement.ACHIEVEMENT_NAME,
    Achievement.CREATED_BY,
    Achievement.CREATED_DATE_TIME,
    Achievement.LAST_MODIFIED_BY,
    Achievement.LAST_MODIFIED_DATE_TIME,
    Achievement.MDF_SYSTEM_RECORD_STATUS,
    Achievement.PARENT_EXTERNAL_ID,
    Achievement.PARENT_TYPE_ENUM,
    Achievement.RECORD_ID,
    Achievement.REVIEWED,
    Achievement.SNAPSHOT,
    Achievement.SUBJECT_USER_ID,
    Achievement.CREATED_BY_NAV,
    Achievement.DEV_GOAL_DETAIL_LIST,
    Achievement.GOAL_DETAIL_LIST,
    Achievement.LAST_MODIFIED_BY_NAV,
    Achievement.MDF_SYSTEM_RECORD_STATUS_NAV,
    Achievement.PARENT_TYPE_ENUM_NAV,
    Achievement.SUBJECT_USER_ID_NAV,
    Achievement.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Achievement> = new AllFields('*', Achievement);
  /**
   * All key fields of the Achievement entity.
   */
  export const _keyFields: Array<Selectable<Achievement>> = [Achievement.ACHIEVEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property Achievement.
   */
  export const _keys: { [keys: string]: Selectable<Achievement> } = Achievement._keyFields.reduce((acc: { [keys: string]: Selectable<Achievement> }, field: Selectable<Achievement>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
