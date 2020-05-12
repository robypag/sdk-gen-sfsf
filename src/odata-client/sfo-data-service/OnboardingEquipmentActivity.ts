/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingEquipmentActivityRequestBuilder } from './OnboardingEquipmentActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingEquipmentActivity" of service "SFOData".
 */
export class OnboardingEquipmentActivity extends Entity implements OnboardingEquipmentActivityType {
  /**
   * Technical entity name for OnboardingEquipmentActivity.
   */
  static _entityName = 'OnboardingEquipmentActivity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingEquipmentActivity.
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
   * One-to-many navigation property to the [[OnboardingEquipment]] entity.
   */
  equipment!: OnboardingEquipment[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `OnboardingEquipmentActivity`.
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
   */
  static builder(): EntityBuilderType<OnboardingEquipmentActivity, OnboardingEquipmentActivityTypeForceMandatory> {
    return Entity.entityBuilder(OnboardingEquipmentActivity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingEquipmentActivity` entity type.
   * @returns A `OnboardingEquipmentActivity` request builder.
   */
  static requestBuilder(): OnboardingEquipmentActivityRequestBuilder {
    return new OnboardingEquipmentActivityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentActivity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
   */
  static customField(fieldName: string): CustomField<OnboardingEquipmentActivity> {
    return Entity.customFieldSelector(fieldName, OnboardingEquipmentActivity);
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
import { OnboardingEquipment, OnboardingEquipmentType } from './OnboardingEquipment';

export interface OnboardingEquipmentActivityType {
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
  equipment: OnboardingEquipmentType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface OnboardingEquipmentActivityTypeForceMandatory {
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
  equipment: OnboardingEquipmentType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace OnboardingEquipmentActivity {
  /**
   * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingEquipmentActivity> = new BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingEquipmentActivity, 'Edm.Int64');
  /**
   * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingEquipmentActivity> = new BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingEquipmentActivity, 'Edm.Int64');
  /**
   * Static representation of the [[activityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ID: BigNumberField<OnboardingEquipmentActivity> = new BigNumberField('activityId', OnboardingEquipmentActivity, 'Edm.Int64');
  /**
   * Static representation of the [[activityStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS: StringField<OnboardingEquipmentActivity> = new StringField('activityStatus', OnboardingEquipmentActivity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingEquipmentActivity> = new StringField('createdBy', OnboardingEquipmentActivity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingEquipmentActivity> = new DateField('createdDateTime', OnboardingEquipmentActivity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[eventTriggered]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_TRIGGERED: BooleanField<OnboardingEquipmentActivity> = new BooleanField('eventTriggered', OnboardingEquipmentActivity, 'Edm.Boolean');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<OnboardingEquipmentActivity> = new StringField('externalName', OnboardingEquipmentActivity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingEquipmentActivity> = new StringField('lastModifiedBy', OnboardingEquipmentActivity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipmentActivity> = new DateField('lastModifiedDateTime', OnboardingEquipmentActivity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipmentActivity> = new StringField('mdfSystemRecordStatus', OnboardingEquipmentActivity, 'Edm.String');
  /**
   * Static representation of the [[optional]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTIONAL: BooleanField<OnboardingEquipmentActivity> = new BooleanField('optional', OnboardingEquipmentActivity, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS_NAV: OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue> = new OneToOneLink('activityStatusNav', OnboardingEquipmentActivity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingEquipmentActivity, User> = new OneToOneLink('createdByNav', OnboardingEquipmentActivity, User);
  /**
   * Static representation of the one-to-many navigation property [[equipment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT: Link<OnboardingEquipmentActivity, OnboardingEquipment> = new Link('equipment', OnboardingEquipmentActivity, OnboardingEquipment);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipmentActivity, User> = new OneToOneLink('lastModifiedByNav', OnboardingEquipmentActivity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentActivity, MdfEnumValue);
  /**
   * All fields of the OnboardingEquipmentActivity entity.
   */
  export const _allFields: Array<BigNumberField<OnboardingEquipmentActivity> | StringField<OnboardingEquipmentActivity> | DateField<OnboardingEquipmentActivity> | BooleanField<OnboardingEquipmentActivity> | OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue> | OneToOneLink<OnboardingEquipmentActivity, User> | Link<OnboardingEquipmentActivity, OnboardingEquipment>> = [
    OnboardingEquipmentActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
    OnboardingEquipmentActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
    OnboardingEquipmentActivity.ACTIVITY_ID,
    OnboardingEquipmentActivity.ACTIVITY_STATUS,
    OnboardingEquipmentActivity.CREATED_BY,
    OnboardingEquipmentActivity.CREATED_DATE_TIME,
    OnboardingEquipmentActivity.EVENT_TRIGGERED,
    OnboardingEquipmentActivity.EXTERNAL_NAME,
    OnboardingEquipmentActivity.LAST_MODIFIED_BY,
    OnboardingEquipmentActivity.LAST_MODIFIED_DATE_TIME,
    OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS,
    OnboardingEquipmentActivity.OPTIONAL,
    OnboardingEquipmentActivity.ACTIVITY_STATUS_NAV,
    OnboardingEquipmentActivity.CREATED_BY_NAV,
    OnboardingEquipmentActivity.EQUIPMENT,
    OnboardingEquipmentActivity.LAST_MODIFIED_BY_NAV,
    OnboardingEquipmentActivity.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingEquipmentActivity> = new AllFields('*', OnboardingEquipmentActivity);
  /**
   * All key fields of the OnboardingEquipmentActivity entity.
   */
  export const _keyFields: Array<Selectable<OnboardingEquipmentActivity>> = [OnboardingEquipmentActivity.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingEquipmentActivity.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingEquipmentActivity.ACTIVITY_ID];
  /**
   * Mapping of all key field names to the respective static field property OnboardingEquipmentActivity.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingEquipmentActivity> } = OnboardingEquipmentActivity._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingEquipmentActivity> }, field: Selectable<OnboardingEquipmentActivity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
