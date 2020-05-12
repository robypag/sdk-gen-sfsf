/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalAchievementsRequestBuilder } from './DevGoalAchievementsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalAchievements" of service "SFOData".
 */
export class DevGoalAchievements extends Entity implements DevGoalAchievementsType {
  /**
   * Technical entity name for DevGoalAchievements.
   */
  static _entityName = 'DevGoalAchievements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalAchievements.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * goalId.
   */
  goalId!: string;
  /**
   * subjectUserId.
   */
  subjectUserId!: string;
  /**
   * One-to-many navigation property to the [[DevGoalAchievementsList]] entity.
   */
  achievementList!: DevGoalAchievementsList[];

  /**
   * Returns an entity builder to construct instances `DevGoalAchievements`.
   * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
   */
  static builder(): EntityBuilderType<DevGoalAchievements, DevGoalAchievementsTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalAchievements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalAchievements` entity type.
   * @returns A `DevGoalAchievements` request builder.
   */
  static requestBuilder(): DevGoalAchievementsRequestBuilder {
    return new DevGoalAchievementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalAchievements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
   */
  static customField(fieldName: string): CustomField<DevGoalAchievements> {
    return Entity.customFieldSelector(fieldName, DevGoalAchievements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DevGoalAchievementsList, DevGoalAchievementsListType } from './DevGoalAchievementsList';

export interface DevGoalAchievementsType {
  goalId: string;
  subjectUserId: string;
  achievementList: DevGoalAchievementsListType[];
}

export interface DevGoalAchievementsTypeForceMandatory {
  goalId: string;
  subjectUserId: string;
  achievementList: DevGoalAchievementsListType[];
}

export namespace DevGoalAchievements {
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: StringField<DevGoalAchievements> = new StringField('goalId', DevGoalAchievements, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<DevGoalAchievements> = new StringField('subjectUserId', DevGoalAchievements, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[achievementList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LIST: Link<DevGoalAchievements, DevGoalAchievementsList> = new Link('achievementList', DevGoalAchievements, DevGoalAchievementsList);
  /**
   * All fields of the DevGoalAchievements entity.
   */
  export const _allFields: Array<StringField<DevGoalAchievements> | Link<DevGoalAchievements, DevGoalAchievementsList>> = [
    DevGoalAchievements.GOAL_ID,
    DevGoalAchievements.SUBJECT_USER_ID,
    DevGoalAchievements.ACHIEVEMENT_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalAchievements> = new AllFields('*', DevGoalAchievements);
  /**
   * All key fields of the DevGoalAchievements entity.
   */
  export const _keyFields: Array<Selectable<DevGoalAchievements>> = [DevGoalAchievements.GOAL_ID, DevGoalAchievements.SUBJECT_USER_ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalAchievements.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalAchievements> } = DevGoalAchievements._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalAchievements> }, field: Selectable<DevGoalAchievements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
