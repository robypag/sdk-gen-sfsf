/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalAchievementsListRequestBuilder } from './DevGoalAchievementsListRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalAchievementsList" of service "SFOData".
 */
export class DevGoalAchievementsList extends Entity implements DevGoalAchievementsListType {
  /**
   * Technical entity name for DevGoalAchievementsList.
   */
  static _entityName = 'DevGoalAchievementsList';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalAchievementsList.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * achievementCreatedBy.
   */
  achievementCreatedBy!: string;
  /**
   * achievementCreatedDate.
   */
  achievementCreatedDate!: Moment;
  /**
   * achievementDate.
   */
  achievementDate!: Moment;
  /**
   * achievementId.
   */
  achievementId!: string;
  /**
   * achievementLastModifiedBy.
   */
  achievementLastModifiedBy!: string;
  /**
   * achievementLastModifiedDate.
   */
  achievementLastModifiedDate!: Moment;
  /**
   * achievementName.
   */
  achievementName!: string;
  /**
   * achievementParentExternalId.
   */
  achievementParentExternalId!: BigNumber;
  /**
   * achievementParentType.
   */
  achievementParentType!: string;
  /**
   * goalId.
   */
  goalId!: string;
  /**
   * subjectUserId.
   */
  subjectUserId!: string;

  /**
   * Returns an entity builder to construct instances `DevGoalAchievementsList`.
   * @returns A builder that constructs instances of entity type `DevGoalAchievementsList`.
   */
  static builder(): EntityBuilderType<DevGoalAchievementsList, DevGoalAchievementsListTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalAchievementsList);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalAchievementsList` entity type.
   * @returns A `DevGoalAchievementsList` request builder.
   */
  static requestBuilder(): DevGoalAchievementsListRequestBuilder {
    return new DevGoalAchievementsListRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalAchievementsList`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalAchievementsList`.
   */
  static customField(fieldName: string): CustomField<DevGoalAchievementsList> {
    return Entity.customFieldSelector(fieldName, DevGoalAchievementsList);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DevGoalAchievementsListType {
  achievementCreatedBy: string;
  achievementCreatedDate: Moment;
  achievementDate: Moment;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Moment;
  achievementName: string;
  achievementParentExternalId: BigNumber;
  achievementParentType: string;
  goalId: string;
  subjectUserId: string;
}

export interface DevGoalAchievementsListTypeForceMandatory {
  achievementCreatedBy: string;
  achievementCreatedDate: Moment;
  achievementDate: Moment;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Moment;
  achievementName: string;
  achievementParentExternalId: BigNumber;
  achievementParentType: string;
  goalId: string;
  subjectUserId: string;
}

export namespace DevGoalAchievementsList {
  /**
   * Static representation of the [[achievementCreatedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_CREATED_BY: StringField<DevGoalAchievementsList> = new StringField('achievementCreatedBy', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementCreatedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_CREATED_DATE: DateField<DevGoalAchievementsList> = new DateField('achievementCreatedDate', DevGoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_DATE: DateField<DevGoalAchievementsList> = new DateField('achievementDate', DevGoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ID: StringField<DevGoalAchievementsList> = new StringField('achievementId', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementLastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LAST_MODIFIED_BY: StringField<DevGoalAchievementsList> = new StringField('achievementLastModifiedBy', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementLastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LAST_MODIFIED_DATE: DateField<DevGoalAchievementsList> = new DateField('achievementLastModifiedDate', DevGoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_NAME: StringField<DevGoalAchievementsList> = new StringField('achievementName', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementParentExternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_PARENT_EXTERNAL_ID: BigNumberField<DevGoalAchievementsList> = new BigNumberField('achievementParentExternalId', DevGoalAchievementsList, 'Edm.Int64');
  /**
   * Static representation of the [[achievementParentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_PARENT_TYPE: StringField<DevGoalAchievementsList> = new StringField('achievementParentType', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: StringField<DevGoalAchievementsList> = new StringField('goalId', DevGoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<DevGoalAchievementsList> = new StringField('subjectUserId', DevGoalAchievementsList, 'Edm.String');
  /**
   * All fields of the DevGoalAchievementsList entity.
   */
  export const _allFields: Array<StringField<DevGoalAchievementsList> | DateField<DevGoalAchievementsList> | BigNumberField<DevGoalAchievementsList>> = [
    DevGoalAchievementsList.ACHIEVEMENT_CREATED_BY,
    DevGoalAchievementsList.ACHIEVEMENT_CREATED_DATE,
    DevGoalAchievementsList.ACHIEVEMENT_DATE,
    DevGoalAchievementsList.ACHIEVEMENT_ID,
    DevGoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_BY,
    DevGoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_DATE,
    DevGoalAchievementsList.ACHIEVEMENT_NAME,
    DevGoalAchievementsList.ACHIEVEMENT_PARENT_EXTERNAL_ID,
    DevGoalAchievementsList.ACHIEVEMENT_PARENT_TYPE,
    DevGoalAchievementsList.GOAL_ID,
    DevGoalAchievementsList.SUBJECT_USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalAchievementsList> = new AllFields('*', DevGoalAchievementsList);
  /**
   * All key fields of the DevGoalAchievementsList entity.
   */
  export const _keyFields: Array<Selectable<DevGoalAchievementsList>> = [DevGoalAchievementsList.GOAL_ID, DevGoalAchievementsList.SUBJECT_USER_ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalAchievementsList.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalAchievementsList> } = DevGoalAchievementsList._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalAchievementsList> }, field: Selectable<DevGoalAchievementsList>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
