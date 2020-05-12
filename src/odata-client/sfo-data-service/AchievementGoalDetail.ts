/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AchievementGoalDetailRequestBuilder } from './AchievementGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AchievementGoalDetail" of service "SFOData".
 */
export class AchievementGoalDetail extends Entity implements AchievementGoalDetailType {
  /**
   * Technical entity name for AchievementGoalDetail.
   */
  static _entityName = 'AchievementGoalDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AchievementGoalDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Achievement_Achievement ID.
   */
  achievementAchievementId!: BigNumber;
  /**
   * Achievement Goal Linked By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Achievement Goal Linked Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External code.
   */
  externalCode!: BigNumber;
  /**
   * Achievement Goal ID.
   * @nullable
   */
  goalId?: BigNumber;
  /**
   * Achievement Goal Link Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Achievement Goal Link Modification Date.
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
  mdfAchievementGoalDetailToSimpleGoalNav!: SimpleGoal;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `AchievementGoalDetail`.
   * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
   */
  static builder(): EntityBuilderType<AchievementGoalDetail, AchievementGoalDetailTypeForceMandatory> {
    return Entity.entityBuilder(AchievementGoalDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AchievementGoalDetail` entity type.
   * @returns A `AchievementGoalDetail` request builder.
   */
  static requestBuilder(): AchievementGoalDetailRequestBuilder {
    return new AchievementGoalDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementGoalDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
   */
  static customField(fieldName: string): CustomField<AchievementGoalDetail> {
    return Entity.customFieldSelector(fieldName, AchievementGoalDetail);
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

export interface AchievementGoalDetailType {
  achievementAchievementId: BigNumber;
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
  mdfAchievementGoalDetailToSimpleGoalNav: SimpleGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface AchievementGoalDetailTypeForceMandatory {
  achievementAchievementId: BigNumber;
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
  mdfAchievementGoalDetailToSimpleGoalNav: SimpleGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace AchievementGoalDetail {
  /**
   * Static representation of the [[achievementAchievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ACHIEVEMENT_ID: BigNumberField<AchievementGoalDetail> = new BigNumberField('Achievement_achievementId', AchievementGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AchievementGoalDetail> = new StringField('createdBy', AchievementGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AchievementGoalDetail> = new DateField('createdDateTime', AchievementGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<AchievementGoalDetail> = new BigNumberField('externalCode', AchievementGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: BigNumberField<AchievementGoalDetail> = new BigNumberField('goalId', AchievementGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AchievementGoalDetail> = new StringField('lastModifiedBy', AchievementGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AchievementGoalDetail> = new DateField('lastModifiedDateTime', AchievementGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AchievementGoalDetail> = new StringField('mdfSystemRecordStatus', AchievementGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<AchievementGoalDetail> = new StringField('recordId', AchievementGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<AchievementGoalDetail> = new BooleanField('snapshot', AchievementGoalDetail, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AchievementGoalDetail, User> = new OneToOneLink('createdByNav', AchievementGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AchievementGoalDetail, User> = new OneToOneLink('lastModifiedByNav', AchievementGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfAchievementGoalDetailToSimpleGoalNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_ACHIEVEMENT_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV: OneToOneLink<AchievementGoalDetail, SimpleGoal> = new OneToOneLink('mdfAchievementGoalDetailToSimpleGoalNav', AchievementGoalDetail, SimpleGoal);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AchievementGoalDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AchievementGoalDetail, MdfEnumValue);
  /**
   * All fields of the AchievementGoalDetail entity.
   */
  export const _allFields: Array<BigNumberField<AchievementGoalDetail> | StringField<AchievementGoalDetail> | DateField<AchievementGoalDetail> | BooleanField<AchievementGoalDetail> | OneToOneLink<AchievementGoalDetail, User> | OneToOneLink<AchievementGoalDetail, SimpleGoal> | OneToOneLink<AchievementGoalDetail, MdfEnumValue>> = [
    AchievementGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID,
    AchievementGoalDetail.CREATED_BY,
    AchievementGoalDetail.CREATED_DATE_TIME,
    AchievementGoalDetail.EXTERNAL_CODE,
    AchievementGoalDetail.GOAL_ID,
    AchievementGoalDetail.LAST_MODIFIED_BY,
    AchievementGoalDetail.LAST_MODIFIED_DATE_TIME,
    AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS,
    AchievementGoalDetail.RECORD_ID,
    AchievementGoalDetail.SNAPSHOT,
    AchievementGoalDetail.CREATED_BY_NAV,
    AchievementGoalDetail.LAST_MODIFIED_BY_NAV,
    AchievementGoalDetail.MDF_ACHIEVEMENT_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV,
    AchievementGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AchievementGoalDetail> = new AllFields('*', AchievementGoalDetail);
  /**
   * All key fields of the AchievementGoalDetail entity.
   */
  export const _keyFields: Array<Selectable<AchievementGoalDetail>> = [AchievementGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID, AchievementGoalDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AchievementGoalDetail.
   */
  export const _keys: { [keys: string]: Selectable<AchievementGoalDetail> } = AchievementGoalDetail._keyFields.reduce((acc: { [keys: string]: Selectable<AchievementGoalDetail> }, field: Selectable<AchievementGoalDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
