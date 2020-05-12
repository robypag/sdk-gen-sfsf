/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalDetailRequestBuilder } from './DevGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalDetail" of service "SFOData".
 */
export class DevGoalDetail extends Entity implements DevGoalDetailType {
  /**
   * Technical entity name for DevGoalDetail.
   */
  static _entityName = 'DevGoalDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalDetail.
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
   * Activity Development Goal Detail Linked By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Activity Development Goal Detail Linked Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External Code.
   */
  externalCode!: BigNumber;
  /**
   * Activity Development Goal ID.
   * @nullable
   */
  goalId?: BigNumber;
  /**
   * Activity Development Goal Detail Link Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Activity Development Goal Detail Link Modification Date.
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
   * One-to-one navigation property to the [[SimpleDevGoal]] entity.
   */
  mdfDevGoalDetailToSimpleDevGoalNav!: SimpleDevGoal;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `DevGoalDetail`.
   * @returns A builder that constructs instances of entity type `DevGoalDetail`.
   */
  static builder(): EntityBuilderType<DevGoalDetail, DevGoalDetailTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalDetail` entity type.
   * @returns A `DevGoalDetail` request builder.
   */
  static requestBuilder(): DevGoalDetailRequestBuilder {
    return new DevGoalDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalDetail`.
   */
  static customField(fieldName: string): CustomField<DevGoalDetail> {
    return Entity.customFieldSelector(fieldName, DevGoalDetail);
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
import { SimpleDevGoal, SimpleDevGoalType } from './SimpleDevGoal';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface DevGoalDetailType {
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
  mdfDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface DevGoalDetailTypeForceMandatory {
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
  mdfDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace DevGoalDetail {
  /**
   * Static representation of the [[activityActivityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ACTIVITY_ID: BigNumberField<DevGoalDetail> = new BigNumberField('Activity_activityId', DevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<DevGoalDetail> = new StringField('createdBy', DevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<DevGoalDetail> = new DateField('createdDateTime', DevGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<DevGoalDetail> = new BigNumberField('externalCode', DevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: BigNumberField<DevGoalDetail> = new BigNumberField('goalId', DevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<DevGoalDetail> = new StringField('lastModifiedBy', DevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<DevGoalDetail> = new DateField('lastModifiedDateTime', DevGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<DevGoalDetail> = new StringField('mdfSystemRecordStatus', DevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<DevGoalDetail> = new StringField('recordId', DevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<DevGoalDetail> = new BooleanField('snapshot', DevGoalDetail, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<DevGoalDetail, User> = new OneToOneLink('createdByNav', DevGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<DevGoalDetail, User> = new OneToOneLink('lastModifiedByNav', DevGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfDevGoalDetailToSimpleDevGoalNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV: OneToOneLink<DevGoalDetail, SimpleDevGoal> = new OneToOneLink('mdfDevGoalDetailToSimpleDevGoalNav', DevGoalDetail, SimpleDevGoal);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DevGoalDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', DevGoalDetail, MdfEnumValue);
  /**
   * All fields of the DevGoalDetail entity.
   */
  export const _allFields: Array<BigNumberField<DevGoalDetail> | StringField<DevGoalDetail> | DateField<DevGoalDetail> | BooleanField<DevGoalDetail> | OneToOneLink<DevGoalDetail, User> | OneToOneLink<DevGoalDetail, SimpleDevGoal> | OneToOneLink<DevGoalDetail, MdfEnumValue>> = [
    DevGoalDetail.ACTIVITY_ACTIVITY_ID,
    DevGoalDetail.CREATED_BY,
    DevGoalDetail.CREATED_DATE_TIME,
    DevGoalDetail.EXTERNAL_CODE,
    DevGoalDetail.GOAL_ID,
    DevGoalDetail.LAST_MODIFIED_BY,
    DevGoalDetail.LAST_MODIFIED_DATE_TIME,
    DevGoalDetail.MDF_SYSTEM_RECORD_STATUS,
    DevGoalDetail.RECORD_ID,
    DevGoalDetail.SNAPSHOT,
    DevGoalDetail.CREATED_BY_NAV,
    DevGoalDetail.LAST_MODIFIED_BY_NAV,
    DevGoalDetail.MDF_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV,
    DevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalDetail> = new AllFields('*', DevGoalDetail);
  /**
   * All key fields of the DevGoalDetail entity.
   */
  export const _keyFields: Array<Selectable<DevGoalDetail>> = [DevGoalDetail.ACTIVITY_ACTIVITY_ID, DevGoalDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property DevGoalDetail.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalDetail> } = DevGoalDetail._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalDetail> }, field: Selectable<DevGoalDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
