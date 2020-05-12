/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingEquipmentRequestBuilder } from './OnboardingEquipmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingEquipment" of service "SFOData".
 */
export class OnboardingEquipment extends Entity implements OnboardingEquipmentType {
  /**
   * Technical entity name for OnboardingEquipment.
   */
  static _entityName = 'OnboardingEquipment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingEquipment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * OnboardingEquipmentActivity_activityId.
   */
  onboardingEquipmentActivityActivityId!: BigNumber;
  /**
   * OnboardingNewHireActivitiesStep_processStepId.
   */
  onboardingNewHireActivitiesStepProcessStepId!: BigNumber;
  /**
   * OnboardingProcess_onboardingProcessId.
   */
  onboardingProcessOnboardingProcessId!: BigNumber;
  /**
   * comment.
   * Maximum length: 1000.
   * @nullable
   */
  comment?: string;
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
   * equipmentId.
   * Maximum length: 128.
   */
  equipmentId!: string;
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
   * type.
   * Maximum length: 128.
   * @nullable
   */
  type?: string;
  /**
   * value.
   * Maximum length: 128.
   * @nullable
   */
  value?: string;
  /**
   * workflow.
   * Maximum length: 128.
   * @nullable
   */
  workflow?: string;
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
   * One-to-one navigation property to the [[OnboardingEquipmentType_1]] entity.
   */
  typeNav!: OnboardingEquipmentType_1;
  /**
   * One-to-one navigation property to the [[OnboardingEquipmentTypeValue]] entity.
   */
  valueNav!: OnboardingEquipmentTypeValue;

  /**
   * Returns an entity builder to construct instances `OnboardingEquipment`.
   * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
   */
  static builder(): EntityBuilderType<OnboardingEquipment, OnboardingEquipmentTypeForceMandatory> {
    return Entity.entityBuilder(OnboardingEquipment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingEquipment` entity type.
   * @returns A `OnboardingEquipment` request builder.
   */
  static requestBuilder(): OnboardingEquipmentRequestBuilder {
    return new OnboardingEquipmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
   */
  static customField(fieldName: string): CustomField<OnboardingEquipment> {
    return Entity.customFieldSelector(fieldName, OnboardingEquipment);
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
import { OnboardingEquipmentType_1, OnboardingEquipmentType_1Type } from './OnboardingEquipmentType_1';
import { OnboardingEquipmentTypeValue, OnboardingEquipmentTypeValueType } from './OnboardingEquipmentTypeValue';

export interface OnboardingEquipmentType {
  onboardingEquipmentActivityActivityId: BigNumber;
  onboardingNewHireActivitiesStepProcessStepId: BigNumber;
  onboardingProcessOnboardingProcessId: BigNumber;
  comment?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  equipmentId: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  type?: string;
  value?: string;
  workflow?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  typeNav: OnboardingEquipmentType_1Type;
  valueNav: OnboardingEquipmentTypeValueType;
}

export interface OnboardingEquipmentTypeForceMandatory {
  onboardingEquipmentActivityActivityId: BigNumber;
  onboardingNewHireActivitiesStepProcessStepId: BigNumber;
  onboardingProcessOnboardingProcessId: BigNumber;
  comment: string;
  createdBy: string;
  createdDateTime: Moment;
  equipmentId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  type: string;
  value: string;
  workflow: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  typeNav: OnboardingEquipmentType_1Type;
  valueNav: OnboardingEquipmentTypeValueType;
}

export namespace OnboardingEquipment {
  /**
   * Static representation of the [[onboardingEquipmentActivityActivityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID: BigNumberField<OnboardingEquipment> = new BigNumberField('OnboardingEquipmentActivity_activityId', OnboardingEquipment, 'Edm.Int64');
  /**
   * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingEquipment> = new BigNumberField('OnboardingNewHireActivitiesStep_processStepId', OnboardingEquipment, 'Edm.Int64');
  /**
   * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingEquipment> = new BigNumberField('OnboardingProcess_onboardingProcessId', OnboardingEquipment, 'Edm.Int64');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<OnboardingEquipment> = new StringField('comment', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingEquipment> = new StringField('createdBy', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingEquipment> = new DateField('createdDateTime', OnboardingEquipment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[equipmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT_ID: StringField<OnboardingEquipment> = new StringField('equipmentId', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingEquipment> = new StringField('lastModifiedBy', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipment> = new DateField('lastModifiedDateTime', OnboardingEquipment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipment> = new StringField('mdfSystemRecordStatus', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<OnboardingEquipment> = new StringField('type', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<OnboardingEquipment> = new StringField('value', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the [[workflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW: StringField<OnboardingEquipment> = new StringField('workflow', OnboardingEquipment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingEquipment, User> = new OneToOneLink('createdByNav', OnboardingEquipment, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipment, User> = new OneToOneLink('lastModifiedByNav', OnboardingEquipment, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipment, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipment, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<OnboardingEquipment, OnboardingEquipmentType_1> = new OneToOneLink('typeNav', OnboardingEquipment, OnboardingEquipmentType_1);
  /**
   * Static representation of the one-to-one navigation property [[valueNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_NAV: OneToOneLink<OnboardingEquipment, OnboardingEquipmentTypeValue> = new OneToOneLink('valueNav', OnboardingEquipment, OnboardingEquipmentTypeValue);
  /**
   * All fields of the OnboardingEquipment entity.
   */
  export const _allFields: Array<BigNumberField<OnboardingEquipment> | StringField<OnboardingEquipment> | DateField<OnboardingEquipment> | OneToOneLink<OnboardingEquipment, User> | OneToOneLink<OnboardingEquipment, MdfEnumValue> | OneToOneLink<OnboardingEquipment, OnboardingEquipmentType_1> | OneToOneLink<OnboardingEquipment, OnboardingEquipmentTypeValue>> = [
    OnboardingEquipment.ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID,
    OnboardingEquipment.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID,
    OnboardingEquipment.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID,
    OnboardingEquipment.COMMENT,
    OnboardingEquipment.CREATED_BY,
    OnboardingEquipment.CREATED_DATE_TIME,
    OnboardingEquipment.EQUIPMENT_ID,
    OnboardingEquipment.LAST_MODIFIED_BY,
    OnboardingEquipment.LAST_MODIFIED_DATE_TIME,
    OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS,
    OnboardingEquipment.TYPE,
    OnboardingEquipment.VALUE,
    OnboardingEquipment.WORKFLOW,
    OnboardingEquipment.CREATED_BY_NAV,
    OnboardingEquipment.LAST_MODIFIED_BY_NAV,
    OnboardingEquipment.MDF_SYSTEM_RECORD_STATUS_NAV,
    OnboardingEquipment.TYPE_NAV,
    OnboardingEquipment.VALUE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingEquipment> = new AllFields('*', OnboardingEquipment);
  /**
   * All key fields of the OnboardingEquipment entity.
   */
  export const _keyFields: Array<Selectable<OnboardingEquipment>> = [OnboardingEquipment.ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID, OnboardingEquipment.ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID, OnboardingEquipment.ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID, OnboardingEquipment.EQUIPMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property OnboardingEquipment.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingEquipment> } = OnboardingEquipment._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingEquipment> }, field: Selectable<OnboardingEquipment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
