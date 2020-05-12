/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AchievementDevGoalDetailRequestBuilder } from './AchievementDevGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AchievementDevGoalDetail" of service "SFOData".
 */
export class AchievementDevGoalDetail extends Entity implements AchievementDevGoalDetailType {
  /**
   * Technical entity name for AchievementDevGoalDetail.
   */
  static _entityName = 'AchievementDevGoalDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AchievementDevGoalDetail.
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
   * Achievement Development Goal Linked By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Achievement Development Goal Linked Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External code.
   */
  externalCode!: BigNumber;
  /**
   * Achievement Development Goal ID.
   * @nullable
   */
  goalId?: BigNumber;
  /**
   * Achievement Development Goal Link Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Achievement Development Goal Link Modification Date.
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
  mdfAchievementDevGoalDetailToSimpleDevGoalNav!: SimpleDevGoal;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `AchievementDevGoalDetail`.
   * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
   */
  static builder(): EntityBuilderType<AchievementDevGoalDetail, AchievementDevGoalDetailTypeForceMandatory> {
    return Entity.entityBuilder(AchievementDevGoalDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AchievementDevGoalDetail` entity type.
   * @returns A `AchievementDevGoalDetail` request builder.
   */
  static requestBuilder(): AchievementDevGoalDetailRequestBuilder {
    return new AchievementDevGoalDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementDevGoalDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
   */
  static customField(fieldName: string): CustomField<AchievementDevGoalDetail> {
    return Entity.customFieldSelector(fieldName, AchievementDevGoalDetail);
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

export interface AchievementDevGoalDetailType {
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
  mdfAchievementDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface AchievementDevGoalDetailTypeForceMandatory {
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
  mdfAchievementDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace AchievementDevGoalDetail {
  /**
   * Static representation of the [[achievementAchievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ACHIEVEMENT_ID: BigNumberField<AchievementDevGoalDetail> = new BigNumberField('Achievement_achievementId', AchievementDevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AchievementDevGoalDetail> = new StringField('createdBy', AchievementDevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AchievementDevGoalDetail> = new DateField('createdDateTime', AchievementDevGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<AchievementDevGoalDetail> = new BigNumberField('externalCode', AchievementDevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: BigNumberField<AchievementDevGoalDetail> = new BigNumberField('goalId', AchievementDevGoalDetail, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AchievementDevGoalDetail> = new StringField('lastModifiedBy', AchievementDevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AchievementDevGoalDetail> = new DateField('lastModifiedDateTime', AchievementDevGoalDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AchievementDevGoalDetail> = new StringField('mdfSystemRecordStatus', AchievementDevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<AchievementDevGoalDetail> = new StringField('recordId', AchievementDevGoalDetail, 'Edm.String');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<AchievementDevGoalDetail> = new BooleanField('snapshot', AchievementDevGoalDetail, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AchievementDevGoalDetail, User> = new OneToOneLink('createdByNav', AchievementDevGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AchievementDevGoalDetail, User> = new OneToOneLink('lastModifiedByNav', AchievementDevGoalDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfAchievementDevGoalDetailToSimpleDevGoalNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_ACHIEVEMENT_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV: OneToOneLink<AchievementDevGoalDetail, SimpleDevGoal> = new OneToOneLink('mdfAchievementDevGoalDetailToSimpleDevGoalNav', AchievementDevGoalDetail, SimpleDevGoal);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AchievementDevGoalDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AchievementDevGoalDetail, MdfEnumValue);
  /**
   * All fields of the AchievementDevGoalDetail entity.
   */
  export const _allFields: Array<BigNumberField<AchievementDevGoalDetail> | StringField<AchievementDevGoalDetail> | DateField<AchievementDevGoalDetail> | BooleanField<AchievementDevGoalDetail> | OneToOneLink<AchievementDevGoalDetail, User> | OneToOneLink<AchievementDevGoalDetail, SimpleDevGoal> | OneToOneLink<AchievementDevGoalDetail, MdfEnumValue>> = [
    AchievementDevGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID,
    AchievementDevGoalDetail.CREATED_BY,
    AchievementDevGoalDetail.CREATED_DATE_TIME,
    AchievementDevGoalDetail.EXTERNAL_CODE,
    AchievementDevGoalDetail.GOAL_ID,
    AchievementDevGoalDetail.LAST_MODIFIED_BY,
    AchievementDevGoalDetail.LAST_MODIFIED_DATE_TIME,
    AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS,
    AchievementDevGoalDetail.RECORD_ID,
    AchievementDevGoalDetail.SNAPSHOT,
    AchievementDevGoalDetail.CREATED_BY_NAV,
    AchievementDevGoalDetail.LAST_MODIFIED_BY_NAV,
    AchievementDevGoalDetail.MDF_ACHIEVEMENT_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV,
    AchievementDevGoalDetail.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AchievementDevGoalDetail> = new AllFields('*', AchievementDevGoalDetail);
  /**
   * All key fields of the AchievementDevGoalDetail entity.
   */
  export const _keyFields: Array<Selectable<AchievementDevGoalDetail>> = [AchievementDevGoalDetail.ACHIEVEMENT_ACHIEVEMENT_ID, AchievementDevGoalDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AchievementDevGoalDetail.
   */
  export const _keys: { [keys: string]: Selectable<AchievementDevGoalDetail> } = AchievementDevGoalDetail._keyFields.reduce((acc: { [keys: string]: Selectable<AchievementDevGoalDetail> }, field: Selectable<AchievementDevGoalDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
