/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalAchievementsRequestBuilder } from './GoalAchievementsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalAchievements" of service "SFOData".
 */
export class GoalAchievements extends Entity implements GoalAchievementsType {
  /**
   * Technical entity name for GoalAchievements.
   */
  static _entityName = 'GoalAchievements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalAchievements.
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
   * One-to-many navigation property to the [[GoalAchievementsList]] entity.
   */
  achievementList!: GoalAchievementsList[];

  /**
   * Returns an entity builder to construct instances `GoalAchievements`.
   * @returns A builder that constructs instances of entity type `GoalAchievements`.
   */
  static builder(): EntityBuilderType<GoalAchievements, GoalAchievementsTypeForceMandatory> {
    return Entity.entityBuilder(GoalAchievements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalAchievements` entity type.
   * @returns A `GoalAchievements` request builder.
   */
  static requestBuilder(): GoalAchievementsRequestBuilder {
    return new GoalAchievementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalAchievements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalAchievements`.
   */
  static customField(fieldName: string): CustomField<GoalAchievements> {
    return Entity.customFieldSelector(fieldName, GoalAchievements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { GoalAchievementsList, GoalAchievementsListType } from './GoalAchievementsList';

export interface GoalAchievementsType {
  goalId: string;
  subjectUserId: string;
  achievementList: GoalAchievementsListType[];
}

export interface GoalAchievementsTypeForceMandatory {
  goalId: string;
  subjectUserId: string;
  achievementList: GoalAchievementsListType[];
}

export namespace GoalAchievements {
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: StringField<GoalAchievements> = new StringField('goalId', GoalAchievements, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<GoalAchievements> = new StringField('subjectUserId', GoalAchievements, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[achievementList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LIST: Link<GoalAchievements, GoalAchievementsList> = new Link('achievementList', GoalAchievements, GoalAchievementsList);
  /**
   * All fields of the GoalAchievements entity.
   */
  export const _allFields: Array<StringField<GoalAchievements> | Link<GoalAchievements, GoalAchievementsList>> = [
    GoalAchievements.GOAL_ID,
    GoalAchievements.SUBJECT_USER_ID,
    GoalAchievements.ACHIEVEMENT_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalAchievements> = new AllFields('*', GoalAchievements);
  /**
   * All key fields of the GoalAchievements entity.
   */
  export const _keyFields: Array<Selectable<GoalAchievements>> = [GoalAchievements.GOAL_ID, GoalAchievements.SUBJECT_USER_ID];
  /**
   * Mapping of all key field names to the respective static field property GoalAchievements.
   */
  export const _keys: { [keys: string]: Selectable<GoalAchievements> } = GoalAchievements._keyFields.reduce((acc: { [keys: string]: Selectable<GoalAchievements> }, field: Selectable<GoalAchievements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
