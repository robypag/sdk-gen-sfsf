/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalDetailRequestBuilder } from './GoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalDetail" of service "SFOData".
 */
export class GoalDetail extends Entity implements GoalDetailType {
  /**
   * Technical entity name for GoalDetail.
   */
  static _entityName = 'GoalDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalDetail.
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
   * Activity Goal Detail Linked By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Activity Goal Detail Linked Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External code.
   */
  externalCode!: BigNumber;
  /**
   * Activity Goal ID.
   * @nullable
   */
  goalId?: BigNumber;
  /**
   * Activity Goal Detail Link Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Activity Goal Detail Link Modification Date.
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
   * snapshot.
   * @nullable
   */
  snapshot?: boolean;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[SimpleGoal]] entity.
   */
  mdfGoalDetailToSimpleGoalNav!: SimpleGoal;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `GoalDetail`.
   * @returns A builder that constructs instances of entity type `GoalDetail`.
   */
  static builder(): EntityBuilderType<GoalDetail, GoalDetailTypeForceMandatory> {
    return Entity.entityBuilder(GoalDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalDetail` entity type.
   * @returns A `GoalDetail` request builder.
   */
  static requestBuilder(): GoalDetailRequestBuilder {
    return new GoalDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalDetail`.
   */
  static customField(fieldName: string): CustomField<GoalDetail> {
    return Entity.customFieldSelector(fieldName, GoalDetail);
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
import { SimpleGoal, SimpleGoalType } from './SimpleGoal';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface GoalDetailType {
  activityActivityId: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  goalId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  recordId?: string;
  snapshot?: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfGoalDetailToSimpleGoalNav: SimpleGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface GoalDetailTypeForceMandatory {
  activityActivityId: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  goalId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  recordId: string;
  snapshot: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfGoalDetailToSimpleGoalNav: SimpleGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace GoalDetail {
  /**
   * Static representation of the [[activityActivityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ACTIVITY_ID: BigNumberField<GoalDetail> = new BigNumberField('Activity_activityId', GoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<GoalDetail> = new StringField('createdBy', GoalDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<GoalDetail> = new DateField('createdDateTime', GoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<GoalDetail> = new BigNumberField('externalCode', GoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: BigNumberField<GoalDetail> = new BigNumberField('goalId', GoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<GoalDetail> = new StringField('lastModifiedBy', GoalDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<GoalDetail> = new DateField('lastModifiedDateTime', GoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<GoalDetail> = new StringField('mdfSystemRecordStatus', GoalDetail, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<GoalDetail> = new StringField('recordId', GoalDetail, 'Edm.String');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<GoalDetail> = new BooleanField('snapshot', GoalDetail, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<GoalDetail, User> = new OneToOneLink('createdByNav', GoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<GoalDetail, User> = new OneToOneLink('lastModifiedByNav', GoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfGoalDetailToSimpleGoalNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV: OneToOneLink<GoalDetail, SimpleGoal> = new OneToOneLink('mdfGoalDetailToSimpleGoalNav', GoalDetail, SimpleGoal);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<GoalDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', GoalDetail, MdfEnumValue);
  /**
   * All fields of the GoalDetail entity.
   */
  export const _allFields: Array<BigNumberField<GoalDetail> | StringField<GoalDetail> | DateField<GoalDetail> | BooleanField<GoalDetail> | OneToOneLink<GoalDetail, User> | OneToOneLink<GoalDetail, SimpleGoal> | OneToOneLink<GoalDetail, MdfEnumValue>> = [
    GoalDetail.ACTIVITY_ACTIVITY_ID,
    GoalDetail.CREATED_BY,
    GoalDetail.CREATED_DATE_TIME,
    GoalDetail.EXTERNAL_CODE,
    GoalDetail.GOAL_ID,
    GoalDetail.LAST_MODIFIED_BY,
    GoalDetail.LAST_MODIFIED_DATE_TIME,
    GoalDetail.MDF_SYSTEM_RECORD_STATUS,
    GoalDetail.RECORD_ID,
    GoalDetail.SNAPSHOT,
    GoalDetail.CREATED_BY_NAV,
    GoalDetail.LAST_MODIFIED_BY_NAV,
    GoalDetail.MDF_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV,
    GoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalDetail> = new AllFields('*', GoalDetail);
  /**
   * All key fields of the GoalDetail entity.
   */
  export const _keyFields: Array<Selectable<GoalDetail>> = [GoalDetail.ACTIVITY_ACTIVITY_ID, GoalDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property GoalDetail.
   */
  export const _keys: { [keys: string]: Selectable<GoalDetail> } = GoalDetail._keyFields.reduce((acc: { [keys: string]: Selectable<GoalDetail> }, field: Selectable<GoalDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
