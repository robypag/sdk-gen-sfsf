/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingMeetingActivityRequestBuilder } from './OnboardingMeetingActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingMeetingActivity" of service "SFOData".
 */
export class OnboardingMeetingActivity extends Entity implements OnboardingMeetingActivityType {
  /**
   * Technical entity name for OnboardingMeetingActivity.
   */
  static _entityName = 'OnboardingMeetingActivity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingMeetingActivity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * OnboardingNewHireActivitiesStep_processStepId.
   */
  onboardingNewHireActivitiesStepProcessStepId!: BigNumber;
  /**
   * OnboardingProcess_onboardingProcessId.
   */
  onboardingProcessOnboardingProcessId!: BigNumber;
  /**
   * activityId.
   */
  activityId!: BigNumber;
  /**
   * activityStatus.
   * Maximum length: 255.
   * @nullable
   */
  activityStatus?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * eventTriggered.
   * @nullable
   */
  eventTriggered?: boolean;
  /**
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * optional.
   * @nullable
   */
  optional?: boolean;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  activityStatusNav!: MdfEnumValue;
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
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  meetingEvent!: OnboardingMeetingEvent[];

  /**
   * Returns an entity builder to construct instances `OnboardingMeetingActivity`.
   * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
   */
  static builder(): EntityBuilderType<OnboardingMeetingActivity, OnboardingMeetingActivityTypeForceMandatory> {
    return Entity.entityBuilder(OnboardingMeetingActivity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingMeetingActivity` entity type.
   * @returns A `OnboardingMeetingActivity` request builder.
   */
  static requestBuilder(): OnboardingMeetingActivityRequestBuilder {
    return new OnboardingMeetingActivityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingMeetingActivity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
   */
  static customField(fieldName: string): CustomField<OnboardingMeetingActivity> {
    return Entity.customFieldSelector(fieldName, OnboardingMeetingActivity);
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
import { OnboardingMeetingEvent, OnboardingMeetingEventType } from './OnboardingMeetingEvent';

export interface OnboardingMeetingActivityType {
  onboardingNewHireActivitiesStepProcessStepId: BigNumber;
  onboardingProcessOnboardingProcessId: BigNumber;
  activityId: BigNumber;
  activityStatus?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  eventTriggered?: boolean;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  optional?: boolean;
  activityStatusNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  meetingEvent: OnboardingMeetingEventType[];
}

export interface OnboardingMeetingActivityTypeForceMandatory {
  onboardingNewHireActivitiesStepProcessStepId: BigNumber;
  onboardingProcessOnboardingProcessId: BigNumber;
  activityId: BigNumber;
  activityStatus: string;
  createdBy: string;
  createdDateTime: Moment;
  eventTriggered: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  optional: boolean;
  activityStatusNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  meetingEvent: OnboardingMeetingEventType[];
}

export namespace OnboardingMeetingActivity {
  /**
   * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingMeetingActivity> = new BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingMeetingActivity, 'Edm.Int64');
  /**
   * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingMeetingActivity> = new BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingMeetingActivity, 'Edm.Int64');
  /**
   * Static representation of the [[activityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ID: BigNumberField<OnboardingMeetingActivity> = new BigNumberField('activityId', OnboardingMeetingActivity, 'Edm.Int64');
  /**
   * Static representation of the [[activityStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS: StringField<OnboardingMeetingActivity> = new StringField('activityStatus', OnboardingMeetingActivity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingMeetingActivity> = new StringField('createdBy', OnboardingMeetingActivity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingMeetingActivity> = new DateField('createdDateTime', OnboardingMeetingActivity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eventTriggered]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_TRIGGERED: BooleanField<OnboardingMeetingActivity> = new BooleanField('eventTriggered', OnboardingMeetingActivity, 'Edm.Boolean');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<OnboardingMeetingActivity> = new StringField('externalName', OnboardingMeetingActivity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingMeetingActivity> = new StringField('lastModifiedBy', OnboardingMeetingActivity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingMeetingActivity> = new DateField('lastModifiedDateTime', OnboardingMeetingActivity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingMeetingActivity> = new StringField('mdfSystemRecordStatus', OnboardingMeetingActivity, 'Edm.String');
  /**
   * Static representation of the [[optional]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTIONAL: BooleanField<OnboardingMeetingActivity> = new BooleanField('optional', OnboardingMeetingActivity, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS_NAV: OneToOneLink<OnboardingMeetingActivity, MdfEnumValue> = new OneToOneLink('activityStatusNav', OnboardingMeetingActivity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingMeetingActivity, User> = new OneToOneLink('createdByNav', OnboardingMeetingActivity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingMeetingActivity, User> = new OneToOneLink('lastModifiedByNav', OnboardingMeetingActivity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingMeetingActivity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingMeetingActivity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[meetingEvent]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEETING_EVENT: Link<OnboardingMeetingActivity, OnboardingMeetingEvent> = new Link('meetingEvent', OnboardingMeetingActivity, OnboardingMeetingEvent);
  /**
   * All fields of the OnboardingMeetingActivity entity.
   */
  export const _allFields: Array<BigNumberField<OnboardingMeetingActivity> | StringField<OnboardingMeetingActivity> | DateField<OnboardingMeetingActivity> | BooleanField<OnboardingMeetingActivity> | OneToOneLink<OnboardingMeetingActivity, MdfEnumValue> | OneToOneLink<OnboardingMeetingActivity, User> | Link<OnboardingMeetingActivity, OnboardingMeetingEvent>> = [
    OnboardingMeetingActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
    OnboardingMeetingActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
    OnboardingMeetingActivity.ACTIVITY_ID,
    OnboardingMeetingActivity.ACTIVITY_STATUS,
    OnboardingMeetingActivity.CREATED_BY,
    OnboardingMeetingActivity.CREATED_DATE_TIME,
    OnboardingMeetingActivity.EVENT_TRIGGERED,
    OnboardingMeetingActivity.EXTERNAL_NAME,
    OnboardingMeetingActivity.LAST_MODIFIED_BY,
    OnboardingMeetingActivity.LAST_MODIFIED_DATE_TIME,
    OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS,
    OnboardingMeetingActivity.OPTIONAL,
    OnboardingMeetingActivity.ACTIVITY_STATUS_NAV,
    OnboardingMeetingActivity.CREATED_BY_NAV,
    OnboardingMeetingActivity.LAST_MODIFIED_BY_NAV,
    OnboardingMeetingActivity.MDF_SYSTEM_RECORD_STATUS_NAV,
    OnboardingMeetingActivity.MEETING_EVENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingMeetingActivity> = new AllFields('*', OnboardingMeetingActivity);
  /**
   * All key fields of the OnboardingMeetingActivity entity.
   */
  export const _keyFields: Array<Selectable<OnboardingMeetingActivity>> = [OnboardingMeetingActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingMeetingActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingMeetingActivity.ACTIVITY_ID];
  /**
   * Mapping of all key field names to the respective static field property OnboardingMeetingActivity.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingMeetingActivity> } = OnboardingMeetingActivity._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingMeetingActivity> }, field: Selectable<OnboardingMeetingActivity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
