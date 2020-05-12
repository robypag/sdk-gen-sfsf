/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityFeedbackRequestBuilder } from './ActivityFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityFeedback" of service "SFOData".
 */
export class ActivityFeedback extends Entity implements ActivityFeedbackType {
  /**
   * Technical entity name for ActivityFeedback.
   */
  static _entityName = 'ActivityFeedback';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ActivityFeedback.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Activity_Activity ID.
   */
  activityActivityId!: BigNumber;
  /**
   * Achievement.
   * Maximum length: 128.
   * @nullable
   */
  achievement?: string;
  /**
   * Activity Update ID.
   */
  activityFeedbackId!: BigNumber;
  /**
   * Activity Update.
   * Maximum length: 4000.
   * @nullable
   */
  commentContent?: string;
  /**
   * Activity Update Provider.
   * Maximum length: 255.
   * @nullable
   */
  commenter?: string;
  /**
   * Activity Update Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Activity Update Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Red Flag.
   * Maximum length: 128.
   * @nullable
   */
  feedbackFlag?: string;
  /**
   * Activity Update Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Activity Update Last Modified Date.
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
   * One-to-one navigation property to the [[Achievement]] entity.
   */
  achievementNav!: Achievement;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[FeedbackFlag]] entity.
   */
  feedbackFlagNav!: FeedbackFlag;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `ActivityFeedback`.
   * @returns A builder that constructs instances of entity type `ActivityFeedback`.
   */
  static builder(): EntityBuilderType<ActivityFeedback, ActivityFeedbackTypeForceMandatory> {
    return Entity.entityBuilder(ActivityFeedback);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityFeedback` entity type.
   * @returns A `ActivityFeedback` request builder.
   */
  static requestBuilder(): ActivityFeedbackRequestBuilder {
    return new ActivityFeedbackRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityFeedback`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityFeedback`.
   */
  static customField(fieldName: string): CustomField<ActivityFeedback> {
    return Entity.customFieldSelector(fieldName, ActivityFeedback);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Achievement, AchievementType } from './Achievement';
import { User, UserType } from './User';
import { FeedbackFlag, FeedbackFlagType } from './FeedbackFlag';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface ActivityFeedbackType {
  activityActivityId: BigNumber;
  achievement?: string;
  activityFeedbackId: BigNumber;
  commentContent?: string;
  commenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  feedbackFlag?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  recordId?: string;
  reviewed?: boolean;
  snapshot?: boolean;
  achievementNav: AchievementType;
  createdByNav: UserType;
  feedbackFlagNav: FeedbackFlagType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface ActivityFeedbackTypeForceMandatory {
  activityActivityId: BigNumber;
  achievement: string;
  activityFeedbackId: BigNumber;
  commentContent: string;
  commenter: string;
  createdBy: string;
  createdDateTime: Moment;
  feedbackFlag: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  recordId: string;
  reviewed: boolean;
  snapshot: boolean;
  achievementNav: AchievementType;
  createdByNav: UserType;
  feedbackFlagNav: FeedbackFlagType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace ActivityFeedback {
  /**
   * Static representation of the [[activityActivityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ACTIVITY_ID: BigNumberField<ActivityFeedback> = new BigNumberField('Activity_activityId', ActivityFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[achievement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT: StringField<ActivityFeedback> = new StringField('achievement', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[activityFeedbackId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_FEEDBACK_ID: BigNumberField<ActivityFeedback> = new BigNumberField('activityFeedbackId', ActivityFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[commentContent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_CONTENT: StringField<ActivityFeedback> = new StringField('commentContent', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[commenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTER: StringField<ActivityFeedback> = new StringField('commenter', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ActivityFeedback> = new StringField('createdBy', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ActivityFeedback> = new DateField('createdDateTime', ActivityFeedback, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[feedbackFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_FLAG: StringField<ActivityFeedback> = new StringField('feedbackFlag', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ActivityFeedback> = new StringField('lastModifiedBy', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ActivityFeedback> = new DateField('lastModifiedDateTime', ActivityFeedback, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ActivityFeedback> = new StringField('mdfSystemRecordStatus', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<ActivityFeedback> = new StringField('recordId', ActivityFeedback, 'Edm.String');
  /**
   * Static representation of the [[reviewed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEWED: BooleanField<ActivityFeedback> = new BooleanField('reviewed', ActivityFeedback, 'Edm.Boolean');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<ActivityFeedback> = new BooleanField('snapshot', ActivityFeedback, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[achievementNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_NAV: OneToOneLink<ActivityFeedback, Achievement> = new OneToOneLink('achievementNav', ActivityFeedback, Achievement);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ActivityFeedback, User> = new OneToOneLink('createdByNav', ActivityFeedback, User);
  /**
   * Static representation of the one-to-one navigation property [[feedbackFlagNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_FLAG_NAV: OneToOneLink<ActivityFeedback, FeedbackFlag> = new OneToOneLink('feedbackFlagNav', ActivityFeedback, FeedbackFlag);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ActivityFeedback, User> = new OneToOneLink('lastModifiedByNav', ActivityFeedback, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ActivityFeedback, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ActivityFeedback, MdfEnumValue);
  /**
   * All fields of the ActivityFeedback entity.
   */
  export const _allFields: Array<BigNumberField<ActivityFeedback> | StringField<ActivityFeedback> | DateField<ActivityFeedback> | BooleanField<ActivityFeedback> | OneToOneLink<ActivityFeedback, Achievement> | OneToOneLink<ActivityFeedback, User> | OneToOneLink<ActivityFeedback, FeedbackFlag> | OneToOneLink<ActivityFeedback, MdfEnumValue>> = [
    ActivityFeedback.ACTIVITY_ACTIVITY_ID,
    ActivityFeedback.ACHIEVEMENT,
    ActivityFeedback.ACTIVITY_FEEDBACK_ID,
    ActivityFeedback.COMMENT_CONTENT,
    ActivityFeedback.COMMENTER,
    ActivityFeedback.CREATED_BY,
    ActivityFeedback.CREATED_DATE_TIME,
    ActivityFeedback.FEEDBACK_FLAG,
    ActivityFeedback.LAST_MODIFIED_BY,
    ActivityFeedback.LAST_MODIFIED_DATE_TIME,
    ActivityFeedback.MDF_SYSTEM_RECORD_STATUS,
    ActivityFeedback.RECORD_ID,
    ActivityFeedback.REVIEWED,
    ActivityFeedback.SNAPSHOT,
    ActivityFeedback.ACHIEVEMENT_NAV,
    ActivityFeedback.CREATED_BY_NAV,
    ActivityFeedback.FEEDBACK_FLAG_NAV,
    ActivityFeedback.LAST_MODIFIED_BY_NAV,
    ActivityFeedback.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityFeedback> = new AllFields('*', ActivityFeedback);
  /**
   * All key fields of the ActivityFeedback entity.
   */
  export const _keyFields: Array<Selectable<ActivityFeedback>> = [ActivityFeedback.ACTIVITY_ACTIVITY_ID, ActivityFeedback.ACTIVITY_FEEDBACK_ID];
  /**
   * Mapping of all key field names to the respective static field property ActivityFeedback.
   */
  export const _keys: { [keys: string]: Selectable<ActivityFeedback> } = ActivityFeedback._keyFields.reduce((acc: { [keys: string]: Selectable<ActivityFeedback> }, field: Selectable<ActivityFeedback>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
